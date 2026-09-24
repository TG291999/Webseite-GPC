import { Folder, Mail, People } from "@/components/site/icons"
import { Reveal } from "@/components/site/reveal"
import { SectionHead } from "@/components/site/section-head"

const CARDS = [
  {
    n: "01",
    icon: <Mail />,
    title: "Die Anfragen-Flut",
    text: <>Nebenkosten, Schäden, „Wann kommt der Handwerker?" — dieselben Fragen per Mail <em>und</em> Telefon, jede Woche aufs Neue.</>,
  },
  {
    n: "02",
    icon: <People />,
    title: "Der Fachkräftemangel",
    text: <>Die Stelle ist seit Monaten offen. Wer da ist, arbeitet am Limit. Einarbeitung kostet Zeit, die niemand hat. Das ist kein Fleißproblem: Wenn in drei Jahren zwei Sachbearbeiter wechseln, geht das Wissen mit — und der Rückstand bleibt.</>,
  },
  {
    n: "03",
    icon: <Folder />,
    title: "Verstreute, manuelle Abläufe",
    text: <>Wissen steckt in Köpfen und Postfächern. Bei jeder Kündigung geht ein Stück davon verloren.</>,
  },
]

export function Problem() {
  return (
    <section className="section bg-paper-2" id="problem">
      <div className="container">
        <Reveal>
          <SectionHead
            n="01"
            kicker="Das Problem"
            title="Ihre besten Leute verbringen den halben Tag mit Anfragen, die ein gutes System längst selbst vorbereiten könnte."
            sub="Und genau die Leute, die das auffangen sollen, finden Sie auf dem Arbeitsmarkt nicht mehr."
          />
        </Reveal>
        <Reveal>
          <p className="prose lead" style={{ marginBottom: 44 }}>
            Der Posteingang läuft voll, das Telefon klingelt mitten in der Abrechnung, eine
            Schadensmeldung springt dreimal hin und her. Und kündigt ein Sachbearbeiter, geht
            das Wissen mit — Ersatz gibt es monatelang nicht.
          </p>
        </Reveal>
        <div className="grid-3">
          {CARDS.map((c, i) => (
            <Reveal key={c.n} delay={i * 0.08} className="card">
              <div className="ic">{c.icon}</div>
              <h3>{c.title}</h3>
              <p>{c.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
