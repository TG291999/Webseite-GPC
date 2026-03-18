import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Datenschutzerklärung – Goebel & Partner Consulting",
  description: "Datenschutzerklärung gemäß DSGVO für Goebel & Partner Consulting.",
}

export default function DatenschutzPage() {
  return (
    <>
      <Navigation />

      <main className="bg-white pt-32 pb-20">
        <div className="mx-auto max-w-[800px] px-6">
          {/* Header */}
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-4"
            style={{ color: "#B8963E" }}
          >
            Rechtliches
          </p>
          <h1
            className="font-serif text-4xl md:text-5xl font-semibold mb-6"
            style={{ color: "#1A1A1A" }}
          >
            Datenschutzerklärung
          </h1>
          <p className="text-sm mb-12" style={{ color: "#6B7280" }}>
            Stand: März 2026
          </p>

          <div className="h-px w-full mb-12" style={{ backgroundColor: "#E5E7EB" }} />

          {/* 1. Verantwortlicher */}
          <section className="mb-12">
            <h2
              className="font-serif text-xl font-semibold mb-4"
              style={{ color: "#1B5E3B" }}
            >
              1. Verantwortlicher
            </h2>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#374151" }}>
              Verantwortlicher im Sinne der Datenschutz-Grundverordnung (DSGVO) und anderer nationaler Datenschutzgesetze sowie sonstiger datenschutzrechtlicher Bestimmungen ist:
            </p>
            <address className="not-italic text-sm leading-relaxed" style={{ color: "#374151" }}>
              <strong>Goebel & Partner Consulting</strong><br />
              Tim Goebel<br />
              Hilgenloh 19<br />
              44379 Dortmund<br />
              Deutschland<br /><br />
              E-Mail:{" "}
              <a
                href="mailto:info@goebel-partner.de"
                className="underline transition-colors hover:text-primary"
                style={{ color: "#1B5E3B" }}
              >
                info@goebel-partner.de
              </a><br />
              Telefon: [Platzhalter]
            </address>
          </section>

          <div className="h-px w-full mb-12" style={{ backgroundColor: "#E5E7EB" }} />

          {/* 2. Erhebung und Speicherung personenbezogener Daten */}
          <section className="mb-12">
            <h2
              className="font-serif text-xl font-semibold mb-4"
              style={{ color: "#1B5E3B" }}
            >
              2. Erhebung und Speicherung personenbezogener Daten
            </h2>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#374151" }}>
              Beim Besuch der Website werden automatisch Informationen durch den Browser übermittelt (Server-Log-Files): Browsertyp und -version, verwendetes Betriebssystem, Referrer URL, Hostname des zugreifenden Rechners, Uhrzeit der Serveranfrage, IP-Adresse. Diese Daten sind nicht bestimmten Personen zuordenbar und werden nicht mit anderen Datenquellen zusammengeführt.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#374151" }}>
              <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der technischen Bereitstellung der Website).
            </p>
          </section>

          <div className="h-px w-full mb-12" style={{ backgroundColor: "#E5E7EB" }} />

          {/* 3. Kontaktformular */}
          <section className="mb-12">
            <h2
              className="font-serif text-xl font-semibold mb-4"
              style={{ color: "#1B5E3B" }}
            >
              3. Kontaktformular
            </h2>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#374151" }}>
              Wenn Sie das Kontaktformular nutzen, werden folgende Daten erhoben: Name, Unternehmen, E-Mail-Adresse, Telefonnummer, Ihr Anliegen sowie optional die Quelle Ihres Besuchs. Diese Daten werden ausschließlich zur Bearbeitung Ihrer Anfrage verwendet und nicht an Dritte weitergegeben.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#374151" }}>
              <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Maßnahmen). Die Daten werden gelöscht, sobald sie für die Erreichung des Zweckes ihrer Erhebung nicht mehr erforderlich sind.
            </p>
          </section>

          <div className="h-px w-full mb-12" style={{ backgroundColor: "#E5E7EB" }} />

          {/* 4. Hosting – aktualisiert */}
          <section className="mb-12">
            <h2
              className="font-serif text-xl font-semibold mb-4"
              style={{ color: "#1B5E3B" }}
            >
              4. Hosting
            </h2>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#374151" }}>
              Diese Website wird bei <strong>Vercel Inc.</strong> (340 S Lemon Ave #4133, Walnut, CA 91789, USA) gehostet. Vercel kann bei Aufruf der Website Zugriffsdaten erheben. Der Datentransfer in die USA wird auf Basis von EU-Standardvertragsklauseln gemäß Art. 46 Abs. 2 lit. c DSGVO abgesichert.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#374151" }}>
              Weitere Informationen finden Sie in der Datenschutzerklärung von Vercel:{" "}
              <a
                href="https://vercel.com/legal/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="underline transition-colors hover:text-primary"
                style={{ color: "#1B5E3B" }}
              >
                https://vercel.com/legal/privacy-policy
              </a>
            </p>
          </section>

          <div className="h-px w-full mb-12" style={{ backgroundColor: "#E5E7EB" }} />

          {/* 5. Cookies – aktualisiert */}
          <section className="mb-12">
            <h2
              className="font-serif text-xl font-semibold mb-4"
              style={{ color: "#1B5E3B" }}
            >
              5. Cookies
            </h2>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#374151" }}>
              Diese Website verwendet ausschließlich technisch notwendige Cookies. Es werden keine Tracking-Cookies, Werbe-Cookies oder Cookies für Analysezwecke eingesetzt. Eine Einwilligung ist daher nicht erforderlich (Art. 6 Abs. 1 lit. f DSGVO).
            </p>
          </section>

          <div className="h-px w-full mb-12" style={{ backgroundColor: "#E5E7EB" }} />

          {/* 6. Social-Media-Plugins */}
          <section className="mb-12">
            <h2
              className="font-serif text-xl font-semibold mb-4"
              style={{ color: "#1B5E3B" }}
            >
              6. Social-Media-Plugins und externe Links
            </h2>
            <p className="text-sm leading-relaxed" style={{ color: "#374151" }}>
              Auf dieser Website werden <strong>keine Social-Media-Plugins mit Tracking</strong> eingesetzt. Sofern Links zu meinen Profilen in sozialen Netzwerken vorhanden sind, handelt es sich um einfache Verlinkungen ohne eingebettete Tracking-Funktionen.
            </p>
          </section>

          <div className="h-px w-full mb-12" style={{ backgroundColor: "#E5E7EB" }} />

          {/* 7. Ihre Rechte */}
          <section className="mb-12">
            <h2
              className="font-serif text-xl font-semibold mb-4"
              style={{ color: "#1B5E3B" }}
            >
              7. Ihre Rechte
            </h2>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#374151" }}>
              Sie haben das Recht auf:
            </p>
            <ul className="text-sm leading-relaxed mb-4 list-disc list-inside space-y-2" style={{ color: "#374151" }}>
              <li><strong>Auskunft</strong> (§ 15 DSGVO)</li>
              <li><strong>Berichtigung</strong> (§ 16 DSGVO)</li>
              <li><strong>Löschung</strong> (§ 17 DSGVO)</li>
              <li><strong>Einschränkung der Verarbeitung</strong> (§ 18 DSGVO)</li>
              <li><strong>Datenübertragbarkeit</strong> (§ 20 DSGVO)</li>
              <li><strong>Widerspruch</strong> gegen die Verarbeitung (§ 21 DSGVO)</li>
            </ul>
            <p className="text-sm leading-relaxed" style={{ color: "#374151" }}>
              Zur Ausübung Ihrer Rechte wenden Sie sich an: <strong>info@goebel-partner.de</strong>
            </p>
          </section>

          <div className="h-px w-full mb-12" style={{ backgroundColor: "#E5E7EB" }} />

          {/* 8. Beschwerderecht */}
          <section className="mb-12">
            <h2
              className="font-serif text-xl font-semibold mb-4"
              style={{ color: "#1B5E3B" }}
            >
              8. Beschwerderecht
            </h2>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#374151" }}>
              Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu beschweren. Die für Nordrhein-Westfalen zuständige Aufsichtsbehörde ist:
            </p>
            <div className="p-4 rounded-lg border" style={{ backgroundColor: "#F8F7F4", borderColor: "#1B5E3B" }}>
              <address className="not-italic text-sm leading-relaxed" style={{ color: "#374151" }}>
                <strong>Landesbeauftragte für Datenschutz und Informationsfreiheit</strong><br />
                <strong>Nordrhein-Westfalen (LDI NRW)</strong><br />
                Postfach 20 04 44<br />
                40102 Düsseldorf<br /><br />
                <a
                  href="https://www.ldi.nrw.de"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline transition-colors hover:text-primary"
                  style={{ color: "#1B5E3B" }}
                >
                  www.ldi.nrw.de
                </a>
              </address>
            </div>
          </section>

          <div className="h-px w-full mb-12" style={{ backgroundColor: "#E5E7EB" }} />

          {/* 9. Aktualität dieser Datenschutzerklärung */}
          <section className="mb-12">
            <h2
              className="font-serif text-xl font-semibold mb-4"
              style={{ color: "#1B5E3B" }}
            >
              9. Aktualität und Änderung dieser Datenschutzerklärung
            </h2>
            <p className="text-sm leading-relaxed" style={{ color: "#374151" }}>
              Diese Datenschutzerklärung ist aktuell gültig. Durch die Weiterentwicklung der Website oder aufgrund geänderter gesetzlicher bzw. behördlicher Vorgaben kann es notwendig werden, diese Datenschutzerklärung anzupassen.
            </p>
          </section>

            <h3 className="text-sm font-semibold mb-2" style={{ color: "#1A1A1A" }}>
              Haftung für Inhalte
            </h3>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#374151" }}>
              Als Diensteanbieter bin ich gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG bin ich als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werde ich diese Inhalte umgehend entfernen.
            </p>

            <h3 className="text-sm font-semibold mb-2" style={{ color: "#1A1A1A" }}>
              Haftung für Links
            </h3>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#374151" }}>
              Mein Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte ich keinen Einfluss habe. Deshalb kann ich für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werde ich derartige Links umgehend entfernen.
            </p>

            <h3 className="text-sm font-semibold mb-2" style={{ color: "#1A1A1A" }}>
              Urheberrecht
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: "#374151" }}>
              Die durch mich erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen meiner schriftlichen Zustimmung. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht von mir erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitte ich um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werde ich derartige Inhalte umgehend entfernen.
            </p>
          </section>

          <div className="h-px w-full mb-12" style={{ backgroundColor: "#E5E7EB" }} />

          {/* 10. Aktualität */}
          <section>
            <h2
              className="font-serif text-xl font-semibold mb-4"
              style={{ color: "#1B5E3B" }}
            >
              10. Aktualität und Änderung dieser Datenschutzerklärung
            </h2>
            <p className="text-sm leading-relaxed" style={{ color: "#374151" }}>
              Diese Datenschutzerklärung ist aktuell gültig und hat den Stand März 2026. Durch die Weiterentwicklung meiner Website oder aufgrund geänderter gesetzlicher beziehungsweise behördlicher Vorgaben kann es notwendig werden, diese Datenschutzerklärung zu ändern. Die jeweils aktuelle Datenschutzerklärung kann jederzeit auf dieser Website abgerufen werden.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </>
  )
}
