"use client"

import { useEffect, useRef, useState } from "react"

const steps = [
  { num: "01", label: "Erstgespräch" },
  { num: "02", label: "Analyse & Strategie" },
  { num: "03", label: "Konzept & Festpreis" },
  { num: "04", label: "Entwicklung" },
  { num: "05", label: "Übergabe & Betreuung" },
]

const tags = [
  "Web-Portale", "·", "Dashboards", "·", "CRM-Systeme", "·",
  "Automatisierungen", "·", "KI-Integrationen", "·", "Formulare & Erfassung", "·",
  "Prozessoptimierung", "·", "Softwareentwicklung", "·", "Strategie", "·",
]

export function WhatIBuildSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [activeStep, setActiveStep] = useState(0)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { setIsVisible(true); observer.disconnect() }
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  // Cycle through steps
  useEffect(() => {
    if (!isVisible) return
    const interval = setInterval(() => {
      setActiveStep(prev => (prev + 1) % steps.length)
    }, 1400)
    return () => clearInterval(interval)
  }, [isVisible])

  return (
    <section
      ref={sectionRef}
      id="leistungen"
      className="py-20 md:py-28"
      style={{
        background:
          'radial-gradient(ellipse at 20% 50%, rgba(26,60,35,0.3) 0%, transparent 55%), radial-gradient(ellipse at 85% 20%, rgba(184,150,62,0.06) 0%, transparent 40%), #090D0A',
      }}
    >
      <div className="mx-auto max-w-[1200px] px-6">

        {/* Header — editorial split */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left — headline */}
          <div
            className="transition-all duration-700"
            style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? "translateY(0)" : "translateY(20px)" }}
          >
            <p className="text-xs font-medium uppercase tracking-[0.35em] text-[#B8963E] mb-5">
              Individuelle Lösungen
            </p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-[3.25rem] text-white leading-tight">
              Keine Standardsoftware.
              <br />
              <span className="text-white/40">Genau das, was Sie brauchen.</span>
            </h2>
          </div>

          {/* Right — animated steps preview */}
          <div
            className="transition-all duration-700 delay-150"
            style={{ opacity: isVisible ? 1 : 0 }}
          >
            {/* Steps list */}
            <div className="space-y-0 border-t border-white/[0.07]">
              {steps.map((step, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 py-3 border-b border-white/[0.07] transition-all duration-500"
                >
                  {/* Animated dot */}
                  <div className="relative flex-shrink-0 w-5 h-5 flex items-center justify-center">
                    <div
                      className="w-2 h-2 rounded-full transition-all duration-500"
                      style={{
                        background: activeStep === i ? "#B8963E" : "rgba(255,255,255,0.12)",
                        boxShadow: activeStep === i ? "0 0 8px rgba(184,150,62,0.7)" : "none",
                        transform: activeStep === i ? "scale(1.4)" : "scale(1)",
                      }}
                    />
                  </div>

                  {/* Number */}
                  <span
                    className="font-serif text-xs transition-colors duration-500 flex-shrink-0"
                    style={{ color: activeStep === i ? "#B8963E" : "rgba(255,255,255,0.18)" }}
                  >
                    {step.num}
                  </span>

                  {/* Label */}
                  <span
                    className="text-sm transition-all duration-500"
                    style={{
                      color: activeStep === i ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.25)",
                      fontWeight: activeStep === i ? 500 : 400,
                      letterSpacing: activeStep === i ? "0.01em" : "0",
                    }}
                  >
                    {step.label}
                  </span>

                  {/* Progress bar for active step */}
                  <div className="ml-auto h-px flex-1 max-w-[60px] overflow-hidden bg-white/[0.06] rounded-full">
                    <div
                      className="h-full bg-[#B8963E] rounded-full"
                      style={{
                        width: activeStep === i ? "100%" : "0%",
                        transition: activeStep === i ? "width 1.4s linear" : "width 0s",
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Caption */}
            <p className="mt-5 text-[0.65rem] text-white/20 uppercase tracking-[0.2em]">
              So arbeite ich — Schritt für Schritt
            </p>
          </div>
        </div>

      </div>

      {/* Marquee ticker — full width */}
      <div
        className="mt-14 overflow-hidden border-t border-b border-white/[0.06] py-5"
        style={{ opacity: isVisible ? 1 : 0, transition: "opacity 1s ease 0.4s" }}
      >
        <div
          className="flex gap-0 whitespace-nowrap"
          style={{ animation: "marquee 28s linear infinite" }}
        >
          {[...Array(3)].map((_, rep) => (
            <span key={rep} className="flex">
              {tags.map((item, i) => (
                <span
                  key={`${rep}-${i}`}
                  className="px-5 text-xs uppercase tracking-[0.25em]"
                  style={{ color: item === "·" ? "rgba(184,150,62,0.4)" : "rgba(255,255,255,0.18)" }}
                >
                  {item}
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-33.333%); }
        }
      `}</style>
    </section>
  )
}
