"use client"

import Link from "next/link"
import { useEffect, useState } from "react"

/**
 * Feste Buchungsleiste am Handy. Sie tritt zurück, sobald der Kalender selbst
 * im Bild ist — dort wäre sie nur ein Deckel über dem, wofür sie wirbt.
 */
export function MobileCta() {
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    const target = document.getElementById("buchung")
    if (!target) return
    const io = new IntersectionObserver(
      ([e]) => setHidden(e.isIntersecting || e.boundingClientRect.top < 0),
      { rootMargin: "0px 0px -20% 0px" },
    )
    io.observe(target)
    return () => io.disconnect()
  }, [])

  return (
    <div className={`mobile-cta${hidden ? " is-hidden" : ""}`} aria-hidden={hidden || undefined}>
      <Link href="#buchung" className="btn btn-block" tabIndex={hidden ? -1 : undefined}>
        Kostenlose Analyse sichern <span className="arrow" aria-hidden="true">→</span>
      </Link>
    </div>
  )
}
