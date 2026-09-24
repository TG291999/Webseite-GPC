"use client"

import Link from "next/link"
import { useEffect, useId, useState } from "react"
import { LogoMark, Wordmark } from "./logo"

const LINKS = [
  { href: "/#methode", label: "Methode" },
  { href: "/#loesung", label: "Lösung" },
  { href: "/#ablauf", label: "Ablauf" },
  { href: "/#ueber-mich", label: "Über mich" },
]

/**
 * Kopfzeile für alle Seiten. Auf der Startseite zeigt sie den Rand erst nach
 * dem ersten Scrollen; das Mobilmenü ist ein einfaches Panel unter der Leiste.
 */
export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const menuId = useId()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false)
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [open])

  return (
    <>
      <a href="#hauptinhalt" className="skip-link">Zum Inhalt springen</a>
      <header className={`header${scrolled ? " scrolled" : ""}`}>
        <div className="container nav">
          <Link href="/" className="brand" aria-label="Goebel & Partner Consulting — Startseite">
            <LogoMark />
            <Wordmark />
          </Link>

          <nav className="nav-links" aria-label="Hauptnavigation">
            {LINKS.map((l) => (
              <Link key={l.href} href={l.href}>{l.label}</Link>
            ))}
            <Link href="/prozess-check" className="is-tool">Prozess-Check</Link>
          </nav>

          <div className="nav-cta">
            <Link href="/#buchung" className="btn">
              Kostenlose Analyse <span className="arrow" aria-hidden="true">→</span>
            </Link>
          </div>

          <button
            type="button"
            className="burger"
            aria-label={open ? "Menü schließen" : "Menü öffnen"}
            aria-expanded={open}
            aria-controls={menuId}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18" /></svg>
            ) : (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><line x1="3" y1="7" x2="21" y2="7" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="17" x2="21" y2="17" /></svg>
            )}
          </button>
        </div>

        <div id={menuId} className={`mobile-menu${open ? " open" : ""}`}>
          <nav aria-label="Mobile Navigation" onClick={() => setOpen(false)}>
            {LINKS.map((l) => (
              <Link key={l.href} href={l.href}>{l.label}</Link>
            ))}
            <Link href="/prozess-check">Prozess-Check</Link>
            <a href="tel:+491726932222">Anrufen: 0172 693 22 22</a>
            <Link href="/#buchung" className="btn">Kostenlose Analyse <span className="arrow" aria-hidden="true">→</span></Link>
          </nav>
        </div>
      </header>
    </>
  )
}
