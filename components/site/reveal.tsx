import type { ReactNode } from "react"

/**
 * Früher: Einblenden beim ersten Sichtbarwerden, in jedem Abschnitt gleich.
 * Jetzt bewusst ruhig — Inhalt steht ab dem ersten Byte sichtbar da und hängt
 * nicht am JavaScript. Bewegung tragen nur noch die eigentlichen Momente:
 * Titelmaske, Vorgang mit Stempel, Goldlinie der Säulen, Beleg-Summe.
 * Die Schnittstelle bleibt, damit Abschnitte gezielt wieder Bewegung bekommen können.
 */
export function Reveal({
  children,
  className,
  style,
}: {
  children: ReactNode
  delay?: number
  className?: string
  style?: React.CSSProperties
}) {
  return (
    <div className={className} style={style}>
      {children}
    </div>
  )
}
