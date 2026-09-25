import Link from "next/link"
import { SectionHead } from "@/components/site/section-head"
import { Arrow } from "@/components/site/icons"

export function Ablauf() {
  return (
    <section className="section" id="ablauf">
      <div className="container">
        <SectionHead
          title="In drei Schritten von der Anfragen-Flut zur Entlastung."
          sub="Sie gehen kein Risiko ein, bevor Sie nicht schwarz auf weiß sehen, was es bringt."
        />
        <ol className="steps">
          <li className="step">
            <span className="step-n" aria-hidden="true">1</span>
            <h3>Kostenlose Analyse</h3>
            <p>45 Minuten am Telefon oder per Video: Wo geht bei Ihnen die meiste Zeit verloren? Unverbindlich, ohne Vorbereitung.</p>
          </li>
          <li className="step">
            <span className="step-n" aria-hidden="true">2</span>
            <h3>Quick-Win-Audit <span className="badge">Empfohlen</span></h3>
            <p>Ein bis zwei Tage bei Ihnen im Büro: Ich laufe mit, spreche mit Ihrem Team und liefere einen Umsetzungsplan mit Zahlen. Die Kosten werden voll auf die Umsetzung angerechnet.</p>
          </li>
          <li className="step">
            <span className="step-n" aria-hidden="true">3</span>
            <h3>Umsetzung &amp; Schulung</h3>
            <p>Vor Ort, mit Ihrem Team: Abläufe festlegen, Handbuch schreiben, Software richtig einrichten, automatisieren — und schulen, wo gearbeitet wird. Drei bis vier Monate für die wichtigsten Abläufe, spürbar ab dem ersten Monat. Ohne Systemwechsel.</p>
          </li>
        </ol>
        <p className="step-note"><b>Rentabilitätsgarantie:</b> Ich setze nur um, was sich im ersten Jahr rechnet. Rechnet sich eine Maßnahme nicht, wird sie nicht gebaut.</p>
        <div className="cta-wrap center">
          <Link href="#buchung" className="btn">Kostenlose Analyse sichern <Arrow className="arrow" /></Link>
          <p className="fine">Sie entscheiden nach Schritt 1, ob es weitergeht.</p>
        </div>
      </div>
    </section>
  )
}
