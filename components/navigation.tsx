import Link from "next/link"

/**
 * Schlanker Header für die Rechtsseiten (Impressum / Datenschutz).
 * Die Startseite bringt ihren eigenen Header (inkl. Mobile-Menü) im Markup mit.
 */
export function Navigation() {
  return (
    <header className="header scrolled">
      <div className="container nav">
        <Link href="/" className="brand" aria-label="Goebel & Partner Consulting — Startseite">
          <svg className="mark" viewBox="0 0 32 32" fill="none" aria-hidden="true">
            <rect x="3" y="13" width="5" height="16" rx="1.5" fill="#749FDD" />
            <rect x="13.5" y="8" width="5" height="21" rx="1.5" fill="#2C5896" />
            <rect x="24" y="3" width="5" height="26" rx="1.5" fill="#15273F" />
          </svg>
          <span>Goebel & Partner</span>
        </Link>

        <nav className="nav-links" aria-label="Hauptnavigation">
          <Link href="/#methode">Methode</Link>
          <Link href="/#loesung">Lösung</Link>
          <Link href="/#ablauf">Ablauf</Link>
          <Link href="/#ueber-mich">Über mich</Link>
        </nav>

        <Link href="/#buchung" className="btn btn-primary">
          Kostenlose Analyse <span className="arrow">→</span>
        </Link>
      </div>
    </header>
  )
}
