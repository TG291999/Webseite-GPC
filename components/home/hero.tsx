import Link from "next/link"
import { Check } from "@/components/site/icons"
import { Reveal } from "@/components/site/reveal"
import { HeroTitle } from "./hero-title"
import { HeroDemo } from "./hero-demo"

/**
 * Hero: Titel, ein Absatz, ein Knopf, ein Zweitweg, eine Belegzeile.
 * Bewusst wenig — alles Weitere steht in den Kapiteln darunter.
 */
export function Hero() {
  return (
    <section className="section hero" aria-labelledby="hero-title">
      <div className="container hero-grid">
        <div className="hero-copy">
          <div id="hero-title">
            <HeroTitle />
          </div>
          <Reveal delay={0.35}>
            <p className="subhead">
              Eine Schadensmeldung kostet 10 bis 15 Minuten. Bei 15 die Woche sind das drei bis
              vier Stunden — nur fürs Anlegen. Diese Zeit hole ich zurück: mit klaren Abläufen, in
              Ihrer Software, <strong>vor Ort mit Ihrem Team.</strong>
            </p>
            <div className="hero-actions">
              <Link href="#buchung" className="btn">
                Kostenlose Analyse sichern <span className="arrow">→</span>
              </Link>
              <Link href="/prozess-check" className="textlink">4-Minuten-Prozess-Check →</Link>
            </div>
            <p className="micro">Kostenlos · 45&nbsp;Minuten · kein Verkaufsgespräch</p>
          </Reveal>
          <Reveal delay={0.5}>
            <div className="trust-strip">
              <span className="trust-item"><Check size={16} />Immobilienkaufmann, 8+&nbsp;Jahre Branche</span>
              <span className="trust-item"><Check size={16} />Vor Ort bei Ihnen</span>
              <span className="trust-item"><Check size={16} />Ihre Software bleibt</span>
            </div>
          </Reveal>
        </div>
        <div className="hero-visual">
          <Reveal delay={0.25} style={{ width: "100%" }}>
            <HeroDemo />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
