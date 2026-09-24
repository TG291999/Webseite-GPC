import Link from "next/link"
import { Header } from "@/components/site/header"
import { Footer } from "@/components/site/footer"

export const metadata = {
  title: "Seite nicht gefunden – Goebel & Partner Consulting",
  robots: { index: false, follow: true },
}

export default function NotFound() {
  return (
    <>
      <Header />

      <main className="legal" style={{ textAlign: "center" }}>
        <div className="legal-wrap" style={{ maxWidth: 620 }}>
          <p className="eyebrow" style={{ marginInline: "auto" }}>Fehler 404</p>
          <h1>Diese Seite gibt es nicht (mehr).</h1>
          <p style={{ margin: "16px auto 32px", color: "var(--body)" }}>
            Vielleicht hat sich ein Link vertippt oder die Seite ist umgezogen. Gehen Sie zurück
            zum Anfang — oder direkt zur kostenlosen Analyse.
          </p>
          <div
            style={{
              display: "flex",
              gap: 14,
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <Link href="/" className="btn">
              Zur Startseite <span className="arrow" aria-hidden="true">→</span>
            </Link>
            <Link href="/#buchung" className="textlink">
              Kostenlose Analyse sichern →
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
