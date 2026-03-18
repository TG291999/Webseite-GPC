"use client"

import { useEffect, useRef, useState } from "react"

const steps = [
  {
    num: "01",
    title: "Erstgespräch",
    description: "Sie schildern Ihre Situation. Ich höre zu, stelle die richtigen Fragen. Kostenlos, unverbindlich.",
  },
  {
    num: "02",
    title: "Analyse & Strategie",
    description: "Ich analysiere Ihre Prozesse, identifiziere Engpässe und entwickle eine klare Strategie.",
  },
  {
    num: "03",
    title: "Konzept & Festpreis",
    description: "Maßgeschneidertes Konzept mit konkreten Maßnahmen und transparentem Festpreisangebot.",
  },
  {
    num: "04",
    title: "Entwicklung",
    description: "Ich baue Ihre Lösung: Portale, Dashboards, Automationen – individuell programmiert.",
  },
  {
    num: "05",
    title: "Übergabe & Betreuung",
    description: "Saubere Übergabe und Schulung. Optional: Weiterentwicklung und laufende Betreuung.",
  },
]

export function ProcessSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const lineRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [activeStep, setActiveStep] = useState(-1)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Stagger each step with the line fill
          steps.forEach((_, i) => {
            setTimeout(() => setActiveStep(i), 300 + i * 250)
          })
          observer.disconnect()
        }
      },
      { threshold: 0.15 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="ablauf" className="py-24 md:py-36 bg-white overflow-hidden">
      <div className="mx-auto max-w-[1200px] px-6">

        {/* Header */}
        <div
          className="mb-20 transition-all duration-700"
          style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? "translateY(0)" : "translateY(20px)" }}
        >
          <p className="text-xs font-medium uppercase tracking-[0.35em] text-[#B8963E] mb-5">
            So arbeite ich
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-[3.25rem] text-[#1A2B1E] leading-tight max-w-xl">
            Ein Ansprechpartner.
            <br />
            Von Anfang bis Ende.
          </h2>
        </div>

        {/* Steps — horizontal on desktop, vertical on mobile */}
        <div className="hidden lg:block">
          {/* Connecting line */}
          <div className="relative mb-0">
            <div className="absolute top-[22px] left-[28px] right-[28px] h-px bg-[#1A2B1E]/8" />
            {/* Animated fill line */}
            <div
              className="absolute top-[22px] left-[28px] h-px bg-[#B8963E] transition-all duration-[1500ms] ease-out"
              style={{ width: activeStep >= steps.length - 1 ? "calc(100% - 56px)" : `${(activeStep / (steps.length - 1)) * 100}%` }}
            />

            {/* Step nodes */}
            <div className="grid grid-cols-5">
              {steps.map((step, i) => (
                <div key={i} className="flex flex-col items-center">
                  {/* Node circle */}
                  <div
                    className="relative z-10 flex h-11 w-11 items-center justify-center rounded-full border-2 transition-all duration-500 mb-8"
                    style={{
                      borderColor: activeStep >= i ? "#B8963E" : "#1A2B1E20",
                      backgroundColor: activeStep >= i ? "#B8963E" : "white",
                      transitionDelay: `${i * 250 + 300}ms`,
                      boxShadow: activeStep >= i ? "0 0 0 4px rgba(184,150,62,0.15)" : "none",
                    }}
                  >
                    <span className="font-serif text-xs font-bold" style={{ color: activeStep >= i ? "white" : "#1A2B1E40" }}>
                      {i + 1}
                    </span>
                  </div>

                  {/* Content */}
                  <div
                    className="text-center px-2 transition-all duration-600"
                    style={{
                      opacity: activeStep >= i ? 1 : 0.2,
                      transform: activeStep >= i ? "translateY(0)" : "translateY(8px)",
                      transitionDelay: `${i * 250 + 400}ms`,
                    }}
                  >
                    <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-[#B8963E] mb-2">
                      {step.num}
                    </p>
                    <h3 className="font-serif text-base text-[#1A2B1E] mb-2 leading-snug">
                      {step.title}
                    </h3>
                    <p className="text-xs text-gray-400 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile: vertical list */}
        <div className="lg:hidden space-y-0 border-t border-[#1A2B1E]/8">
          {steps.map((step, i) => (
            <div
              key={i}
              className="flex gap-5 py-6 border-b border-[#1A2B1E]/8"
              style={{
                opacity: activeStep >= i ? 1 : 0.3,
                transform: activeStep >= i ? "translateX(0)" : "translateX(-12px)",
                transition: "opacity 0.5s ease, transform 0.5s ease",
                transitionDelay: `${i * 200}ms`,
              }}
            >
              <div
                className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border-2 transition-all duration-500"
                style={{
                  borderColor: activeStep >= i ? "#B8963E" : "#1A2B1E20",
                  backgroundColor: activeStep >= i ? "#B8963E" : "transparent",
                }}
              >
                <span className="font-serif text-xs font-bold" style={{ color: activeStep >= i ? "white" : "#1A2B1E40" }}>
                  {i + 1}
                </span>
              </div>
              <div>
                <h3 className="font-serif text-base text-[#1A2B1E] mb-1">{step.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Closing quote */}
        <div
          className="mt-20 text-center transition-all duration-700"
          style={{
            opacity: isVisible ? 1 : 0,
            transitionDelay: "1500ms",
          }}
        >
          <p className="font-serif text-xl md:text-2xl text-[#1A2B1E]/40 italic max-w-lg mx-auto">
            „Der Mensch, der Ihre Prozesse versteht, ist derselbe, der die Lösung entwickelt."
          </p>
        </div>

      </div>
    </section>
  )
}
