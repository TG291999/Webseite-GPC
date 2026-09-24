import Link from "next/link"
import { Check, Dash, Arrow } from "@/components/site/icons"
import { SectionHead } from "@/components/site/section-head"

const WAYS = [
  {
    title: "Abläufe und Zuständigkeiten",
    text: "Ich gehe Ihre Vorgänge vor Ort mit dem Team durch — vom Posteingang bis zur Ablage. Was gilt, steht danach im Prozesshandbuch. Nicht im Kopf einer Person.",
  },
  {
    title: "Ihre Software, richtig genutzt",
    text: "Die meisten Verwaltungen nutzen nur einen Bruchteil der Funktionen, die sie längst bezahlen. Ich hole erst das heraus, was schon da ist — dann automatisiere ich.",
  },
  {
    title: "Team, Schulung, Vertretung",
    text: "Ich schule dort, wo gearbeitet wird, und nehme Ihre Leute an die Hand. Damit ein Vorgang auch dann läuft, wenn jemand krank ist oder geht.",
  },
]

export function Loesung() {
  return (
    <section className="section" id="loesung">
      <div className="container">
        <SectionHead
          title={<>Ich baue auf dem auf, was Sie haben — vor Ort, mit Ihrem Team.</>}
          sub="Ihre Software bleibt. Ihr Team bleibt. Ich bringe die Struktur, die beides braucht — und erst dann Automatisierung und KI."
        />

        <div className="ways">
          {WAYS.map((w) => (
            <div key={w.title} className="way">
              <h3>{w.title}</h3>
              <p>{w.text}</p>
            </div>
          ))}
        </div>

        <blockquote className="voice">
          <p>„Andere haben uns Konzepte geschickt. Sie sind der Erste, der sagt: Ich komme zu Ihnen ins Büro und arbeite das mit Ihren Leuten durch.“</p>
          <cite>Geschäftsführer einer Hausverwaltung — im ersten Gespräch</cite>
        </blockquote>

        <div className="compare">
          <div className="compare-col without">
            <div className="compare-head">Heute</div>
            <div className="compare-row"><Dash size={16} />Jede Mail wird von Hand gelesen, eingeordnet, beantwortet.</div>
            <div className="compare-row"><Dash size={16} />Schadensmeldung pingt 3× zwischen allen Beteiligten hin und her.</div>
            <div className="compare-row"><Dash size={16} />Wissen geht mit jeder Kündigung verloren.</div>
          </div>
          <div className="compare-col with">
            <div className="compare-head">Mit mir</div>
            <div className="compare-row"><Check size={17} />Ein Postfach, eine Regel — vorsortiert, Entwurf liegt bereit.</div>
            <div className="compare-row"><Check size={17} />Ein Vorgang, ein Zuständiger, Handwerker zugeordnet, Mieter informiert.</div>
            <div className="compare-row"><Check size={17} />Im Handbuch und im System — für jede Vertretung abrufbar.</div>
          </div>
        </div>

        <div className="cta-wrap center">
          <Link href="#buchung" className="btn">Kostenlose Analyse sichern <Arrow className="arrow" /></Link>
          <p className="fine">Kostenlos · 45&nbsp;Minuten · Kein Verkaufsgespräch</p>
        </div>
      </div>
    </section>
  )
}
