import Link from "next/link"

/**
 * Footer in Markenfarben (identisch zur Startseite), für die Rechtsseiten.
 */
export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <Link href="/" className="brand">
              <svg className="mark" viewBox="0 0 32 32" fill="none" aria-hidden="true">
                <rect x="3" y="13" width="5" height="16" rx="1.5" fill="#749FDD" />
                <rect x="13.5" y="8" width="5" height="21" rx="1.5" fill="#9BC0EB" />
                <rect x="24" y="3" width="5" height="26" rx="1.5" fill="#fff" />
              </svg>
              <span>Goebel & Partner</span>
            </Link>
            <p className="footer-claim">
              Struktur, Automatisierung und KI für Hausverwaltungen — innerhalb der Software,
              die Sie bereits nutzen. Ohne Systemwechsel.
            </p>
          </div>

          <div>
            <h4>Navigation</h4>
            <ul>
              <li><Link href="/#methode">Methode</Link></li>
              <li><Link href="/#loesung">Lösung</Link></li>
              <li><Link href="/#ablauf">Ablauf</Link></li>
              <li><Link href="/#ueber-mich">Über mich</Link></li>
              <li><Link href="/#buchung">Analyse buchen</Link></li>
            </ul>
          </div>

          <div>
            <h4>Kontakt & Recht</h4>
            <ul>
              <li>Goebel & Partner Consulting</li>
              <li>Inhaber Tim Goebel</li>
              <li>Hilgenloh 19 · 44379 Dortmund</li>
              <li><a href="mailto:tim@goebel-partner.de">tim@goebel-partner.de</a></li>
              <li><a href="tel:+491726932222">0172 - 693 22 22</a></li>
              <li><Link href="/impressum">Impressum</Link></li>
              <li><Link href="/datenschutz">Datenschutz</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {year} Goebel & Partner Consulting</span>
          <span>DSGVO-konform · EU-Hosting · AVV</span>
        </div>
      </div>
    </footer>
  )
}
