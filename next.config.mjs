import { fileURLToPath } from "node:url"
import { dirname } from "node:path"

const __dirname = dirname(fileURLToPath(import.meta.url))

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Festen Projekt-Root setzen (verhindert die "multiple lockfiles"-Warnung)
  turbopack: { root: __dirname },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },

  // Digitale Visitenkarte: /tim liefert die statische Datei public/tim/index.html
  async rewrites() {
    return [{ source: "/tim", destination: "/tim/index.html" }]
  },

  // WICHTIG: Die vCard MUSS als text/vcard ausgeliefert werden, sonst öffnet iOS
  // den Kontakt nicht sauber. Dies ist das Vercel/Next-Äquivalent zu einer
  // .htaccess-Regel (Apache-Beispiel siehe Kommentar unten).
  async headers() {
    return [
      {
        source: "/tim-goebel.vcf",
        headers: [
          { key: "Content-Type", value: "text/vcard; charset=utf-8" },
          { key: "Content-Disposition", value: 'inline; filename="tim-goebel.vcf"' },
          { key: "Cache-Control", value: "public, max-age=3600" },
        ],
      },
    ]
  },
}

/*
  Falls die Seite je auf klassischem Apache-Hosting läuft (statt Vercel),
  stattdessen diese .htaccess-Regel im Web-Root verwenden:

  AddType text/vcard .vcf
  <Files "tim-goebel.vcf">
    Header set Content-Disposition "inline; filename=\"tim-goebel.vcf\""
  </Files>
*/

export default nextConfig
