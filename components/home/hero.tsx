import Link from "next/link"
import { Arrow, Check, LinkedIn, Verified } from "@/components/site/icons"

/**
 * Erste Ansicht: Aussage links, Gesicht rechts, ein Weg zum Termin.
 * Darunter die Bühnen, auf denen Tim spricht. Maße aus dem freigegebenen
 * Entwurf (.impeccable/mocks/comp-1.png).
 */
export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="container hero-grid">
        <div className="hero-copy">
          <h1 id="hero-title" className="hero-title">
            <span>Ich gebe Ihrer</span> <span>Verwaltung</span> <span>Zeit zurück.</span>
          </h1>
          <p className="hero-lede">
            Eine Schadensmeldung kostet 10 bis 15 Minuten. Bei 15 die Woche sind das drei bis
            vier Stunden – nur fürs Anlegen. Diese Zeit hole ich zurück: mit klaren Abläufen, in
            Ihrer Software, vor Ort mit Ihrem Team.
          </p>
          <div className="hero-actions">
            <Link href="#buchung" className="btn">
              Kostenlose Analyse sichern <Arrow className="arrow" />
            </Link>
            <Link href="/prozess-check" className="btn btn-outline">4-Minuten-Prozess-Check <Arrow className="arrow" /></Link>
          </div>
        </div>
        <figure className="hero-portrait">
          <img
            src="/assets/plates/portrait-tim.jpg"
            width={1024}
            height={844}
            alt="Tim Goebel, Inhaber von Goebel & Partner Consulting"
            fetchPriority="high"
          />
        </figure>
      </div>
      <div className="container">
        <ul className="hero-facts">
          <li><Check size={18} />Immobilienkaufmann, 9+&nbsp;Jahre Branche</li>
          <li><Check size={18} />Vor Ort bei Ihnen</li>
          <li><Check size={18} />Ihre Software bleibt</li>
          <li>
            <a href="https://www.linkedin.com/in/tim-goebel-gpc/" target="_blank" rel="noopener" className="fact-link">
              <LinkedIn size={17} />Über 1.600 Follower auf LinkedIn<Verified size={17} />
            </a>
          </li>
        </ul>
        <div className="hero-logos">
          <p className="sr-only">Tim Goebel spricht unter anderem bei:</p>
          <ul>
            <li><img src="/assets/plates/logo-buildinx.png" width={600} height={79} alt="BuildinX" style={{ "--h": "clamp(20px,1.9vw,27px)" } as React.CSSProperties} /></li>
            <li>
              <img src="/assets/plates/logo-ihk.png" width={444} height={222} alt="" style={{ "--h": "clamp(30px,2.9vw,42px)" } as React.CSSProperties} />
              <span className="logo-name">IHK zu Dortmund</span>
            </li>
            <li>
              <img src="/assets/plates/logo-wj.png" width={259} height={195} alt="" style={{ "--h": "clamp(40px,3.9vw,56px)" } as React.CSSProperties} />
              <span className="logo-name">Wirtschaftsjunioren</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
