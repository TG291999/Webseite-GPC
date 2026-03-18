import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Impressum – Goebel & Partner Consulting",
  description: "Impressum und Anbieterkennzeichnung gemäß § 5 TMG.",
}

export default function ImpressumPage() {
  return (
    <>
      <Navigation />

      <main className="bg-white pt-32 pb-24">
        <div className="mx-auto max-w-[800px] px-6">

          {/* Page Header */}
          <div className="mb-14 border-b pb-10" style={{ borderColor: "#E5E7EB" }}>
            <p
              className="mb-3 text-xs font-semibold uppercase tracking-widest"
              style={{ color: "#B8963E" }}
            >
              Rechtliche Angaben
            </p>
            <h1
              className="font-serif text-4xl font-semibold leading-tight"
              style={{ color: "#1A1A1A" }}
            >
              Impressum
            </h1>
          </div>

          {/* Section: Angaben gemäß § 5 TMG */}
          <section className="mb-10">
            <h2
              className="font-serif text-xl font-semibold mb-4"
              style={{ color: "#1B5E3B" }}
            >
              Angaben gemäß § 5 TMG
            </h2>
            <p
              className="text-base leading-relaxed"
              style={{ color: "#374151" }}
            >
              Goebel &amp; Partner Consulting<br />
              Tim Goebel<br />
              Hilgenloh 19<br />
              44379 Dortmund<br />
              Deutschland
            </p>
          </section>

          <div
            className="my-8 h-px"
            style={{ backgroundColor: "#F3F4F6" }}
          />

          {/* Section: Kontakt */}
          <section className="mb-10">
            <h2
              className="font-serif text-xl font-semibold mb-4"
              style={{ color: "#1B5E3B" }}
            >
              Kontakt
            </h2>
            <p
              className="text-base leading-relaxed"
              style={{ color: "#374151" }}
            >
              E-Mail:{" "}
              <a
                href="mailto:info@goebel-partner.de"
                className="underline decoration-1 underline-offset-2 transition-colors hover:text-primary"
                style={{ color: "#1B5E3B" }}
              >
                info@goebel-partner.de
              </a>
              <br />
              Telefon: [Platzhalter]
            </p>
          </section>

          <div
            className="my-8 h-px"
            style={{ backgroundColor: "#F3F4F6" }}
          />

          {/* Section: Umsatzsteuer-ID */}
          <section className="mb-10">
            <h2
              className="font-serif text-xl font-semibold mb-4"
              style={{ color: "#1B5E3B" }}
            >
              Umsatzsteuer-ID
            </h2>
            <p
              className="text-base leading-relaxed"
              style={{ color: "#374151" }}
            >
              Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG:<br />
              [Platzhalter – falls vorhanden]
            </p>
          </section>

          <div
            className="my-8 h-px"
            style={{ backgroundColor: "#F3F4F6" }}
          />

          {/* Section: Verantwortlich */}
          <section className="mb-10">
            <h2
              className="font-serif text-xl font-semibold mb-4"
              style={{ color: "#1B5E3B" }}
            >
              Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
            </h2>
            <p
              className="text-base leading-relaxed"
              style={{ color: "#374151" }}
            >
              Tim Goebel<br />
              Hilgenloh 19<br />
              44379 Dortmund
            </p>
          </section>

          <div
            className="my-8 h-px"
            style={{ backgroundColor: "#F3F4F6" }}
          />

          {/* Section: Haftungsausschluss */}
          <section className="mb-10">
            <h2
              className="font-serif text-xl font-semibold mb-6"
              style={{ color: "#1B5E3B" }}
            >
              Haftungsausschluss
            </h2>

            <h3
              className="text-base font-semibold mb-2"
              style={{ color: "#1A1A1A" }}
            >
              Haftung für Inhalte
            </h3>
            <p
              className="text-base leading-relaxed mb-6"
              style={{ color: "#374151" }}
            >
              Die Inhalte dieser Website wurden mit größter Sorgfalt erstellt. Für die Richtigkeit,
              Vollständigkeit und Aktualität der Inhalte kann jedoch keine Gewähr übernommen werden.
              Als Diensteanbieter bin ich gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten
              nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG bin ich als
              Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
              Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige
              Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
              Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine
              diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten
              Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werde
              ich diese Inhalte umgehend entfernen.
            </p>

            <h3
              className="text-base font-semibold mb-2"
              style={{ color: "#1A1A1A" }}
            >
              Haftung für Links
            </h3>
            <p
              className="text-base leading-relaxed mb-6"
              style={{ color: "#374151" }}
            >
              Diese Website enthält Links zu externen Websites Dritter, auf deren Inhalte ich keinen
              Einfluss habe. Deshalb kann ich für diese fremden Inhalte auch keine Gewähr übernehmen.
              Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber
              der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung
              auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der
              Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten
              ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei
              Bekanntwerden von Rechtsverletzungen werde ich derartige Links umgehend entfernen.
            </p>

            <h3
              className="text-base font-semibold mb-2"
              style={{ color: "#1A1A1A" }}
            >
              Urheberrecht
            </h3>
            <p
              className="text-base leading-relaxed"
              style={{ color: "#374151" }}
            >
              Die durch mich erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen
              Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung
              außerhalb der Grenzen des Urheberrechts bedürfen meiner schriftlichen Zustimmung.
              Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch
              gestattet. Soweit die Inhalte auf dieser Seite nicht von mir erstellt wurden, werden die
              Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche
              gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden,
              bitte ich um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen
              werde ich derartige Inhalte umgehend entfernen.
            </p>
          </section>

        </div>
      </main>

      <Footer />
    </>
  )
}
