import { NextResponse } from "next/server"
import { resolveMx } from "node:dns/promises"

/**
 * Stille Echtheitsprüfung der Lead-Adresse: existiert die Domain und kann sie
 * Mails empfangen (MX-Record)? Kein Ping an das Postfach selbst — nur DNS.
 *
 * Fail-open: Wenn DNS nicht antwortet (Timeout, Infrastruktur), lassen wir die
 * Adresse durch. Lieber ein zweifelhafter Lead als ein verlorener echter.
 */

const WEGWERF_DOMAINS = new Set([
  "mailinator.com",
  "trashmail.com",
  "trash-mail.com",
  "10minutemail.com",
  "temp-mail.org",
  "tempmail.de",
  "guerrillamail.com",
  "yopmail.com",
  "wegwerfmail.de",
  "wegwerfemail.de",
  "byom.de",
  "discard.email",
  "maildrop.cc",
])

const zeitlimit = (ms: number) =>
  new Promise<never>((_, ablehnen) => setTimeout(() => ablehnen(new Error("timeout")), ms))

export async function POST(request: Request) {
  let email = ""
  try {
    const daten = await request.json()
    email = typeof daten.email === "string" ? daten.email.trim().toLowerCase() : ""
  } catch {
    /* fällt unten in die Formatprüfung */
  }

  if (!/.+@.+\..+/.test(email)) {
    return NextResponse.json({ ok: false, grund: "format" })
  }

  const domain = email.split("@").pop() as string

  if (WEGWERF_DOMAINS.has(domain)) {
    return NextResponse.json({ ok: false, grund: "wegwerf" })
  }

  try {
    const mx = await Promise.race([resolveMx(domain), zeitlimit(3000)])
    if (!Array.isArray(mx) || mx.length === 0) {
      return NextResponse.json({ ok: false, grund: "domain" })
    }
    return NextResponse.json({ ok: true })
  } catch (fehler) {
    const code = (fehler as NodeJS.ErrnoException).code
    // Domain existiert nicht bzw. hat keine Mail-Einträge → ablehnen.
    if (code === "ENOTFOUND" || code === "ENODATA") {
      return NextResponse.json({ ok: false, grund: "domain" })
    }
    // Alles andere (Timeout, DNS-Störung): durchlassen.
    return NextResponse.json({ ok: true })
  }
}
