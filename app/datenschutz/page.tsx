import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Datenschutzerklärung – Goebel & Partner Consulting",
  description: "Datenschutzerklärung gemäß DSGVO für Goebel & Partner Consulting.",
  alternates: { canonical: "/datenschutz" },
}

export default function DatenschutzPage() {
  return (
    <>
      <Navigation />

      <main className="legal bg-canvas">
        <div className="container legal-wrap">
          <p className="eyebrow">Rechtliches</p>
          <h1>Datenschutzerklärung</h1>
          <p className="legal-date">Stand: Juni 2026</p>

          <p>
            Der Schutz Ihrer personenbezogenen Daten ist mir wichtig. Nachfolgend informiere ich Sie
            gemäß der Datenschutz-Grundverordnung (DSGVO) darüber, welche Daten beim Besuch dieser
            Website verarbeitet werden. Diese Website verarbeitet personenbezogene Daten so sparsam
            wie möglich.
          </p>

          <hr />

          <h2>1. Verantwortlicher</h2>
          <p>
            Verantwortlicher im Sinne der DSGVO und anderer nationaler Datenschutzgesetze ist:
          </p>
          <address>
            Goebel &amp; Partner Consulting<br />
            Inhaber Tim Goebel<br />
            Hilgenloh 19<br />
            44379 Dortmund<br />
            Deutschland<br />
            <br />
            Telefon: <a href="tel:+491726932222">0172 - 693 22 22</a>
            <br />
            E-Mail: <a href="mailto:tim@goebel-partner.de">tim@goebel-partner.de</a>
          </address>

          <hr />

          <h2>2. Aufruf der Website &amp; Server-Logfiles</h2>
          <p>
            Beim Aufruf dieser Website werden durch den Hosting-Anbieter automatisch Informationen
            verarbeitet, die Ihr Browser übermittelt (Server-Logfiles): Browsertyp und -version,
            verwendetes Betriebssystem, Referrer-URL, Hostname des zugreifenden Rechners, Uhrzeit der
            Serveranfrage sowie die IP-Adresse. Diese Daten dienen ausschließlich der technischen
            Bereitstellung, der Sicherheit und Stabilität der Website und werden nicht mit anderen
            Datenquellen zusammengeführt.
          </p>
          <p>
            <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an
            der sicheren und stabilen Bereitstellung der Website).
          </p>

          <hr />

          <h2>3. Hosting</h2>
          <p>
            Diese Website wird bei <strong>Vercel Inc.</strong> (340 S Lemon Ave #4133, Walnut, CA
            91789, USA) gehostet. Vercel verarbeitet dabei die unter Ziffer 2 genannten Zugriffsdaten
            in unserem Auftrag. Mit Vercel besteht ein Vertrag zur Auftragsverarbeitung (Art. 28
            DSGVO). Soweit dabei Daten in die USA übertragen werden, erfolgt dies auf Grundlage der
            EU-Standardvertragsklauseln (Art. 46 Abs. 2 lit. c DSGVO).
          </p>
          <p>
            Weitere Informationen:{" "}
            <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">
              vercel.com/legal/privacy-policy
            </a>
          </p>

          <hr />

          <h2>4. Reichweitenmessung (Vercel Web Analytics &amp; Google Analytics)</h2>
          <p>
            Zur Verbesserung der Website nutze ich <strong>Vercel Web Analytics</strong>. Dieser
            Dienst arbeitet <strong>ohne Cookies</strong> und ohne die Bildung von wiedererkennbaren
            Nutzerprofilen. Es werden anonymisierte Nutzungsdaten (z. B. aufgerufene Seiten, grobe
            Herkunftsregion, Gerätetyp) erfasst, ohne dass diese einer bestimmten Person zugeordnet
            werden können. Eine Einwilligung über ein Cookie-Banner ist daher nicht erforderlich.
          </p>
          <p>
            <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an
            einer datensparsamen Reichweitenmessung).
          </p>

          <h3>Google Analytics (nur mit Einwilligung)</h3>
          <p>
            Zusätzlich nutze ich <strong>Google Analytics 4</strong>, einen Webanalysedienst der
            Google Ireland Limited (Gordon House, Barrow Street, Dublin 4, Irland). Google Analytics
            verwendet Cookies und erstellt pseudonyme Nutzungsstatistiken (z. B. aufgerufene Seiten,
            Verweildauer, ungefähre Herkunft, Gerät und Browser).{" "}
            <strong>
              Google Analytics wird erst geladen und aktiv, nachdem Sie über das Cookie-Banner
              ausdrücklich eingewilligt haben.
            </strong>{" "}
            Ohne Ihre Einwilligung werden keine Google-Cookies gesetzt und keine Daten an Google
            übermittelt.
          </p>
          <p>
            Dabei können Daten an die Google LLC in die USA übertragen werden; abgesichert über die
            EU-Standardvertragsklauseln (Art. 46 DSGVO). Die von Google Analytics gesetzten Cookies
            haben eine Speicherdauer von bis zu 24 Monaten.
          </p>
          <p>
            <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. a DSGVO (Einwilligung) i. V. m.
            § 25 Abs. 1 TTDSG. Sie können Ihre Einwilligung jederzeit mit Wirkung für die Zukunft
            widerrufen — über den Link „Cookie-Einstellungen" im Footer. Weitere Informationen:{" "}
            <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
              policies.google.com/privacy
            </a>
            .
          </p>

          <hr />

          <h2>5. Schriftarten</h2>
          <p>
            Die verwendeten Schriftarten (Inter, Source Serif 4) werden lokal von diesem Server
            ausgeliefert und beim Seitenaufruf <strong>nicht</strong> von externen Servern (etwa
            Google Fonts) nachgeladen. Es findet dadurch keine Übertragung Ihrer IP-Adresse an
            Dritte zum Zweck der Schriftbereitstellung statt.
          </p>

          <hr />

          <h2>6. Terminbuchung (zcal)</h2>
          <p>
            Für die Vereinbarung der kostenlosen Analyse ist im Buchungsbereich der Kalender des
            Dienstes <strong>zcal</strong> (zcal.co) eingebunden. Beim Laden dieses Bereichs wird
            Inhalt von zcal nachgeladen; dabei wird Ihre IP-Adresse an zcal übertragen. Die von Ihnen
            für einen Termin eingegebenen Daten (z. B. Name, E-Mail-Adresse, gewünschter Termin)
            werden zur Vereinbarung und Durchführung des Termins verarbeitet. Dabei können Daten auch
            in Drittländer übertragen werden; eine Absicherung erfolgt über die
            EU-Standardvertragsklauseln.
          </p>
          <p>
            <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. b DSGVO (Durchführung
            vorvertraglicher Maßnahmen auf Ihre Anfrage). Es gilt zusätzlich die
            Datenschutzerklärung von zcal:{" "}
            <a href="https://zcal.co/privacy" target="_blank" rel="noopener noreferrer">
              zcal.co/privacy
            </a>
            .
          </p>

          <hr />

          <h2>7. Kontaktaufnahme per E-Mail oder Telefon</h2>
          <p>
            Wenn Sie mich per E-Mail oder Telefon kontaktieren, werden Ihre Angaben zur Bearbeitung
            der Anfrage und für mögliche Anschlussfragen gespeichert. Diese Daten gebe ich nicht ohne
            Ihre Einwilligung weiter.
          </p>
          <p>
            <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. b DSGVO (Anbahnung oder Erfüllung
            eines Vertrags) bzw. Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der
            Beantwortung Ihrer Anfrage). Die Daten werden gelöscht, sobald sie für die Erreichung des
            Zwecks nicht mehr erforderlich sind und keine gesetzlichen Aufbewahrungspflichten
            entgegenstehen.
          </p>

          <hr />

          <h2>8. Cookies</h2>
          <p>
            Technisch notwendige Cookies, die für den Betrieb der Website erforderlich sind, werden
            ohne Einwilligung gesetzt (Art. 6 Abs. 1 lit. f DSGVO). <strong>Analyse-Cookies (Google
            Analytics) werden ausschließlich nach Ihrer ausdrücklichen Einwilligung</strong> über das
            Cookie-Banner gesetzt. Werbe-Cookies setze ich nicht ein. Ihre Einwilligung können Sie
            jederzeit über den Link „Cookie-Einstellungen" im Footer ändern oder widerrufen.
          </p>

          <hr />

          <h2>9. Ihre Rechte</h2>
          <p>Sie haben im Rahmen der gesetzlichen Vorgaben jederzeit das Recht auf:</p>
          <ul>
            <li>Auskunft über Ihre verarbeiteten Daten (Art. 15 DSGVO)</li>
            <li>Berichtigung unrichtiger Daten (Art. 16 DSGVO)</li>
            <li>Löschung (Art. 17 DSGVO)</li>
            <li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
            <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
            <li>Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)</li>
          </ul>
          <p>
            Zur Ausübung Ihrer Rechte genügt eine Nachricht an{" "}
            <a href="mailto:tim@goebel-partner.de">tim@goebel-partner.de</a>. Soweit eine
            Verarbeitung auf einer Einwilligung beruht, können Sie diese jederzeit mit Wirkung für
            die Zukunft widerrufen.
          </p>

          <hr />

          <h2>10. Beschwerderecht</h2>
          <p>
            Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu beschweren. Die für
            mich zuständige Behörde ist:
          </p>
          <div className="legal-card">
            <address>
              <strong>Landesbeauftragte für Datenschutz und Informationsfreiheit
              Nordrhein-Westfalen (LDI NRW)</strong>
              <br />
              Postfach 20 04 44, 40102 Düsseldorf
              <br />
              <a href="https://www.ldi.nrw.de" target="_blank" rel="noopener noreferrer">
                www.ldi.nrw.de
              </a>
            </address>
          </div>

          <hr />

          <h2>11. Datensicherheit</h2>
          <p>
            Diese Website nutzt eine TLS-Verschlüsselung (erkennbar am „https" in der Adresszeile),
            um die Übertragung Ihrer Daten zu schützen.
          </p>

          <hr />

          <h2>12. Aktualität und Änderung dieser Datenschutzerklärung</h2>
          <p>
            Diese Datenschutzerklärung hat den Stand Juni 2026. Durch die Weiterentwicklung der
            Website oder aufgrund geänderter gesetzlicher bzw. behördlicher Vorgaben kann es
            notwendig werden, sie anzupassen. Die jeweils aktuelle Fassung kann jederzeit auf dieser
            Seite abgerufen werden.
          </p>
        </div>
      </main>

      <Footer />
    </>
  )
}
