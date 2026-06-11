import sharp from "sharp"
import { mkdirSync } from "node:fs"

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#FAF7F1"/>
  <rect x="0" y="0" width="1200" height="10" fill="#16304E"/>

  <!-- Eyebrow + Amber-Akzent -->
  <text x="80" y="150" font-family="Helvetica, Arial, sans-serif" font-size="24" font-weight="700" letter-spacing="4" fill="#6B7785">GOEBEL &amp; PARTNER CONSULTING</text>
  <rect x="82" y="168" width="58" height="4" rx="2" fill="#C99A4E"/>

  <!-- Headline -->
  <text x="80" y="262" font-family="Helvetica, Arial, sans-serif" font-size="56" font-weight="800" fill="#15273F">Die meisten starten mit KI.</text>
  <text x="80" y="330" font-family="Helvetica, Arial, sans-serif" font-size="56" font-weight="800" fill="#15273F">Ich starte mit <tspan fill="#2C5896">Struktur.</tspan></text>

  <!-- Subline -->
  <text x="80" y="408" font-family="Helvetica, Arial, sans-serif" font-size="28" font-weight="500" fill="#3A4654">Automatisierung für Hausverwaltungen —</text>
  <text x="80" y="446" font-family="Helvetica, Arial, sans-serif" font-size="28" font-weight="500" fill="#3A4654">ohne Systemwechsel.</text>

  <!-- Domain -->
  <text x="80" y="560" font-family="Helvetica, Arial, sans-serif" font-size="26" font-weight="700" fill="#2C5896">www.goebel-partner.de</text>

  <!-- 3-Säulen-Motiv (Karte) -->
  <rect x="770" y="150" width="350" height="330" rx="24" fill="#FFFFFF" stroke="#E7E1D6" stroke-width="2"/>
  <line x1="810" y1="415" x2="1080" y2="415" stroke="#E2E8F0" stroke-width="2"/>
  <rect x="812" y="330" width="58" height="85" rx="8" fill="#DDEAF8"/>
  <rect x="912" y="280" width="58" height="135" rx="8" fill="#749FDD"/>
  <rect x="1012" y="225" width="58" height="190" rx="8" fill="#2C5896"/>
  <line x1="841" y1="330" x2="941" y2="280" stroke="#15273F" stroke-width="2" stroke-dasharray="4 6" opacity="0.5"/>
  <line x1="941" y1="280" x2="1041" y2="225" stroke="#15273F" stroke-width="2" stroke-dasharray="4 6" opacity="0.5"/>
  <circle cx="841" cy="330" r="7" fill="#749FDD"/>
  <circle cx="941" cy="280" r="7" fill="#2C5896"/>
  <circle cx="1041" cy="225" r="7" fill="#15273F"/>
  <text x="841" y="452" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-size="18" font-weight="600" fill="#6B7785">Struktur</text>
  <text x="941" y="452" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-size="18" font-weight="600" fill="#6B7785">Tempo</text>
  <text x="1041" y="452" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-size="18" font-weight="600" fill="#6B7785">KI</text>
</svg>`

mkdirSync("public", { recursive: true })
await sharp(Buffer.from(svg)).png().toFile("public/og-image.png")
console.log("og-image.png geschrieben")
