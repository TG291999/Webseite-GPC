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
<a href="#hauptinhalt" class="skip-link">Zum Inhalt springen</a>
<!-- ======================= HEADER / NAV ======================= -->
<header class="header" id="top">
  <div class="container nav">
    <a href="#top" class="brand" aria-label="Goebel & Partner Consulting — Startseite">
      <svg class="mark" viewBox="179 315 665 393" aria-hidden="true">
        <g transform="translate(215.04,647.03) scale(0.192894,-0.192894)">
          <path d="M1251 3Q1251 -12 1249.0 -17.0Q1247 -22 1241 -22Q1229 -22 1198.0 -6.5Q1167 9 1128.5 30.5Q1090 52 1054.0 67.5Q1018 83 997 83Q987 83 964.0 67.5Q941 52 904.5 31.5Q868 11 816.5 -4.5Q765 -20 697 -20Q555 -20 437.0 30.0Q319 80 233.5 171.5Q148 263 101.0 388.5Q54 514 54 665Q54 835 104.5 973.5Q155 1112 248.5 1212.0Q342 1312 471.0 1366.0Q600 1420 757 1420Q840 1420 895.5 1398.5Q951 1377 983.0 1355.0Q1015 1333 1024 1333Q1042 1333 1073.5 1354.5Q1105 1376 1135.0 1397.5Q1165 1419 1178 1419Q1181 1419 1183.0 1416.5Q1185 1414 1187 1402L1260 964Q1262 958 1261.5 955.0Q1261 952 1258 950Q1256 949 1253.0 950.0Q1250 951 1246 956Q1183 1118 1105.5 1216.0Q1028 1314 942.0 1358.5Q856 1403 763 1403Q643 1403 552.0 1326.5Q461 1250 409.5 1098.5Q358 947 358 719Q358 499 415.5 343.0Q473 187 568.0 104.0Q663 21 776 21Q808 21 843.5 31.5Q879 42 910.5 61.0Q942 80 962.0 107.0Q982 134 982 166V558Q982 570 972.5 576.5Q963 583 942 585L830 598Q823 599 820.0 601.0Q817 603 817 605Q817 608 819.5 610.0Q822 612 827 612H1339Q1344 612 1346.5 610.0Q1349 608 1349 605Q1349 603 1346.0 601.0Q1343 599 1336 598L1278 585Q1264 582 1257.5 576.0Q1251 570 1251 558Z" transform="translate(-54.0,0)" fill="#1B3A63"/>
          <rect x="1520.0" y="-210.0" width="150.0" height="1820.0" fill="#D49A2A"/>
          <path d="M1232 870Q1232 735 1169.0 635.0Q1106 535 995.0 480.5Q884 426 738 426Q626 426 545.0 451.5Q464 477 397 527L401 542Q447 510 488.5 491.0Q530 472 570.0 464.0Q610 456 649 456Q731 456 798.0 505.0Q865 554 904.5 648.0Q944 742 944 876Q944 1038 895.5 1151.0Q847 1264 763.0 1322.5Q679 1381 573 1381H493V56Q493 44 502.0 37.5Q511 31 530 27L613 14Q618 13 620.5 11.5Q623 10 623 7Q623 4 621.0 2.0Q619 0 614 0H78Q73 0 70.5 2.0Q68 4 68 7Q68 12 79 14L163 28Q181 31 189.5 37.5Q198 44 198 54V1341Q198 1354 189.5 1362.0Q181 1370 164 1372L77 1386Q68 1388 68 1393Q68 1397 70.0 1398.5Q72 1400 77 1400H573Q770 1400 918.0 1334.0Q1066 1268 1149.0 1148.5Q1232 1029 1232 870Z" transform="translate(1847.0,0)" fill="#1B3A63"/>
        </g>
      </svg>
      <span>Goebel&nbsp;&amp;&nbsp;Partner</span>
    </a>
    <nav class="nav-links" aria-label="Hauptnavigation">
      <a href="#methode">Methode</a>
      <a href="#loesung">Lösung</a>
      <a href="#ablauf">Ablauf</a>
      <a href="#ueber-mich">Über mich</a>
      <a href="/prozess-check">Prozess-Check</a>
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
      <a href="/prozess-check">Prozess-Check</a>
    </nav>
  </div>
</header>

<main id="hauptinhalt">

<!-- ======================= 1 · HERO ======================= -->
<section class="section hero bg-canvas">
  <div class="container hero-grid">
    <div class="reveal">
      <h1>Ich gebe Ihrer Verwaltung Zeit zurück.</h1>
      <p class="subhead"><strong>Bis&nbsp;zu 10&nbsp;Stunden pro Woche</strong> weniger Routine für Ihre Sachbearbeiter — durch Struktur, Automatisierung und gezielte KI, direkt in Ihrer bestehenden Software. Egal welche. <strong>Kein Systemwechsel, kein IT-Projekt.</strong></p>
      <div class="cta-wrap">
        <a href="#buchung" class="btn btn-primary">Kostenlose Analyse sichern <span class="arrow">→</span></a>
        <p class="micro">Kostenlos · 30&nbsp;Minuten · kein Verkaufsgespräch.<br>Sie gehen mit Ihren 3 größten Zeitfressern raus — auch ohne Zusammenarbeit.</p>
        <p class="hero-safety"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg> DSGVO-konform · EU-Hosting · Jede Antwort gibt Ihr Mitarbeiter frei</p>
        <p style="margin-top:14px"><a href="#loesung" class="textlink">Wie das ohne Softwarewechsel funktioniert ↓</a></p>
      </div>
      <div class="trust-strip">
        <span class="trust-item"><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>Immobilienkaufmann · 8+ Jahre Branche</span>
        <span class="trust-item"><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>Gründer einer Hausverwaltungs-Software</span>
        <span class="trust-item"><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>Funktioniert mit jeder Verwaltungssoftware</span>
      </div>
    </div>
    <div class="hero-visual">
      <div class="hero-demo reveal" role="group" aria-label="Interaktive Demo: Eine Mieteranfrage wird automatisch vorsortiert, ein Antwortentwurf vorbereitet und vom Mitarbeiter per Klick freigegeben.">
        <div class="hw">
          <div class="hw-top"><i></i><i></i><i></i><span>Mieteranfrage · Posteingang</span></div>
          <div class="hw-prog" aria-hidden="true">
            <span class="s done"><span class="n"><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg></span>Anfrage</span>
            <span class="s done"><span class="n"><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg></span>Vorbereitet</span>
            <span class="s s3"><span class="n">3</span>Freigabe</span>
          </div>
          <div class="hw-body">
            <div class="hw-mail">
              <div class="hw-ava"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 5L2 7"/></svg></div>
              <div class="hw-lines"><div class="hw-subj">Nebenkostenabrechnung 2024 – Whg. 12</div><div class="hw-bar" style="width:78%"></div></div>
            </div>
            <div class="hw-badges">
              <span class="hw-badge"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>Erkannt: Nebenkosten</span>
              <span class="hw-badge ok"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>Vorsortiert &amp; zugeordnet</span>
            </div>
            <div class="hw-draft">
              <span class="hw-badge"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg>KI-Entwurf · von Mensch zu prüfen</span>
              <div class="hw-bar" style="width:94%"></div>
              <div class="hw-bar" style="width:100%"></div>
              <div class="hw-bar" style="width:88%"></div>
              <div class="hw-bar" style="width:60%"></div>
            </div>
          </div>
          <div class="hw-foot">
            <button class="hw-approve" type="button"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>Freigeben</button>
            <button class="hw-edit" type="button">Bearbeiten</button>
            <span class="hw-hint">Sie sind dran</span>
          </div>
          <div class="hw-sent">
            <div class="hw-sent-row">
              <span class="hw-sent-ic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg></span>
              <div><b>Antwort gesendet &amp; dokumentiert</b><span>Im System hinterlegt — freigegeben von einem Menschen.</span></div>
            </div>
            <div class="hw-metric"><b>~8 Sekunden</b> statt ~6 Minuten Handarbeit — so bekommt Ihr Team Stunden zurück.</div>
            <button class="hw-replay" type="button"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v5h5"/><path d="M3.05 13A9 9 0 1 0 6 5.3L3 8"/></svg>Nochmal ansehen</button>
          </div>
        </div>
        <p class="hw-caption">Jede Standardanfrage kommt vorbereitet bei Ihnen an — Sie geben nur noch frei.</p>
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
    <p class="reveal" style="margin-bottom:40px;color:var(--body)">Der Posteingang läuft voll, das Telefon klingelt mitten in der Abrechnung, eine Schadensmeldung springt dreimal hin und her. Jede Anfrage ist beantwortbar — aber es sind hunderte gleichzeitig. Und kündigt ein Sachbearbeiter, suchen Sie monatelang Ersatz, den es nicht gibt.</p>
    <div class="grid-3">
      <div class="card reveal">
        <div class="ic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 5L2 7"/></svg></div>
        <h3>Die Anfragen-Flut</h3>
        <p>Nebenkosten, Schäden, „Wann kommt der Handwerker?" — dieselben Fragen per Mail <em>und</em> Telefon, jede Woche aufs Neue.</p>
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
        <p style="color:var(--body)">Das Problem ist nicht, dass Ihr Team zu langsam ist — sondern dass Menschen Arbeit machen, die kein Mensch mehr machen müsste. Diese Zeit fehlt dort, wo sie Ihre Verwaltung wirklich weiterbringt.</p>
      </div>
      <div class="calc-card reveal" role="group" aria-label="Interaktives Rechenbeispiel: Stellen Sie Ihre eigenen Zahlen ein">
        <div class="label">Ihr Rechenbeispiel — stellen Sie Ihre Zahlen ein</div>
        <div class="calc-slider">
          <div class="cs-head"><span>Sachbearbeiter</span><output id="calcOutN">4</output></div>
          <input type="range" id="calcN" min="1" max="20" step="1" value="4" aria-label="Anzahl Sachbearbeiter" />
        </div>
        <div class="calc-slider">
          <div class="cs-head"><span>Std./Woche für Standardanfragen</span><output id="calcOutH">je 10</output></div>
          <input type="range" id="calcH" min="2" max="20" step="1" value="10" aria-label="Stunden pro Woche für Standardanfragen" />
        </div>
        <div class="calc-slider">
          <div class="cs-head"><span>Interner Stundensatz</span><output id="calcOutR">25&nbsp;€</output></div>
          <input type="range" id="calcR" min="20" max="60" step="5" value="25" aria-label="Interner Stundensatz in Euro" />
        </div>
        <div class="calc-row"><span>Arbeitswochen pro Jahr</span><span>46</span></div>
        <div class="calc-result">
          <span class="muted" style="font-size:.85rem">Beispielhafte gebundene Arbeitszeit pro Jahr</span>
          <div class="big" id="calcTotal" aria-live="polite">46.000&nbsp;€</div>
        </div>
        <p class="calc-note">Das ist keine garantierte Ersparnis, sondern ein transparentes Rechenbeispiel. Ihre echten Zahlen prüfen wir in der kostenlosen Analyse.</p>
      </div>
    </div>
    <div class="lm-card reveal">
      <div>
        <div class="eyebrow">Prozess-Check · kostenlos</div>
        <h3>Wollen Sie es genauer wissen — für einen konkreten Ablauf aus Ihrem Alltag?</h3>
        <p>Acht Fragen zu Mahnwesen, Anfragen, Belegen oder Schäden. Daraus entsteht eine Rechnung mit jeder Zeile offen — auf Basis Ihrer eigenen Angaben, nicht irgendeines Durchschnitts.</p>
      </div>
      <div class="lm-cta">
        <a href="/prozess-check" class="btn">Prozess-Check starten <span class="arrow">→</span></a>
        <p class="micro">4 Minuten · Ergebnis sofort · keine Registrierung</p>
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
      <p class="intro">Viele wollen sofort mit KI loslegen — auf unklaren, manuellen Prozessen beschleunigt das nur das Chaos. Ich arbeite in klarer Reihenfolge: erst Struktur, dann Automatisierung, dann KI — genau dort, wo sie wirklich wirkt.</p>
    </div>
    <div class="pillars-line reveal" aria-hidden="true"><span class="dot"></span><span class="dot"></span><span class="dot"></span></div>
    <div class="pillars-grid" style="text-align:left">
      <div class="pillar reveal">
        <span class="numeral">I</span>
        <div class="step">01 · Fundament</div>
        <h3>Digitalisierung</h3>
        <p>Bevor etwas automatisiert wird, muss klar sein, wie es heute wirklich läuft. Ich mache Prozesse, Daten und Zuständigkeiten sichtbar. <em>Konkret:</em> wie eine Schadensmeldung heute durch Ihr Haus läuft — und wo sie hängen bleibt.</p>
        <div class="result"><b>Ergebnis:</b> klare Abläufe, saubere Daten, eindeutige Zuständigkeiten.</div>
      </div>
      <div class="pillar reveal">
        <span class="numeral">II</span>
        <div class="step">02 · Tempo</div>
        <h3>Automatisierung</h3>
        <p>Sind die Abläufe sauber, übernehmen Workflows die Wiederholung — doppelte Eingaben, manuelle Übergaben, ständiges Nachhalten. <em>Konkret:</em> Die immer gleiche Nebenkosten-Rückfrage wird automatisch erkannt, zugeordnet und vorbereitet — ganz ohne KI.</p>
        <div class="result"><b>Ergebnis:</b> weniger Handarbeit, weniger Fehler, schnellere Abläufe.</div>
      </div>
      <div class="pillar reveal">
        <span class="numeral">III</span>
        <div class="step">03 · Hebel</div>
        <h3>KI</h3>
        <p>Erst auf sauberen Prozessen kommt KI dazu — gezielt bei Kommunikation, Dokumenten und wiederkehrender Wissensarbeit. <em>Konkret:</em> Aus einer langen Mieter-Mail entsteht ein fertiger Antwortentwurf, den Ihr Mitarbeiter nur noch prüft und freigibt.</p>
        <div class="result"><b>Ergebnis:</b> KI, die im Tagesgeschäft spürbar entlastet.</div>
      </div>
    </div>
  </div>
</section>

<!-- ======================= 5 · LÖSUNG OHNE SYSTEMWECHSEL ======================= -->
<section class="section bg-canvas" id="loesung">
  <div class="container">
    <div class="section-head reveal">
      <h2>Ich baue die Automatisierung <em>in</em> Ihre Software — nicht daneben.</h2>
      <p class="subhead">Kein neues ERP. Kein Datenumzug. Kein monatelanges IT-Projekt. Auch dann nicht, wenn Ihr System in die Jahre gekommen ist.</p>
    </div>
    <p class="reveal" style="margin-bottom:18px;color:var(--body)">Die meisten „Digitalisierungs"-Versprechen heißen in Wahrheit: Systemwechsel. Neue Software, Schulungen, Migration — und ein Jahr später läuft es schlechter als vorher.</p>
    <p class="reveal" style="margin-bottom:36px;color:var(--body)">Ich mache das Gegenteil: Ihr System bleibt, wie es ist. Darüber lege ich eine Ebene, die Anfragen vorsortiert, Antwortentwürfe vorbereitet und Vorgänge direkt in Ihr System schreibt. Ihre Leute klicken nur noch „Freigeben".</p>
    <div class="compare reveal">
      <div class="compare-col without">
        <div class="compare-head">Heute</div>
        <div class="compare-row">Jede Mail wird von Hand gelesen, eingeordnet, beantwortet.</div>
        <div class="compare-row">Schadensmeldung pingt 3× zwischen allen Beteiligten hin und her.</div>
        <div class="compare-row">Wissen geht mit jeder Kündigung verloren.</div>
      </div>
      <div class="compare-col with">
        <div class="compare-head">Mit mir</div>
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

<!-- ======================= 5b · VORHER/NACHHER-SHOWCASE (interaktiv) ======================= -->
<section class="section bg-canvas showcase" id="beispiele">
  <div class="container">
    <div class="section-head center reveal" style="margin-inline:auto">
      <div class="eyebrow sc-eyebrow">VORHER · NACHHER</div>
      <h2>Zwei Vorgänge, die jede Verwaltung kennt.</h2>
      <p class="subhead">So sehen sie heute im Büroalltag aus — und so laufen sie mit Automatisierung. Beides im bestehenden System, ohne Wechsel.</p>
      <p class="sc-disclaimer"><span class="sc-amberdot"></span>Demonstration anhand typischer Vorgänge</p>
    </div>

    <!-- Showcase 01 -->
    <div class="sc-card reveal" data-sc="01" data-state="before" role="group" aria-label="Beispiel 1: KI-Anfragen-Triage – Vorher/Nachher">
      <div class="sc-card-head">
        <div class="sc-card-meta">
          <span class="sc-num">01</span>
          <div>
            <div class="sc-tag">KI-ANFRAGEN-TRIAGE</div>
            <h3 class="sc-title">Der Posteingang sortiert sich selbst</h3>
          </div>
        </div>
        <div class="sc-controls">
          <div class="sc-toggle" role="group" aria-label="Ansicht wählen">
            <button type="button" class="sc-seg" data-state="before" aria-pressed="true">Vorher</button>
            <button type="button" class="sc-seg" data-state="after" aria-pressed="false">Nachher</button>
          </div>
          <button type="button" class="sc-run">Automatisierung ausführen <span class="arrow">→</span></button>
        </div>
      </div>
      <div class="sc-stage" aria-live="polite">
        <div class="sc-sweep" aria-hidden="true"></div>
        <div class="sc-view sc-before">
          <div class="sc-mailhead"><span>Posteingang</span><span class="sc-count-before">127 ungelesen</span></div>
          <ul class="sc-maillist">
            <li class="sc-mail"><span class="sc-mail-subj">AW: Betriebskostenabrechnung 2024</span><span class="sc-mail-time">14:32</span></li>
            <li class="sc-mail urgent"><span class="sc-mail-subj">Heizung komplett kalt!! WE 12</span><span class="sc-mail-time">14:28</span></li>
            <li class="sc-mail"><span class="sc-mail-subj">Re: Hausgeldzahlung März</span><span class="sc-mail-time">14:21</span></li>
            <li class="sc-mail urgent"><span class="sc-mail-subj">Wasserschaden Bad, Whg 4</span><span class="sc-mail-time">14:05</span></li>
            <li class="sc-mail"><span class="sc-mail-subj">Anfrage Wohnungsbesichtigung</span><span class="sc-mail-time">13:58</span></li>
          </ul>
          <p class="sc-note warn">⚠ Dringendes geht im Rauschen unter — alles wird einzeln per Hand gesichtet und zugeordnet.</p>
        </div>
        <div class="sc-view sc-after">
          <div class="sc-mailhead"><span>Posteingang · automatisch sortiert</span><span class="sc-count-after">5 zugeordnet</span></div>
          <ul class="sc-maillist">
            <li class="sc-mail2" style="--i:0"><span class="sc-chip schaden">SCHADEN · DRINGEND</span><span class="sc-mail-subj">Heizung kalt — WE 12</span><span class="sc-ready">● Antwortentwurf + Handwerker-Vorschlag bereit</span></li>
            <li class="sc-mail2" style="--i:1"><span class="sc-chip schaden">SCHADEN</span><span class="sc-mail-subj">Wasserschaden Bad — Whg 4</span></li>
            <li class="sc-mail2" style="--i:2"><span class="sc-chip bk">BETRIEBSKOSTEN</span><span class="sc-mail-subj">BK-Abrechnung 2024</span></li>
            <li class="sc-mail2" style="--i:3"><span class="sc-chip miete">MIETE</span><span class="sc-mail-subj">Hausgeldzahlung März</span></li>
            <li class="sc-mail2" style="--i:4"><span class="sc-chip sonst">SONSTIGES</span><span class="sc-mail-subj">Wohnungsbesichtigung</span></li>
          </ul>
        </div>
      </div>
      <div class="sc-metrics">
        <div class="sc-metric"><span class="sc-m-label">Pro Anfrage</span><span class="sc-m-pair"><span class="sc-m-before">3 Min</span><span class="sc-m-rest"><span class="sc-m-arrow">→</span><b class="sc-m-after">20 Sek</b></span></span></div>
        <div class="sc-metric"><span class="sc-m-label">Dringendes</span><span class="sc-m-pair"><span class="sc-m-before">geht unter</span><span class="sc-m-rest"><span class="sc-m-arrow">→</span><b class="sc-m-after">sofort markiert</b></span></span></div>
        <div class="sc-metric"><span class="sc-m-label">Sachbearbeiter</span><span class="sc-m-pair"><span class="sc-m-before">tippt jede Antwort</span><span class="sc-m-rest"><span class="sc-m-arrow">→</span><b class="sc-m-after">prüft &amp; sendet</b></span></span></div>
      </div>
    </div>

    <!-- Showcase 02 -->
    <div class="sc-card reveal" data-sc="02" data-state="before" role="group" aria-label="Beispiel 2: Schadensmeldung zu Handwerker-Auftrag – Vorher/Nachher">
      <div class="sc-card-head">
        <div class="sc-card-meta">
          <span class="sc-num">02</span>
          <div>
            <div class="sc-tag">SCHADENSMELDUNG → HANDWERKER</div>
            <h3 class="sc-title">Aus drei Zeilen Freitext wird ein fertiger Auftrag</h3>
          </div>
        </div>
        <div class="sc-controls">
          <div class="sc-toggle" role="group" aria-label="Ansicht wählen">
            <button type="button" class="sc-seg" data-state="before" aria-pressed="true">Vorher</button>
            <button type="button" class="sc-seg" data-state="after" aria-pressed="false">Nachher</button>
          </div>
          <button type="button" class="sc-run">Automatisierung ausführen <span class="arrow">→</span></button>
        </div>
      </div>
      <div class="sc-stage" aria-live="polite">
        <div class="sc-sweep" aria-hidden="true"></div>
        <div class="sc-view sc-before">
          <blockquote class="sc-quote">„Hallo, bei uns tropft seit heute früh Wasser von der Badezimmerdecke, der Boden ist schon ganz nass. Bitte dringend!"<cite>— Fam. Berger · Lindenstr. 14, Whg 4 · 14:28</cite></blockquote>
          <ol class="sc-steps">
            <li><span class="sc-step-n">01</span>Objekt &amp; Wohnung raussuchen</li>
            <li><span class="sc-step-n">02</span>Schaden manuell erfassen</li>
            <li><span class="sc-step-n">03</span>Gewerk bestimmen, Handwerker suchen</li>
            <li><span class="sc-step-n">04</span>Handwerker anrufen</li>
            <li><span class="sc-step-n">05</span>Auftrag schreiben &amp; versenden</li>
          </ol>
          <p class="sc-note warn">5 Schritte · 15+ Minuten · Medienbrüche</p>
        </div>
        <div class="sc-view sc-after">
          <div class="sc-ticket-head"><span>Schadensvorgang #2024-0417</span><span class="sc-status">● Entwurf bereit</span></div>
          <dl class="sc-ticket">
            <div class="sc-row" style="--i:0"><dt>Objekt</dt><dd>Lindenstr. 14</dd></div>
            <div class="sc-row" style="--i:1"><dt>Einheit</dt><dd>Whg 4 · Fam. Berger</dd></div>
            <div class="sc-row" style="--i:2"><dt>Gewerk</dt><dd>Sanitär</dd></div>
            <div class="sc-row" style="--i:3"><dt>Schaden</dt><dd>Wasseraustritt Badezimmerdecke</dd></div>
            <div class="sc-row" style="--i:4"><dt>Dringlichkeit</dt><dd><span class="sc-high">Hoch</span></dd></div>
            <div class="sc-row" style="--i:5"><dt>Handwerker</dt><dd>Sanitär Krause <span class="sc-muted">(Stammhandwerker Obj.)</span></dd></div>
            <div class="sc-row" style="--i:6"><dt>Auftrag</dt><dd>PDF-Entwurf erstellt</dd></div>
          </dl>
          <button type="button" class="sc-approve">Freigeben &amp; senden <span class="arrow">→</span></button>
        </div>
      </div>
      <div class="sc-metrics">
        <div class="sc-metric"><span class="sc-m-label">Erfassung</span><span class="sc-m-pair"><span class="sc-m-before">5 Schritte</span><span class="sc-m-rest"><span class="sc-m-arrow">→</span><b class="sc-m-after">1 Klick</b></span></span></div>
        <div class="sc-metric"><span class="sc-m-label">Zeit pro Schaden</span><span class="sc-m-pair"><span class="sc-m-before">15+ Min</span><span class="sc-m-rest"><span class="sc-m-arrow">→</span><b class="sc-m-after">unter 1 Min</b></span></span></div>
        <div class="sc-metric"><span class="sc-m-label">Zuordnung</span><span class="sc-m-pair"><span class="sc-m-before">manuell gesucht</span><span class="sc-m-rest"><span class="sc-m-arrow">→</span><b class="sc-m-after">automatisch</b></span></span></div>
      </div>
    </div>

    <p class="sc-footnote center reveal">Das sind keine Theorie-Beispiele. Diese Abläufe stammen direkt aus dem Verwaltungsalltag, den ich aus über 8&nbsp;Jahren in der Branche kenne.</p>
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
    <p class="loop-closing reveal" style="margin-inline:auto;color:var(--body)">Kein Schritt verlässt die Kontrolle Ihres Teams: Die Technik nimmt die Fleißarbeit ab, die Verantwortung bleibt beim Menschen. Notfälle gehen sofort an einen Menschen.</p>
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
        <div class="step-n">01</div>
        <h3>Kostenlose Analyse</h3>
        <p>In 30 Minuten finden wir gemeinsam, wo bei Ihnen die meiste Zeit verloren geht. Unverbindlich, ohne Vorbereitung.</p>
      </div>
      <div class="step-card featured reveal">
        <span class="badge">Empfohlen</span>
        <div class="step-n">02</div>
        <h3>Quick-Win-Audit</h3>
        <p>Ich nehme Ihren größten Engpass im Detail auf und liefere einen konkreten Umsetzungsplan mit Zahlen. Die Kosten werden voll auf die Umsetzung angerechnet.</p>
      </div>
      <div class="step-card reveal">
        <div class="step-n">03</div>
        <h3>Umsetzung &amp; Schulung</h3>
        <p>Ich baue die Automatisierung in Ihre bestehende Software, teste sie mit echten Daten und schule Ihr Team. Ohne Systemwechsel.</p>
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
      <h2>Ich arbeite nicht mit jeder Verwaltung. Das ist Absicht.</h2>
      <p class="subhead" style="font-style:italic">Automatisierung wirkt nur, wenn sie zu Ihrer Verwaltung passt. Deshalb sage ich vorab ehrlich, für wen ich der Richtige bin — und für wen nicht.</p>
    </div>
    <div class="fit">
      <div class="fit-col yes reveal">
        <h3>Passt, wenn Sie sich hier wiedererkennen:</h3>
        <ul class="fit-list">
          <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>Ihre besten Leute arbeiten den halben Tag Anfragen ab, statt zu verwalten — und abends ist der Berg trotzdem nicht kleiner.</li>
          <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>Sie finden kaum neue Mitarbeiter — und wollen die, die Sie haben, nicht an stumpfe Routine verlieren.</li>
          <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>Sie wollen Ihre Software behalten — nicht schon wieder ein System einführen, das Monate kostet und am Ende keiner nutzt.</li>
          <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>Ob Miet-, WEG- oder gemischte Verwaltung, ob 3 oder 30 Köpfe: Bei Ihnen wiederholen sich täglich dieselben Anfragen.</li>
        </ul>
      </div>
      <div class="fit-col no reveal">
        <h3>Passt (noch) nicht, wenn Sie…</h3>
        <ul class="fit-list">
          <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="5" y1="12" x2="19" y2="12"/></svg>mit Ihren Abläufen zufrieden sind und eigentlich keine Veränderung suchen.</li>
          <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="5" y1="12" x2="19" y2="12"/></svg>das billigste Tool suchen statt den größten Hebel.</li>
          <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="5" y1="12" x2="19" y2="12"/></svg>erwarten, dass eine KI Ihre Mitarbeiter ersetzt — bei mir bleibt der Mensch in der Entscheidung.</li>
          <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="5" y1="12" x2="19" y2="12"/></svg>kaum wiederkehrende Routine haben — dann lohnt sich Automatisierung schlicht nicht, und das sage ich Ihnen lieber vorher.</li>
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
        <img class="about-photo-img" src="/images/tim-goebel-portrait.jpg" width="1358" height="2048" loading="lazy" alt="Tim Goebel, Inhaber von Goebel & Partner Consulting" />
        <a href="https://www.linkedin.com/in/tim-goebel-gpc/" target="_blank" rel="noopener" class="textlink about-linkedin">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z"/></svg>
          Tim Goebel auf LinkedIn ansehen →
        </a>
      </div>
      <div class="reveal">
        <h2>Ich komme aus Ihrer Welt — nicht aus einer KI-Agentur.</h2>
        <p class="subhead">Immobilienkaufmann. 8+ Jahre Branche. Gründer einer Hausverwaltungs-Software. Heute baue ich die Automatisierung, die ich mir damals selbst gewünscht hätte.</p>
        <p>Ich habe nicht über Hausverwaltung gelesen — ich war drin: Vermietung, Vertrieb, Verwaltungsalltag von innen. Danach habe ich mit Immo&nbsp;One eine eigene Hausverwaltungs-Software aufgebaut und vertrieben.</p>
        <p class="pullquote">Aus Immo&nbsp;One habe ich eine entscheidende Lektion mitgenommen: Für viele Verwaltungen ist die bestehende Software das Herzstück des Betriebs. Wird dieses Herzstück gewechselt und läuft danach nicht sauber, steht der ganze Laden still.</p>
        <p>Genau deshalb drehe ich den Ansatz um: nicht Ihre Software ersetzen, sondern entlasten — bis Ihr Team wieder Luft bekommt. Sie reden dabei nicht mit einem Berater, der eine Folie zeichnet und weiterreicht, sondern direkt mit dem, der es selbst baut.</p>
        <p class="logo-strip"><b>Für jede Software:</b> ob Domus, Immoware24, GFAD, casavi — oder Ihre Eigenlösung.</p>
      </div>
    </div>
    <div class="speaker-strip reveal">
      <img class="speaker-photo" src="/images/tim-goebel-speaker.jpg" width="800" height="533" loading="lazy" alt="Tim Goebel als Speaker auf der Bühne vor Publikum" />
      <div class="speaker-text">
        <div class="eyebrow">Auf der Bühne</div>
        <p>Ich rede nicht nur über Digitalisierung in der Immobilienbranche — ich habe selbst ein Proptech-Startup gegründet und auf die Bühne gebracht: als Sprecher auf der <b>BuildinX-Messe</b> (Westfalenhalle Dortmund) und als Gründer bei Pitch-Events wie der <b>Founder Fight Night</b> (2×) und der <b>Start-up Night der Wirtschaftsjunioren</b>. Diese Praxis bringe ich heute in jede Automatisierung ein.</p>
        <div class="about-logos">
          <span class="ll-label">u.&nbsp;a. auf der Bühne bei:</span>
          <img src="/images/buildinx-logo.png" width="600" height="79" alt="BuildinX" loading="lazy" />
          <img src="/images/founder-fight-night-logo.png" width="200" height="200" alt="Founder Fight Night" loading="lazy" />
          <img src="/images/wirtschaftsjunioren-logo.png" width="259" height="195" alt="Wirtschaftsjunioren" loading="lazy" />
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ======================= 11 · FAQ ======================= -->
<section class="section bg-canvas">
  <div class="container">
    <div class="section-head center reveal" style="margin-inline:auto">
      <h2>Was Verwalter mich vor dem ersten Gespräch fragen.</h2>
      <p class="subhead">Die ehrlichen Antworten — ohne Marketing-Sprech.</p>
    </div>
    <div class="faq-list reveal">
      <div class="faq-item">
        <button class="faq-q" aria-expanded="true"><span>Müssen wir unsere Software wechseln?</span><svg class="chev" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg></button>
        <div class="faq-a"><div class="faq-a-inner">Nein — das ist der Kern. Ich baue die Automatisierung <em>in</em> Ihr bestehendes System. Kein Datenumzug, keine neue Oberfläche, keine Migration.</div></div>
      </div>
      <div class="faq-item">
        <button class="faq-q" aria-expanded="false"><span>Merken unsere Mieter, dass eine KI antwortet?</span><svg class="chev" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg></button>
        <div class="faq-a"><div class="faq-a-inner">Nein, weil keine KI ungeprüft antwortet. Sie erstellt nur Entwürfe — Ihr Mitarbeiter prüft und gibt frei. Die Antwort kommt wie immer von einem Menschen aus Ihrem Haus.</div></div>
      </div>
      <div class="faq-item">
        <button class="faq-q" aria-expanded="false"><span>Wie steht es um DSGVO und Mieterdaten?</span><svg class="chev" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg></button>
        <div class="faq-a"><div class="faq-a-inner">DSGVO-konform, EU-Hosting, AVV. Der Datenfluss wird dokumentiert. Bei Mieterdaten ist Datenschutz Pflicht, nicht Option.</div></div>
      </div>
      <div class="faq-item">
        <button class="faq-q" aria-expanded="false"><span>Was, wenn ein Notfall reinkommt — Wasserschaden, Heizungsausfall?</span><svg class="chev" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg></button>
        <div class="faq-a"><div class="faq-a-inner">Notfälle haben eine feste Weiterleitung an einen Menschen. Die Automatisierung übernimmt die Standardlast — alles, was Urteil braucht, geht sofort an einen Menschen.</div></div>
      </div>
      <div class="faq-item">
        <button class="faq-q" aria-expanded="false"><span>Warum nicht direkt mit KI starten?</span><svg class="chev" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg></button>
        <div class="faq-a"><div class="faq-a-inner">Weil KI auf unklaren Prozessen nur das Chaos beschleunigt. Erst Struktur, dann Automatisierung, dann KI — genau diese Reihenfolge macht den Unterschied.</div></div>
      </div>
      <div class="faq-item">
        <button class="faq-q" aria-expanded="false"><span>Das wissen und können wir doch selbst.</span><svg class="chev" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg></button>
        <div class="faq-a"><div class="faq-a-inner">Können Sie. Die Frage ist nur, ob Sie Aufbau und Pflege neben dem Tagesgeschäft schaffen — mit einem Team am Limit. Genau diese Zeit kaufen Sie sich mit mir frei.</div></div>
      </div>
      <div class="faq-item">
        <button class="faq-q" aria-expanded="false"><span>Sie sind ein Einzelkämpfer — was, wenn Sie ausfallen?</span><svg class="chev" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg></button>
        <div class="faq-a"><div class="faq-a-inner">Berechtigte Frage. Deshalb gehört Dokumentation zu jedem Projekt: Alles läuft in Ihrem System, ist nachvollziehbar aufgebaut und gehört Ihnen — kein Lock-in, keine Black-Box. Sie sind nie davon abhängig, dass ausgerechnet ich verfügbar bin.</div></div>
      </div>
      <div class="faq-item">
        <button class="faq-q" aria-expanded="false"><span>Wie lange dauert die Umsetzung?</span><svg class="chev" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg></button>
        <div class="faq-a"><div class="faq-a-inner">5–6 Wochen in klar getakteten Phasen. Am laufenden Betrieb ändert sich währenddessen nichts.</div></div>
      </div>
      <div class="faq-item">
        <button class="faq-q" aria-expanded="false"><span>Was kostet das?</span><svg class="chev" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg></button>
        <div class="faq-a"><div class="faq-a-inner">Hängt vom Umfang ab — genau das klären wir in der kostenlosen Analyse und im Audit. Sie bekommen einen Festpreis, bevor etwas startet. Keine offene Rechnung nach Stunden.</div></div>
      </div>
    </div>
    <p class="center reveal" style="margin-top:34px"><a href="#buchung" class="textlink">Offene Frage? Klären wir im 30-Min-Gespräch →</a></p>
  </div>
</section>

<!-- ======================= 12 · FINALER CTA + BUCHUNG ======================= -->
<section class="section bg-tint booking" id="buchung">
  <div class="container">
    <div class="section-head center reveal" style="margin-inline:auto">
      <h2>45 Minuten, die Ihrem Team Stunden zurückgeben.</h2>
      <p class="subhead">Kostenlose Automatisierungs-Analyse. Kein Verkaufsgespräch. Sie gehen mit Ihren 3 größten Zeitfressern raus — versprochen.</p>
    </div>
    <p class="reveal" style="max-width:680px;margin:0 auto;color:var(--body)">Wir schauen gemeinsam auf Ihre Situation: Welche Anfragen kommen am häufigsten, wer bearbeitet sie, was kostet das an Zeit. Am Ende wissen Sie, was sich strukturieren und automatisieren lässt — und was es bringt. Ob Sie danach mit mir arbeiten, entscheiden Sie.</p>

    <div class="takeaway reveal">
      <div class="takeaway-label">Das nehmen Sie aus dem Termin mit — auch ohne Zusammenarbeit:</div>
      <ul>
        <li><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>Eine schriftliche Liste Ihrer 3 größten Zeitfresser</li>
        <li><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>Eine grobe Einschätzung, wie viel Zeit realistisch zurückzuholen ist</li>
        <li><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>Klarheit, ob sich der nächste Schritt für Sie überhaupt lohnt</li>
      </ul>
    </div>

    <!-- zcal Inline-Kalender — embed.js wird in app/page.tsx via <Script> geladen.
         Der Link im Widget ist der Fallback, falls das Script/JS nicht lädt. -->
    <div class="cal-embed-wrap reveal" role="region" aria-label="Online-Terminkalender — kostenlose Analyse buchen">
      <div class="zcal-inline-widget"><a href="https://zcal.co/i/1v-apJ3U">Automatisierungs-Analyse — Termin auswählen</a></div>
      <p class="cal-fallback-note">Kalender lädt nicht? <a href="https://zcal.co/i/1v-apJ3U" target="_blank" rel="noopener">Termin direkt buchen →</a></p>
    </div>

    <div class="reassure reveal">
      <span><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>Keine Vorbereitung nötig</span>
      <span><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>Kein Verkaufsdruck</span>
      <span><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>Konkrete Erkenntnisse garantiert</span>
    </div>
    <p class="booking-alt center reveal">Noch nicht bereit für ein Gespräch? <a href="/prozess-check" class="textlink">Starten Sie mit dem 4-Minuten-Prozess-Check →</a></p>
  </div>
</section>

</main>

<!-- ======================= FOOTER ======================= -->
<footer class="footer">
  <div class="container">
    <div class="footer-grid">
      <div>
        <a href="#top" class="brand">
          <svg class="mark" viewBox="179 315 665 393" aria-hidden="true"><g transform="translate(215.04,647.03) scale(0.192894,-0.192894)"><path d="M1251 3Q1251 -12 1249.0 -17.0Q1247 -22 1241 -22Q1229 -22 1198.0 -6.5Q1167 9 1128.5 30.5Q1090 52 1054.0 67.5Q1018 83 997 83Q987 83 964.0 67.5Q941 52 904.5 31.5Q868 11 816.5 -4.5Q765 -20 697 -20Q555 -20 437.0 30.0Q319 80 233.5 171.5Q148 263 101.0 388.5Q54 514 54 665Q54 835 104.5 973.5Q155 1112 248.5 1212.0Q342 1312 471.0 1366.0Q600 1420 757 1420Q840 1420 895.5 1398.5Q951 1377 983.0 1355.0Q1015 1333 1024 1333Q1042 1333 1073.5 1354.5Q1105 1376 1135.0 1397.5Q1165 1419 1178 1419Q1181 1419 1183.0 1416.5Q1185 1414 1187 1402L1260 964Q1262 958 1261.5 955.0Q1261 952 1258 950Q1256 949 1253.0 950.0Q1250 951 1246 956Q1183 1118 1105.5 1216.0Q1028 1314 942.0 1358.5Q856 1403 763 1403Q643 1403 552.0 1326.5Q461 1250 409.5 1098.5Q358 947 358 719Q358 499 415.5 343.0Q473 187 568.0 104.0Q663 21 776 21Q808 21 843.5 31.5Q879 42 910.5 61.0Q942 80 962.0 107.0Q982 134 982 166V558Q982 570 972.5 576.5Q963 583 942 585L830 598Q823 599 820.0 601.0Q817 603 817 605Q817 608 819.5 610.0Q822 612 827 612H1339Q1344 612 1346.5 610.0Q1349 608 1349 605Q1349 603 1346.0 601.0Q1343 599 1336 598L1278 585Q1264 582 1257.5 576.0Q1251 570 1251 558Z" transform="translate(-54.0,0)" fill="#FAF7F1"/><rect x="1520.0" y="-210.0" width="150.0" height="1820.0" fill="#D49A2A"/><path d="M1232 870Q1232 735 1169.0 635.0Q1106 535 995.0 480.5Q884 426 738 426Q626 426 545.0 451.5Q464 477 397 527L401 542Q447 510 488.5 491.0Q530 472 570.0 464.0Q610 456 649 456Q731 456 798.0 505.0Q865 554 904.5 648.0Q944 742 944 876Q944 1038 895.5 1151.0Q847 1264 763.0 1322.5Q679 1381 573 1381H493V56Q493 44 502.0 37.5Q511 31 530 27L613 14Q618 13 620.5 11.5Q623 10 623 7Q623 4 621.0 2.0Q619 0 614 0H78Q73 0 70.5 2.0Q68 4 68 7Q68 12 79 14L163 28Q181 31 189.5 37.5Q198 44 198 54V1341Q198 1354 189.5 1362.0Q181 1370 164 1372L77 1386Q68 1388 68 1393Q68 1397 70.0 1398.5Q72 1400 77 1400H573Q770 1400 918.0 1334.0Q1066 1268 1149.0 1148.5Q1232 1029 1232 870Z" transform="translate(1847.0,0)" fill="#FAF7F1"/></g></svg>
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
          <li><a href="mailto:tim@goebel-partner.de">tim@goebel-partner.de</a></li>
          <li><a href="tel:+491726932222">0172 - 693 22 22</a></li>
          <li><a href="/impressum">Impressum</a></li>
          <li><a href="/datenschutz">Datenschutz</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© <span id="year"></span> Goebel &amp; Partner Consulting</span>
      <span>DSGVO-konform · EU-Hosting · AVV · <a href="#" class="js-cookie-settings">Cookie-Einstellungen</a></span>
    </div>
  </div>
</footer>

<!-- ======================= STICKY MOBILE CTA ======================= -->
<div class="mobile-cta">
  <a href="#buchung" class="btn btn-primary btn-block">Kostenlose Analyse sichern <span class="arrow">→</span></a>
</div>
`
