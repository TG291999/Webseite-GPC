import { SectionHead } from "@/components/site/section-head"

const POINTS = [
  {
    title: "Die Anfragen-Flut",
    text: <>Nebenkosten, Schäden, „Wann kommt der Handwerker?" — dieselben Fragen per Mail <em>und</em> Telefon, jede Woche aufs Neue.</>,
  },
  {
    title: "Der Fachkräftemangel",
    text: <>Die Stelle ist seit Monaten offen. Wer da ist, arbeitet am Limit. Einarbeitung kostet Zeit, die niemand hat. Das ist kein Fleißproblem: Wenn in drei Jahren zwei Sachbearbeiter wechseln, geht das Wissen mit — und der Rückstand bleibt.</>,
  },
  {
    title: "Verstreute, manuelle Abläufe",
    text: <>Wissen steckt in Köpfen und Postfächern. Bei jeder Kündigung geht ein Stück davon verloren.</>,
  },
]

export function Problem() {
  return (
    <section className="section" id="problem">
      <div className="container">
        <div className="split">
          <SectionHead
            title="Ihre besten Leute verbringen den halben Tag mit Anfragen, die ein gutes System längst selbst vorbereiten könnte."
            sub="Und genau die Leute, die das auffangen sollen, finden Sie auf dem Arbeitsmarkt nicht mehr."
          />
          <p className="lead">
            Der Posteingang läuft voll, das Telefon klingelt mitten in der Abrechnung, eine
            Schadensmeldung springt dreimal hin und her. Und kündigt ein Sachbearbeiter, geht
            das Wissen mit — Ersatz gibt es monatelang nicht.
          </p>
        </div>
        <ul className="problem-points">
          {POINTS.map((p) => (
            <li key={p.title}>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
