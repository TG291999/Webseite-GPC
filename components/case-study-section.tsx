'use client'

import { useEffect, useRef, useState } from 'react'
import { Check } from 'lucide-react'

export function CaseStudySection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const mockupRef = useRef<HTMLDivElement>(null)
  const testimonialRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="referenzen"
      className="w-full py-20 lg:py-32 relative overflow-hidden"
      style={{
        background:
          'radial-gradient(ellipse at 85% 85%, rgba(184,150,62,0.06) 0%, transparent 50%), radial-gradient(ellipse at 10% 20%, rgba(26,60,35,0.3) 0%, transparent 50%), #090D0A',
      }}
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {/* Section Label */}
        <div className="mb-4 text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-[#B8963E]">
            Referenzprojekt
          </span>
        </div>

        {/* Headline */}
        <h2
          className={`mb-3 text-center font-serif text-4xl lg:text-5xl font-bold text-white transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          Von Zettelwirtschaft zum digitalen Tippgeberportal
        </h2>

        {/* Subheadline */}
        <p
          className={`mb-12 text-center text-lg text-white/45 transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          Strategie, Entwicklung und laufende Betreuung für die 365 Grundbesitz GmbH
        </p>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-start mb-12">
          {/* Left Column - Text Content */}
          <div
            ref={contentRef}
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            {/* Ausgangssituation */}
            <div className="mb-8">
              <h3 className="mb-3 font-serif text-xl font-bold text-white">
                Ausgangssituation
              </h3>
              <p className="text-white/50 leading-relaxed">
                Ein wachsendes Immobilienunternehmen erhielt gelegentlich Tipps per Zuruf und auf Zetteln – verschenktes Potenzial ohne jedes System.
              </p>
            </div>

            {/* Strategischer Ansatz */}
            <div className="mb-8">
              <h3 className="mb-3 font-serif text-xl font-bold text-white">
                Strategischer Ansatz
              </h3>
              <p className="text-white/50 leading-relaxed">
                Nicht nur digitalisieren, sondern einen echten Lead-Kanal aufbauen. Conversionoptimierte Landingpage, maximal einfacher Prozess, ads-fähige Struktur.
              </p>
            </div>

            {/* Umgesetzte Lösung */}
            <div className="mb-8">
              <h3 className="mb-4 font-serif text-xl font-bold text-white">
                Umgesetzte Lösung
              </h3>
              <p className="mb-4 text-sm font-semibold text-[#B8963E] uppercase tracking-wide">
                Komplett eigenentwickelt
              </p>
              <ul className="space-y-3">
                {[
                  'Conversionoptimierte Landingpage',
                  'Strukturiertes Tippgeber-Formular',
                  'Dashboard für Tippgeber (Status, Provisionen)',
                  'Admin-Dashboard mit Mini-CRM & Pipeline',
                  'Automatische Benachrichtigungen',
                  'Ads-fähige Struktur + laufendes Ads-Management'
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 transition-all duration-500"
                    style={{ transitionDelay: `${400 + index * 50}ms` }}
                  >
                    <Check className="h-5 w-5 flex-shrink-0 text-[#B8963E] mt-0.5" />
                    <span className="text-white/65">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Ergebnis */}
            <div
              className="mt-10 p-4 border-l-4 border-[#B8963E]"
              style={{ background: 'rgba(184,150,62,0.07)' }}
            >
              <p className="font-semibold text-white/90">
                Vom Zettel zum digitalen Portal. Neue Leads durch gezielte Kampagnen. Alles aus einer Hand.
              </p>
            </div>
          </div>

          {/* Right Column - Mockups */}
          <div
            ref={mockupRef}
            className={`flex flex-col gap-4 transition-all duration-1000 delay-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            {/* Top — Tippgeber Portal (Nutzeransicht) */}
            <div
              className="relative overflow-hidden"
              style={{ boxShadow: '0 16px 48px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.06)' }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/Tippgeber-Portal.png"
                alt="Tippgeber-Portal – Nutzeransicht"
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Bottom — Admin Dashboard */}
            <div
              className="relative overflow-hidden"
              style={{ boxShadow: '0 16px 48px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.06)' }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/Tippgeber-Admin.png"
                alt="Admin-Dashboard mit Mini-CRM und Pipeline"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>

        {/* Testimonial */}
        <div
          ref={testimonialRef}
          className={`mt-16 border-l-4 border-[#B8963E] py-6 px-6 transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
          style={{ background: 'rgba(26,43,30,0.35)', borderRadius: '0 4px 4px 0' }}
        >
          <blockquote className="mb-4">
            <p className="text-lg leading-relaxed text-white/65 italic">
              „Tim hat für uns ein komplettes Tippgeberportal entwickelt – von der Strategie bis zum Dashboard. Was vorher auf Zetteln lief, ist jetzt ein professioneller digitaler Prozess. Und er kümmert sich auch weiterhin um die Vermarktung."
            </p>
          </blockquote>
          <footer className="text-sm font-semibold text-[#B8963E]">
            — Leonie Becker, Geschäftsführerin – 365 Grundbesitz GmbH
          </footer>
        </div>
      </div>
    </section>
  )
}
