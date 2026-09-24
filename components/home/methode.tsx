import { SectionHead } from "@/components/site/section-head"

const PILLARS = [
  {
    roman: "1",
    step: "Fundament",
    title: "Struktur",
    text: <>Bevor etwas automatisiert wird, muss klar sein, wie es heute läuft — und wer wofür zuständig ist. Ich gehe die Abläufe vor Ort mit Ihrem Team durch und schreibe fest, was gilt. <em>Konkret:</em> wie eine Schadensmeldung durch Ihr Haus läuft, wo sie hängt, wer sie künftig trägt.</>,
    result: "klare Abläufe, eindeutige Zuständigkeiten, ein Handbuch, das jede Vertretung versteht.",
  },
  {
    roman: "2",
    step: "Tempo",
    title: "Automatisierung",
    text: <>Sind die Abläufe sauber, übernimmt zuerst Ihre Software die Wiederholung — mit Funktionen, die Sie längst bezahlen. <em>Konkret:</em> Die immer gleiche Nebenkosten-Rückfrage wird automatisch erkannt, zugeordnet und vorbereitet — ganz ohne KI.</>,
    result: "weniger Handarbeit, weniger Fehler, schnellere Abläufe.",
  },
  {
    roman: "3",
    step: "Hebel",
    title: "KI",
    text: <>Erst auf sauberen Prozessen kommt KI dazu — bei Kommunikation, Dokumenten, Wissensarbeit. <em>Konkret:</em> Aus einer langen Mieter-Mail entsteht ein Antwortentwurf, den Ihr Mitarbeiter nur noch prüft und freigibt.</>,
    result: "KI, die im Tagesgeschäft spürbar entlastet.",
  },
]

export function Methode() {
  return (
    <section className="section on-ink pillars" id="methode">
      <div className="container">
        <SectionHead title={<>Die meisten starten mit KI.<br />Ich starte mit <em>Struktur.</em></>} />
        <p className="intro">
          KI auf unklaren Prozessen beschleunigt nur das Chaos. Deshalb in dieser Reihenfolge:
          erst Struktur, dann Automatisierung, dann KI — dort, wo sie wirklich wirkt.
        </p>
        <div className="pillars-rule" aria-hidden="true" />
        <div className="pillars-grid">
          {PILLARS.map((p) => (
            <div key={p.roman} className="pillar">
              <span className="pillar-roman" aria-hidden="true">{p.roman}</span>
              <h3>{p.title} <span className="pillar-step">· {p.step}</span></h3>
              <p>{p.text}</p>
              <div className="pillar-result"><b>Ergebnis:</b> {p.result}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
