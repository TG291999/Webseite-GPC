import Link from "next/link"
import { Check, Dash } from "@/components/site/icons"
import { Reveal } from "@/components/site/reveal"
import { SectionHead } from "@/components/site/section-head"

const WAYS = [
  {
    n: "01",
    title: "Abläufe und Zuständigkeiten",
    text: "Ich gehe Ihre Vorgänge vor Ort mit dem Team durch — vom Posteingang bis zur Ablage. Was gilt, steht danach im Prozesshandbuch. Nicht im Kopf einer Person.",
  },
  {
    n: "02",
    title: "Ihre Software, richtig genutzt",
    text: "Die meisten Verwaltungen nutzen nur einen Bruchteil der Funktionen, die sie längst bezahlen. Ich hole erst das heraus, was schon da ist — dann automatisiere ich.",
  },
  {
    n: "03",
    title: "Team, Schulung, Vertretung",
    text: "Ich schule dort, wo gearbeitet wird, und nehme Ihre Leute an die Hand. Damit ein Vorgang auch dann läuft, wenn jemand krank ist oder geht.",
  },
]

export function Loesung() {
  return (
    <section className="section" id="loesung">
      <div className="container">
        <Reveal>
          <SectionHead
            n="04"
            kicker="So arbeite ich"
            title={<>Ich baue auf dem auf, was Sie haben — <em>vor Ort</em>, mit Ihrem Team.</>}
            sub="Ihre Software bleibt. Ihr Team bleibt. Ich bringe die Struktur, die beides braucht — und erst dann Automatisierung und KI."
          />
        </Reveal>

        <div className="ways">
          {WAYS.map((w, i) => (
            <Reveal key={w.n} delay={i * 0.08} className="way">
              <div className="way-n">{w.n}</div>
              <h3>{w.title}</h3>
              <p>{w.text}</p>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <blockquote className="voice">
            <p>„Andere haben uns Konzepte geschickt. Sie sind der Erste, der sagt: Ich komme zu Ihnen ins Büro und arbeite das mit Ihren Leuten durch."</p>
            <cite>Geschäftsführer einer Hausverwaltung — im ersten Gespräch</cite>
          </blockquote>
        </Reveal>

        <Reveal>
          <div className="compare">
            <div className="compare-col without">
              <div className="compare-head"><Dash size={14} />Heute</div>
              <div className="compare-row"><Dash size={16} />Jede Mail wird von Hand gelesen, eingeordnet, beantwortet.</div>
              <div className="compare-row"><Dash size={16} />Schadensmeldung pingt 3× zwischen allen Beteiligten hin und her.</div>
              <div className="compare-row"><Dash size={16} />Wissen geht mit jeder Kündigung verloren.</div>
            </div>
            <div className="compare-col with">
              <div className="compare-head"><Check size={14} />Mit mir</div>
              <div className="compare-row"><Check size={17} />Ein Postfach, eine Regel — vorsortiert, Entwurf liegt bereit.</div>
              <div className="compare-row"><Check size={17} />Ein Vorgang, ein Zuständiger, Handwerker zugeordnet, Mieter informiert.</div>
              <div className="compare-row"><Check size={17} />Im Handbuch und im System — für jede Vertretung abrufbar.</div>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="cta-wrap center">
            <Link href="#buchung" className="btn">Kostenlose Analyse sichern <span className="arrow">→</span></Link>
            <p className="micro" style={{ marginInline: "auto" }}>Kostenlos · 45&nbsp;Minuten · Kein Verkaufsgespräch</p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
