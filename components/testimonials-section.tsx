"use client"

import { useEffect, useRef, useState } from "react"

const testimonials = [
  {
    quote: "Was vorher auf Zetteln lief, ist jetzt ein professioneller digitaler Prozess. Alles aus einer Hand – genau das hat den Unterschied gemacht.",
    name: "Leonie Becker",
    role: "Geschäftsführerin",
    company: "365 Grundbesitz GmbH",
    initials: "LB",
  },
  {
    quote: "Tim hat analysiert und direkt ein eigenes Tool gebaut. Ein Ansprechpartner, der alles versteht und umsetzt – nicht nur berät.",
    name: "Markus Heidemann",
    role: "Geschäftsführer",
    company: "Heidemann Dienstleistungen GmbH",
    initials: "MH",
  },
  {
    quote: "Am Ende hatten wir kein PowerPoint, sondern ein funktionierendes System. Alles von einer Person. Beeindruckend.",
    name: "Sandra Kirchner",
    role: "COO",
    company: "NexTrade Solutions GmbH",
    initials: "SK",
  },
]

export function TestimonialsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  // Auto-rotate
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => { if (intervalRef.current) clearInterval(intervalRef.current) }
  }, [])

  const handleDot = (i: number) => {
    setActiveIndex(i)
    if (intervalRef.current) clearInterval(intervalRef.current)
    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
  }

  const active = testimonials[activeIndex]

  return (
    <section
      ref={sectionRef}
      id="kundenstimmen"
      className="py-24 md:py-36 overflow-hidden"
      style={{
        background:
          'radial-gradient(ellipse at 50% 0%, rgba(26,80,45,0.35) 0%, transparent 60%), radial-gradient(ellipse at 90% 100%, rgba(184,150,62,0.07) 0%, transparent 45%), #0C1510',
      }}
    >
      <div className="mx-auto max-w-[1200px] px-6">

        {/* Label */}
        <div
          className="mb-16 flex items-center gap-6 transition-all duration-700"
          style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? "translateY(0)" : "translateY(20px)" }}
        >
          <div className="h-px flex-1 bg-white/10" />
          <p className="text-xs font-medium uppercase tracking-[0.35em] text-[#B8963E]">
            Kundenstimmen
          </p>
          <div className="h-px flex-1 bg-white/10" />
        </div>

        {/* Main quote */}
        <div
          className="relative text-center mb-16 min-h-[200px] flex flex-col items-center justify-center transition-all duration-700 delay-100"
          style={{ opacity: isVisible ? 1 : 0 }}
        >
          {/* Decorative open quote */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 font-serif text-[8rem] leading-none text-white/5 select-none pointer-events-none">
            "
          </div>

          {/* Quote text — transitions between active */}
          <blockquote
            key={activeIndex}
            className="relative font-serif text-2xl md:text-3xl lg:text-4xl text-white leading-relaxed max-w-3xl mx-auto"
            style={{
              animation: "fadeUp 0.6s cubic-bezier(0.22,1,0.36,1) both",
            }}
          >
            „{active.quote}"
          </blockquote>

          {/* Author */}
          <div
            className="mt-10 flex flex-col items-center gap-2"
            key={`author-${activeIndex}`}
            style={{ animation: "fadeUp 0.6s cubic-bezier(0.22,1,0.36,1) 0.1s both" }}
          >
            <div className="w-10 h-px bg-[#B8963E]" />
            <p className="text-white text-sm font-semibold mt-3">{active.name}</p>
            <p className="text-white/40 text-xs tracking-wide">
              {active.role} · {active.company}
            </p>
          </div>
        </div>

        {/* Dot navigation */}
        <div
          className="flex items-center justify-center gap-3 mb-20 transition-all duration-700 delay-200"
          style={{ opacity: isVisible ? 1 : 0 }}
        >
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => handleDot(i)}
              className="relative h-1 transition-all duration-500 rounded-full overflow-hidden"
              style={{
                width: activeIndex === i ? "40px" : "20px",
                backgroundColor: activeIndex === i ? "#B8963E" : "rgba(255,255,255,0.2)",
              }}
              aria-label={`Testimonial ${i + 1}`}
            />
          ))}
        </div>

        {/* All 3 mini-cards below */}
        <div
          className="grid md:grid-cols-3 gap-4 border-t border-white/8 pt-12 transition-all duration-700 delay-300"
          style={{ opacity: isVisible ? 1 : 0 }}
        >
          {testimonials.map((t, i) => (
            <button
              key={i}
              onClick={() => handleDot(i)}
              className="text-left p-5 border transition-all duration-300"
              style={{
                borderColor: activeIndex === i ? "rgba(184,150,62,0.4)" : "rgba(255,255,255,0.06)",
                background: activeIndex === i ? "rgba(184,150,62,0.06)" : "transparent",
              }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0"
                  style={{
                    background: activeIndex === i ? "#B8963E" : "rgba(255,255,255,0.08)",
                    color: activeIndex === i ? "white" : "rgba(255,255,255,0.4)",
                  }}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="text-white text-xs font-semibold">{t.name}</p>
                  <p className="text-white/30 text-[0.65rem]">{t.company}</p>
                </div>
              </div>
              <p className="text-white/40 text-xs leading-relaxed line-clamp-2">
                „{t.quote}"
              </p>
            </button>
          ))}
        </div>

      </div>

      <style jsx>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  )
}
