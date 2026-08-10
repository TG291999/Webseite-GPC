#!/usr/bin/env node

/**
 * Wertet die Funnel-Ereignisse des Prozess-Checks aus.
 *
 * Eingabe: ein Vercel-Log-Export (oder stdin). Jede relevante Zeile enthält
 * das Präfix [pc-funnel] gefolgt von einem JSON-Objekt; alles andere wird
 * ignoriert, der Rest des Logs darf also drinbleiben.
 *
 *   vercel logs <deployment-url> > logs.txt
 *   node scripts/funnel-auswertung.mjs logs.txt
 *
 * oder direkt:
 *
 *   vercel logs <deployment-url> | node scripts/funnel-auswertung.mjs
 *
 * Liegen die Ereignisse in Supabase (FUNNEL_SUPABASE_URL gesetzt), braucht es
 * dieses Skript nicht — dann lässt sich dieselbe Frage per SQL beantworten.
 */

import { readFileSync } from "node:fs"

const SCHRITT_NAME = {
  0: "Startseite gesehen",
  1: "F1 · Eigene Stärke",
  2: "F2 · Zeitfresser wählen",
  3: "F3 · Vorgänge pro Woche",
  4: "F4 · Dauer je Vorgang",
  5: "F5 · Beteiligte",
  6: "F6 · Rückläufer",
  7: "F7 · Was soll wegfallen",
  8: "F8 · Betriebsgrößen",
  9: "Ergebnis (Summe gesperrt)",
}

function einlesen(text) {
  const ereignisse = []
  for (const zeile of text.split("\n")) {
    const start = zeile.indexOf("[pc-funnel]")
    if (start === -1) continue
    const klammer = zeile.indexOf("{", start)
    if (klammer === -1) continue
    try {
      ereignisse.push(JSON.parse(zeile.slice(klammer)))
    } catch {
      /* abgeschnittene Zeile — überspringen */
    }
  }
  return ereignisse
}

function median(werte) {
  if (!werte.length) return 0
  const s = [...werte].sort((a, b) => a - b)
  const m = Math.floor(s.length / 2)
  return s.length % 2 ? s[m] : Math.round((s[m - 1] + s[m]) / 2)
}

const balken = (anteil, breite = 24) =>
  "█".repeat(Math.round(anteil * breite)).padEnd(breite, "·")

const prozent = (teil, ganz) => (ganz ? `${((teil / ganz) * 100).toFixed(1)} %` : "—")

function auswerten(ereignisse) {
  /* Nach Sitzung gruppieren. Eine Sitzung = ein Besuch der Seite; ein Reload
     erzeugt eine neue, weil die ID nur im Arbeitsspeicher lebt. */
  const sitzungen = new Map()
  for (const e of ereignisse) {
    if (!sitzungen.has(e.sitzung)) {
      sitzungen.set(e.sitzung, {
        maxSchritt: 0,
        antworten: {},
        quelle: "",
        geraet: "",
        verweis: "",
        freigabe: false,
        nachtrag: false,
        zurueck: 0,
        mailAbgelehnt: [],
        dauer: 0,
        zeiten: {},
      })
    }
    const s = sitzungen.get(e.sitzung)

    if (typeof e.schritt === "number") s.maxSchritt = Math.max(s.maxSchritt, e.schritt)
    if (typeof e.ms_gesamt === "number") s.dauer = Math.max(s.dauer, e.ms_gesamt)

    if (e.typ === "aufruf") {
      s.quelle = e.quelle || e.verweis || "direkt"
      s.geraet = e.geraet
      s.verweis = e.verweis
    }
    if (e.typ === "antwort") {
      s.antworten[e.frage] = e.antwort_text || e.antwort
      if (typeof e.ms_frage === "number") s.zeiten[e.frage_nr] = e.ms_frage
    }
    if (e.typ === "zurueck") s.zurueck += 1
    if (e.typ === "mail_abgelehnt") s.mailAbgelehnt.push(e.grund)
    if (e.typ === "freigabe") s.freigabe = true
    if (e.typ === "nachtrag") s.nachtrag = true
  }

  const alle = [...sitzungen.values()]
  const gesamt = alle.length
  if (!gesamt) {
    console.log("Keine [pc-funnel]-Ereignisse gefunden.")
    console.log("Prüfen: Ist der Log-Zeitraum abgedeckt? Vercel hält Runtime-Logs nur kurz vor.")
    return
  }

  console.log("")
  console.log("PROZESS-CHECK · TRICHTER")
  console.log("=".repeat(64))
  console.log(`${gesamt} Sitzungen ausgewertet, ${ereignisse.length} Ereignisse.`)
  console.log("")

  // --- Trichter je Schritt ---
  console.log("ERREICHT")
  console.log("-".repeat(64))
  let vorher = gesamt
  for (const schritt of Object.keys(SCHRITT_NAME).map(Number)) {
    const erreicht = alle.filter((s) => s.maxSchritt >= schritt).length
    const verloren = vorher - erreicht
    const name = SCHRITT_NAME[schritt].padEnd(28)
    const absprung =
      schritt > 0 && verloren > 0 ? `  ↓ ${verloren} weg (${prozent(verloren, vorher)})` : ""
    console.log(
      `${name} ${balken(erreicht / gesamt)} ${String(erreicht).padStart(4)}  ${prozent(erreicht, gesamt).padStart(7)}${absprung}`
    )
    vorher = erreicht
  }

  const amGate = alle.filter((s) => s.maxSchritt >= 9).length
  const freigaben = alle.filter((s) => s.freigabe).length
  const nachtraege = alle.filter((s) => s.nachtrag).length
  console.log("")
  console.log(
    `E-Mail eingegeben (Gate)     ${balken(freigaben / gesamt)} ${String(freigaben).padStart(4)}  ${prozent(freigaben, gesamt).padStart(7)}   Gate-Conversion: ${prozent(freigaben, amGate)}`
  )
  console.log(
    `Rückruf angefordert          ${balken(nachtraege / gesamt)} ${String(nachtraege).padStart(4)}  ${prozent(nachtraege, gesamt).padStart(7)}`
  )

  // --- Wo genau ist Schluss ---
  console.log("")
  console.log("ABBRUCHPUNKT (letzter erreichter Schritt)")
  console.log("-".repeat(64))
  const abbrueche = new Map()
  for (const s of alle) {
    if (s.freigabe) continue
    abbrueche.set(s.maxSchritt, (abbrueche.get(s.maxSchritt) ?? 0) + 1)
  }
  ;[...abbrueche.entries()]
    .sort((a, b) => b[1] - a[1])
    .forEach(([schritt, anzahl]) => {
      console.log(
        `${(SCHRITT_NAME[schritt] ?? `Schritt ${schritt}`).padEnd(28)} ${String(anzahl).padStart(4)}  ${prozent(anzahl, gesamt)}`
      )
    })

  // --- Welche Antwort korreliert mit Abbruch ---
  console.log("")
  console.log("ANTWORTEN · Verteilung und Weiterlaufquote")
  console.log("-".repeat(64))
  const fragen = new Map()
  for (const s of alle) {
    for (const [frage, wert] of Object.entries(s.antworten)) {
      if (!fragen.has(frage)) fragen.set(frage, new Map())
      const werte = fragen.get(frage)
      if (!werte.has(wert)) werte.set(wert, { anzahl: 0, weiter: 0 })
      const eintrag = werte.get(wert)
      eintrag.anzahl += 1
      if (s.freigabe) eintrag.weiter += 1
    }
  }
  for (const [frage, werte] of fragen) {
    console.log(`\n  ${frage}`)
    ;[...werte.entries()]
      .sort((a, b) => b[1].anzahl - a[1].anzahl)
      .forEach(([wert, { anzahl, weiter }]) => {
        console.log(
          `    ${String(wert).slice(0, 40).padEnd(42)} ${String(anzahl).padStart(4)}   bis zum Ende: ${prozent(weiter, anzahl)}`
        )
      })
  }

  // --- Zeitbedarf je Frage ---
  console.log("")
  console.log("BEDENKZEIT je Frage (Median)")
  console.log("-".repeat(64))
  const proFrage = new Map()
  for (const s of alle) {
    for (const [nr, ms] of Object.entries(s.zeiten)) {
      if (!proFrage.has(nr)) proFrage.set(nr, [])
      proFrage.get(nr).push(ms)
    }
  }
  ;[...proFrage.entries()]
    .sort((a, b) => Number(a[0]) - Number(b[0]))
    .forEach(([nr, werte]) => {
      const m = median(werte)
      const auffaellig = m > 25000 ? "   ← lange Bedenkzeit, Formulierung prüfen" : ""
      console.log(`  Frage ${nr}: ${(m / 1000).toFixed(1)} s  (n=${werte.length})${auffaellig}`)
    })

  // --- Herkunft und Gerät ---
  const zaehlen = (feld) => {
    const m = new Map()
    for (const s of alle) m.set(s[feld] || "—", (m.get(s[feld] || "—") ?? 0) + 1)
    return [...m.entries()].sort((a, b) => b[1] - a[1])
  }

  console.log("")
  console.log("HERKUNFT")
  console.log("-".repeat(64))
  for (const [quelle, anzahl] of zaehlen("quelle")) {
    const passend = alle.filter((s) => (s.quelle || "—") === quelle)
    const leads = passend.filter((s) => s.freigabe).length
    console.log(
      `  ${String(quelle).padEnd(30)} ${String(anzahl).padStart(4)}   Leads: ${leads} (${prozent(leads, anzahl)})`
    )
  }

  console.log("")
  console.log("GERÄT")
  console.log("-".repeat(64))
  for (const [geraet, anzahl] of zaehlen("geraet")) {
    const passend = alle.filter((s) => (s.geraet || "—") === geraet)
    const leads = passend.filter((s) => s.freigabe).length
    console.log(
      `  ${String(geraet).padEnd(30)} ${String(anzahl).padStart(4)}   Leads: ${leads} (${prozent(leads, anzahl)})`
    )
  }

  // --- Reibungssignale ---
  const mitZurueck = alle.filter((s) => s.zurueck > 0).length
  const abgelehnt = alle.flatMap((s) => s.mailAbgelehnt)
  console.log("")
  console.log("REIBUNG")
  console.log("-".repeat(64))
  console.log(`  Sitzungen mit Rücksprung      ${mitZurueck}  (${prozent(mitZurueck, gesamt)})`)
  console.log(`  Abgelehnte E-Mail-Adressen    ${abgelehnt.length}`)
  if (abgelehnt.length) {
    const gruende = new Map()
    for (const g of abgelehnt) gruende.set(g, (gruende.get(g) ?? 0) + 1)
    for (const [grund, anzahl] of gruende) console.log(`      ${grund}: ${anzahl}`)
  }
  const fertig = alle.filter((s) => s.freigabe).map((s) => s.dauer)
  if (fertig.length) {
    console.log(`  Median-Dauer bis Lead         ${(median(fertig) / 1000 / 60).toFixed(1)} Minuten`)
  }
  console.log("")
}

const datei = process.argv[2]
const text = datei ? readFileSync(datei, "utf8") : readFileSync(0, "utf8")
auswerten(einlesen(text))
