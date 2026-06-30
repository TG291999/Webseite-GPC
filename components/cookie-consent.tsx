"use client"

import { useEffect, useState } from "react"

const GA_ID = "G-2CZ45RDLYD"
const STORAGE_KEY = "gpc-cookie-consent" // "granted" | "denied"

/**
 * Lädt Google Analytics (gtag.js) — wird NUR nach ausdrücklicher Einwilligung
 * aufgerufen. Vorher wird kein Google-Skript geladen und kein Cookie gesetzt.
 */
function loadGoogleAnalytics() {
  const w = window as any
  if (w.__gaLoaded) return
  w.__gaLoaded = true

  const s = document.createElement("script")
  s.async = true
  s.src = "https://www.googletagmanager.com/gtag/js?id=" + GA_ID
  document.head.appendChild(s)

  w.dataLayer = w.dataLayer || []
  w.gtag = function () {
    w.dataLayer.push(arguments)
  }
  w.gtag("js", new Date())
  w.gtag("config", GA_ID)
}

export function CookieConsent() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    let stored: string | null = null
    try {
      stored = localStorage.getItem(STORAGE_KEY)
    } catch {
      /* localStorage nicht verfügbar */
    }

    if (stored === "granted") {
      loadGoogleAnalytics()
    } else if (stored !== "denied") {
      setVisible(true) // noch keine Entscheidung → Banner zeigen
    }

    // „Cookie-Einstellungen"-Link (Footer) öffnet das Banner erneut → Widerruf/Änderung
    const onReopen = (e: Event) => {
      const target = e.target as HTMLElement | null
      if (target && target.closest(".js-cookie-settings")) {
        e.preventDefault()
        setVisible(true)
      }
    }
    document.addEventListener("click", onReopen)
    return () => document.removeEventListener("click", onReopen)
  }, [])

  const decide = (granted: boolean) => {
    try {
      localStorage.setItem(STORAGE_KEY, granted ? "granted" : "denied")
    } catch {
      /* ignore */
    }
    if (granted) loadGoogleAnalytics()
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="cc-overlay" role="dialog" aria-modal="true" aria-label="Cookie-Einstellungen">
      <div className="cc-banner">
        <p className="cc-title">Datenschutz &amp; Cookies</p>
        <p className="cc-text">
          Neben technisch notwendigen Cookies nutze ich — nur mit Ihrer Einwilligung —
          Google&nbsp;Analytics, um die Nutzung dieser Website zu verstehen und zu verbessern.
          Sie entscheiden frei und können Ihre Wahl jederzeit ändern. Details in der{" "}
          <a href="/datenschutz">Datenschutzerklärung</a>.
        </p>
        <div className="cc-actions">
          <button type="button" className="cc-btn cc-accept" onClick={() => decide(true)}>
            Akzeptieren
          </button>
          <button type="button" className="cc-btn cc-decline" onClick={() => decide(false)}>
            Ablehnen
          </button>
        </div>
      </div>
    </div>
  )
}
