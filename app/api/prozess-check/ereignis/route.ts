import { NextResponse } from "next/server"

/**
 * Funnel-Ereignisse des Prozess-Checks.
 *
 * Warum es das braucht: Der gesamte Check läuft ohne URL-Wechsel im
 * Client-State (siehe app/prozess-check/check.tsx). Vercel Analytics und GA4
 * sehen deshalb genau einen Seitenaufruf — egal ob jemand bei Frage 2
 * aussteigt oder bis zur Auswertung durchläuft. Diese Route schließt die
 * Lücke zwischen "Seite geöffnet" und "Lead da".
 *
 * Erfasst wird ausschließlich pseudonym: eine Sitzungs-ID, die im Browser nur
 * im Arbeitsspeicher lebt (kein Cookie, kein localStorage), der erreichte
 * Schritt, die gewählte Antwortoption und Zeitmessungen. Ausdrücklich nicht:
 * IP-Adresse, E-Mail-Adresse, Name, Telefonnummer.
 *
 * Ziel 1 — immer aktiv: Vercel-Log, eine Zeile je Ereignis mit dem Präfix
 *   [pc-funnel]. Auswertbar über scripts/funnel-auswertung.mjs.
 *   Achtung: Vercel hält Runtime-Logs nur kurz vor (Hobby ~1 Stunde, Pro
 *   1–3 Tage). Für eine Auswertung Wochen später reicht das nicht.
 * Ziel 2 — optional, dauerhaft: Supabase. Aktiv, sobald FUNNEL_SUPABASE_URL
 *   und FUNNEL_SUPABASE_KEY gesetzt sind; ohne die beiden Variablen passiert
 *   schlicht nichts. Tabelle: supabase/prozess-check-events.sql
 */

export const runtime = "nodejs"

const MAX_TEXT = 120

const TYPEN = new Set([
  "aufruf",
  "schritt",
  "antwort",
  "zurueck",
  "betrieb_unvollstaendig",
  "betrieb",
  "mail_ungueltig",
  "mail_versuch",
  "mail_abgelehnt",
  "freigabe",
  "nachtrag",
  "stundensatz",
  "kalender_fallback",
  "verlassen",
])

const text = (wert: unknown) => (typeof wert === "string" ? wert.slice(0, MAX_TEXT) : "")
const nummer = (wert: unknown) =>
  typeof wert === "number" && Number.isFinite(wert) ? Math.round(wert) : null

/**
 * Schreibt zusätzlich dauerhaft weg — aber nur, wenn beide Variablen gesetzt
 * sind. Fehler bleiben bewusst folgenlos: Eine kaputte Messung darf niemals
 * den Check selbst stören.
 */
async function inSupabase(ereignis: Record<string, unknown>) {
  const basis = process.env.FUNNEL_SUPABASE_URL
  const schluessel = process.env.FUNNEL_SUPABASE_KEY
  if (!basis || !schluessel) return

  try {
    const antwort = await fetch(
      `${basis.replace(/\/$/, "")}/rest/v1/prozess_check_events`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          apikey: schluessel,
          Authorization: `Bearer ${schluessel}`,
          Prefer: "return=minimal",
        },
        body: JSON.stringify(ereignis),
      }
    )
    if (!antwort.ok) {
      console.error("[pc-funnel] Supabase abgelehnt:", antwort.status, await antwort.text())
    }
  } catch (fehler) {
    console.error("[pc-funnel] Supabase nicht erreichbar:", fehler)
  }
}

export async function POST(request: Request) {
  let roh: Record<string, unknown>
  try {
    roh = await request.json()
  } catch {
    return NextResponse.json({ ok: false, fehler: "Ungültige Anfrage" }, { status: 400 })
  }

  const typ = text(roh.typ)
  if (!TYPEN.has(typ)) {
    return NextResponse.json({ ok: false, fehler: "Unbekannter Ereignistyp" }, { status: 400 })
  }

  const sitzung = text(roh.sitzung)
  if (!sitzung) {
    return NextResponse.json({ ok: false, fehler: "Sitzung fehlt" }, { status: 400 })
  }

  /* Feste Feldliste statt Durchreichen: Was der Client zusätzlich schickt,
     fällt hier heraus und kann gar nicht erst im Log landen. */
  const ereignis = {
    sitzung,
    typ,
    schritt: nummer(roh.schritt),
    frage: text(roh.frage),
    frage_nr: nummer(roh.frage_nr),
    antwort: text(roh.antwort),
    antwort_text: text(roh.antwort_text),
    grund: text(roh.grund),
    zusatz: text(roh.zusatz),
    quelle: text(roh.quelle),
    kampagne: text(roh.kampagne),
    verweis: text(roh.verweis),
    geraet: text(roh.geraet),
    einheiten: text(roh.einheiten),
    mitarbeiter: text(roh.mitarbeiter),
    software: text(roh.software),
    ms_gesamt: nummer(roh.ms_gesamt),
    ms_frage: nummer(roh.ms_frage),
    zeitpunkt: new Date().toISOString(),
  }

  // Eine Zeile, ein Ereignis — damit es sich aus dem Vercel-Log zeilenweise
  // wieder einlesen lässt.
  console.log("[pc-funnel]", JSON.stringify(ereignis))

  await inSupabase(ereignis)

  // 204: sendBeacon wertet die Antwort ohnehin nicht aus.
  return new NextResponse(null, { status: 204 })
}
