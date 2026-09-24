---
name: Goebel & Partner Consulting
description: Berater-Standard für Hausverwaltungen – Weiß, Navy-Tinte, genau ein Handlungsblau, eine Schrift.
colors:
  accent: "#276AE8"
  accent-hover: "#1F5AD0"
  accent-ink: "#1F56C4"
  accent-soft: "rgba(39,106,232,.09)"
  ink: "#0F1E33"
  ink-hover: "#1B3050"
  body: "#3B4658"
  muted: "#5A6577"
  bg: "#FFFFFF"
  surface: "#F3F5F8"
  surface-2: "#E9EDF2"
  on-ink-body: "#B9C4D6"
  line: "rgba(15,30,51,.10)"
  line-strong: "rgba(15,30,51,.20)"
  line-on-ink: "rgba(255,255,255,.14)"
  danger: "#B42318"
typography:
  display:
    fontFamily: "Wix Madefor Text, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(2.7rem, 5.4vw, 5.4rem)"
    fontWeight: 700
    lineHeight: 1.02
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Wix Madefor Text, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(2rem, 3.6vw, 3.25rem)"
    fontWeight: 700
    lineHeight: 1.08
    letterSpacing: "-0.028em"
  numeral:
    fontFamily: "Wix Madefor Text, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(2.4rem, 3.6vw, 3.2rem)"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "-0.04em"
    fontFeature: "tnum"
  quote:
    fontFamily: "Wix Madefor Text, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.5rem, 2.7vw, 2.35rem)"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Wix Madefor Text, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.18rem, 1.5vw, 1.35rem)"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "-0.012em"
  lead:
    fontFamily: "Wix Madefor Text, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.1rem, 1.45vw, 1.3rem)"
    fontWeight: 400
    lineHeight: 1.5
  body:
    fontFamily: "Wix Madefor Text, Helvetica Neue, Arial, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Wix Madefor Text, Helvetica Neue, Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: 600
    lineHeight: 1.1
  fine:
    fontFamily: "Wix Madefor Text, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.92rem"
    fontWeight: 400
    lineHeight: 1.55
rounded:
  sm: "10px"
  md: "16px"
  lg: "22px"
  pill: "999px"
spacing:
  gutter: "clamp(20px, 2.6vw, 44px)"
  section: "clamp(88px, 10vw, 152px)"
  head: "clamp(44px, 5.5vw, 72px)"
  columns: "clamp(28px, 4vw, 56px)"
  split: "clamp(36px, 6vw, 96px)"
  row: "24px"
  maxw: "1320px"
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.bg}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: "14px 24px"
    height: "52px"
  button-primary-hover:
    backgroundColor: "{colors.accent-hover}"
  button-hero:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.bg}"
    rounded: "{rounded.sm}"
    padding: "16px 22px"
    height: "56px"
  button-ink:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.bg}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: "12px 26px"
    height: "46px"
  button-ink-hover:
    backgroundColor: "{colors.ink-hover}"
  button-quiet:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    padding: "14px 24px"
    height: "52px"
  button-quiet-hover:
    backgroundColor: "{colors.surface}"
  link:
    textColor: "{colors.accent-ink}"
    typography: "{typography.label}"
    height: "44px"
  nav:
    backgroundColor: "{colors.bg}"
    textColor: "{colors.ink}"
    height: "84px"
  panel-surface:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.lg}"
    padding: "clamp(26px, 3vw, 40px)"
  panel-white:
    backgroundColor: "{colors.bg}"
    rounded: "{rounded.lg}"
    padding: "clamp(26px, 3.2vw, 44px)"
  panel-ink:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.bg}"
    rounded: "{rounded.lg}"
    padding: "clamp(26px, 3vw, 40px)"
  section-ink:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-ink-body}"
  badge-trust:
    backgroundColor: "{colors.bg}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "10px 16px"
  badge-accent:
    backgroundColor: "{colors.accent-soft}"
    textColor: "{colors.accent-ink}"
    rounded: "{rounded.pill}"
    padding: "5px 11px"
  segmented:
    backgroundColor: "{colors.surface-2}"
    textColor: "{colors.body}"
    padding: "4px"
  segmented-selected:
    backgroundColor: "{colors.bg}"
    textColor: "{colors.ink}"
---

# Design System: Goebel & Partner Consulting

## Overview

**Creative North Star: "Das Beratungsgespräch"**

Die Seite verhält sich wie ein Gespräch mit einem Berater, den man sieht: eine klare Aussage, ein echtes Gesicht, ein Weg zum Termin. Das System ist bewusst Kategorie-Standard – reines Weiß, Tinte in Navy, hellgraue Flächen, ein einziges Handlungsblau – und gewinnt seine Seriosität aus handwerklicher Genauigkeit statt aus Effekten. Wer zwischen zwei Terminen am Handy prüft, ob hier jemand seriös ist, soll nichts entziffern müssen.

Die Dichte ist ruhig: ein Gedanke pro Abschnitt, große Abstände zwischen den Abschnitten, Text in Zeilen von höchstens 64 Zeichen. Weiße und hellgraue Abschnitte wechseln sich ab, ein einziger Abschnitt steht in Navy und trägt die Methode. Inhalte in drei Spalten liegen unter Linien, nicht in Karten. Eine Schrift trägt alles; die Hierarchie entsteht über Gewicht, Größe und enge Laufweite.

Bewusst abgelehnt (vom Nutzer gewählt gegen die frühere „Akte“-Welt): Kapitel-Kicker und Mono-Beschriftungen, Papierton, Bernstein-Akzent, Karten-Raster als Seitengerüst.

**Key Characteristics:**
- Weiß als Grund, Navy als Tinte, genau ein Blau für Handlung.
- Eine Schrift (Wix Madefor Text), fett und eng in Überschriften, ruhig im Text.
- Flächen mit großem Radius, Knöpfe mit kleinem.
- Linien statt Karten: Drei-Spalten-Reihen unter einer 2px-Navy-Linie.
- Häkchen als einziges Icon-Motiv, dazu ein gezeichneter Pfeil in Handlungen.
- Flach; ein einziger weicher Schatten für eingebettete, bedienbare Objekte.

## Colors

Kühles, fast farbloses Neutral mit Navy als Tinte und einem einzelnen, gesättigten Blau, das nur dort erscheint, wo man klicken kann oder etwas erledigt ist.

### Primary
- **Handlungsblau** (accent): Füllung aller Termin-Knöpfe, Häkchen in Listen, Fokusring, Caret, Füllung der Schieberegler, erreichte Schritte und die Freigabe-Stufe in den Demonstrationen. Weiß auf Blau erreicht etwa 4,9:1.
- **Handlungsblau gedrückt** (accent-hover): Hover-Zustand der blauen Knöpfe.
- **Linkblau** (accent-ink): Textlinks und Link-Hover in der Navigation; etwas dunkler als das Handlungsblau, damit Fließtext-Links auf Weiß sicher lesbar bleiben.
- **Blauhauch** (accent-soft): Hintergrund für die kleine Hinweis-Pille im Ablauf, den geöffneten FAQ-Knopf und den erledigten Freigabe-Zustand.

### Neutral
- **Navy-Tinte** (ink): Alle Überschriften, Wortmarke, Navigation, die Termin-Taste in der Kopfzeile, der Methoden-Abschnitt, die Fußzeile und die „Mit mir“-Spalte im Vergleich.
- **Navy gehoben** (ink-hover): Hover der Navy-Taste.
- **Schiefer-Text** (body): Fließtext auf Weiß und Grau.
- **Grauschiefer** (muted): Bildunterschriften, Kleingedrucktes, Quellenangaben, Gegenlisten („Passt nicht“).
- **Reinweiß** (bg): Seitengrund, Kopfzeile, Paneele auf grauen Abschnitten.
- **Nebelgrau** (surface): Abschnittsgrund im Wechsel mit Weiß, Porträt-Paneel, Paneele auf weißen Abschnitten.
- **Nebelgrau tief** (surface-2): Spur der Schieberegler, Grund des Segment-Umschalters.
- **Stahlblau-Grau** (on-ink-body): Fließtext auf Navy.
- **Linie / Linie kräftig / Linie auf Navy** (line, line-strong, line-on-ink): Trennlinien in Tabellen, FAQ, Kopfzeile nach dem Scrollen; `line-strong` für Umrandungen stiller Knöpfe und FAQ-Kanten.
- **Warnrot** (danger): nur Fehlermeldungen in Formularen (Prozess-Check).

### Named Rules
**The Ein-Blau-Regel.** Blau heißt „hier handeln“ oder „das ist erledigt“: Knöpfe, Links, Häkchen, Fokus, Fortschritt und Freigabe. Überschriften, Zahlen, Punkte und Schmuck bleiben Navy oder Grau.

**The Navy-Anker-Regel.** Navy als Fläche gibt es genau einmal als Inhaltsabschnitt (Methode) und einmal als Fußzeile. Innerhalb heller Abschnitte darf Navy nur die positive Seite eines Vergleichs tragen.

**The Kein-Schwarz-Regel.** Tinte ist immer Navy (ink), nie #000.

## Typography

**Display Font:** Wix Madefor Text (mit Helvetica Neue, Arial)
**Body Font:** Wix Madefor Text (dieselbe Familie, Schnitte 400/500/600/700)

**Character:** Eine moderne, freundliche Groteske, die in 700 mit negativer Laufweite kompakt und bestimmt wirkt und in 400 ruhig und gut lesbar bleibt. Keine zweite Familie, kein Mono, keine Kursive.

### Hierarchy
- **Display** (700, clamp 2.7–5.4rem, Zeilenhöhe 1.02, -0.03em): nur der Hero-Titel, auf dem Desktop dreizeilig gesetzt, am Handy fließend.
- **Headline** (700, clamp 2–3.25rem, 1.08, -0.028em): Abschnittsüberschriften, maximal 22ch breit, `text-wrap: balance`.
- **Numeral** (700, clamp 2.4–3.2rem, 1.0, -0.04em, tabellarische Ziffern): Stufen- und Schrittnummern über den Linien-Spalten; die Summe im Rechenbeispiel wächst bis 3.5rem.
- **Quote** (600, clamp 1.5–2.35rem, 1.3, -0.02em): das zentrierte Kundenzitat; kleinere Variante (600, bis 1.55rem) als Pullquote in „Über mich“.
- **Title** (700, clamp 1.18–1.35rem, 1.25, -0.012em): Spaltenüberschriften, FAQ-Fragen (bis 1.25rem), Paneel-Titel.
- **Lead** (400, clamp 1.1–1.3rem, 1.5): Unterzeile unter der Abschnittsüberschrift, max. 58ch.
- **Body** (400, 17px, 1.6): Fließtext, max. 64ch, `text-wrap: pretty`.
- **Label** (600, 1rem, 1.1): Knöpfe, Links, Navigation (500 in der Navigation).
- **Fine** (400, 0.88–0.95rem): Kleingedrucktes unter Knöpfen, Quellen, Bildunterschriften in muted.

### Named Rules
**The Eine-Stimme-Regel.** Eine Familie für alles. Hierarchie entsteht über Gewicht und Größe, nie über Versalien mit Sperrung, Mono-Schnitte oder eine Zierschrift.

**The Eng-oben-Regel.** Je größer die Zeile, desto enger die Laufweite: -0.012em bei Titeln bis -0.04em bei Ziffern. Fließtext bleibt ungesperrt.

## Layout

Zentrierter Container mit max. 1320px und fließendem Randabstand (gutter). Abschnitte haben einen vertikalen Innenabstand von clamp(88px, 10vw, 152px); die Kopfgruppe eines Abschnitts hält clamp(44px, 5.5vw, 72px) Abstand zum Inhalt.

Wiederkehrende Raster:
- **Hero:** zwei Spalten (Text ≈ 0.98fr, Porträt 1fr), Porträt oben bündig mit der H1; darunter über volle Breite eine Logoleiste in Graustufen unter einer feinen Linie.
- **Split:** Überschrift links, Text rechts (1.05fr / 0.95fr), Lücke clamp(36px, 6vw, 96px) – Problem, Kosten, Über mich, Kontrolle, FAQ.
- **Drei Spalten unter Linien:** Problem, Methode, „So arbeite ich“, Ablauf; Lücke clamp(28px, 4vw, 56px).
- **Zwei Paneele nebeneinander:** Vergleich „Heute / Mit mir“ und „Passt / Passt nicht“, Lücke 16–24px.
- **Klebende Spalte:** Porträt in „Über mich“ und der FAQ-Kopf bleiben bei 112px von oben stehen.

Abschnittsrhythmus: Weiß und Nebelgrau wechseln sich ab; die Methode unterbricht in Navy.

Responsiv: Ab 1080px abwärts werden alle Split-Raster einspaltig und nichts klebt mehr. Ab 900px abwärts klappt die Navigation in ein Menü, alle Drei-Spalten-Reihen stapeln sich, und eine feste Buchungsleiste erscheint unten (sie tritt zurück, sobald der Kalender im Bild ist). Ab 560px abwärts fließt der Hero-Titel, die Hero-Taste wird vollbreit, Logos verkleinern sich um 20%.

## Elevation & Depth

Flach. Tiefe entsteht durch den Tonwechsel zwischen Weiß, Nebelgrau und Navy, nicht durch Schatten. Genau ein weicher, zweistufiger Schatten hebt Objekte an, die man bedienen kann und die wie eingebettete Werkzeuge wirken: das Rechenbeispiel, der Demonstrations-Vorgang und der Buchungskalender.

### Shadow Vocabulary
- **Werkzeug-Schatten** (`box-shadow: 0 1px 2px rgba(15,30,51,.05), 0 12px 32px -14px rgba(15,30,51,.18)`): nur für bedienbare, eingebettete Objekte.
- **Segment-Schatten** (`box-shadow: 0 1px 3px rgba(15,30,51,.14)`): die gewählte Fläche im Vorher/Nachher-Umschalter.
- **Regler-Knopf** (`box-shadow: 0 0 0 1px line-strong, 0 2px 6px rgba(15,30,51,.2)`): Daumen der Schieberegler.

### Named Rules
**The Tonwechsel-Regel.** Ein Paneel kehrt den Ton seines Abschnitts um: auf Weiß liegt Nebelgrau, auf Nebelgrau liegt Weiß. Kein Rahmen, kein Schatten nötig.

**The Werkzeug-Schatten-Regel.** Schatten nur für Dinge, mit denen man etwas tut. Text-Paneele bleiben flach.

## Shapes

Zwei Radien-Familien, klar getrennt: große, weiche Ecken für Flächen (22px für Paneele, Porträts, Kalender; 16px für innere Flächen wie die Summe im Rechenbeispiel), kleine Ecken für Knöpfe (10px). Pillen (999px) nur für kleine Marken: Vertrauens-Badges, Hinweis-Pille, Chips in der Demo. Kreise für nummerierte Schritte und den FAQ-Plus. Der Segment-Umschalter nutzt verschachtelte 12px/9px.

Linien sind das zweite Formelement: 2px Navy als Kopf jeder Linien-Spalte, 1px `line` als Trenner in Listen und Tabellen, 1px `line-strong` an FAQ und Schrittlisten.

## Components

### Buttons
Ruhig, flach, eindeutig – eine Farbe pro Absicht.
- **Shape:** leicht gerundet (10px), Mindesthöhe 52px (Hero 56px, Kopfzeile 46px).
- **Primary:** Handlungsblau, weißer Text, 600, Padding 14px 24px; führt immer zur kostenlosen Analyse. Trägt meist den gezeichneten Pfeil.
- **Ink:** Navy-Taste, nur in der Kopfzeile („Kostenlose Analyse“), damit die Kopfzeile das Blau des Hero nicht doppelt.
- **Hover / Focus:** Farbe dunkelt ab (0.18s), der Pfeil rückt 3px nach rechts, beim Drücken sinkt der Knopf 1px. Fokus: 2px Handlungsblau, 3px Abstand.
- **Quiet:** transparent mit `line-strong`-Rand, Hover Nebelgrau – nur für Neben- und Zurücksetz-Aktionen (Zurücksetzen in der Demonstration).

### Textlinks
- Linkblau, 600, Mindesthöhe 44px, Unterstreichung erst im Hover (Abstand 0.2em). Nebenwege (Prozess-Check) sind Textlinks mit Pfeil, nie zweite Knöpfe.

### Chips / Badges
- **Vertrauens-Badge:** weiße Pille auf Grau, Navy-Text 600, blaues Häkchen davor.
- **Hinweis-Pille:** Blauhauch mit Linkblau, 0.8rem, neben einer Schrittüberschrift.

### Paneele
- **Corner Style:** 22px.
- **Background:** nach der Tonwechsel-Regel Weiß oder Nebelgrau; Navy nur für die positive Vergleichsspalte.
- **Shadow Strategy:** flach, außer Werkzeuge (siehe Elevation).
- **Border:** keiner; einzige Ausnahme ist die negative Spalte „Passt nicht“ mit innerer 1px-`line-strong`-Kontur auf transparentem Grund.
- **Internal Padding:** clamp(26px, 3vw, 40px) bis clamp(28px, 3.2vw, 44px).

### Navigation
- Weiße, klebende Kopfzeile, 84px hoch, drei Spalten: Wortmarke links (700, bis 1.9rem), vier Links mittig (Navy 500, Hover Linkblau), Navy-Taste rechts. Die untere Linie erscheint erst nach 8px Scroll. Unter 900px: Menü-Knopf 46px mit Rand, ausklappende Liste mit Trennlinien und blauer Termin-Taste.

### Linien-Spalte (Signatur)
Drei gleich breite Spalten, jede mit 2px-Navy-Linie oben, 24px Luft, optional einer großen Ziffer (Numeral), dann Titel und Text. Ersetzt jedes Karten-Raster. Auf Navy wird die Linie zu `line-on-ink` und die Ziffer weiß.

### Häkchen-Liste
Blaues Häkchen (Strich 2.2, 16–19px) vor jeder positiven Aussage; ein grauer Strich (Dash) vor jeder negativen oder „heute“-Aussage. Auf Navy wird das Häkchen weiß.

### FAQ
Akkordeon zwischen `line-strong`-Linien, Frage als Title in Navy, rechts ein 32px-Kreis mit Plus auf Nebelgrau, der sich beim Öffnen um 45° dreht und Blauhauch annimmt. Öffnen 0.3s, Schließen 0.22s auf `--ease`.

### Bewegung
Eine Kurve für alles Weiche: `cubic-bezier(.22,1,.36,1)`. Farbwechsel 0.15–0.2s mit ease, Einblendungen 0.3–0.35s mit 6–8px Weg. Bei `prefers-reduced-motion` entfallen Scroll-Glätten, Akkordeon- und Demo-Animationen.

## Do's and Don'ts

### Do:
- **Do** jede Termin-Handlung als blaue Taste (10px Radius, ≥52px hoch) mit gezeichnetem Pfeil setzen.
- **Do** Überschriften in Navy 700 mit negativer Laufweite setzen und Fließtext auf 64ch begrenzen.
- **Do** Inhalte in drei Spalten unter eine 2px-Navy-Linie legen statt in Karten.
- **Do** Paneele im Gegenton ihres Abschnitts halten (Grau auf Weiß, Weiß auf Grau) mit 22px Radius.
- **Do** positive Aussagen mit dem blauen Häkchen, negative mit dem grauen Strich markieren.
- **Do** Tippflächen von mindestens 44px und den sichtbaren 2px-Fokusring erhalten; `prefers-contrast: more` verstärkt Linien und Grautöne.
- **Do** Logos in Graustufen (Deckkraft ~0.72, multiply) zeigen.

### Don't:
- **Don't** Blau für Überschriften, Nummern, Zierpunkte oder Flächen verwenden.
- **Don't** Kicker, Eyebrows oder Mono-Beschriftungen über Überschriften setzen.
- **Don't** Versalien mit Sperrung, Kursive oder eine zweite Schriftfamilie einführen.
- **Don't** Bernstein, Papierton oder eine zweite Akzentfarbe zurückholen.
- **Don't** Knöpfe als Pille oder mit großem Radius formen; Pillen gehören Badges.
- **Don't** Karten-Raster mit Icons als Seitengerüst bauen; Icons sind Häkchen, Strich und Pfeil.
- **Don't** Schatten auf reine Text-Paneele legen.
- **Don't** reines Schwarz für Text oder Flächen einsetzen.
