import { Reveal } from "@/components/site/reveal"
import { SectionHead } from "@/components/site/section-head"
import { PillarsRule } from "./pillars-rule"

const PILLARS = [
  {
    roman: "I",
    step: "01 · Fundament",
    title: "Struktur",
    text: <>Bevor etwas automatisiert wird, muss klar sein, wie es heute läuft — und wer wofür zuständig ist. Ich gehe die Abläufe vor Ort mit Ihrem Team durch und schreibe fest, was gilt. <em>Konkret:</em> wie eine Schadensmeldung durch Ihr Haus läuft, wo sie hängt, wer sie künftig trägt.</>,
    result: "klare Abläufe, eindeutige Zuständigkeiten, ein Handbuch, das jede Vertretung versteht.",
  },
  {
    roman: "II",
    step: "02 · Tempo",
    title: "Automatisierung",
    text: <>Sind die Abläufe sauber, übernimmt zuerst Ihre Software die Wiederholung — mit Funktionen, die Sie längst bezahlen. <em>Konkret:</em> Die immer gleiche Nebenkosten-Rückfrage wird automatisch erkannt, zugeordnet und vorbereitet — ganz ohne KI.</>,
    result: "weniger Handarbeit, weniger Fehler, schnellere Abläufe.",
  },
  {
    roman: "III",
    step: "03 · Hebel",
    title: "KI",
    text: <>Erst auf sauberen Prozessen kommt KI dazu — bei Kommunikation, Dokumenten, Wissensarbeit. <em>Konkret:</em> Aus einer langen Mieter-Mail entsteht ein Antwortentwurf, den Ihr Mitarbeiter nur noch prüft und freigibt.</>,
    result: "KI, die im Tagesgeschäft spürbar entlastet.",
  },
]

export function Methode() {
  return (
    <section className="section bg-dark pillars" id="methode">
      <div className="container">
        <Reveal>
          <SectionHead
            n="03"
            kicker="Das 3-Säulen-Modell"
            title={<>Die meisten starten mit KI.<br />Ich starte mit <em>Struktur.</em></>}
          />
          <p className="intro">
            KI auf unklaren Prozessen beschleunigt nur das Chaos. Deshalb in dieser Reihenfolge:
            erst Struktur, dann Automatisierung, dann KI — dort, wo sie wirklich wirkt.
          </p>
        </Reveal>
        <PillarsRule />
        <div className="pillars-grid">
          {PILLARS.map((p, i) => (
            <Reveal key={p.roman} delay={i * 0.1} className="pillar">
              <span className="pillar-roman" aria-hidden="true">{p.roman}</span>
              <div className="pillar-step">{p.step}</div>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
              <div className="pillar-result"><b>Ergebnis:</b> {p.result}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
