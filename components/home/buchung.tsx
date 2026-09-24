import Link from "next/link"
import { Check, Arrow } from "@/components/site/icons"
import { SectionHead } from "@/components/site/section-head"

export function Buchung() {
  return (
    <section className="section surface booking" id="buchung">
      <div className="container center">
        <SectionHead
          title="45 Minuten, die Ihrem Team Stunden zurückgeben."
          sub="Kostenlose Automatisierungs-Analyse. Kein Verkaufsgespräch. Sie gehen mit Ihren 3 größten Zeitfressern raus — versprochen."
          center
        />
        <p className="booking-intro">
          Welche Vorgänge kommen am häufigsten, wer bearbeitet sie, was kostet das an Zeit? Am
          Ende wissen Sie, was sich strukturieren und automatisieren lässt — und was es bringt.
          Ob Sie danach mit mir arbeiten, entscheiden Sie.
        </p>

        <div className="takeaway">
          <p className="takeaway-label">Das nehmen Sie aus dem Termin mit — auch ohne Zusammenarbeit:</p>
          <ul className="checks">
            <li><Check size={18} />Eine schriftliche Liste Ihrer 3 größten Zeitfresser</li>
            <li><Check size={18} />Eine grobe Einschätzung, wie viel Zeit realistisch zurückzuholen ist</li>
            <li><Check size={18} />Klarheit, ob sich der nächste Schritt für Sie überhaupt lohnt</li>
          </ul>
        </div>

        {/* zcal Inline-Kalender — embed.js wird in app/page.tsx via <Script> geladen.
            Der Link im Widget ist der Fallback, falls das Script/JS nicht lädt. */}
        <div className="cal-embed-wrap" role="region" aria-label="Online-Terminkalender – kostenlose Analyse buchen">
          <div className="zcal-inline-widget">
            <a href="https://zcal.co/i/1v-apJ3U">Automatisierungs-Analyse — Termin auswählen</a>
          </div>
          <p className="cal-fallback-note">
            Kalender lädt nicht?{" "}
            <a href="https://zcal.co/i/1v-apJ3U" target="_blank" rel="noopener">Termin direkt buchen <Arrow size={14} /></a>
          </p>
        </div>

        <ul className="reassure">
          <li><Check size={16} />Keine Vorbereitung nötig</li>
          <li><Check size={16} />Kein Verkaufsdruck</li>
          <li><Check size={16} />Konkrete Erkenntnisse garantiert</li>
        </ul>
        <p className="booking-alt">
          Lieber direkt sprechen? <a href="tel:+491726932222" className="link">0172 693 22 22</a>
        </p>
        <p className="booking-alt">
          Noch nicht bereit für ein Gespräch?{" "}
          <Link href="/prozess-check" className="link">Starten Sie mit dem 4-Minuten-Prozess-Check <Arrow /></Link>
        </p>
      </div>
    </section>
  )
}
