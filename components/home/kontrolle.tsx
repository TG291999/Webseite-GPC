import { Check } from "@/components/site/icons"
import { SectionHead } from "@/components/site/section-head"
import { HeroDemo } from "./hero-demo"

const STEPS: Array<{ n: string; title: string; text: React.ReactNode; human?: boolean }> = [
  { n: "1", title: "Anfrage kommt rein", text: "Per Mail oder Portal, wie heute auch." },
  { n: "2", title: "System versteht & sortiert", text: "Erkennt das Thema, zieht die richtigen Infos, schreibt einen fertigen Antwortentwurf." },
  { n: "3", title: "Ihr Mitarbeiter prüft", text: <>Liest, passt ggf. an, klickt „Freigeben". Sekunden statt Minuten.</>, human: true },
  { n: "4", title: "Antwort raus, Vorgang im ERP", text: "Dokumentiert, nachvollziehbar, im System, das Sie kennen." },
]

export function Kontrolle() {
  return (
    <section className="section surface" id="kontrolle">
      <div className="container">
        <SectionHead
          title="Die KI schlägt vor. Ihr Mitarbeiter entscheidet. Immer."
          sub="Deshalb merkt kein Mieter, dass im Hintergrund Technik arbeitet — und Sie tragen kein Haftungsrisiko."
        />
        <div className="loop-grid">
          <ol className="loop">
            {STEPS.map((s) => (
              <li key={s.n} className={`loop-step${s.human ? " human" : ""}`}>
                <span className="n" aria-hidden="true">{s.n}</span>
                <div>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </div>
              </li>
            ))}
          </ol>
          <HeroDemo />
        </div>
        <p className="loop-closing">
          Die Technik nimmt die Fleißarbeit ab, die Verantwortung bleibt beim Menschen. Notfälle
          gehen sofort an einen Menschen. Und die Technik läuft auf einem Server bei Ihnen im
          Haus — ohne Abo, ohne Gebühr pro Anfrage.
        </p>
        <div className="trust-badges">
          <span className="tbadge"><Check size={16} />Jede Antwort gibt ein Mensch frei</span>
          <span className="tbadge"><Check size={16} />Daten bleiben im Haus · AVV · keine Lizenz pro Nutzer</span>
          <span className="tbadge"><Check size={16} />Notfälle sofort an einen Menschen</span>
        </div>
      </div>
    </section>
  )
}
