import type { Metadata } from "next"
import { ProzessCheck } from "./check"

const TITEL = "Was kostet Sie ein einziger Routineprozess im Jahr?"
const BESCHREIBUNG =
  "In vier Minuten sehen Sie, wie viel Arbeitszeit ein einzelner Routineprozess in Ihrer Verwaltung pro Jahr bindet. Acht Fragen, nachvollziehbare Rechnung, keine Registrierung."

/* Ohne eigenen openGraph-Block erbt diese Seite die Vorschaukarte der
   Startseite — geteilte Links zeigten dann Titel, Text und URL der Startseite
   statt des Checks. */
export const metadata: Metadata = {
  title: "Prozess-Check für Hausverwaltungen — was kostet Sie ein Routineprozess? | Goebel & Partner",
  description: BESCHREIBUNG,
  alternates: { canonical: "/prozess-check" },
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: "Goebel & Partner Consulting",
    url: "https://www.goebel-partner.de/prozess-check",
    title: TITEL,
    description: BESCHREIBUNG,
    images: [
      {
        url: "/og-prozess-check.png",
        width: 1200,
        height: 630,
        alt: "Prozess-Check für Hausverwaltungen — was kostet Sie ein einziger Routineprozess im Jahr?",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITEL,
    description: BESCHREIBUNG,
    images: ["/og-prozess-check.png"],
  },
}

export default function ProzessCheckPage() {
  return <ProzessCheck />
}
