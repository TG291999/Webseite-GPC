import { Check, Dash } from "@/components/site/icons"
import { SectionHead } from "@/components/site/section-head"

export function FuerWen() {
  return (
    <section className="section surface" id="fuer-wen">
      <div className="container">
        <SectionHead
            title="Ich arbeite nicht mit jeder Verwaltung. Das ist Absicht."
            sub={<>Automatisierung wirkt nur, wenn sie zu Ihrer Verwaltung passt. Deshalb sage ich vorab ehrlich, für wen ich der Richtige bin — und für wen nicht.</>}
          />
          <div className="fit">
            <div className="fit-col yes">
              <h3>Passt, wenn Sie sich hier wiedererkennen:</h3>
              <ul className="fit-list">
                <li><Check size={19} />Ihre besten Leute arbeiten den halben Tag Anfragen ab, statt zu verwalten — und abends ist der Berg trotzdem nicht kleiner.</li>
                <li><Check size={19} />Sie finden kaum neue Mitarbeiter — und wollen die, die Sie haben, nicht an stumpfe Routine verlieren.</li>
                <li><Check size={19} />Sie wollen Ihre Software behalten — nicht schon wieder ein neues System einführen, mit Datenumzug, Schulungsmarathon und am Ende nutzt es keiner.</li>
                <li><Check size={19} />Ob Miet-, WEG- oder gemischte Verwaltung, ob 3 oder 30 Köpfe: Bei Ihnen wiederholen sich täglich dieselben Anfragen.</li>
              </ul>
              <p className="fit-note">Am besten passt es ab etwa 500 Einheiten — darunter lohnt sich der Aufwand selten, und das sage ich Ihnen vorher.</p>
            </div>
            <div className="fit-col no">
              <h3>Passt (noch) nicht, wenn Sie…</h3>
              <ul className="fit-list">
                <li><Dash size={19} />mit Ihren Abläufen zufrieden sind und eigentlich keine Veränderung suchen.</li>
                <li><Dash size={19} />das billigste Tool suchen statt den größten Hebel.</li>
                <li><Dash size={19} />erwarten, dass eine KI Ihre Mitarbeiter ersetzt — bei mir bleibt der Mensch in der Entscheidung.</li>
                <li><Dash size={19} />kaum wiederkehrende Routine haben — dann lohnt sich Automatisierung schlicht nicht, und das sage ich Ihnen lieber vorher.</li>
              </ul>
            </div>
          </div>
      </div>
    </section>
  )
}
