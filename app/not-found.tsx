import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Seite nicht gefunden – Goebel & Partner Consulting",
  robots: { index: false, follow: true },
}

export default function NotFound() {
  return (
    <>
      <Navigation />

      <main className="legal bg-canvas" style={{ textAlign: "center" }}>
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
            <Link href="/" className="btn btn-primary">
              Zur Startseite <span className="arrow">→</span>
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
