import type { Metadata } from "next"
import Script from "next/script"
import { Header } from "@/components/site/header"
import { Footer } from "@/components/site/footer"
import { MobileCta } from "@/components/site/mobile-cta"
import { Hero } from "@/components/home/hero"
import { Problem } from "@/components/home/problem"
import { Kosten } from "@/components/home/kosten"
import { Methode } from "@/components/home/methode"
import { Loesung } from "@/components/home/loesung"
import { Beispiele } from "@/components/home/beispiele"
import { Kontrolle } from "@/components/home/kontrolle"
import { Ablauf } from "@/components/home/ablauf"
import { FuerWen } from "@/components/home/fuer-wen"
import { UeberMich } from "@/components/home/ueber-mich"
import { Faq } from "@/components/home/faq"
import { Buchung } from "@/components/home/buchung"
import { FAQ_ITEMS } from "@/components/home/faq-data"

export const metadata: Metadata = {
  alternates: { canonical: "/" },
}

/** Organization + FAQPage als strukturierte Daten (JSON-LD). */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: "Goebel & Partner Consulting",
      url: "https://www.goebel-partner.de/",
      email: "tim@goebel-partner.de",
      telephone: "+49 172 6932222",
      founder: { "@type": "Person", name: "Tim Goebel" },
      sameAs: ["https://www.linkedin.com/in/tim-goebel-gpc/"],
      address: {
        "@type": "PostalAddress",
        streetAddress: "Hilgenloh 19",
        postalCode: "44379",
        addressLocality: "Dortmund",
        addressCountry: "DE",
      },
      description:
        "Strukturierte Prozesse, Automatisierung und KI für Hausverwaltungen — innerhalb der bestehenden Software, ohne Systemwechsel.",
    },
    {
      "@type": "FAQPage",
      mainEntity: FAQ_ITEMS.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
}

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main id="hauptinhalt">
        <Hero />
        <Problem />
        <Kosten />
        <Methode />
        <Loesung />
        <Beispiele />
        <Kontrolle />
        <Ablauf />
        <FuerWen />
        <UeberMich />
        <Faq />
        <Buchung />
      </main>
      <Footer />
      <MobileCta />
      {/* zcal Inline-Kalender: lädt das Embed-Script, das .zcal-inline-widget rendert */}
      <Script src="https://static.zcal.co/embed/v1/embed.js" strategy="afterInteractive" />
    </>
  )
}
