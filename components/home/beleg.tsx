"use client"

import { useEffect, useRef, useState } from "react"
import { animate, useInView, useReducedMotion } from "motion/react"

const WOCHEN = 46
const fmt = new Intl.NumberFormat("de-DE")

/**
 * Das Rechenbeispiel als Beleg: Positionen mit Punktleitlinien, Summe unter
 * dem Doppelstrich. Die Summe federt zum neuen Wert, unterbrechbar.
 */
export function Beleg() {
  const [n, setN] = useState(4)
  const [h, setH] = useState(5)
  const [r, setR] = useState(38)
  const target = n * h * r * WOCHEN

  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.4 })
  const reduce = useReducedMotion()
  const [shown, setShown] = useState(0)
  const shownRef = useRef(0)
  const ctrl = useRef<{ stop: () => void } | null>(null)
  const started = useRef(false)

  useEffect(() => {
    if (!inView) return
    if (reduce) {
      shownRef.current = target
      setShown(target)
      return
    }
    ctrl.current?.stop()
    const from = started.current ? shownRef.current : 0
    started.current = true
    ctrl.current = animate(from, target, {
      type: "spring",
      bounce: 0,
      duration: from === 0 ? 1.2 : 0.5,
      onUpdate: (v) => {
        shownRef.current = v
        setShown(v)
      },
    })
    return () => ctrl.current?.stop()
  }, [inView, target, reduce])

  const pct = (v: number, min: number, max: number) => `${((v - min) / (max - min)) * 100}%`

  return (
    <div className="beleg" ref={ref} role="group" aria-label="Interaktives Rechenbeispiel: Stellen Sie Ihre eigenen Zahlen ein">
      <div className="beleg-head">
        <b>Ihr Rechenbeispiel</b>
        <span>stellen Sie Ihre Zahlen ein</span>
      </div>

      <div className="beleg-slider">
        <div className="beleg-row">
          <span className="lbl">Sachbearbeiter</span>
          <span className="leader" aria-hidden="true" />
          <output htmlFor="calcN">{n}</output>
        </div>
        <input id="calcN" type="range" min={1} max={20} step={1} value={n} aria-label="Anzahl Sachbearbeiter"
          style={{ "--p": pct(n, 1, 20) } as React.CSSProperties} onChange={(e) => setN(Number(e.target.value))} />
      </div>

      <div className="beleg-slider">
        <div className="beleg-row">
          <span className="lbl">Std./Woche für Standardanfragen</span>
          <span className="leader" aria-hidden="true" />
          <output htmlFor="calcH">je {h}</output>
        </div>
        <input id="calcH" type="range" min={2} max={20} step={1} value={h} aria-label="Stunden pro Woche für Standardanfragen"
          style={{ "--p": pct(h, 2, 20) } as React.CSSProperties} onChange={(e) => setH(Number(e.target.value))} />
      </div>

      <div className="beleg-slider">
        <div className="beleg-row">
          <span className="lbl">Vollkosten je Stunde <small>(Gehalt, Nebenkosten, Arbeitsplatz)</small></span>
          <span className="leader" aria-hidden="true" />
          <output htmlFor="calcR">{r}&nbsp;€</output>
        </div>
        <input id="calcR" type="range" min={20} max={70} step={1} value={r} aria-label="Vollkosten je Stunde in Euro"
          style={{ "--p": pct(r, 20, 70) } as React.CSSProperties} onChange={(e) => setR(Number(e.target.value))} />
      </div>

      <div className="beleg-row static">
        <span className="lbl">Arbeitswochen pro Jahr</span>
        <span className="leader" aria-hidden="true" />
        <span className="val">{WOCHEN}</span>
      </div>

      <div className="beleg-sum">
        <span className="lbl">Beispielhafte gebundene Arbeitszeit pro Jahr</span>
        <output aria-live="polite">{fmt.format(Math.round(shown / 500) * 500)}&nbsp;€</output>
      </div>

      <p className="beleg-note">
        <span className="beleg-way">Rechenweg: Personen × Stunden × Stundensatz × 46 Wochen</span>
        Das ist keine garantierte Ersparnis, sondern eine Modellrechnung. Ihre echten Zahlen
        prüfen wir in der kostenlosen Analyse.
      </p>
    </div>
  )
}
