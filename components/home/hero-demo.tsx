"use client"

import { useEffect, useRef, useState } from "react"
import { AnimatePresence, motion, useInView, useReducedMotion } from "motion/react"
import { Check, Replay } from "@/components/site/icons"

/**
 * Die Hero-Demo als Vorgang auf Papier: Anfrage erkannt, Entwurf liegt bereit,
 * ein Klick auf „Freigeben" setzt den Stempel. Genau das ist das Versprechen:
 * Die Technik bereitet vor, ein Mensch entscheidet.
 */
export function HeroDemo() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.35 })
  const reduce = useReducedMotion()
  const [play, setPlay] = useState(false)
  const [editing, setEditing] = useState(false)
  const [sent, setSent] = useState(false)
  const [time, setTime] = useState("")
  // Fokus folgt dem Vorgang: nach „Freigeben" auf „Nochmal ansehen", danach zurück.
  const replayRef = useRef<HTMLButtonElement>(null)
  const approveRef = useRef<HTMLButtonElement>(null)
  const focusNext = useRef<"replay" | "approve" | null>(null)

  useEffect(() => {
    if (focusNext.current === "replay") replayRef.current?.focus()
    if (focusNext.current === "approve") approveRef.current?.focus()
    focusNext.current = null
  }, [sent])

  useEffect(() => {
    if (inView) setPlay(true)
  }, [inView])

  const approve = () => {
    setEditing(false)
    setTime(new Date().toLocaleTimeString("de-DE", { hour: "2-digit", minute: "2-digit" }))
    focusNext.current = "replay"
    setSent(true)
  }
  const replay = () => {
    focusNext.current = "approve"
    setSent(false)
    setEditing(false)
    setPlay(false)
    requestAnimationFrame(() => setPlay(true))
  }

  return (
    <div
      ref={ref}
      className={`vg-wrap${play ? " play" : ""}`}
      role="group"
      aria-label="Interaktive Demo: Eine Mieteranfrage wird automatisch vorsortiert, ein Antwortentwurf vorbereitet und vom Mitarbeiter per Klick freigegeben."
    >
      <div className={`vg${editing ? " editing" : ""}${sent ? " sent" : ""}`}>
        <div className="vg-head">
          <span>Mieteranfrage · Posteingang</span>
          <b>Vorgang 2026-0412</b>
        </div>

        <ol className="vg-prog" aria-hidden="true">
          <li className="done"><i><Check size={10} /></i>Anfrage</li>
          <li className="done"><i><Check size={10} /></i>Vorbereitet</li>
          <li className={sent ? "done" : ""}><i>{sent ? <Check size={10} /> : "3"}</i>Freigabe</li>
        </ol>

        <div className="vg-body">
          <dl className="vg-meta">
            <dt>Betreff</dt>
            <dd>Nebenkostenabrechnung 2024 – Whg. 12</dd>
            <dt>Absender</dt>
            <dd>Mieter · Lindenstr. 14</dd>
          </dl>

          <div className="vg-chips">
            <span className="vg-chip"><Check size={11} />Erkannt: Nebenkosten</span>
            <span className="vg-chip ok"><Check size={11} />Vorsortiert &amp; zugeordnet</span>
          </div>

          <div className="vg-draft">
            <span className="vg-draft-label">KI-Entwurf · von Mensch zu prüfen</span>
            {/* Beispieltext der Demonstration, kein echter Vorgang */}
            <p className="vg-draft-text">
              Guten Tag, vielen Dank für Ihre Nachricht zur Nebenkostenabrechnung 2024 für
              Wohnung 12. Die Positionen Heizung und Wasser finden Sie auf Seite 2. Die Belege
              können Sie gern nach Terminabsprache bei uns einsehen. Mit freundlichen Grüßen
            </p>

            <AnimatePresence>
              {sent && (
                <motion.div
                  className="stamp"
                  aria-hidden="true"
                  initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 1.8, rotate: -2 }}
                  animate={{ opacity: 1, scale: 1, rotate: -9 }}
                  exit={{ opacity: 0 }}
                  transition={{ type: "spring", bounce: 0.38, duration: 0.55 }}
                >
                  Freigegeben
                  <small>von Mensch · {time}</small>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {!sent ? (
          <div className="vg-foot">
            <button type="button" ref={approveRef} className="btn vg-approve" onClick={approve}>
              <Check size={16} />Freigeben
            </button>
            <button type="button" className="vg-edit" onClick={() => setEditing((e) => !e)}>
              Bearbeiten
            </button>
            <span className="vg-hint">{editing ? "Anpassen, dann freigeben" : "Sie sind dran"}</span>
          </div>
        ) : (
          <div className="vg-sent" aria-live="polite">
            <div className="vg-sent-row">
              <i><Check size={18} /></i>
              <div>
                <b>Antwort gesendet &amp; dokumentiert</b>
                <span>Im System hinterlegt — freigegeben von einem Menschen.</span>
              </div>
            </div>
            <div className="vg-metric">
              <b>~8 Sekunden</b> statt ~6 Minuten Handarbeit — so bekommt Ihr Team Stunden zurück.
            </div>
            <button type="button" ref={replayRef} className="vg-replay" onClick={replay}>
              <Replay />Nochmal ansehen
            </button>
          </div>
        )}
      </div>
      <p className="vg-caption">Jede Standardanfrage kommt vorbereitet bei Ihnen an — Sie geben nur noch frei.</p>
    </div>
  )
}
