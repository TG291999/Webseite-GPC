"use client"

import { useState } from "react"
import { motion, useReducedMotion } from "motion/react"

const WORDS: Array<{ t: string; em?: boolean }> = [
  { t: "Ich" },
  { t: "gebe" },
  { t: "Ihrer" },
  { t: "Verwaltung" },
  { t: "Zeit", em: true },
  { t: "zurück." },
]

/** Titel, Wort für Wort aus einer Maske nach oben — einmal, beim Laden. */
export function HeroTitle() {
  const reduce = useReducedMotion()
  const [done, setDone] = useState(false)
  return (
    <h1 className={done ? "in" : undefined} aria-label="Ich gebe Ihrer Verwaltung Zeit zurück.">
      {WORDS.map((w, i) => (
        <span key={i} className="w" aria-hidden="true">
          <motion.span
            className="wi"
            initial={reduce ? false : { y: "110%" }}
            animate={{ y: 0 }}
            transition={{ type: "spring", bounce: 0, duration: 0.9, delay: 0.08 + i * 0.07 }}
            onAnimationComplete={i === WORDS.length - 1 ? () => setDone(true) : undefined}
          >
            {w.em ? <em className="mark">{w.t}</em> : w.t}
          </motion.span>
        </span>
      )).flatMap((el, i) => (i < WORDS.length - 1 ? [el, " "] : [el]))}
    </h1>
  )
}
