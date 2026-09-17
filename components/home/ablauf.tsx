import Link from "next/link"
import { Reveal } from "@/components/site/reveal"
import { SectionHead } from "@/components/site/section-head"

export function Ablauf() {
  return (
    <section className="section bg-paper-2" id="ablauf">
      <div className="container">
        <Reveal>
          <SectionHead
            n="07"
            kicker="Der Ablauf"
            title="In drei Schritten von der Anfragen-Flut zur Entlastung."
            sub="Sie gehen kein Risiko ein, bevor Sie nicht schwarz auf weiß sehen, was es bringt."
          />
        </Reveal>
        <div className="stair">
          <Reveal className="step-card">
            <div className="step-n" aria-hidden="true">01</div>
            <h3>Kostenlose Analyse</h3>
            <p>45 Minuten am Telefon oder per Video: Wo geht bei Ihnen die meiste Zeit verloren? Unverbindlich, ohne Vorbereitung.</p>
          </Reveal>
          <Reveal delay={0.08} className="step-card featured">
            <span className="badge">Empfohlen</span>
            <div className="step-n" aria-hidden="true">02</div>
            <h3>Quick-Win-Audit</h3>
            <p>Ein bis zwei Tage bei Ihnen im Büro: Ich laufe mit, spreche mit Ihrem Team und liefere einen Umsetzungsplan mit Zahlen. Die Kosten werden voll auf die Umsetzung angerechnet.</p>
          </Reveal>
          <Reveal delay={0.16} className="step-card">
            <div className="step-n" aria-hidden="true">03</div>
            <h3>Umsetzung &amp; Schulung</h3>
            <p>Vor Ort, mit Ihrem Team: Abläufe festlegen, Handbuch schreiben, Software richtig einrichten, automatisieren — und schulen, wo gearbeitet wird. Ohne Systemwechsel.</p>
            <p className="step-note"><b>Rentabilitätsgarantie:</b> Ich setze nur um, was sich im ersten Jahr rechnet. Rechnet sich eine Maßnahme nicht, wird sie nicht gebaut.</p>
          </Reveal>
        </div>
        <Reveal>
          <div className="cta-wrap center">
            <Link href="#buchung" className="btn">Kostenlose Analyse sichern <span className="arrow">→</span></Link>
            <p className="micro" style={{ marginInline: "auto" }}>Sie entscheiden nach Schritt 1, ob es weitergeht.</p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
