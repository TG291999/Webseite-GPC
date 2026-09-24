import type { ReactNode } from "react"

/**
 * Kapitelkopf: Nummer · Strich · Kapitelname, darunter Überschrift und
 * Unterzeile. Die Nummerierung macht die Seite als Akte lesbar.
 */
export function SectionHead({
  n,
  kicker,
  title,
  sub,
  center,
  className,
}: {
  n: string
  kicker: string
  title: ReactNode
  sub?: ReactNode
  center?: boolean
  className?: string
}) {
  return (
    <div className={`section-head${center ? " center" : ""}${className ? ` ${className}` : ""}`}>
      <div className="kicker">
        <span className="kicker-n" aria-hidden="true">{n}</span>
        <span className="kicker-rule" aria-hidden="true" />
        <span className="kicker-t">{kicker}</span>
      </div>
      <h2>{title}</h2>
      {sub && <p className="subhead">{sub}</p>}
    </div>
  )
}
