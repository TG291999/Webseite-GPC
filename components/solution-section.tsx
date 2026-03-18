'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'

const pillars = [
  {
    roman: 'I',
    title: 'Analyse & Strategie',
    description:
      'Ich analysiere Ihre Prozesse, identifiziere Engpässe und verschenktes Potenzial – und entwickle eine klare Strategie.',
    result: 'Klarheit, Richtung, konkreter Plan.',
    heightPct: '72%',
  },
  {
    roman: 'II',
    title: 'Individuelle Entwicklung',
    description:
      'Maßgeschneidert programmiert: Portale, Dashboards, CRM-Systeme, Workflow-Automationen.',
    result: 'Fertige Software, die sofort funktioniert.',
    heightPct: '100%',
  },
  {
    roman: 'III',
    title: 'KI & Wachstum',
    description:
      'KI gezielt in Ihre Workflows integriert – nicht als Gimmick, sondern als aktiver Wachstumstreiber.',
    result: 'Ein System, das Ihren Erfolg vorantreibt.',
    heightPct: '58%',
  },
]

export function SolutionSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [phase, setPhase] = useState(0)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setPhase(1)
          setTimeout(() => setPhase(2), 450)
          setTimeout(() => setPhase(3), 1350)
          setTimeout(() => setPhase(4), 1750)
          observer.disconnect()
        }
      },
      { threshold: 0.12 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="ansatz"
      className="py-24 md:py-36 overflow-hidden relative"
      style={{
        background:
          'radial-gradient(ellipse at 15% 55%, rgba(26,80,45,0.22) 0%, transparent 55%), radial-gradient(ellipse at 90% 5%, rgba(184,150,62,0.06) 0%, transparent 45%), #0C1510',
      }}
    >
      <div className="mx-auto max-w-[1200px] px-6">

        {/* ── Header ── */}
        <div className="text-center mb-20">
          <p className="text-xs font-medium uppercase tracking-[0.35em] text-[#B8963E] mb-5">
            Mein Ansatz
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-[3.25rem] text-white leading-tight mb-5">
            Von der Analyse zur fertigen Lösung –
            <br />
            alles aus einer Hand
          </h2>
          <p className="text-white/35 text-lg max-w-lg mx-auto">
            Ich berate nicht nur. Ich baue.
          </p>
        </div>

        {/* ── Architectural Columns ── */}
        <div className="relative">

          {/* Top gold rule — draws in from left */}
          <div
            className="h-px bg-[#B8963E]"
            style={{
              width: phase >= 1 ? '100%' : '0%',
              transition: 'width 0.8s cubic-bezier(0.77,0,0.18,1)',
            }}
          />

          {/* Column visuals — rise from bottom */}
          <div
            className="grid grid-cols-3 gap-3 md:gap-4 items-end"
            style={{ height: 'clamp(160px, 22vw, 320px)' }}
          >
            {pillars.map((pillar, i) => (
              <div key={i} className="h-full flex flex-col justify-end">
                <div
                  className="w-full relative overflow-hidden"
                  style={{
                    height: pillar.heightPct,
                    background: 'linear-gradient(180deg, #1A2B1E 0%, #0F1D12 100%)',
                    transform: phase >= 2 ? 'scaleY(1)' : 'scaleY(0)',
                    transformOrigin: 'bottom',
                    transition: 'transform 1s cubic-bezier(0.77,0,0.18,1)',
                    transitionDelay: `${i * 130}ms`,
                    boxShadow: '0 0 40px rgba(26,43,30,0.4)',
                  }}
                >
                  {/* Subtle grain texture */}
                  <div
                    className="absolute inset-0 opacity-[0.04]"
                    style={{
                      backgroundImage:
                        'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\'/%3E%3C/svg%3E")',
                    }}
                  />

                  {/* Roman numeral — top left */}
                  <span
                    className="absolute top-4 left-5 font-serif leading-none select-none text-white/10"
                    style={{
                      fontSize: 'clamp(2.5rem, 5vw, 5rem)',
                      opacity: phase >= 2 ? 1 : 0,
                      transition: 'opacity 0.6s ease',
                      transitionDelay: `${i * 130 + 700}ms`,
                    }}
                  >
                    {pillar.roman}
                  </span>

                  {/* Step label — top right */}
                  <span
                    className="absolute top-5 right-5 text-[0.6rem] font-semibold tracking-[0.28em] text-[#B8963E]"
                    style={{
                      opacity: phase >= 2 ? 1 : 0,
                      transition: 'opacity 0.5s ease',
                      transitionDelay: `${i * 130 + 800}ms`,
                    }}
                  >
                    0{i + 1}
                  </span>

                  {/* Bottom shimmer line */}
                  <div className="absolute bottom-0 left-0 right-0 h-px bg-[#B8963E]/40" />
                </div>
              </div>
            ))}
          </div>

          {/* Bottom gold rule */}
          <div
            className="h-px bg-[#B8963E]"
            style={{
              width: phase >= 1 ? '100%' : '0%',
              transition: 'width 0.8s cubic-bezier(0.77,0,0.18,1) 0.2s',
            }}
          />
        </div>

        {/* ── Text Content Cards — flush under columns ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 mb-20">
          {pillars.map((pillar, i) => (
            <div
              key={i}
              className="p-6 md:p-8 border-x border-b border-white/[0.06]"
              style={{
                background: 'rgba(17, 29, 20, 0.7)',
                opacity: phase >= 3 ? 1 : 0,
                transform: phase >= 3 ? 'translateY(0)' : 'translateY(18px)',
                transition: 'opacity 0.7s ease, transform 0.7s ease',
                transitionDelay: `${i * 100}ms`,
              }}
            >
              <h3 className="font-serif text-xl md:text-2xl text-white mb-3 leading-tight">
                {pillar.title}
              </h3>
              <p className="text-white/45 text-sm md:text-[0.95rem] leading-relaxed mb-6">
                {pillar.description}
              </p>
              <div className="border-t border-white/[0.08] pt-4">
                <p className="text-[0.6rem] font-semibold uppercase tracking-[0.28em] text-[#B8963E] mb-2">
                  Ergebnis
                </p>
                <p className="text-sm font-medium text-white/80">{pillar.result}</p>
              </div>
            </div>
          ))}
        </div>

        {/* ── FOMO + CTA ── */}
        <div
          className="text-center"
          style={{
            opacity: phase >= 4 ? 1 : 0,
            transform: phase >= 4 ? 'translateY(0)' : 'translateY(16px)',
            transition: 'opacity 0.8s ease, transform 0.8s ease',
          }}
        >
          {/* FOMO availability badge */}
          <div className="inline-flex items-center gap-3 border border-white/[0.1] text-white text-xs font-medium px-5 py-3 rounded-full mb-8"
            style={{ background: 'rgba(26,43,30,0.6)' }}>
            <span className="relative flex h-2 w-2 flex-shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#B8963E] opacity-70" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#B8963E]" />
            </span>
            Aktuell noch&nbsp;<strong className="text-[#B8963E]">2 Projektplätze</strong>&nbsp;im Q2 2026 verfügbar
          </div>

          <br />

          {/* CTA Button */}
          <Link
            href="#kontakt"
            className="group inline-flex items-center gap-3 bg-[#B8963E] text-white text-sm font-medium uppercase tracking-widest px-10 py-4 hover:bg-[#a07e32] transition-all duration-300 hover:shadow-[0_8px_30px_rgba(184,150,62,0.4)]"
          >
            Jetzt Projektgespräch sichern
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              <path
                d="M3 8H13M13 8L9 4M13 8L9 12"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>

          <p className="mt-4 text-xs text-white/25 tracking-wide">
            Kostenloses Erstgespräch · Unverbindlich · Antwort innerhalb 24h
          </p>
        </div>

      </div>
    </section>
  )
}
