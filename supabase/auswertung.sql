-- Auswertung des Prozess-Check-Trichters.
-- Einzeln in den Supabase-SQL-Editor kopieren (Projekt "GPC Prozess").
-- Tabelle: prozess_check_events — siehe prozess-check-events.sql
--
-- Eine Sitzung = ein Besuch der Seite. Die Sitzungs-ID lebt nur im
-- Arbeitsspeicher des Browsers, ein Reload zählt deshalb als neuer Besuch.


-- ===========================================================================
-- 1. TRICHTER — wie viele kommen bis Schritt X?
--    0 = Startseite, 1–7 = Fragen, 8 = Betriebsgrößen, 9 = Ergebnisseite
-- ===========================================================================
with s as (
  select sitzung,
         max(schritt)                as max_schritt,
         bool_or(typ = 'freigabe')   as lead
  from prozess_check_events
  where zeitpunkt > now() - interval '30 days'
  group by sitzung
)
select g.schritt,
       count(*) filter (where s.max_schritt >= g.schritt)                        as erreicht,
       round(100.0 * count(*) filter (where s.max_schritt >= g.schritt) / count(*), 1) as prozent
from generate_series(0, 9) as g(schritt)
cross join s
group by g.schritt
order by g.schritt;


-- ===========================================================================
-- 2. ABBRUCHPUNKTE — wo ist Schluss, bei denen die keinen Lead hinterlassen?
-- ===========================================================================
with s as (
  select sitzung,
         max(schritt)              as max_schritt,
         bool_or(typ = 'freigabe') as lead
  from prozess_check_events
  where zeitpunkt > now() - interval '30 days'
  group by sitzung
)
select max_schritt as abgebrochen_bei_schritt,
       count(*)    as sitzungen
from s
where not lead
group by max_schritt
order by sitzungen desc;


-- ===========================================================================
-- 3. WELCHE ANTWORT KOSTET? — Weiterlaufquote je gewählter Option
--    Niedrige Quote = diese Antwort korreliert mit Abbruch.
-- ===========================================================================
with lead as (
  select sitzung, bool_or(typ = 'freigabe') as hat_lead
  from prozess_check_events
  group by sitzung
)
select e.frage_nr,
       e.frage,
       e.antwort_text,
       count(*)                                                          as gewaehlt,
       round(100.0 * count(*) filter (where lead.hat_lead) / count(*), 1) as bis_zum_ende_prozent
from prozess_check_events e
join lead using (sitzung)
where e.typ = 'antwort'
group by e.frage_nr, e.frage, e.antwort_text
order by e.frage_nr, gewaehlt desc;


-- ===========================================================================
-- 4. BEDENKZEIT je Frage — Ausreißer nach oben heißt: Formulierung unklar
-- ===========================================================================
select frage_nr,
       frage,
       count(*)                                                     as antworten,
       round((percentile_cont(0.5) within group (order by ms_frage) / 1000.0)::numeric, 1) as median_sekunden,
       round((max(ms_frage) / 1000.0)::numeric, 1)                   as langsamste_sekunden
from prozess_check_events
where typ = 'antwort' and ms_frage is not null
group by frage_nr, frage
order by frage_nr;


-- ===========================================================================
-- 5. HERKUNFT — trennt LinkedIn vom Rest (Kennung ?q=… im Link)
-- ===========================================================================
with s as (
  select sitzung,
         max(nullif(quelle, ''))   as quelle,
         max(nullif(verweis, ''))  as verweis,
         max(nullif(geraet, ''))   as geraet,
         bool_or(typ = 'freigabe') as lead
  from prozess_check_events
  group by sitzung
)
select coalesce(quelle, verweis, 'direkt')                       as herkunft,
       count(*)                                                  as sitzungen,
       count(*) filter (where lead)                              as leads,
       round(100.0 * count(*) filter (where lead) / count(*), 1)  as conversion_prozent
from s
group by 1
order by sitzungen desc;


-- ===========================================================================
-- 6. GERÄT — mobil bricht erfahrungsgemäß früher ab als Desktop
-- ===========================================================================
with s as (
  select sitzung,
         max(nullif(geraet, ''))   as geraet,
         max(schritt)              as max_schritt,
         bool_or(typ = 'freigabe') as lead
  from prozess_check_events
  group by sitzung
)
select coalesce(geraet, 'unbekannt')                             as geraet,
       count(*)                                                  as sitzungen,
       round(avg(max_schritt), 1)                                as im_schnitt_bis_schritt,
       count(*) filter (where lead)                              as leads,
       round(100.0 * count(*) filter (where lead) / count(*), 1)  as conversion_prozent
from s
group by 1
order by sitzungen desc;


-- ===========================================================================
-- 7. REIBUNG — Rücksprünge, gescheiterte E-Mail-Eingaben, Gate-Verhalten
-- ===========================================================================
select typ,
       count(*)                    as ereignisse,
       count(distinct sitzung)     as betroffene_sitzungen
from prozess_check_events
where typ in ('zurueck', 'mail_ungueltig', 'mail_versuch', 'mail_abgelehnt',
              'betrieb_unvollstaendig', 'freigabe', 'nachtrag',
              'stundensatz', 'kalender_fallback')
group by typ
order by ereignisse desc;


-- ===========================================================================
-- 8. EINZELNE SITZUNG IM VERLAUF — für den genauen Blick auf einen Abbruch
--    Sitzungs-ID aus Abfrage 2 oder 5 übernehmen.
-- ===========================================================================
-- select zeitpunkt, typ, schritt, frage, antwort_text, ms_frage, ms_gesamt
-- from prozess_check_events
-- where sitzung = 'HIER-SITZUNGS-ID-EINSETZEN'
-- order by zeitpunkt;
