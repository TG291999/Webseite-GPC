import { LinkedIn, Arrow, Verified } from "@/components/site/icons"
import { SectionHead } from "@/components/site/section-head"

export function UeberMich() {
  return (
    <section className="section surface" id="ueber-mich">
      <div className="container">
        <div className="about-grid">
          <figure className="about-photo">
            <img src="/images/tim-goebel-speaker.jpg" width={800} height={533} loading="lazy" alt="Tim Goebel als Speaker auf der Bühne vor Publikum" />
            <figcaption>Tim Goebel · Inhaber · Dortmund</figcaption>
          </figure>
          <div className="about-text">
            <SectionHead
              title="Ich komme aus Ihrer Welt — und arbeite von innen heraus."
              sub="Immobilienkaufmann, 8+ Jahre Branche, Gründer einer Hausverwaltungs-Software. Heute sitze ich bei Verwaltungen im Büro, gehe Abläufe durch und bringe Struktur rein — bevor ich irgendetwas automatisiere."
            />
            <p>
              Ich habe nicht über Hausverwaltung gelesen — ich war drin: Vermietung, Vertrieb,
              Verwaltungsalltag. Danach habe ich mit Immo&nbsp;One eine eigene
              Hausverwaltungs-Software aufgebaut.
            </p>
            <p className="pullquote">
              Die Lektion daraus: Die bestehende Software ist das Herzstück des Betriebs. Wird sie
              gewechselt und läuft danach nicht sauber, steht der ganze Laden still.
            </p>
            <p>
              Deshalb ersetze ich Ihre Software nicht, sondern bringe Ordnung hinein — und sitze
              dabei bei Ihnen im Büro. Sie reden nicht mit einem Berater, der eine Folie zeichnet
              und weiterreicht, sondern mit dem, der mit Ihrem Team umsetzt.
            </p>
            <p className="software">
              <b>Für jede Software:</b> ob Domus, Immoware24, GFAD, casavi, Karthago — oder Ihre Eigenlösung.
            </p>
            <div className="about-links">
              <a href="https://www.linkedin.com/in/tim-goebel-gpc/" target="_blank" rel="noopener" className="link">
                <LinkedIn />Tim Goebel auf LinkedIn · über 1.600 Follower <Verified size={16} /> <Arrow />
              </a>
            </div>
          </div>
        </div>

        <div className="stage">
          <div>
            <h3>Auf der Bühne</h3>
            <p>
              Ich rede auch vor Verwaltern, nicht nur im Einzelgespräch mit Ihnen: als Sprecher
              auf der <b>BuildinX</b> in der Westfalenhalle Dortmund und mit einem Workshop bei der{" "}
              <b>IHK zu Dortmund</b>. Davor habe ich selbst ein Proptech-Unternehmen gegründet und
              es bei Gründerformaten wie der Founder Fight Night und der Start-up Night der
              Wirtschaftsjunioren vorgestellt. Diese Praxis bringe ich heute in jede Automatisierung
              ein.
            </p>
          </div>
          <ul className="stage-logos" aria-label="u. a. auf der Bühne bei">
            <li><img src="/images/buildinx-logo.png" width={600} height={79} alt="BuildinX" loading="lazy" style={{ "--h": "22px" } as React.CSSProperties} /></li>
            <li><img src="/images/ihk-logo.png" width={444} height={222} alt="IHK zu Dortmund" loading="lazy" style={{ "--h": "46px" } as React.CSSProperties} /></li>
            <li><img src="/images/founder-fight-night-logo.png" width={200} height={200} alt="Founder Fight Night" loading="lazy" style={{ "--h": "64px" } as React.CSSProperties} /></li>
            <li><img src="/images/wirtschaftsjunioren-logo.png" width={259} height={195} alt="Wirtschaftsjunioren" loading="lazy" style={{ "--h": "58px" } as React.CSSProperties} /></li>
          </ul>
        </div>
      </div>
    </section>
  )
}
