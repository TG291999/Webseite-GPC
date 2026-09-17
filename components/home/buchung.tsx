import Link from "next/link"
import { Check } from "@/components/site/icons"
import { Reveal } from "@/components/site/reveal"
import { SectionHead } from "@/components/site/section-head"

export function Buchung() {
  return (
    <section className="section bg-paper-2 booking" id="buchung">
      <div className="container">
        <Reveal>
          <SectionHead
            n="11"
            kicker="Das Gespräch"
            title="45 Minuten, die Ihrem Team Stunden zurückgeben."
            sub="Kostenlose Automatisierungs-Analyse. Kein Verkaufsgespräch. Sie gehen mit Ihren 3 größten Zeitfressern raus — versprochen."
            center
          />
          <p className="prose center" style={{ maxWidth: 680, marginInline: "auto" }}>
            Welche Vorgänge kommen am häufigsten, wer bearbeitet sie, was kostet das an Zeit? Am
            Ende wissen Sie, was sich strukturieren und automatisieren lässt — und was es bringt.
            Ob Sie danach mit mir arbeiten, entscheiden Sie.
          </p>
        </Reveal>

        <Reveal>
          <div className="takeaway">
            <div className="takeaway-label">Das nehmen Sie aus dem Termin mit — auch ohne Zusammenarbeit:</div>
            <ul>
              <li><Check size={18} />Eine schriftliche Liste Ihrer 3 größten Zeitfresser</li>
              <li><Check size={18} />Eine grobe Einschätzung, wie viel Zeit realistisch zurückzuholen ist</li>
              <li><Check size={18} />Klarheit, ob sich der nächste Schritt für Sie überhaupt lohnt</li>
            </ul>
          </div>
        </Reveal>

        {/* zcal Inline-Kalender — embed.js wird in app/page.tsx via <Script> geladen.
            Der Link im Widget ist der Fallback, falls das Script/JS nicht lädt. */}
        <Reveal>
          <div className="cal-embed-wrap" role="region" aria-label="Online-Terminkalender — kostenlose Analyse buchen">
            <div className="zcal-inline-widget">
              <a href="https://zcal.co/i/1v-apJ3U">Automatisierungs-Analyse — Termin auswählen</a>
            </div>
            <p className="cal-fallback-note">
              Kalender lädt nicht?{" "}
              <a href="https://zcal.co/i/1v-apJ3U" target="_blank" rel="noopener">Termin direkt buchen →</a>
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="reassure">
            <span><Check size={16} />Keine Vorbereitung nötig</span>
            <span><Check size={16} />Kein Verkaufsdruck</span>
            <span><Check size={16} />Konkrete Erkenntnisse garantiert</span>
          </div>
          <p className="booking-alt center">
            Noch nicht bereit für ein Gespräch?{" "}
            <Link href="/prozess-check" className="textlink">Starten Sie mit dem 4-Minuten-Prozess-Check →</Link>
          </p>
        </Reveal>
      </div>
    </section>
  )
}
