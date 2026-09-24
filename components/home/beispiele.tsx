"use client"

import { useEffect, useId, useRef, useState } from "react"
import { Check, Replay, Arrow } from "@/components/site/icons"
import { useReducedMotion } from "motion/react"
import { SectionHead } from "@/components/site/section-head"

type State = "before" | "after"

/** Eine Akte mit zwei Reitern: Vorher / Nachher. Eigener Zustand je Karte, kein Auto-Play. */
function Akte({
  tag,
  title,
  label,
  before,
  after,
  metrics,
}: {
  tag: string
  title: string
  label: string
  before: React.ReactNode
  after: (approved: boolean, approve: () => void) => React.ReactNode
  metrics: Array<{ label: string; before: string; after: string }>
}) {
  const reduce = useReducedMotion()
  const [state, setState] = useState<State>("before")
  const [running, setRunning] = useState(false)
  const [approved, setApproved] = useState(false)
  const timer = useRef<number | undefined>(undefined)

  useEffect(() => () => window.clearTimeout(timer.current), [])

  const show = (s: State) => {
    window.clearTimeout(timer.current)
    setRunning(false)
    setState(s)
    if (s === "before") setApproved(false)
  }
  const run = () => {
    if (state === "after") return show("before")
    if (reduce) return show("after")
    window.clearTimeout(timer.current)
    setRunning(true)
    setState("after")
    timer.current = window.setTimeout(() => setRunning(false), 1500)
  }

  const uid = useId()
  const onTabKey = (e: React.KeyboardEvent) => {
    if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return
    e.preventDefault()
    const next: State = state === "before" ? "after" : "before"
    show(next)
    document.getElementById(`${uid}-${next}-tab`)?.focus()
  }

  return (
    <div className={`sc${running ? " running" : ""}`} data-state={state} role="group" aria-label={label}>
      <div className="sc-head">
        <h3 className="sc-title">{title}</h3>
        <p className="sc-tag">{tag}</p>
      </div>
      <div className="sc-bar">
        <div className="sc-tabs" role="tablist" aria-label="Ansicht wählen">
          {(["before", "after"] as const).map((t) => (
            <button key={t} type="button" role="tab" id={`${uid}-${t}-tab`} className="sc-tab"
              aria-selected={state === t} aria-controls={`${uid}-${t}`} tabIndex={state === t ? 0 : -1}
              onClick={() => show(t)} onKeyDown={onTabKey}>
              {t === "before" ? "Vorher" : "Nachher"}
            </button>
          ))}
        </div>
        <button type="button" className={`btn sc-run${state === "after" ? " is-reset" : ""}`} onClick={run}>
          {state === "after" ? <>Zurücksetzen <Replay /></> : <>Automatisierung ausführen <Arrow className="arrow" /></>}
        </button>
      </div>
      <div className="sc-stage">
        <div className="sc-view sc-before" role="tabpanel" id={`${uid}-before`} aria-labelledby={`${uid}-before-tab`}>{before}</div>
        <div className="sc-view sc-after" role="tabpanel" id={`${uid}-after`} aria-labelledby={`${uid}-after-tab`}>{after(approved, () => setApproved(true))}</div>
        <dl className="sc-metrics">
          {metrics.map((m) => (
            <div className="sc-metric" key={m.label}>
              <dt className="sc-m-label">{m.label}</dt>
              <dd className="sc-m-pair">
                <span className="sc-m-before">{m.before}</span>
                <span className="sc-m-rest"><Arrow className="sc-m-arrow" size={14} /><b className="sc-m-after">{m.after}</b></span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}

export function Beispiele() {
  return (
    <section className="section" id="beispiele">
      <div className="container">
        <SectionHead
          title="Zwei Vorgänge, die jede Verwaltung kennt."
          sub="So sehen sie heute im Büroalltag aus — und so laufen sie mit Struktur und Automatisierung. Der erste ganz ohne KI. Beides im bestehenden System, ohne Wechsel."
        />
        <p className="sc-disclaimer"><i aria-hidden="true" />Demonstration anhand typischer Vorgänge</p>

          <Akte
            tag="Rechnungseingang · ohne KI"
            title="Die Rechnung, die dreimal durchs Haus läuft"
            label="Beispiel 1: Rechnungseingang – Vorher/Nachher, ohne KI"
            before={
              <>
                <div className="sc-mailhead"><span>Eingangsrechnung · Papier und Mail</span><span className="sc-count-before">Stapel im Fach</span></div>
                <ol className="sc-steps">
                  <li><span className="sc-step-n">01</span>Rechnung kommt per Post — oder an die persönliche Adresse einer Kollegin</li>
                  <li><span className="sc-step-n">02</span>Ausdrucken, in den Postordner, der Ordner kreist durchs Büro</li>
                  <li><span className="sc-step-n">03</span>„Zu welchem Objekt gehört das?" — suchen, nachfragen, warten</li>
                  <li><span className="sc-step-n">04</span>Geschäftsführung prüft, Zettel zurück in die Buchhaltung</li>
                  <li><span className="sc-step-n">05</span>Erfassen, ablegen — das Original landet im Stapel</li>
                </ol>
                <p className="sc-note warn">5 Stationen · 2 Medienbrüche · niemand weiß, wo die Rechnung gerade liegt</p>
              </>
            }
            after={(approved, approve) => (
              <>
                <div className="sc-ticket-head"><span>Rechnung R-2026-0733</span><span className="sc-status">● erfasst &amp; zugeordnet</span></div>
                <dl className="sc-ticket">
                  {[
                    ["Eingang", <>rechnungen@ — ein Postfach für alle Rechnungen, auch gescannte</>],
                    ["Objekt", <>erkannt aus der Auftragsnummer im Betreff</>],
                    ["Ablage", <>Akte des Objekts, Ordner „Rechnungen 2026" — Dateiname nach Regel</>],
                    ["Prüfung", <>Aufgabe an die Geschäftsführung, Beleg im Anhang</>],
                    ["Buchhaltung", <>Wiedervorlage im System — nichts liegt mehr im Fach</>],
                  ].map(([k, v], i) => (
                    <div className="sc-row" key={String(k)} style={{ "--i": i } as React.CSSProperties}>
                      <dt>{k}</dt><dd>{v}</dd>
                    </div>
                  ))}
                </dl>
                <button type="button" className={`btn sc-approve${approved ? " sc-done" : ""}`} onClick={approve} disabled={approved}>
                  {approved ? <>Geprüft &amp; freigegeben <Check size={16} /></> : <>Rechnung freigeben <Arrow className="arrow" /></>}
                </button>
                <p className="sc-note ok">Ohne KI. Ein Postfach, eine Benennungsregel und zwei Funktionen, die Ihre Software schon hat.</p>
              </>
            )}
            metrics={[
              { label: "Stationen", before: "5", after: "2" },
              { label: "Suchen nach der Rechnung", before: "täglich", after: "entfällt" },
              { label: "Wo liegt sie gerade?", before: "niemand weiß es", after: "im System, mit Status" },
            ]}
          />

          <Akte
            tag="Schadensmeldung → Handwerker · mit KI-Entwurf"
            title="Aus drei Zeilen Freitext wird ein fertiger Auftrag"
            label="Beispiel 2: Schadensmeldung zu Handwerker-Auftrag – Vorher/Nachher"
            before={
              <>
                <blockquote className="sc-quote">
                  „Hallo, bei uns tropft seit heute früh Wasser von der Badezimmerdecke, der Boden ist schon ganz nass. Bitte dringend!"
                  <cite>— Fam. Berger · Lindenstr. 14, Whg 4 · 14:28</cite>
                </blockquote>
                <ol className="sc-steps">
                  <li><span className="sc-step-n">01</span>Objekt &amp; Wohnung raussuchen</li>
                  <li><span className="sc-step-n">02</span>Schaden manuell erfassen</li>
                  <li><span className="sc-step-n">03</span>Gewerk bestimmen, Handwerker suchen</li>
                  <li><span className="sc-step-n">04</span>Handwerker anrufen</li>
                  <li><span className="sc-step-n">05</span>Auftrag schreiben &amp; versenden</li>
                </ol>
                <p className="sc-note warn">5 Schritte · 15+ Minuten · Medienbrüche</p>
              </>
            }
            after={(approved, approve) => (
              <>
                <div className="sc-ticket-head"><span>Schadensvorgang #2026-0417</span><span className="sc-status">● Entwurf bereit</span></div>
                <dl className="sc-ticket">
                  {[
                    ["Objekt", <>Lindenstr. 14</>],
                    ["Einheit", <>Whg 4 · Fam. Berger</>],
                    ["Gewerk", <>Sanitär</>],
                    ["Schaden", <>Wasseraustritt Badezimmerdecke</>],
                    ["Dringlichkeit", <span className="sc-high">Hoch</span>],
                    ["Handwerker", <>Sanitär Krause <span className="sc-muted">(Stammhandwerker Obj.)</span></>],
                    ["Auftrag", <>PDF-Entwurf erstellt</>],
                  ].map(([k, v], i) => (
                    <div className="sc-row" key={String(k)} style={{ "--i": i } as React.CSSProperties}>
                      <dt>{k}</dt><dd>{v}</dd>
                    </div>
                  ))}
                </dl>
                <button type="button" className={`btn sc-approve${approved ? " sc-done" : ""}`} onClick={approve} disabled={approved}>
                  {approved ? <>Gesendet &amp; dokumentiert <Check size={16} /></> : <>Freigeben &amp; senden <Arrow className="arrow" /></>}
                </button>
              </>
            )}
            metrics={[
              { label: "Erfassung", before: "5 Schritte", after: "1 Klick" },
              { label: "Zeit pro Schaden", before: "15+ Min", after: "unter 1 Min" },
              { label: "Zuordnung", before: "manuell gesucht", after: "automatisch" },
            ]}
          />

        <p className="sc-footnote">
            Das sind keine Theorie-Beispiele. Diese Abläufe stammen direkt aus dem Verwaltungsalltag,
            den ich aus über 8&nbsp;Jahren in der Branche kenne.
        </p>
      </div>
    </section>
  )
}
