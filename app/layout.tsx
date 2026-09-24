import type { Metadata, Viewport } from "next"
import { Fraunces, Wix_Madefor_Text } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { CookieConsent } from "@/components/cookie-consent"
import "./globals.css"

/*
 * Eine Schrift für alles: Wix Madefor Text, fett und eng in Überschriften,
 * ruhig im Text. Gewählt per Formabgleich mit dem freigegebenen Entwurf.
 */
const wix = Wix_Madefor_Text({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-wix",
  display: "swap",
})

/* Nur für den Schriftzug neben dem Monogramm: das Logo ist aus Fraunces gezeichnet. */
const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["600"],
  variable: "--font-brand",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://www.goebel-partner.de"),
  title: "Struktur und Automatisierung für Hausverwaltungen – vor Ort, ohne Systemwechsel | Goebel & Partner",
  description:
    "Ich bringe Struktur in Hausverwaltungen — vor Ort, mit Ihrem Team, in der Software, die Sie schon haben. Dann Automatisierung und KI. Kostenlose 45-Minuten-Analyse.",
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
    title: "Die meisten starten mit KI. Ich starte mit Struktur.",
    description:
      "Klare Abläufe, entlastete Sachbearbeiter, Wissen, das im Haus bleibt — vor Ort, in Ihrer Software, ohne IT-Projekt. Kostenlose 45-Minuten-Analyse für Hausverwaltungen.",
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
    title: "Die meisten starten mit KI. Ich starte mit Struktur.",
    description:
      "Kostenlose 45-Minuten-Automatisierungs-Analyse für Hausverwaltungen — ohne Systemwechsel.",
    images: ["/og-image.png"],
  },
}

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
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
      className={`${wix.variable} ${fraunces.variable}`}
      suppressHydrationWarning
      data-scroll-behavior="smooth"
    >
      <body>
        {children}
        <CookieConsent />
        <Analytics />
      </body>
    </html>
  )
}
