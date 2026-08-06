import { NextResponse } from "next/server"
import { Resend } from "resend"

/**
 * Nimmt die Prozess-Check-Leads entgegen (anlass: "freigabe" = E-Mail
 * eingegeben, "nachtrag" = Name/Telefon ergänzt) und stellt sie zu:
 *
 * 1. E-Mail an LEAD_EMPFAENGER via Resend — braucht die Umgebungsvariable
 *    RESEND_API_KEY (Vercel → Settings → Environment Variables). Optional
 *    RESEND_FROM mit verifizierter Absenderdomain, sonst Resend-Testabsender.
 * 2. Optional: Weiterleitung an einen Make.com-Webhook (MAKE_WEBHOOK_URL),
 *    z. B. für die Übergabe an Close.
 *
 * Ohne beides landet der Lead nur im Server-Log (Vercel → Logs).
 */

const LEAD_EMPFAENGER = "tim@goebel-partner.de"

const euro = (n: unknown) =>
  typeof n === "number" ? `${n.toLocaleString("de-DE")} €` : String(n ?? "—")

function leadText(d: Record<string, unknown>): string {
  return [
    `Bereich:              ${d.bereich_lang ?? "—"}`,
    `Arbeitszeit/Jahr:     ${d.stunden_jahr ?? "—"} Stunden`,
    `Entlastbar (40 %):    ${d.entlastung_stunden ?? "—"} Stunden`,
    `Gebundene Zeit:       ${euro(d.euro)} pro Jahr`,
    `Kapazität:            ~${d.einheiten_kapazitaet ?? "—"} Einheiten`,
    ``,
    `E-Mail:               ${d.email ?? "—"}`,
    `Name:                 ${d.name || "— (noch nicht angegeben)"}`,
    `Telefon:              ${d.telefon || "— (noch nicht angegeben)"}`,
    ``,
    `Einheiten:            ${d.einheiten ?? "—"}`,
    `Mitarbeitende:        ${d.mitarbeiter ?? "—"}`,
    `Software:             ${d.software || "—"}`,
    ``,
    `Stärke (Frage 1):     ${d.staerke ?? "—"}`,
    `Häufigkeit/Woche:     ${d.haeufigkeit ?? "—"}`,
    `Minuten/Vorgang:      ${d.dauer ?? "—"}`,
    `Beteiligte:           ${d.beteiligte ?? "—"}`,
    `Rückläufer:           ${d.nacharbeit ?? "—"}`,
    `Wunsch-Wegfall:       ${d.wunsch ?? "—"}`,
    ``,
    `Zeitpunkt:            ${d.zeitpunkt ?? "—"}`,
    `Anlass:               ${d.anlass ?? "—"}`,
  ].join("\n")
}

export async function POST(request: Request) {
  let daten: Record<string, unknown>
  try {
    daten = await request.json()
  } catch {
    return NextResponse.json({ ok: false, fehler: "Ungültige Anfrage" }, { status: 400 })
  }

  console.log("[prozess-check] Lead:", JSON.stringify(daten))

  const aufgaben: Promise<unknown>[] = []

  if (process.env.RESEND_API_KEY) {
    const resend = new Resend(process.env.RESEND_API_KEY)
    const istNachtrag = daten.anlass === "nachtrag"
    const betreff = istNachtrag
      ? `Prozess-Check: ${daten.name || daten.email} hat Kontaktdaten ergänzt`
      : `Neuer Prozess-Check-Lead: ${daten.email} · ${euro(daten.euro)}/Jahr (${daten.bereich_lang ?? "?"})`
    aufgaben.push(
      resend.emails.send({
        from: process.env.RESEND_FROM || "Prozess-Check <onboarding@resend.dev>",
        to: LEAD_EMPFAENGER,
        replyTo: typeof daten.email === "string" ? daten.email : undefined,
        subject: betreff,
        text: leadText(daten),
      })
    )
  }

  if (process.env.MAKE_WEBHOOK_URL) {
    aufgaben.push(
      fetch(process.env.MAKE_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(daten),
      })
    )
  }

  const ergebnisse = await Promise.allSettled(aufgaben)
  ergebnisse.forEach((e) => {
    if (e.status === "rejected") console.error("[prozess-check] Zustellung fehlgeschlagen:", e.reason)
  })

  return NextResponse.json({ ok: true })
}
