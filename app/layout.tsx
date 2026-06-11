import type { Metadata, Viewport } from "next"
import { Inter, Source_Serif_4 } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-source-serif",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://www.goebel-partner.de"),
  title: "Automatisierung für Hausverwaltungen – ohne Systemwechsel | Goebel & Partner",
  description:
    "Wir geben Hausverwaltungen ihre Sachbearbeiter zurück — durch strukturierte Prozesse, Automatisierung und KI in Ihrer bestehenden Software. Jetzt kostenlose Analyse sichern.",
  keywords: [
    "Hausverwaltung Automatisierung",
    "Prozesse digitalisieren Hausverwaltung",
    "E-Mail-Flut Hausverwaltung",
    "KI Hausverwaltung ohne Systemwechsel",
    "Domus Automatisierung",
    "Immoware24 Automatisierung",
  ],
  authors: [{ name: "Tim Goebel" }],
  creator: "Tim Goebel",
  publisher: "Goebel & Partner Consulting",
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: "Goebel & Partner Consulting",
    url: "https://www.goebel-partner.de/",
    title: "Die meisten starten mit KI. Wir starten mit Struktur.",
    description:
      "Weniger E-Mail-Flut, weniger Telefon-Stress, entlastete Sachbearbeiter — ohne neues ERP und ohne IT-Projekt. Kostenlose 30-Minuten-Analyse für Hausverwaltungen mit 8–25 Mitarbeitern.",
    // TODO: OG-Bild unter /public/og-image.png ablegen (1200×630, eigenes Motiv in Markenfarben, kein Stockfoto).
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Goebel & Partner Consulting — Struktur, Automatisierung und KI für Hausverwaltungen",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Die meisten starten mit KI. Wir starten mit Struktur.",
    description:
      "Kostenlose 30-Minuten-Automatisierungs-Analyse für Hausverwaltungen — ohne Systemwechsel.",
    images: ["/og-image.png"],
  },
}

export const viewport: Viewport = {
  themeColor: "#FAF7F1",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="de"
      className={`${inter.variable} ${sourceSerif.variable}`}
      suppressHydrationWarning
      data-scroll-behavior="smooth"
    >
      <body>
        {/* Ohne JavaScript bleiben Reveal-Elemente sichtbar */}
        <noscript>
          <style>{`.reveal{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
