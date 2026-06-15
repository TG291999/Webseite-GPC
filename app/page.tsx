import type { Metadata } from "next"
import { HOME_HTML } from "./home-content"
import { HomeInteractions } from "./home-interactions"

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
      mainEntity: [
        {
          "@type": "Question",
          name: "Müssen wir unsere Software wechseln?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Nein — das ist der Kern. Ich baue die Automatisierung in Ihr bestehendes System. Kein Datenumzug, keine neue Oberfläche, keine Migration.",
          },
        },
        {
          "@type": "Question",
          name: "Merken unsere Mieter, dass eine KI antwortet?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Nein, weil keine KI ungeprüft antwortet. Die KI erstellt nur Entwürfe; Ihr Mitarbeiter gibt frei. Die Antwort kommt wie immer von einem Menschen aus Ihrem Haus.",
          },
        },
        {
          "@type": "Question",
          name: "Wie steht es um DSGVO und Mieterdaten?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "DSGVO-konform mit EU-Hosting und Auftragsverarbeitungsvertrag. Der Datenfluss wird dokumentiert. Datenschutz ist bei Mieterdaten Pflicht, nicht Option.",
          },
        },
        {
          "@type": "Question",
          name: "Was, wenn ein Notfall reinkommt?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Notfälle haben eine klar definierte Weiterleitung an einen Menschen. Die Automatisierung übernimmt die Standardlast; bei allem, was Urteil braucht, ist sofort ein Mensch dran.",
          },
        },
        {
          "@type": "Question",
          name: "Warum nicht direkt mit KI starten?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Weil KI auf unklaren Prozessen nur das Chaos beschleunigt. Erst Struktur, dann Automatisierung, dann KI — genau dort, wo sie wirklich Wirkung zeigt.",
          },
        },
        {
          "@type": "Question",
          name: "Sie sind ein Einzelkämpfer — was, wenn Sie ausfallen?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Alles läuft in Ihrem System, ist nachvollziehbar dokumentiert und gehört Ihnen — kein Lock-in, keine Black-Box. Sie sind nie davon abhängig, dass ich verfügbar bin, um weiterarbeiten zu können.",
          },
        },
        {
          "@type": "Question",
          name: "Wie lange dauert die Umsetzung?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "5–6 Wochen in klar getakteten Phasen. Am laufenden Betrieb ändert sich währenddessen nichts.",
          },
        },
        {
          "@type": "Question",
          name: "Was kostet das?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Hängt vom Umfang ab — genau das klären wir in der kostenlosen Analyse und im Audit. Sie bekommen einen Festpreis, bevor etwas startet.",
          },
        },
      ],
    },
  ],
}

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div dangerouslySetInnerHTML={{ __html: HOME_HTML }} />
      <HomeInteractions />
    </>
  )
}
