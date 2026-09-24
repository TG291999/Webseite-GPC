import type { ReactNode } from "react"

/** Abschnittskopf: eine Überschrift, die für sich steht, darunter eine Unterzeile. */
export function SectionHead({
  title,
  sub,
  center,
  className,
}: {
  title: ReactNode
  sub?: ReactNode
  center?: boolean
  className?: string
}) {
  return (
    <div className={`head${center ? " center" : ""}${className ? ` ${className}` : ""}`}>
      <h2>{title}</h2>
      {sub && <p className="sub">{sub}</p>}
    </div>
  )
}
