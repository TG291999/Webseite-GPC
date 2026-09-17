"use client"

import { motion, useReducedMotion } from "motion/react"

/** Die goldene Linie zeichnet sich beim Sichtbarwerden von links nach rechts. */
export function PillarsRule() {
  const reduce = useReducedMotion()
  return (
    <div className="pillars-rule" aria-hidden="true">
      <motion.i
        initial={reduce ? false : { scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
      />
    </div>
  )
}
