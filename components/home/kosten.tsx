import Link from "next/link"
import { Reveal } from "@/components/site/reveal"
import { SectionHead } from "@/components/site/section-head"
import { Beleg } from "./beleg"

export function Kosten() {
  return (
    <section className="section" id="kosten">
      <div className="container">
        <div className="cost-grid">
          <Reveal>
            <SectionHead
              n="02"
              kicker="Der Zeitverlust"
              title="Die teuerste Rechnung, die Ihnen niemand stellt."
              sub="Repetitive Anfragen binden Arbeitszeit, die nicht in Wachstum, zufriedene Eigentümer und neue Objekte fließt."
              className="tight"
            />
            <p className="prose">
              Ihr Team ist nicht zu langsam. Es macht Arbeit, die kein Mensch mehr machen müsste —
              und diese Zeit fehlt dort, wo sie Ihre Verwaltung weiterbringt.
            </p>
          </Reveal>
          <Reveal delay={0.12}>
            <Beleg />
          </Reveal>
        </div>

        <Reveal>
          <div className="lm-card">
            <div>
              <span className="label">Prozess-Check · kostenlos</span>
              <h3>Wollen Sie es genauer wissen — für einen konkreten Ablauf aus Ihrem Alltag?</h3>
              <p>
                Acht Fragen zu Mahnwesen, Anfragen, Belegen oder Schäden. Daraus entsteht eine
                Rechnung mit jeder Zeile offen — auf Basis Ihrer eigenen Angaben, nicht irgendeines
                Durchschnitts.
              </p>
            </div>
            <div className="lm-cta">
              <Link href="/prozess-check" className="btn btn-paper">
                Prozess-Check starten <span className="arrow" aria-hidden="true">→</span>
              </Link>
              <p className="micro">4 Minuten · Ergebnis sofort · keine Registrierung</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
