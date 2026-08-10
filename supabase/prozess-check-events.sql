-- Optionale Dauerspeicherung der Prozess-Check-Funnel-Ereignisse.
--
-- Standardweg ist das Vercel-Log (siehe app/api/prozess-check/ereignis/route.ts).
-- Das reicht für eine Auswertung am selben Tag, aber nicht länger: Vercel hält
-- Runtime-Logs nur kurz vor (Hobby ~1 Stunde, Pro 1–3 Tage).
--
-- Diese Tabelle einmal anlegen und in Vercel zwei Umgebungsvariablen setzen —
-- danach schreibt derselbe Endpunkt zusätzlich dauerhaft weg, ohne Code-Änderung:
--
--   FUNNEL_SUPABASE_URL = https://<projekt>.supabase.co
--   FUNNEL_SUPABASE_KEY = <service_role_key>
--
-- Der Service-Role-Key umgeht RLS und darf ausschließlich serverseitig stehen.

create table if not exists public.prozess_check_events (
  id            bigserial primary key,
  sitzung       text        not null,
  typ           text        not null,
  schritt       integer,
  frage         text,
  frage_nr      integer,
  antwort       text,
  antwort_text  text,
  grund         text,
  zusatz        text,
  quelle        text,
  kampagne      text,
  verweis       text,
  geraet        text,
  einheiten     text,
  mitarbeiter   text,
  software      text,
  ms_gesamt     integer,
  ms_frage      integer,
  zeitpunkt     timestamptz not null default now(),
  angelegt_am   timestamptz not null default now()
);

create index if not exists prozess_check_events_sitzung_idx  on public.prozess_check_events (sitzung);
create index if not exists prozess_check_events_zeitpunkt_idx on public.prozess_check_events (zeitpunkt desc);

-- Kein öffentlicher Zugriff: geschrieben wird ausschließlich serverseitig mit
-- dem Service-Role-Key, gelesen über SQL im Supabase-Studio.
alter table public.prozess_check_events enable row level security;

comment on table public.prozess_check_events is
  'Pseudonyme Funnel-Ereignisse des Prozess-Checks. Keine IP, keine E-Mail, kein Name, keine Telefonnummer. Sitzungs-ID lebt im Browser nur im Arbeitsspeicher.';


-- ---------------------------------------------------------------------------
-- Kommt überhaupt etwas an? (nach dem Setzen der Variablen + Redeploy)
-- ---------------------------------------------------------------------------
-- select zeitpunkt, sitzung, typ, schritt, antwort_text, quelle
-- from public.prozess_check_events
-- order by zeitpunkt desc
-- limit 20;

-- ---------------------------------------------------------------------------
-- Auswertung: Trichter je Schritt
-- ---------------------------------------------------------------------------
-- with sitzungen as (
--   select sitzung, max(schritt) as max_schritt,
--          bool_or(typ = 'freigabe') as lead
--   from public.prozess_check_events
--   where zeitpunkt > now() - interval '14 days'
--   group by sitzung
-- )
-- select s.schritt,
--        count(*) filter (where sitzungen.max_schritt >= s.schritt) as erreicht,
--        round(100.0 * count(*) filter (where sitzungen.max_schritt >= s.schritt)
--              / nullif(count(*), 0), 1) as anteil_prozent
-- from generate_series(0, 9) as s(schritt), sitzungen
-- group by s.schritt
-- order by s.schritt;

-- ---------------------------------------------------------------------------
-- Auswertung: welche Antwortoption korreliert mit Abbruch
-- ---------------------------------------------------------------------------
-- with lead as (
--   select sitzung, bool_or(typ = 'freigabe') as hat_lead
--   from public.prozess_check_events group by sitzung
-- )
-- select e.frage, e.antwort_text,
--        count(*) as gewaehlt,
--        round(100.0 * count(*) filter (where lead.hat_lead) / count(*), 1) as bis_zum_ende_prozent
-- from public.prozess_check_events e
-- join lead using (sitzung)
-- where e.typ = 'antwort'
-- group by e.frage, e.antwort_text
-- order by e.frage, gewaehlt desc;
