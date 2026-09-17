import { Alert, Lock, Shield } from "@/components/site/icons"
import { Reveal } from "@/components/site/reveal"
import { SectionHead } from "@/components/site/section-head"

const STEPS: Array<{ n: string; title: string; text: React.ReactNode; human?: boolean }> = [
  { n: "01", title: "Anfrage kommt rein", text: "Per Mail oder Portal, wie heute auch." },
  { n: "02", title: "System versteht & sortiert", text: "Erkennt das Thema, zieht die richtigen Infos, schreibt einen fertigen Antwortentwurf." },
  { n: "03", title: "Ihr Mitarbeiter prüft", text: <>Liest, passt ggf. an, klickt „Freigeben". Sekunden statt Minuten.</>, human: true },
  { n: "04", title: "Antwort raus, Vorgang im ERP", text: "Dokumentiert, nachvollziehbar, im System, das Sie kennen." },
]

export function Kontrolle() {
  return (
    <section className="section" id="kontrolle">
      <div className="container">
        <Reveal>
          <SectionHead
            n="06"
            kicker="Mensch in der Schleife"
            title="Die KI schlägt vor. Ihr Mitarbeiter entscheidet. Immer."
            sub="Deshalb merkt kein Mieter, dass im Hintergrund Technik arbeitet — und Sie tragen kein Haftungsrisiko."
          />
        </Reveal>
        <div className="loop">
          {STEPS.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.08} className={`loop-step${s.human ? " human" : ""}`}>
              <div className="n"><i>{s.human ? "✓" : ""}</i>{s.n}</div>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <p className="loop-closing prose">
            Die Technik nimmt die Fleißarbeit ab, die Verantwortung bleibt beim Menschen. Notfälle
            gehen sofort an einen Menschen. Und die Technik läuft auf einem Server bei Ihnen im
            Haus — ohne Abo, ohne Gebühr pro Anfrage.
          </p>
          <div className="trust-badges" style={{ justifyContent: "flex-start" }}>
            <span className="tbadge"><Shield />Jede Antwort gibt ein Mensch frei</span>
            <span className="tbadge"><Lock size={17} />Daten bleiben im Haus · AVV · keine Lizenz pro Nutzer</span>
            <span className="tbadge"><Alert />Notfälle sofort an einen Menschen</span>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
