# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Inhaber und Geschäftsführer von Hausverwaltungen (Miet-, WEG- oder gemischte Verwaltung,
etwa 8–25 Mitarbeitende, am besten ab etwa 500 Einheiten). Sie stecken selbst im Tagesgeschäft,
ihr Team arbeitet am Limit, offene Stellen bleiben monatelang unbesetzt. Sie besuchen die Seite
meist zwischen Terminen, oft am Handy, und prüfen: Versteht der meinen Alltag, ist er seriös,
kostet mich das ein Risiko?

## Product Purpose

Goebel & Partner Consulting (Tim Goebel, Dortmund) gibt Hausverwaltungen Arbeitszeit zurück:
erst Struktur in Abläufe und Zuständigkeiten, dann Automatisierung in der vorhandenen Software,
erst danach KI dort, wo sie wirklich entlastet. Erfolg der Website: Der Inhaber bucht das
kostenlose 45-Minuten-Analysegespräch. Der 4-Minuten-Prozess-Check ist ein leiser Nebenweg
für alle, die noch nicht sprechen wollen.

## Positioning

Struktur und Prozesse vor Software. Tim kommt vor Ort ins Büro, arbeitet mit dem Team, schreibt
fest, was gilt, und nimmt die Leute an die Hand. Die bestehende Software bleibt (kein
Systemwechsel), ungenutzte Funktionen werden gehoben, KI ist Stufe III und immer mit Menschen in
der Freigabe. Differenzierer im Wettbewerb (Softwarehersteller, IT-Agenturen, Remote-Berater):
„der Einzige, der vor Ort ist“ und selbst aus der Branche kommt (Immobilienkaufmann, 8+ Jahre,
Gründer einer Hausverwaltungs-Software Immo One).

## Operating Context

Alltag der Zielgruppe: volle Postfächer, Telefon mitten in der Abrechnung, Schadensmeldungen,
Nebenkostenrückfragen, Rechnungseingang, Vertretungen, Wissen in Köpfen. Software im Markt:
Domus, Immoware24, GFAD, casavi, Karthago, Eigenlösungen. Ablauf mit Tim: kostenlose Analyse
(45 Min, Telefon/Video) → Quick-Win-Audit (1–2 Tage vor Ort, Umsetzungsplan mit Zahlen, Kosten
angerechnet) → Umsetzung und Schulung (4–6 Wochen, vor Ort, Handbuch, ohne Systemwechsel).
Terminbuchung über zcal (eingebettet), Prozess-Check unter /prozess-check.

## Capabilities and Constraints

- Texte und Inhalte der Startseite bleiben inhaltlich gleich; der Hero-Titel „Ich gebe Ihrer
  Verwaltung Zeit zurück.“ ist unantastbar. Anrede „Sie“, Absender „Ich“, kurze Sätze.
- Keine Preise auf der Seite, kein „Aktuell“-Block (bewusst, bis Referenzen vorliegen).
- Next.js App Router, React 19, eigenes CSS in `app/globals.css`, Deploy über Vercel.
- FAQ-Texte leben einmal in `components/home/faq-data.ts` (Seite und JSON-LD).
- Rechtsseiten, Cookie-Hinweis, Prozess-Check und /tim-Visitenkarte existieren und müssen weiter
  funktionieren.

## Brand Commitments

- Name „Goebel & Partner Consulting“, Wortmarke „Goebel & Partner“, Logozeichen G|P.
- Rentabilitätsgarantie: Umgesetzt wird nur, was sich im ersten Jahr rechnet.
- Daten bleiben wo immer möglich im Haus, DSGVO mit AVV.
- Mensch in der Freigabe: Keine KI antwortet ungeprüft.

## Evidence on Hand

- Porträt `public/images/tim-goebel-portrait.jpg`, Bühnenfoto `public/images/tim-goebel-speaker.jpg`.
- Bühnen-Logos: BuildinX, IHK zu Dortmund, Founder Fight Night, Wirtschaftsjunioren (`public/images/`).
- Ein anonymisiertes Zitat aus einem Erstgespräch (Geschäftsführer einer Hausverwaltung).
- Interaktives Rechenbeispiel (Modellrechnung, klar als solche gekennzeichnet) und zwei
  Vorher/Nachher-Demonstrationen typischer Vorgänge (als Demonstration gekennzeichnet).
- Fehlt bewusst: Kundennamen, Referenzen, Fallstudien, Kennzahlen echter Projekte. Nicht
  erfinden. Referenzen folgen später; das Design sieht einen Platz dafür vor.

## Product Principles

1. Erst verstehen, dann bauen: Struktur vor Automatisierung vor KI.
2. Vor Ort statt Folie: Glaubwürdigkeit entsteht aus Nähe und Branchenherkunft.
3. Ehrlich einordnen: sagen, für wen es nicht passt, und Modellrechnungen als solche zeigen.
4. Kein Risiko für den Inhaber: kostenloser Einstieg, Festpreis, Rentabilitätsgarantie.
5. Der Mensch entscheidet: Technik bereitet vor, Mitarbeitende geben frei.

## Accessibility & Inclusion

WCAG 2.1 AA. Zielgruppe oft 45+, liest am Handy zwischen Terminen: gut lesbare Größen,
starker Kontrast, große Tippflächen, `prefers-reduced-motion` respektieren, Inhalt ohne
JavaScript sichtbar.
