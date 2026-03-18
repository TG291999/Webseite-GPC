"use client"

import { useEffect, useRef, useState } from "react"

const stats = [
  { value: 12, suffix: "+", label: "Projekte" },
  { value: 5, suffix: " Jahre", label: "Unternehmererfahrung" },
  { value: 1, suffix: "", label: "Ansprechpartner" },
]

const edges = [
  "Kein Informationsverlust zwischen Berater und Entwickler",
  "Persönliche Verantwortung für das Ergebnis",
  "Kein Agentur-Overhead. Kein Outsourcing.",
  "Strategie und Code aus einer Hand",
]

const skills = [
  "Prozessoptimierung", "Softwareentwicklung", "Strategieberatung",
  "Automatisierung", "KI-Integration", "SaaS", "Web-Apps", "Dashboards",
]

function useCountUp(target: number, isVisible: boolean, duration = 1200) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!isVisible) return
    let start: number | null = null
    const step = (timestamp: number) => {
      if (!start) start = timestamp
      const progress = Math.min((timestamp - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * target))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [isVisible, target, duration])
  return count
}

function StatCounter({ value, suffix, label, isVisible }: { value: number; suffix: string; label: string; isVisible: boolean }) {
  const count = useCountUp(value, isVisible)
  return (
    <div className="text-center">
      <div className="font-serif text-4xl md:text-5xl text-white leading-none mb-1">
        {count}{suffix}
      </div>
      <div className="text-xs uppercase tracking-[0.2em] text-white/35">{label}</div>
    </div>
  )
}

export function AboutSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [lineVisible, setLineVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          setTimeout(() => setLineVisible(true), 300)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="ueber-mich"
      className="py-24 md:py-36 overflow-hidden relative"
      style={{
        background:
          'radial-gradient(ellipse at 80% 15%, rgba(26,80,45,0.25) 0%, transparent 50%), radial-gradient(ellipse at 5% 80%, rgba(184,150,62,0.05) 0%, transparent 45%), #090D0A',
      }}
    >
      <div className="mx-auto max-w-[1200px] px-6">

        {/* Label */}
        <div
          className="mb-16 transition-all duration-700"
          style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? "translateY(0)" : "translateY(20px)" }}
        >
          <p className="text-xs font-medium uppercase tracking-[0.35em] text-[#B8963E]">
            Ihr Ansprechpartner
          </p>
        </div>

        {/* Main grid — photo left, content right */}
        <div className="grid lg:grid-cols-2 gap-0 items-stretch mb-24">

          {/* Left — Portrait photo */}
          <div
            className="relative flex items-end justify-center transition-all duration-1000 delay-100 overflow-hidden"
            style={{
              opacity: isVisible ? 1 : 0,
              minHeight: "clamp(420px, 55vw, 660px)",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/freepik__background__20574.png"
              alt="Tim Goebel"
              className="w-full h-full object-contain object-bottom"
              style={{
                transform: isVisible ? "scale(1) translateY(0)" : "scale(1.04) translateY(12px)",
                transition: "transform 1.2s cubic-bezier(0.22,1,0.36,1) 0.2s",
                filter: "brightness(0.92) contrast(1.05)",
              }}
            />
          </div>

          {/* Right — Content */}
          <div
            className="flex flex-col justify-center pl-0 lg:pl-14 pt-10 lg:pt-0 transition-all duration-700 delay-200"
            style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? "translateY(0)" : "translateY(24px)" }}
          >
            <h2 className="font-serif text-5xl md:text-6xl text-white mb-2 leading-tight">
              Tim Goebel
            </h2>
            <p className="text-[#B8963E] text-sm font-medium uppercase tracking-[0.2em] mb-8">
              Unternehmer · Entwickler · Stratege
            </p>

            {/* Gold rule animates in */}
            <div
              className="mb-8 h-px transition-all duration-[1000ms]"
              style={{
                width: lineVisible ? "100%" : "0%",
                background: 'linear-gradient(to right, #B8963E, rgba(184,150,62,0.1))',
              }}
            />

            <p className="text-white/45 text-base leading-relaxed mb-6">
              Mein Hintergrund ist kein Beratungskonzern – sondern jahrelange Praxis als Gründer,
              Entwickler und Unternehmer. Ich habe ein eigenes SaaS-Startup aufgebaut, komplexe
              Software selbst programmiert und Geschäftsprozesse von Grund auf strukturiert.
            </p>
            <p className="text-white/45 text-base leading-relaxed mb-10">
              Das Resultat: Ich verstehe nicht nur, wo Ihr Problem liegt – ich baue die Lösung selbst.
              Ein Ansprechpartner, keine Hierarchien, volle Verantwortung.
            </p>

            {/* Edge list */}
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#B8963E] mb-4">
              Der Unterschied
            </p>
            <div className="space-y-0">
              {edges.map((edge, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 py-4 border-b border-white/[0.06] first:border-t first:border-white/[0.06]"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? "translateX(0)" : "translateX(16px)",
                    transition: "opacity 0.6s ease, transform 0.6s ease",
                    transitionDelay: `${400 + i * 90}ms`,
                  }}
                >
                  <span className="font-serif text-lg text-[#B8963E]/30 leading-none flex-shrink-0 w-5 mt-0.5">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-white/70 text-sm leading-relaxed">{edge}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div
          className="border-t border-b border-white/[0.06] py-12 transition-all duration-700 delay-500"
          style={{ opacity: isVisible ? 1 : 0 }}
        >
          <div className="grid grid-cols-3 gap-8 divide-x divide-white/[0.06]">
            {stats.map((s) => (
              <StatCounter key={s.label} {...s} isVisible={isVisible} />
            ))}
          </div>
        </div>

        {/* Skill ticker */}
        <div
          className="mt-12 overflow-hidden transition-all duration-700 delay-700"
          style={{ opacity: isVisible ? 1 : 0 }}
        >
          <div className="flex gap-3 flex-wrap">
            {skills.map((skill, i) => (
              <span
                key={i}
                className="px-4 py-1.5 text-xs uppercase tracking-[0.18em] text-white/30 transition-colors duration-300 hover:text-white/60"
                style={{ border: '1px solid rgba(255,255,255,0.08)' }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
