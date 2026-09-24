import Link from "next/link"
import { SectionHead } from "@/components/site/section-head"
import { Beleg } from "./beleg"
import { Arrow } from "@/components/site/icons"

export function Kosten() {
  return (
    <section className="section surface" id="kosten">
      <div className="container cost-grid">
        <div className="cost-copy">
          <SectionHead
            title="Die teuerste Rechnung, die Ihnen niemand stellt."
            sub="Repetitive Anfragen binden Arbeitszeit, die nicht in Wachstum, zufriedene Eigentümer und neue Objekte fließt."
            className="flush"
          />
          <div className="prose">
            <p>
              Ihr Team ist nicht zu langsam. Es macht Arbeit, die kein Mensch mehr machen müsste —
              und diese Zeit fehlt dort, wo sie Ihre Verwaltung weiterbringt.
            </p>
          </div>
          <div className="cost-check">
            <h3>Wollen Sie es genauer wissen — für einen konkreten Ablauf aus Ihrem Alltag?</h3>
            <p>
              Acht Fragen zu Mahnwesen, Anfragen, Belegen oder Schäden. Daraus entsteht eine
              Rechnung mit jeder Zeile offen — auf Basis Ihrer eigenen Angaben, nicht irgendeines
              Durchschnitts.
            </p>
            <Link href="/prozess-check" className="link">Prozess-Check starten <Arrow /></Link>
            <p className="fine">Prozess-Check · kostenlos · 4 Minuten · Ergebnis sofort · keine Registrierung</p>
          </div>
        </div>
        <Beleg />
      </div>
    </section>
  )
}
