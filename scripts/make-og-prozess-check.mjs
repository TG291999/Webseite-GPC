import sharp from "sharp"
import { mkdirSync } from "node:fs"

/**
 * Eigene Vorschaukarte für /prozess-check.
 *
 * Ohne sie erbt die Seite die Karte der Startseite — wer einen Link zum
 * Prozess-Check anklickt, sähe dann eine Karte über etwas anderes. Bildsprache
 * und Palette bleiben identisch zu make-og.mjs, nur das Motiv wechselt: statt
 * der drei Säulen die Rechnung, um die es im Check geht.
 *
 *   node scripts/make-og-prozess-check.mjs
 */

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#FAF7F1"/>
  <rect x="0" y="0" width="1200" height="10" fill="#16304E"/>

  <!-- Eyebrow + Amber-Akzent -->
  <text x="80" y="150" font-family="Helvetica, Arial, sans-serif" font-size="24" font-weight="700" letter-spacing="4" fill="#6B7785">PROZESS-CHECK FÜR HAUSVERWALTUNGEN</text>
  <rect x="82" y="168" width="58" height="4" rx="2" fill="#C99A4E"/>

  <!-- Headline -->
  <text x="80" y="262" font-family="Helvetica, Arial, sans-serif" font-size="52" font-weight="800" fill="#15273F">Was kostet Sie ein einziger</text>
  <text x="80" y="326" font-family="Helvetica, Arial, sans-serif" font-size="52" font-weight="800" fill="#15273F">Routineprozess <tspan fill="#2C5896">im Jahr?</tspan></text>

  <!-- Subline -->
  <text x="80" y="404" font-family="Helvetica, Arial, sans-serif" font-size="28" font-weight="500" fill="#3A4654">Acht Fragen zu einem Ablauf, den Sie</text>
  <text x="80" y="442" font-family="Helvetica, Arial, sans-serif" font-size="28" font-weight="500" fill="#3A4654">jede Woche haben. Ergebnis sofort.</text>

  <!-- Meta-Zeile -->
  <text x="80" y="508" font-family="Helvetica, Arial, sans-serif" font-size="22" font-weight="600" fill="#6B7785">4 Minuten · kostenlos · keine Registrierung</text>

  <!-- Domain -->
  <text x="80" y="560" font-family="Helvetica, Arial, sans-serif" font-size="26" font-weight="700" fill="#2C5896">www.goebel-partner.de</text>

  <!-- Rechnungs-Motiv (Karte) -->
  <rect x="770" y="150" width="350" height="330" rx="24" fill="#FFFFFF" stroke="#E7E1D6" stroke-width="2"/>

  <text x="810" y="196" font-family="Helvetica, Arial, sans-serif" font-size="17" font-weight="700" letter-spacing="2" fill="#6B7785">IHRE RECHNUNG</text>
  <line x1="810" y1="214" x2="1080" y2="214" stroke="#E2E8F0" stroke-width="2"/>

  <!-- Posten -->
  <rect x="810" y="238" width="128" height="11" rx="5" fill="#E2E8F0"/>
  <rect x="1006" y="238" width="74" height="11" rx="5" fill="#DDEAF8"/>
  <rect x="810" y="278" width="152" height="11" rx="5" fill="#E2E8F0"/>
  <rect x="1020" y="278" width="60" height="11" rx="5" fill="#DDEAF8"/>
  <rect x="810" y="318" width="110" height="11" rx="5" fill="#E2E8F0"/>
  <rect x="1014" y="318" width="66" height="11" rx="5" fill="#DDEAF8"/>

  <line x1="810" y1="358" x2="1080" y2="358" stroke="#15273F" stroke-width="2"/>

  <!-- Summe -->
  <text x="810" y="404" font-family="Helvetica, Arial, sans-serif" font-size="18" font-weight="600" fill="#6B7785">Gebundene Arbeitszeit</text>
  <text x="1080" y="446" text-anchor="end" font-family="Helvetica, Arial, sans-serif" font-size="40" font-weight="800" fill="#2C5896">? €</text>
</svg>`

mkdirSync("public", { recursive: true })
await sharp(Buffer.from(svg)).png().toFile("public/og-prozess-check.png")
console.log("og-prozess-check.png geschrieben")
