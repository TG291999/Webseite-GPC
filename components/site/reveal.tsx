"use client"

import { motion, useReducedMotion } from "motion/react"
import type { ReactNode } from "react"

/**
 * Einblenden beim ersten Sichtbarwerden — kritisch gedämpfte Feder, einmalig.
 * Mit `delay` lassen sich Nachbarn in Rastern staffeln (01 → 02 → 03).
 */
export function Reveal({
  children,
  delay = 0,
  className,
  style,
}: {
  children: ReactNode
  delay?: number
  className?: string
  style?: React.CSSProperties
}) {
  const reduce = useReducedMotion()
  return (
    <motion.div
      className={className}
      style={style}
      initial={reduce ? false : { opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -40px 0px" }}
      transition={{ type: "spring", bounce: 0, duration: 0.7, delay }}
    >
      {children}
    </motion.div>
  )
}
