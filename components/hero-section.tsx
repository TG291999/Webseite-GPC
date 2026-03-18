"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { ArrowRight, ChevronDown } from "lucide-react"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const videoRef = useRef<HTMLVideoElement>(null)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    // Trigger entrance animations
    const timer = setTimeout(() => setIsVisible(true), 100)

    // Parallax scroll handler
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      clearTimeout(timer)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const parallaxOffset = scrollY * 0.4

  return (
    <section
      ref={sectionRef}
      className="relative h-screen min-h-[600px] overflow-hidden"
      aria-label="Hero"
    >
      {/* ── Video Background ── */}
      <div
        className="absolute inset-0 w-full"
        style={{ transform: `translateY(${parallaxOffset}px)`, top: `-${parallaxOffset * 0.5}px` }}
      >
        {/* Video element — replace src with actual stock footage */}
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
          aria-hidden="true"
        >
          <source src="/assets/freepik_the-completed-black-ink-architectural-sketch-of-th_1280x720_16-9_24fps_20571.mp4" type="video/mp4" />
        </video>
      </div>

      {/* ── Gradient Overlay ── */}
      {/* Bottom-to-top gradient at 60% opacity */}
      <div
        className="absolute inset-0 z-10"
        style={{
          background:
            "linear-gradient(to top, rgba(0,0,0,0.90) 0%, rgba(0,0,0,0.65) 40%, rgba(0,0,0,0.45) 70%, rgba(0,0,0,0.30) 100%)",
        }}
        aria-hidden="true"
      />

      {/* ── Hero Content ── */}
      <div className="relative z-20 flex h-full flex-col">
        {/* Centered text block — vertically centered, leaving room for trust bar */}
        <div className="flex flex-1 items-center justify-center px-6 pt-20 pb-32">
          <div className="mx-auto w-full max-w-[1200px] text-center">

            {/* Subline / Category */}
            <p
              style={{
                transition: "opacity 0.7s ease, transform 0.7s ease",
                transitionDelay: "0ms",
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(20px)",
              }}
              className="mb-6 text-xs font-medium uppercase tracking-[0.25em] text-[#B8963E] md:text-sm"
            >
              Prozessoptimierung&nbsp;·&nbsp;Strategie&nbsp;·&nbsp;Softwareentwicklung&nbsp;·&nbsp;KI
            </p>

            {/* H1 Headline */}
            <h1
              style={{
                transition: "opacity 0.8s ease, transform 0.8s ease",
                transitionDelay: "150ms",
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(24px)",
              }}
              className="mx-auto mb-8 max-w-4xl font-serif text-4xl font-semibold leading-tight text-white text-balance sm:text-5xl lg:text-[3.5rem] xl:text-[4rem]"
            >
              Ihr Unternehmen verliert täglich Geld –
              <br />
              weil niemand Strategie und Code beherrscht.
            </h1>

            {/* Subtext */}
            <p
              style={{
                transition: "opacity 0.8s ease, transform 0.8s ease",
                transitionDelay: "300ms",
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(24px)",
              }}
              className="mx-auto mb-12 max-w-2xl text-base leading-relaxed text-white/75 md:text-lg"
            >
              Berater ohne Umsetzung. Entwickler ohne Strategie. Ich kombiniere beides –
              und liefere fertige digitale Lösungen, die sofort wirken.
            </p>

            {/* CTA Buttons */}
            <div
              style={{
                transition: "opacity 0.8s ease, transform 0.8s ease",
                transitionDelay: "450ms",
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(24px)",
              }}
              className="flex flex-col items-center justify-center gap-4 sm:flex-row"
            >
              {/* Primary CTA – Gold filled */}
              <Link
                href="#kontakt"
                className="group inline-flex items-center gap-2 rounded-sm bg-[#B8963E] px-8 py-4 text-sm font-medium uppercase tracking-widest text-white transition-all duration-300 hover:bg-[#a07e32] hover:shadow-[0_8px_30px_rgba(184,150,62,0.4)]"
              >
                Projekt anfragen
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              {/* Secondary CTA – White outline */}
              <Link
                href="#leistungen"
                className="inline-flex items-center gap-2 rounded-sm border border-white/50 px-8 py-4 text-sm font-medium uppercase tracking-widest text-white transition-all duration-300 hover:border-white hover:bg-white/10"
              >
                Mehr erfahren
              </Link>
            </div>
          </div>
        </div>

        {/* ── Trust Bar ── */}
        <div
          style={{
            transition: "opacity 1s ease",
            transitionDelay: "700ms",
            opacity: isVisible ? 1 : 0,
          }}
          className="relative z-30 w-full border-t border-white/10 bg-black/40 backdrop-blur-sm"
        >
          <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-center gap-0 divide-x divide-white/20 px-6 py-4">
            {[
              "Ein Ansprechpartner",
              "Deutschlandweit",
              "Projektbasiert",
              "Strategie bis Code",
            ].map((item) => (
              <span
                key={item}
                className="px-6 py-1 text-xs font-medium uppercase tracking-[0.18em] text-white/60 md:text-[0.7rem]"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── Scroll Indicator ── */}
      <div
        style={{
          transition: "opacity 1s ease",
          transitionDelay: "1000ms",
          opacity: isVisible ? 1 : 0,
        }}
        className="absolute bottom-[72px] left-1/2 z-30 -translate-x-1/2"
        aria-hidden="true"
      >
        <ChevronDown className="h-5 w-5 animate-bounce text-white/40" />
      </div>
    </section>
  )
}
