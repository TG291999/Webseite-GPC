/**
 * Startseiten-Markup (Goebel & Partner Consulting).
 *
 * 1:1 übernommen aus der finalen Spec-Seite und für den Livegang finalisiert:
 *  - echte Kontaktdaten im Footer (tim@goebel-partner.de · 0172 - 693 22 22 · Hilgenloh 19, 44379 Dortmund)
 *  - Buchungs-Button verlinkt auf den echten zcal-Kalender (kein Alert, kein Demo-Code)
 *  - hochwertiger, klar markierter Platzhalter für das spätere Tim-Foto
 *
 * Wird in app/page.tsx serverseitig gerendert (gut für SEO); die Interaktivität
 * (Menü, FAQ-Akkordeon, Scroll-Reveal, Jahreszahl) liegt in app/home-interactions.tsx.
 */
export const HOME_HTML = `
<!-- ======================= HEADER / NAV ======================= -->
<header class="header" id="top">
  <div class="container nav">
    <a href="#top" class="brand" aria-label="Goebel & Partner Consulting — Startseite">
      <svg class="mark" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <rect x="3" y="13" width="5" height="16" rx="1.5" fill="#749FDD"/>
        <rect x="13.5" y="8" width="5" height="21" rx="1.5" fill="#2C5896"/>
        <rect x="24" y="3" width="5" height="26" rx="1.5" fill="#15273F"/>
      </svg>
      <span>Goebel&nbsp;&amp;&nbsp;Partner</span>
    </a>
    <nav class="nav-links" aria-label="Hauptnavigation">
      <a href="#methode">Methode</a>
      <a href="#loesung">Lösung</a>
      <a href="#ablauf">Ablauf</a>
      <a href="#ueber-mich">Über mich</a>
    </nav>
    <div class="nav-cta">
      <a href="#buchung" class="btn btn-primary">Kostenlose Analyse <span class="arrow">→</span></a>
    </div>
    <button class="burger" id="burger" aria-label="Menü öffnen" aria-expanded="false" aria-controls="mobileMenu">
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
    </button>
  </div>
  <div class="mobile-menu" id="mobileMenu">
    <nav aria-label="Mobile Navigation">
      <a href="#methode">Methode</a>
      <a href="#loesung">Lösung</a>
      <a href="#ablauf">Ablauf</a>
      <a href="#ueber-mich">Über mich</a>
    </nav>
  </div>
</header>

<main>

<!-- ======================= 1 · HERO ======================= -->
<section class="section hero bg-canvas">
  <div class="container hero-grid">
    <div class="reveal">
      <h1>Geben Sie Ihren Sachbearbeitern bis&nbsp;zu 10&nbsp;Stunden pro Woche zurück — ohne neue Software.</h1>
      <p class="subhead">Erst bringen wir Struktur in Ihre Prozesse, dann automatisieren wir die wiederkehrende Arbeit — direkt in Domus, Immoware24 &amp; Co. Kein Systemwechsel. Kein IT-Projekt.</p>
      <p class="hero-plain"><strong>Konkret heißt das:</strong> Wir sortieren wiederkehrende Mieter- und Eigentümeranfragen vor und legen fertige Antwortentwürfe bereit. Ihr Team liest, prüft und gibt frei — mehr nicht.</p>
      <div class="cta-wrap">
        <a href="#buchung" class="btn btn-primary">Kostenlose Analyse sichern <span class="arrow">→</span></a>
        <p class="micro">Kostenlos · 30&nbsp;Minuten · Kein Verkaufsgespräch.<br>Sie gehen mit Ihren 3 größten Zeitfressern aus dem Termin — auch wenn wir nie zusammenarbeiten.</p>
        <p class="hero-safety"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg> DSGVO-konform · EU-Hosting · Jede Antwort gibt Ihr Mitarbeiter frei</p>
        <p style="margin-top:14px"><a href="#loesung" class="textlink">Wie das ohne Softwarewechsel funktioniert ↓</a></p>
      </div>
      <div class="trust-strip">
        <span class="trust-item"><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>Immobilienkaufmann · 8+ Jahre Branche</span>
        <span class="trust-item"><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>Gründer einer Hausverwaltungs-Software</span>
        <span class="trust-item"><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>Domus · Immoware24 · GFAD · casavi</span>
      </div>
    </div>
    <div class="hero-visual reveal">
      <!-- Workflow-Grafik (Anfrage → vorbereitet → Freigabe). Falls gewünscht, lässt sich dies
           1:1 durch ein Bild ersetzen: <img src="/images/hero-workflow-gpc.png" style="width:100%;max-width:520px"
           alt="Workflow-Grafik: Neue Anfrage wird vorsortiert, vorbereitet und vom Mitarbeiter freigegeben" /> -->
      <div class="hero-flow" role="img" aria-label="Workflow-Grafik: Neue Anfrage wird vorsortiert, vorbereitet und vom Mitarbeiter freigegeben">
        <div class="flow-card">
          <div class="f-ic">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 5L2 7"/></svg>
            <span class="f-dot amber">1</span>
          </div>
          <div class="f-title">Neue Anfrage</div>
          <div class="f-uline"></div>
          <div class="f-desc">Mieter fragt zur Nebenkostenabrechnung</div>
          <span class="f-pill blue"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2.5l2.95 5.98 6.6.96-4.77 4.65 1.13 6.57L12 18.6l-5.91 3.06 1.13-6.57L2.45 9.44l6.6-.96z"/></svg>Standardanfrage</span>
        </div>
        <div class="f-arrow"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h13M13 6l6 6-6 6"/></svg></div>
        <div class="flow-card">
          <div class="f-ic">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M9 4h6a1 1 0 0 1 1 1v0a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v0a1 1 0 0 1 1-1Z"/><path d="M16 5h2a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2"/><path d="m9 14 2 2 4-4"/></svg>
            <span class="f-dot blue"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg></span>
          </div>
          <div class="f-title">Vorsortiert &amp; vorbereitet</div>
          <div class="f-uline"></div>
          <div class="f-list">
            <span class="f-li"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="m8.5 12 2.5 2.5 4.5-5"/></svg>Antwortentwurf erstellt</span>
            <span class="f-li"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>Vorgang zugeordnet</span>
          </div>
          <span class="f-pill amber"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>Mensch prüft</span>
        </div>
        <div class="f-arrow"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h13M13 6l6 6-6 6"/></svg></div>
        <div class="flow-card">
          <div class="f-ic">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
            <span class="f-dot amber"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg></span>
          </div>
          <div class="f-title">Freigabe</div>
          <div class="f-uline"></div>
          <div class="f-desc">Ihr Mitarbeiter prüft und gibt frei</div>
          <span class="f-btn">Freigeben</span>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ======================= 2 · PROBLEM ======================= -->
<section class="section bg-offwhite" id="problem">
  <div class="container">
    <div class="section-head reveal">
      <h2>Ihre besten Leute verbringen den halben Tag mit Anfragen, die ein gutes System längst selbst vorbereiten könnte.</h2>
      <p class="subhead">Und genau die Leute, die das auffangen sollen, finden Sie auf dem Arbeitsmarkt nicht mehr.</p>
    </div>
    <p class="reveal" style="margin-bottom:40px;color:var(--body)">Sie kennen das Bild: Der Posteingang läuft schneller voll, als ihn jemand leeren kann. Das Telefon klingelt mitten in der Nebenkostenabrechnung. Eine Schadensmeldung springt drei Mal zwischen Mieter, Verwalter und Handwerker hin und her. Jede einzelne Anfrage ist beantwortbar — aber es sind hunderte, und sie kommen alle gleichzeitig. Dann kündigt ein Sachbearbeiter. Und Sie suchen monatelang Ersatz, den es nicht gibt.</p>
    <div class="grid-3">
      <div class="card reveal">
        <div class="ic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 5L2 7"/></svg></div>
        <h3>Die Anfragen-Flut</h3>
        <p>Wiederkehrende Mieteranfragen per Mail <em>und</em> Telefon — Nebenkosten, Schäden, „Wann kommt der Handwerker?" — binden pro Sachbearbeiter Woche für Woche spürbar Zeit.</p>
      </div>
      <div class="card reveal">
        <div class="ic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg></div>
        <h3>Der Fachkräftemangel</h3>
        <p>Die Stelle ist seit Monaten offen. Wer da ist, arbeitet am Limit. Einarbeitung kostet Zeit, die niemand hat.</p>
      </div>
      <div class="card reveal">
        <div class="ic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-6l-2-3H5a2 2 0 0 0-2 2Z"/></svg></div>
        <h3>Verstreute, manuelle Abläufe</h3>
        <p>Wissen steckt in Köpfen und Postfächern. Bei jeder Kündigung geht ein Stück davon verloren.</p>
      </div>
    </div>
  </div>
</section>

<!-- ======================= 3 · KOSTEN / ZEITVERLUST ======================= -->
<section class="section bg-canvas">
  <div class="container">
    <div class="cost-grid">
      <div class="reveal">
        <div class="section-head" style="margin-bottom:24px">
          <h2>Die teuerste Rechnung, die Ihnen niemand stellt.</h2>
          <p class="subhead">Repetitive Anfragen binden Arbeitszeit, die nicht in Wachstum, zufriedene Eigentümer und neue Objekte fließt.</p>
        </div>
        <p style="color:var(--body)">Das Problem ist nicht, dass Ihr Team zu langsam ist — sondern dass Menschen Arbeit machen, die längst kein Mensch mehr machen müsste. Diese Zeit fehlt genau dort, wo sie Ihre Verwaltung weiterbringt.</p>
        <p style="color:var(--body);margin-top:14px"><strong style="color:var(--ink)">Beispiel:</strong> Wenn 4 Sachbearbeiter jeweils 10 Stunden pro Woche mit wiederkehrenden Standardanfragen verbringen, bindet das bei 25&nbsp;€ internem Stundensatz und 46 Arbeitswochen rund 46.000&nbsp;€ Arbeitszeit pro Jahr.</p>
      </div>
      <div class="calc-card reveal">
        <div class="label">Ein Rechenbeispiel</div>
        <div class="calc-row"><span>Sachbearbeiter</span><span>4</span></div>
        <div class="calc-row"><span>Std./Woche für Standardanfragen</span><span>je 10</span></div>
        <div class="calc-row"><span>Interner Stundensatz</span><span>25&nbsp;€</span></div>
        <div class="calc-row"><span>Arbeitswochen pro Jahr</span><span>46</span></div>
        <div class="calc-result">
          <span class="muted" style="font-size:.85rem">Beispielhafte gebundene Arbeitszeit pro Jahr</span>
          <div class="big" style="font-size:clamp(2.1rem,4vw,2.7rem);font-weight:600">46.000&nbsp;€</div>
        </div>
        <p class="calc-note">Das ist keine garantierte Ersparnis, sondern ein transparentes Rechenbeispiel. Ihre echten Zahlen prüfen wir in der kostenlosen Analyse.</p>
      </div>
    </div>
  </div>
</section>

<!-- ======================= 4 · 3-SÄULEN-MODELL (dunkel, Signature) ======================= -->
<section class="section pillars" id="methode">
  <div class="container center">
    <div class="reveal">
      <div class="eyebrow">Das 3-Säulen-Modell</div>
      <h2>Die meisten starten mit KI.<br>Ich starte mit <em>Struktur.</em></h2>
      <p class="intro">Viele Anbieter wollen sofort mit KI loslegen — obwohl die Prozesse noch manuell, verstreut oder unklar sind. Auf einem solchen Fundament beschleunigt KI nur das bestehende Chaos. Deshalb arbeite ich in einer klaren Reihenfolge: erst ein sauberes digitales Fundament, dann automatisierte Abläufe, dann KI — genau dort, wo sie wirklich Wirkung zeigt.</p>
    </div>
    <div class="pillars-line reveal" aria-hidden="true"><span class="dot"></span><span class="dot"></span><span class="dot"></span></div>
    <div class="pillars-grid" style="text-align:left">
      <div class="pillar reveal">
        <span class="numeral">I</span>
        <div class="step">01 · Fundament</div>
        <h3>Digitalisierung</h3>
        <p>Bevor etwas automatisiert wird, muss klar sein, wie es heute wirklich abläuft. Ich mache bestehende Prozesse, Daten und Zuständigkeiten sichtbar und überführe verstreute, manuelle Abläufe in eine saubere digitale Struktur. <em>Konkret:</em> Wir machen sichtbar, wie eine Schadensmeldung heute wirklich durch Ihr Haus läuft — und wo sie hängen bleibt.</p>
        <div class="result"><b>Ergebnis:</b> klare Abläufe, saubere Daten, eindeutige Zuständigkeiten.</div>
      </div>
      <div class="pillar reveal">
        <span class="numeral">II</span>
        <div class="step">02 · Tempo</div>
        <h3>Automatisierung</h3>
        <p>Sind die Abläufe sauber abgebildet, übernehmen Workflows die Wiederholung — doppelte Eingaben, manuelle Übergaben, ständiges Nachhalten. <em>Konkret:</em> Die immer gleiche Nebenkosten-Rückfrage wird automatisch erkannt, der richtigen Person zugeordnet und mit den passenden Daten vorbereitet — ganz ohne KI.</p>
        <div class="result"><b>Ergebnis:</b> weniger Handarbeit, weniger Fehler, schnellere Abläufe.</div>
      </div>
      <div class="pillar reveal">
        <span class="numeral">III</span>
        <div class="step">03 · Hebel</div>
        <h3>KI</h3>
        <p>Erst auf belastbaren Prozessen und sauberen Daten kommt KI zum Einsatz — gezielt dort, wo sie echten Nutzen bringt: Kommunikation, Auswertung, Dokumente, wiederkehrende Wissensarbeit. <em>Konkret:</em> Aus einer langen, unstrukturierten Mieter-Mail entsteht ein fertiger Antwortentwurf, den Ihr Mitarbeiter nur noch prüft und freigibt.</p>
        <div class="result"><b>Ergebnis:</b> KI, die im Tagesgeschäft spürbar entlastet.</div>
      </div>
    </div>
  </div>
</section>

<!-- ======================= 5 · LÖSUNG OHNE SYSTEMWECHSEL ======================= -->
<section class="section bg-canvas" id="loesung">
  <div class="container">
    <div class="section-head reveal">
      <h2>Wir bauen die Automatisierung <em>in</em> Ihre Software — nicht daneben.</h2>
      <p class="subhead">Kein neues ERP. Kein Datenumzug. Kein monatelanges IT-Projekt. Auch dann nicht, wenn Ihr System in die Jahre gekommen ist.</p>
    </div>
    <p class="reveal" style="margin-bottom:18px;color:var(--body)">Die meisten „Digitalisierungs"-Versprechen bedeuten in Wahrheit eins: Sie müssen Ihr System wechseln. Neue Software, neue Schulungen, Daten migrieren, Widerstand im Team — und ein Jahr später läuft es schlechter als vorher.</p>
    <p class="reveal" style="margin-bottom:36px;color:var(--body)">Wir machen das Gegenteil. Wir lassen Ihr ERP, Ihre Postfächer und Ihre Abläufe genau so, wie sie sind. Darüber bauen wir eine zusätzliche Ebene, die Anfragen vorsortiert, Antwortentwürfe vorbereitet und Vorgänge direkt in Ihr System schreibt. Ihre Leute klicken nur noch auf „Freigeben".</p>
    <div class="compare reveal">
      <div class="compare-col without">
        <div class="compare-head">Ohne uns</div>
        <div class="compare-row">Jede Mail wird von Hand gelesen, eingeordnet, beantwortet.</div>
        <div class="compare-row">Schadensmeldung pingt 3× zwischen allen Beteiligten hin und her.</div>
        <div class="compare-row">Wissen geht mit jeder Kündigung verloren.</div>
      </div>
      <div class="compare-col with">
        <div class="compare-head">Mit uns</div>
        <div class="compare-row"><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>Vorsortiert, Entwurf liegt bereit, ein Klick.</div>
        <div class="compare-row"><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>Strukturiert erfasst, Handwerker zugeordnet, Mieter informiert.</div>
        <div class="compare-row"><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>Im System, abrufbar, jederzeit.</div>
      </div>
    </div>
    <div class="cta-wrap center reveal">
      <a href="#buchung" class="btn btn-primary">Kostenlose Analyse sichern <span class="arrow">→</span></a>
      <p class="micro">Kostenlos · 30&nbsp;Minuten · Kein Verkaufsgespräch</p>
    </div>
  </div>
</section>

<!-- ======================= 6 · MENSCH-IN-DER-SCHLEIFE ======================= -->
<section class="section bg-tint">
  <div class="container center">
    <div class="section-head reveal" style="margin-inline:auto">
      <h2>Die KI schlägt vor. Ihr Mitarbeiter entscheidet. Immer.</h2>
      <p class="subhead">Deshalb merkt kein Mieter, dass im Hintergrund Technik arbeitet — und Sie tragen kein Haftungsrisiko.</p>
    </div>
    <div class="loop" style="text-align:left">
      <div class="loop-step reveal">
        <div class="node"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 5L2 7"/></svg></div>
        <div class="n">01</div><h3>Anfrage kommt rein</h3>
        <p>Per Mail oder Portal, wie heute auch.</p>
      </div>
      <div class="loop-step reveal">
        <div class="node"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a3 3 0 0 0-3 3v1a3 3 0 0 0 0 6 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0 0-6V6a3 3 0 0 0-3-3Z"/><path d="M12 16v5"/></svg></div>
        <div class="n">02</div><h3>System versteht &amp; sortiert</h3>
        <p>Erkennt das Thema, zieht die richtigen Infos, schreibt einen fertigen Antwortentwurf.</p>
      </div>
      <div class="loop-step reveal">
        <div class="node"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M11.5 15 8 21l-1.5-3L3 18l3.5-6"/><path d="m12.5 15 3.5 6 1.5-3 3.5 0-3.5-6"/><circle cx="12" cy="8" r="5"/></svg></div>
        <div class="n">03</div><h3>Ihr Mitarbeiter prüft</h3>
        <p>Liest, passt ggf. an, klickt „Freigeben". Sekunden statt Minuten.</p>
      </div>
      <div class="loop-step reveal">
        <div class="node"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg></div>
        <div class="n">04</div><h3>Antwort raus, Vorgang im ERP</h3>
        <p>Dokumentiert, nachvollziehbar, im System, das Sie kennen.</p>
      </div>
    </div>
    <p class="loop-closing reveal" style="margin-inline:auto;color:var(--body)">Kein Schritt verlässt die Kontrolle Ihres Teams. Die Technik nimmt die Fleißarbeit ab — die Verantwortung bleibt beim Menschen. Genau das macht die Lösung sicher genug für eine Branche, in der jeder Buchstabe rechtlich zählt. Notfälle — Wasserschaden, Heizungsausfall — gehen sofort an einen Menschen.</p>
    <div class="trust-badges reveal">
      <span class="tbadge"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 12l2 2 4-4"/><path d="M12 3 4 6v6c0 4 3 7 8 9 5-2 8-5 8-9V6Z"/></svg>Jede Antwort gibt ein Mensch frei</span>
      <span class="tbadge"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>DSGVO-konform · EU-Hosting · AVV</span>
      <span class="tbadge"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 9v4M12 17h.01"/><path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z"/></svg>Notfälle sofort an einen Menschen</span>
    </div>
  </div>
</section>

<!-- ======================= 7 · ANGEBOTS-TREPPE ======================= -->
<section class="section bg-canvas" id="ablauf">
  <div class="container">
    <div class="section-head center reveal" style="margin-inline:auto">
      <h2>In drei Schritten von der Anfragen-Flut zur Entlastung.</h2>
      <p class="subhead">Sie gehen kein Risiko ein, bevor Sie nicht schwarz auf weiß sehen, was es bringt.</p>
    </div>
    <div class="stair">
      <div class="step-card reveal">
        <div class="step-n">Schritt 1</div>
        <h3>Kostenlose Automatisierungs-Analyse</h3>
        <p>30 Minuten, kostenlos. Sie gehen raus mit einer schriftlichen Liste Ihrer 3 größten Zeitfresser und einer groben Einschätzung, wie viel Zeit sich davon realistisch zurückholen lässt — ganz gleich, ob wir weiterarbeiten.</p>
        <div class="price-free">0 €</div>
      </div>
      <div class="step-card featured reveal">
        <span class="badge">Empfohlen</span>
        <div class="step-n">Schritt 2</div>
        <h3>Quick-Win-Audit</h3>
        <p>Wir analysieren Prozesse und Anfragen im Detail: Wo geht die Zeit hin, was ist automatisierbar, was bringt das in Euro. Sie erhalten eine klare Liste — was sich lohnt, in welcher Reihenfolge, und was es spart.</p>
        <div class="price"><span class="note">Wird bei anschließender Umsetzung angerechnet.</span></div>
      </div>
      <div class="step-card reveal">
        <div class="step-n">Schritt 3</div>
        <h3>Umsetzung &amp; laufende Entlastung</h3>
        <p>5–6 Wochen Aufbau in Ihrer bestehenden Software, dann laufende Pflege &amp; Weiterentwicklung. Ihr Team bekommt dauerhaft Stunden zurück.</p>
        <div class="price"><span class="note">Festpreis nach Audit + monatliche Betreuung.</span></div>
      </div>
    </div>
    <div class="cta-wrap center reveal">
      <a href="#buchung" class="btn btn-primary">Kostenlose Analyse sichern <span class="arrow">→</span></a>
      <p class="micro">Sie entscheiden nach Schritt 1, ob es weitergeht.</p>
    </div>
  </div>
</section>

<!-- ======================= 8 · FÜR WEN ======================= -->
<section class="section bg-offwhite">
  <div class="container">
    <div class="section-head reveal">
      <h2>Wir arbeiten nicht mit jeder Verwaltung. Das ist Absicht.</h2>
      <p class="subhead">Damit die Lösung wirklich passt, sagen wir auch ehrlich, wann sie es nicht tut.</p>
    </div>
    <div class="fit">
      <div class="fit-col yes reveal">
        <h3>Passt, wenn Sie…</h3>
        <ul class="fit-list">
          <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>8–25 Mitarbeiter und 3.000–12.000 Einheiten verwalten</li>
          <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>inhabergeführt sind und Entscheidungen selbst treffen</li>
          <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>mit Domus, Immoware24, GFAD oder casavi arbeiten</li>
          <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>spüren, dass Ihre Sachbearbeiter unter der Anfragen-Flut zusammenbrechen</li>
          <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>eine offene Stelle nicht besetzt bekommen</li>
          <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>wachsen wollen, aber mit dem aktuellen Team nicht können</li>
        </ul>
      </div>
      <div class="fit-col no reveal">
        <h3>Passt (noch) nicht, wenn Sie…</h3>
        <ul class="fit-list">
          <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="5" y1="12" x2="19" y2="12"/></svg>unter 5 Mitarbeiter sind</li>
          <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="5" y1="12" x2="19" y2="12"/></svg>bereits eine eigene IT-/Digitalisierungs-Abteilung haben, die das selbst löst</li>
          <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="5" y1="12" x2="19" y2="12"/></svg>ein neues ERP suchen — das verkaufen wir bewusst nicht</li>
          <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="5" y1="12" x2="19" y2="12"/></svg>nur Mietverwaltung ohne WEG-Last machen</li>
        </ul>
      </div>
    </div>
  </div>
</section>

<!-- ======================= 9 · WARUM TIM ======================= -->
<section class="section bg-canvas about" id="ueber-mich">
  <div class="container">
    <div class="about-grid">
      <div class="about-media reveal">
        <img class="about-photo-img" src="/images/tim-goebel-portrait.jpg" width="1000" height="1500" loading="lazy" alt="Tim Goebel, Inhaber von Goebel & Partner Consulting" />
        <a href="https://www.linkedin.com/in/tim-goebel-gpc/" target="_blank" rel="noopener" class="textlink about-linkedin">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z"/></svg>
          Tim Goebel auf LinkedIn ansehen →
        </a>
      </div>
      <div class="reveal">
        <h2>Ich komme aus Ihrer Welt — nicht aus einer KI-Agentur.</h2>
        <p class="subhead">Immobilienkaufmann. 8+ Jahre Branche. Gründer einer Hausverwaltungs-Software. Heute baue ich die Automatisierung, die ich mir damals selbst gewünscht hätte.</p>
        <p>Ich habe nicht über Hausverwaltung gelesen — ich war drin. Als Immobilienkaufmann kenne ich Vermietung, Vertrieb und den Verwaltungsalltag von innen. Danach habe ich mit Immo&nbsp;One eine eigene Hausverwaltungs-Software aufgebaut und vertrieben.</p>
        <p class="pullquote">Aus Immo&nbsp;One habe ich eine entscheidende Lektion mitgenommen: Für viele Verwaltungen ist die bestehende Software das Herzstück des Betriebs. Wird dieses Herzstück gewechselt und läuft danach nicht sauber, steht der ganze Laden still.</p>
        <p>Genau deshalb drehe ich den Ansatz heute um: nicht Ihre Software ersetzen — sondern die bestehenden Systeme so entlasten, dass Ihr Team wieder Luft bekommt. Sie reden dabei nicht mit einem Berater, der eine Folie zeichnet und die Umsetzung weiterreicht, sondern mit dem, der es selbst baut.</p>
        <p class="logo-strip"><b>Vertraut mit:</b> Domus · Immoware24 · GFAD · casavi · impower</p>
      </div>
    </div>
    <div class="speaker-strip reveal">
      <img class="speaker-photo" src="/images/tim-goebel-speaker.jpg" width="800" height="533" loading="lazy" alt="Tim Goebel als Speaker auf der Bühne vor Publikum" />
      <div class="speaker-text">
        <div class="eyebrow">Auf der Bühne</div>
        <p>Speaker bei der <b>BuildinX</b>-Messe in der Dortmunder Westfalenhalle und 2× bei der <b>Founder Fight Night</b>.</p>
      </div>
    </div>
  </div>
</section>

<!-- ======================= 10 · ERGEBNISSE / PROOF ======================= -->
<section class="section bg-offwhite">
  <div class="container">
    <div class="proof-grid">
      <div class="reveal">
        <div class="section-head" style="margin-bottom:22px">
          <h2>Was strukturierte Prozesse in der Praxis bringen.</h2>
          <p class="subhead">Aus eigener Anwendung — und aus den Projekten, die ich umsetze.</p>
        </div>
        <p style="color:var(--body)">In der Praxis bei 365&nbsp;Grundbesitz setze ich diese Arbeitsweise bereits selbst ein — von strukturierter Anfragenbearbeitung bis zu dokumentierten Abläufen. Deshalb verkaufe ich keinen theoretischen KI-Hype, sondern eine Arbeitsweise, die ich im Immobilienalltag selbst nutze.</p>
      </div>
      <div class="proof-tiles reveal">
        <div class="tile">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
          <h3>Weniger Handarbeit</h3>
          <p>Der Posteingang sortiert sich vor, statt sich zu stauen.</p>
        </div>
        <div class="tile">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2 3 14h9l-1 8 10-12h-9l1-8Z"/></svg>
          <h3>Schnellere Durchlaufzeiten</h3>
          <p>Schadensmeldungen strukturiert erfasst statt mehrfach hin- und hergeschoben.</p>
        </div>
        <div class="tile full">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M2 9V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4"/><rect x="2" y="9" width="20" height="11" rx="2"/></svg>
          <h3>0 € für neue Software</h3>
          <p>Alles in der bestehenden Umgebung — kein Systemwechsel.</p>
        </div>
      </div>
    </div>
    <div class="mockups reveal">
      <!-- TODO: Später echte/anonymisierte Software- oder Workflow-Beispielbilder einfügen → /images/software-example-1.jpg -->
      <figure class="mock">
        <div class="mock-top"><i></i><i></i><i></i><span>Posteingang</span></div>
        <div class="mock-body">
          <div class="mock-row">
            <div class="mock-avatar"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 5L2 7"/></svg></div>
            <div class="mock-lines"><div class="mock-subject">Nebenkostenabrechnung 2024 – Whg. 12</div><div class="mock-line" style="width:72%"></div></div>
          </div>
          <span class="mock-badge"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>Erkannt: Nebenkosten</span>
          <div class="mock-row" style="opacity:.55">
            <div class="mock-avatar"></div>
            <div class="mock-lines"><div class="mock-line dark" style="width:52%"></div><div class="mock-line" style="width:84%"></div></div>
          </div>
          <span class="mock-badge ok"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>Vorsortiert &amp; zugeordnet</span>
        </div>
        <figcaption>Anfrage wird erkannt und vorsortiert</figcaption>
      </figure>
      <!-- TODO: Später echte/anonymisierte Software- oder Workflow-Beispielbilder einfügen → /images/software-example-2.jpg -->
      <figure class="mock">
        <div class="mock-top"><i></i><i></i><i></i><span>Antwortentwurf</span></div>
        <div class="mock-body">
          <span class="mock-badge"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg>KI-Entwurf · von Mensch zu prüfen</span>
          <div class="mock-lines">
            <div class="mock-line dark" style="width:92%"></div>
            <div class="mock-line" style="width:100%"></div>
            <div class="mock-line" style="width:96%"></div>
            <div class="mock-line" style="width:58%"></div>
          </div>
          <div class="mock-actions">
            <span class="mock-btn"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>Freigeben</span>
            <span class="mock-btn ghost">Bearbeiten</span>
          </div>
        </div>
        <figcaption>Antwortentwurf liegt zur Freigabe bereit</figcaption>
      </figure>
    </div>
    <div class="cta-wrap center reveal">
      <a href="#buchung" class="btn btn-primary">Kostenlose Analyse sichern <span class="arrow">→</span></a>
      <p class="micro">Was bei Ihnen konkret drin ist, sehen wir in 30 Minuten.</p>
    </div>
  </div>
</section>

<!-- ======================= 11 · FAQ ======================= -->
<section class="section bg-canvas">
  <div class="container">
    <div class="section-head center reveal" style="margin-inline:auto">
      <h2>Was Verwalter uns vor dem ersten Gespräch fragen.</h2>
      <p class="subhead">Die ehrlichen Antworten — ohne Marketing-Sprech.</p>
    </div>
    <div class="faq-list reveal">
      <div class="faq-item">
        <button class="faq-q" aria-expanded="true"><span>Müssen wir unsere Software wechseln?</span><svg class="chev" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg></button>
        <div class="faq-a"><div class="faq-a-inner">Nein. Das ist der Kern unseres Ansatzes. Wir bauen die Automatisierung <em>in</em> Ihr bestehendes System. Kein Datenumzug, keine neue Oberfläche, keine Migration — auch wenn Ihr ERP in die Jahre gekommen ist.</div></div>
      </div>
      <div class="faq-item">
        <button class="faq-q" aria-expanded="false"><span>Merken unsere Mieter, dass eine KI antwortet?</span><svg class="chev" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg></button>
        <div class="faq-a"><div class="faq-a-inner">Nein — weil keine KI ungeprüft antwortet. Die KI erstellt nur Entwürfe. Ihr Mitarbeiter liest, passt ggf. an und gibt frei. Die Antwort kommt wie immer von einem Menschen aus Ihrem Haus.</div></div>
      </div>
      <div class="faq-item">
        <button class="faq-q" aria-expanded="false"><span>Wie steht es um DSGVO und Mieterdaten?</span><svg class="chev" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg></button>
        <div class="faq-a"><div class="faq-a-inner">Wir arbeiten DSGVO-konform mit EU-Hosting und schließen einen Auftragsverarbeitungsvertrag (AVV) ab. Der Datenfluss wird dokumentiert. Datenschutz ist bei Mieterdaten Pflicht, nicht Option.</div></div>
      </div>
      <div class="faq-item">
        <button class="faq-q" aria-expanded="false"><span>Was, wenn ein Notfall reinkommt — Wasserschaden, Heizungsausfall?</span><svg class="chev" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg></button>
        <div class="faq-a"><div class="faq-a-inner">Notfälle haben eine klar definierte Weiterleitung an einen Menschen. Die Automatisierung übernimmt die Standardlast; bei allem, was Urteil braucht, ist sofort ein Mensch dran.</div></div>
      </div>
      <div class="faq-item">
        <button class="faq-q" aria-expanded="false"><span>Warum nicht direkt mit KI starten?</span><svg class="chev" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg></button>
        <div class="faq-a"><div class="faq-a-inner">Weil KI auf unklaren Prozessen nur das Chaos beschleunigt. Erst Struktur, dann Automatisierung, dann KI — genau dort, wo sie wirklich Wirkung zeigt. Diese Reihenfolge ist der Grund, warum es bei uns funktioniert.</div></div>
      </div>
      <div class="faq-item">
        <button class="faq-q" aria-expanded="false"><span>Das wissen und können wir doch selbst.</span><svg class="chev" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg></button>
        <div class="faq-a"><div class="faq-a-inner">Können Sie. Die Frage ist nur, ob Sie den Aufbau und die laufende Pflege neben dem Tagesgeschäft schaffen — mit einem Team, das ohnehin am Limit ist. Genau diese Zeit kaufen Sie sich mit uns frei.</div></div>
      </div>
      <div class="faq-item">
        <button class="faq-q" aria-expanded="false"><span>Sie sind ein Einzelkämpfer — was, wenn Sie ausfallen?</span><svg class="chev" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg></button>
        <div class="faq-a"><div class="faq-a-inner">Berechtigte Frage. Deshalb gehört Dokumentation zu jedem Projekt: Alles läuft in Ihrem System, ist nachvollziehbar aufgebaut und gehört Ihnen — kein Lock-in, keine Black-Box. Sie sind nie davon abhängig, dass ausgerechnet ich verfügbar bin, um weiterarbeiten zu können.</div></div>
      </div>
      <div class="faq-item">
        <button class="faq-q" aria-expanded="false"><span>Wie lange dauert die Umsetzung?</span><svg class="chev" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg></button>
        <div class="faq-a"><div class="faq-a-inner">Der Aufbau läuft in 5–6 Wochen, in klar getakteten Phasen. Während der gesamten Zeit ändert sich an Ihrem laufenden Betrieb nichts.</div></div>
      </div>
      <div class="faq-item">
        <button class="faq-q" aria-expanded="false"><span>Was kostet das?</span><svg class="chev" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg></button>
        <div class="faq-a"><div class="faq-a-inner">Das hängt vom Umfang ab — und genau das klären wir in der kostenlosen Analyse und im anschließenden Audit. Sie bekommen einen Festpreis, bevor irgendetwas startet. Keine Überraschungen, keine offene Rechnung nach Stunden.</div></div>
      </div>
    </div>
    <p class="center reveal" style="margin-top:34px"><a href="#buchung" class="textlink">Offene Frage? Klären wir im 30-Min-Gespräch →</a></p>
  </div>
</section>

<!-- ======================= 12 · FINALER CTA + BUCHUNG ======================= -->
<section class="section bg-tint booking" id="buchung">
  <div class="container">
    <div class="section-head center reveal" style="margin-inline:auto">
      <h2>30 Minuten, die Ihrem Team Stunden zurückgeben.</h2>
      <p class="subhead">Kostenlose Automatisierungs-Analyse. Kein Verkaufsgespräch. Sie gehen mit Ihren 3 größten Zeitfressern raus — versprochen.</p>
    </div>
    <p class="reveal" style="max-width:680px;margin:0 auto;color:var(--body)">In diesem Gespräch schauen wir gemeinsam auf Ihre konkrete Situation: Welche Anfragen kommen am häufigsten, wer bearbeitet sie, wie viel Zeit kostet das. Am Ende wissen Sie, was sich bei Ihnen strukturieren und automatisieren lässt — und was es Ihnen bringt. Ob wir danach zusammenarbeiten, entscheiden Sie.</p>

    <div class="takeaway reveal">
      <div class="takeaway-label">Das nehmen Sie aus dem Termin mit — auch ohne Zusammenarbeit:</div>
      <ul>
        <li><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>Eine schriftliche Liste Ihrer 3 größten Zeitfresser</li>
        <li><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>Eine grobe Einschätzung, wie viel Zeit realistisch zurückzuholen ist</li>
        <li><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>Klarheit, ob sich der nächste Schritt für Sie überhaupt lohnt</li>
      </ul>
    </div>

    <!-- Buchung: Button öffnet den zcal-Terminkalender in neuem Tab.
         Optional später: zcal-/Cal.com-Inline-Embed-Snippet einsetzen und diese Karte ersetzen. -->
    <div class="cal-embed reveal" id="cal-inline">
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>
      <p class="cal-head">Wählen Sie einen Termin, der Ihnen passt</p>
      <p style="font-size:.92rem">30&nbsp;Minuten · online · kostenlos · ohne Verpflichtung</p>
      <a href="https://zcal.co/i/1v-apJ3U" target="_blank" rel="noopener" class="btn btn-primary" style="margin-top:6px">Termin jetzt auswählen <span class="arrow">→</span></a>
    </div>

    <div class="reassure reveal">
      <span><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>Keine Vorbereitung nötig</span>
      <span><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>Kein Verkaufsdruck</span>
      <span><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>Konkrete Erkenntnisse garantiert</span>
    </div>
  </div>
</section>

</main>

<!-- ======================= FOOTER ======================= -->
<footer class="footer">
  <div class="container">
    <div class="footer-grid">
      <div>
        <a href="#top" class="brand">
          <svg class="mark" viewBox="0 0 32 32" fill="none" aria-hidden="true"><rect x="3" y="13" width="5" height="16" rx="1.5" fill="#749FDD"/><rect x="13.5" y="8" width="5" height="21" rx="1.5" fill="#9BC0EB"/><rect x="24" y="3" width="5" height="26" rx="1.5" fill="#fff"/></svg>
          <span>Goebel&nbsp;&amp;&nbsp;Partner</span>
        </a>
        <p class="footer-claim">Struktur, Automatisierung und KI für Hausverwaltungen — innerhalb der Software, die Sie bereits nutzen. Ohne Systemwechsel.</p>
      </div>
      <div>
        <h4>Navigation</h4>
        <ul>
          <li><a href="#methode">Methode</a></li>
          <li><a href="#loesung">Lösung</a></li>
          <li><a href="#ablauf">Ablauf</a></li>
          <li><a href="#ueber-mich">Über mich</a></li>
          <li><a href="#buchung">Analyse buchen</a></li>
        </ul>
      </div>
      <div>
        <h4>Kontakt &amp; Recht</h4>
        <ul>
          <li>Goebel &amp; Partner Consulting</li>
          <li>Inhaber Tim Goebel</li>
          <li>Hilgenloh 19 · 44379 Dortmund</li>
          <li><a href="mailto:tim@goebel-partner.de">tim@goebel-partner.de</a></li>
          <li><a href="tel:+491726932222">0172 - 693 22 22</a></li>
          <li><a href="/impressum">Impressum</a></li>
          <li><a href="/datenschutz">Datenschutz</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© <span id="year"></span> Goebel &amp; Partner Consulting</span>
      <span>DSGVO-konform · EU-Hosting · AVV</span>
    </div>
  </div>
</footer>

<!-- ======================= STICKY MOBILE CTA ======================= -->
<div class="mobile-cta">
  <a href="#buchung" class="btn btn-primary btn-block">Kostenlose Analyse sichern <span class="arrow">→</span></a>
</div>
`
