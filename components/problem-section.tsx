"use client"

import { useEffect, useRef, useState } from "react"

const painPoints = [
  { num: "01", text: "E-Mail, Excel, Zettel – statt echter Prozesse" },
  { num: "02", text: "Daten mehrfach eingegeben, niemand hat den Überblick" },
  { num: "03", text: "Tools, die nicht miteinander sprechen" },
  { num: "04", text: "Täglich Stunden für Aufgaben, die kein Mensch braucht" },
  { num: "05", text: "Leads verloren. Chancen verpasst. Geld weg." },
]

export function ProblemSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [visibleItems, setVisibleItems] = useState<boolean[]>(
    new Array(painPoints.length).fill(false)
  )
  const [showConclusion, setShowConclusion] = useState(false)
  const [showTransform, setShowTransform] = useState(false)
  const [dividerPos, setDividerPos] = useState(100)
  const [isDragging, setIsDragging] = useState(false)
  const sliderRef = useRef<HTMLDivElement>(null)

  // Animate divider in when section becomes visible
  useEffect(() => {
    if (showTransform) {
      const t = setTimeout(() => setDividerPos(50), 400)
      return () => clearTimeout(t)
    }
  }, [showTransform])

  useEffect(() => {
    const observers: IntersectionObserver[] = []

    const items = sectionRef.current?.querySelectorAll("[data-item]")
    items?.forEach((item, i) => {
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setVisibleItems((prev) => {
                const next = [...prev]
                next[i] = true
                return next
              })
            }, i * 120)
            obs.disconnect()
          }
        },
        { threshold: 0.2 }
      )
      obs.observe(item)
      observers.push(obs)
    })

    const conclusionEl = sectionRef.current?.querySelector("[data-conclusion]")
    if (conclusionEl) {
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) { setShowConclusion(true); obs.disconnect() } },
        { threshold: 0.3 }
      )
      obs.observe(conclusionEl)
      observers.push(obs)
    }

    const transformEl = sectionRef.current?.querySelector("[data-transform]")
    if (transformEl) {
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) { setShowTransform(true); obs.disconnect() } },
        { threshold: 0.2 }
      )
      obs.observe(transformEl)
      observers.push(obs)
    }

    return () => observers.forEach((o) => o.disconnect())
  }, [])

  const handlePointerMove = (clientX: number) => {
    if (!isDragging || !sliderRef.current) return
    const rect = sliderRef.current.getBoundingClientRect()
    const x = ((clientX - rect.left) / rect.width) * 100
    setDividerPos(Math.min(92, Math.max(8, x)))
  }

  return (
    <section
      ref={sectionRef}
      id="problem"
      className="py-24 md:py-36 overflow-hidden"
      style={{
        background:
          'radial-gradient(ellipse at 80% 10%, rgba(184,150,62,0.07) 0%, transparent 45%), radial-gradient(ellipse at 10% 70%, rgba(26,60,35,0.25) 0%, transparent 50%), #090D0A',
      }}
    >
      <div className="mx-auto max-w-[1100px] px-6">

        {/* ── Header ── */}
        <div className="mb-20 text-center relative">
          <span
            className="pointer-events-none absolute inset-0 flex items-center justify-center select-none font-serif leading-none text-white/[0.025]"
            style={{ fontSize: "clamp(10rem, 30vw, 22rem)" }}
            aria-hidden="true"
          >
            ?
          </span>
          <p className="mb-5 text-xs font-medium uppercase tracking-[0.35em] text-[#B8963E]">
            Diagnose
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-[3.5rem] text-white leading-tight">
            Kommt Ihnen das bekannt vor?
          </h2>
        </div>

        {/* ── Pain Points — Horizontal Wipe-In ── */}
        <div className="mb-20">
          {painPoints.map((point, i) => (
            <div
              key={i}
              data-item
              className="relative overflow-hidden border-b border-white/[0.08] first:border-t first:border-white/[0.08]"
            >
              <div
                className="flex items-center gap-6 md:gap-10 py-6 md:py-7 px-2"
                style={{
                  clipPath: visibleItems[i] ? "inset(0 0% 0 0)" : "inset(0 100% 0 0)",
                  transition: "clip-path 0.75s cubic-bezier(0.77,0,0.18,1)",
                  transitionDelay: `${i * 80}ms`,
                }}
              >
                <span
                  className="font-serif leading-none select-none flex-shrink-0 w-12 text-right"
                  style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "rgba(184,150,62,0.25)" }}
                >
                  {point.num}
                </span>
                <p className="text-base md:text-xl text-white/70 leading-relaxed">
                  {point.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ── Conclusion ── */}
        <div
          data-conclusion
          className={`text-center mb-24 transition-all duration-1000 ease-out ${
            showConclusion ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div
            className={`mx-auto mb-10 h-px bg-gradient-to-r from-transparent via-[#B8963E] to-transparent transition-all duration-[1200ms] delay-300 ease-out ${
              showConclusion ? "w-64 opacity-100" : "w-0 opacity-0"
            }`}
          />
          <p className="font-serif text-2xl md:text-3xl text-white/50 italic">
            Das Ergebnis:{" "}
            <span className="text-white not-italic">
              Zeitverlust. Kosten. Verschenktes Potenzial.
            </span>
          </p>
        </div>

        {/* ── Before / After Image Slider ── */}
        <div
          data-transform
          className={`transition-all duration-1000 ease-out ${
            showTransform ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <p className="text-center text-xs font-medium uppercase tracking-[0.3em] text-white/25 mb-6 select-none">
            ← Ziehen zum Vergleichen →
          </p>

          <div
            ref={sliderRef}
            className="relative overflow-hidden select-none"
            style={{
              height: "clamp(280px, 45vw, 560px)",
              cursor: "ew-resize",
              borderRadius: "4px",
            }}
            onMouseMove={(e) => handlePointerMove(e.clientX)}
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
            onTouchMove={(e) => { e.preventDefault(); handlePointerMove(e.touches[0].clientX) }}
            onTouchStart={() => setIsDragging(true)}
            onTouchEnd={() => setIsDragging(false)}
          >
            {/* VORHER — chaotic UI screenshot (full background) */}
            <div className="absolute inset-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/freepik__a-fullscreen-realistic-ui-screenshot-of-a-cluttere__20572.png"
                alt="Vorher: unstrukturiertes System"
                className="w-full h-full object-cover object-top"
                draggable={false}
              />
              {/* Dark overlay for readability */}
              <div className="absolute inset-0 bg-black/30" />
              {/* Label */}
              <div className="absolute top-5 left-5">
                <span className="inline-block bg-black/60 backdrop-blur-sm text-white/70 text-[0.6rem] font-semibold tracking-[0.3em] uppercase px-3 py-1.5">
                  Vorher
                </span>
              </div>
            </div>

            {/* NACHHER — clean modern UI screenshot, clipped from right */}
            <div
              className="absolute inset-0"
              style={{
                clipPath: `inset(0 0 0 ${dividerPos}%)`,
                transition: isDragging ? "none" : "clip-path 1s cubic-bezier(0.77,0,0.18,1)",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/freepik__klone-das-bild-img1-11-doch-entferne-alle-logos-un__95756.png"
                alt="Nachher: modernes, strukturiertes System"
                className="w-full h-full object-cover object-top"
                draggable={false}
              />
              {/* Subtle overlay */}
              <div className="absolute inset-0 bg-black/10" />
              {/* Label */}
              <div className="absolute top-5 right-5">
                <span className="inline-block bg-[#B8963E]/90 backdrop-blur-sm text-white text-[0.6rem] font-semibold tracking-[0.3em] uppercase px-3 py-1.5">
                  Nachher
                </span>
              </div>
            </div>

            {/* Divider Handle */}
            <div
              className="absolute top-0 bottom-0 flex items-center pointer-events-none z-10"
              style={{
                left: `${dividerPos}%`,
                transform: "translateX(-50%)",
                transition: isDragging ? "none" : "left 1s cubic-bezier(0.77,0,0.18,1)",
              }}
            >
              {/* Vertical line */}
              <div className="w-px h-full bg-[#B8963E]" style={{ boxShadow: "0 0 12px rgba(184,150,62,0.6)" }} />
              {/* Handle circle */}
              <div
                className="absolute w-10 h-10 rounded-full flex items-center justify-center"
                style={{
                  background: "#B8963E",
                  boxShadow: "0 0 0 3px rgba(184,150,62,0.25), 0 4px 20px rgba(0,0,0,0.4)",
                }}
              >
                <svg width="16" height="10" viewBox="0 0 16 10" fill="none">
                  <path d="M1 5H15M1 5L4 2M1 5L4 8M15 5L12 2M15 5L12 8" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
