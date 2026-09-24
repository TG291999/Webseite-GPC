import Link from "next/link"
import { LogoMark, Wordmark } from "./logo"

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <Link href="/" className="brand">
              <LogoMark tone="paper" />
              <Wordmark />
            </Link>
            <p className="footer-claim">
              Struktur, Prozesse und Automatisierung für Hausverwaltungen — vor Ort, in der
              Software, die Sie bereits nutzen.
            </p>
          </div>
          <div>
            <h2 className="footer-h">Navigation</h2>
            <ul>
              <li><Link href="/#methode">Methode</Link></li>
              <li><Link href="/#loesung">Lösung</Link></li>
              <li><Link href="/#ablauf">Ablauf</Link></li>
              <li><Link href="/#ueber-mich">Über mich</Link></li>
              <li><Link href="/#buchung">Analyse buchen</Link></li>
              <li><Link href="/prozess-check">Prozess-Check</Link></li>
            </ul>
          </div>
          <div>
            <h2 className="footer-h">Kontakt &amp; Recht</h2>
            <ul>
              <li>Goebel &amp; Partner Consulting</li>
              <li><a href="mailto:tim@goebel-partner.de">tim@goebel-partner.de</a></li>
              <li><a href="tel:+491726932222">0172 - 693 22 22</a></li>
              <li><Link href="/impressum">Impressum</Link></li>
              <li><Link href="/datenschutz">Datenschutz</Link></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {year} Goebel &amp; Partner Consulting · Dortmund</span>
          <span>
            DSGVO-konform · Daten bleiben im Haus · AVV ·{" "}
            <button type="button" className="js-cookie-settings footer-linkbtn">Cookie-Einstellungen</button>
          </span>
        </div>
      </div>
    </footer>
  )
}
