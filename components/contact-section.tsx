"use client"

import { useState, useRef, useEffect } from "react"
import { Send, Mail, MapPin, Globe, Clock, ShieldCheck } from "lucide-react"

const budgets = [
  "Bis 2.500 €",
  "2.500 – 5.000 €",
  "5.000 – 10.000 €",
  "10.000 – 25.000 €",
  "Über 25.000 €",
]

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); obs.disconnect() } },
      { threshold }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])
  return { ref, inView }
}

export function ContactSection() {
  const { ref: sectionRef, inView } = useInView()
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [form, setForm] = useState({
    name: "", company: "", email: "", phone: "", message: "", budget: "",
  })

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSending(true)
    setError(null)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) {
        const data = await res.json()
        throw new Error(data.error || 'Fehler beim Senden.')
      }
      setSubmitted(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Fehler beim Senden.')
    } finally {
      setSending(false)
    }
  }

  const inputClass = "w-full border bg-transparent px-4 py-3 text-sm text-white placeholder-white/25 outline-none transition-all duration-200 focus:ring-1 rounded-none"
  const inputStyle = {
    borderColor: 'rgba(255,255,255,0.1)',
    '--tw-ring-color': '#B8963E',
  } as React.CSSProperties

  return (
    <section
      id="kontakt"
      ref={sectionRef}
      className="py-24 md:py-36 relative overflow-hidden"
      style={{
        background:
          'radial-gradient(ellipse at 70% 60%, rgba(184,150,62,0.05) 0%, transparent 50%), radial-gradient(ellipse at 15% 20%, rgba(26,60,35,0.2) 0%, transparent 50%), #0C1510',
      }}
    >
      <div className="mx-auto max-w-[1200px] px-6">

        {/* Header */}
        <div
          className="mb-16 transition-all duration-700"
          style={{ opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(20px)" }}
        >
          <p className="text-xs font-medium uppercase tracking-[0.35em] text-[#B8963E] mb-5">
            Kontakt
          </p>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2 className="font-serif text-4xl md:text-5xl lg:text-[3.25rem] text-white leading-tight max-w-xl">
              Lassen Sie uns über
              <br />
              Ihr Projekt sprechen.
            </h2>

            {/* FOMO badge */}
            <div
              className="inline-flex items-center gap-3 px-5 py-3 self-start lg:self-auto"
              style={{ border: '1px solid rgba(255,255,255,0.08)', background: 'rgba(26,43,30,0.4)' }}
            >
              <span className="relative flex h-2 w-2 flex-shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#B8963E] opacity-70" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#B8963E]" />
              </span>
              <span className="text-xs text-white/50">
                Noch <strong className="text-white">2 Projektplätze</strong> im Q2 2026
              </span>
            </div>
          </div>
        </div>

        {/* Two-column */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">

          {/* LEFT – Form */}
          <div
            className="lg:col-span-3 transition-all duration-700 delay-150"
            style={{ opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(24px)" }}
          >
            <div
              className="p-8 md:p-10"
              style={{ background: 'rgba(17,29,20,0.7)', border: '1px solid rgba(255,255,255,0.07)' }}
            >
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-16 gap-4 text-center">
                  <div
                    className="w-14 h-14 flex items-center justify-center mb-2"
                    style={{ background: 'rgba(26,43,30,0.8)', border: '1px solid rgba(184,150,62,0.3)' }}
                  >
                    <ShieldCheck className="w-6 h-6 text-[#B8963E]" />
                  </div>
                  <h3 className="font-serif text-2xl text-white">
                    Anfrage erhalten.
                  </h3>
                  <p className="text-white/40 max-w-sm leading-relaxed text-sm">
                    Ich melde mich persönlich innerhalb von 24 Stunden bei Ihnen.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-white/35" htmlFor="name">
                        Name <span className="text-[#B8963E]">*</span>
                      </label>
                      <input id="name" name="name" type="text" required placeholder="Max Mustermann" value={form.name} onChange={handleChange}
                        className={inputClass} style={{ ...inputStyle, borderColor: 'rgba(255,255,255,0.1)' }} />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-white/35" htmlFor="company">
                        Unternehmen <span className="text-[#B8963E]">*</span>
                      </label>
                      <input id="company" name="company" type="text" required placeholder="Musterfirma GmbH" value={form.company} onChange={handleChange}
                        className={inputClass} style={inputStyle} />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-white/35" htmlFor="email">
                        E-Mail <span className="text-[#B8963E]">*</span>
                      </label>
                      <input id="email" name="email" type="email" required placeholder="max@musterfirma.de" value={form.email} onChange={handleChange}
                        className={inputClass} style={inputStyle} />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-white/35" htmlFor="phone">
                        Telefon
                      </label>
                      <input id="phone" name="phone" type="tel" placeholder="+49 0000 000000" value={form.phone} onChange={handleChange}
                        className={inputClass} style={inputStyle} />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-white/35" htmlFor="message">
                      Ihr Anliegen <span className="text-[#B8963E]">*</span>
                    </label>
                    <textarea id="message" name="message" required rows={5}
                      placeholder="Beschreiben Sie kurz Ihr Projekt oder Problem – je konkreter, desto besser."
                      value={form.message} onChange={handleChange}
                      className={`${inputClass} resize-none`} style={inputStyle} />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-white/35" htmlFor="budget">
                      Projektvolumen / Budget
                    </label>
                    <select id="budget" name="budget" value={form.budget} onChange={handleChange}
                      className={inputClass} style={{ ...inputStyle, background: '#111D14' }}>
                      <option value="" style={{ background: '#111D14' }}>Bitte wählen …</option>
                      {budgets.map((b) => <option key={b} value={b} style={{ background: '#111D14' }}>{b}</option>)}
                    </select>
                  </div>

                  <button
                    type="submit"
                    disabled={sending}
                    className="group mt-2 flex items-center justify-center gap-3 w-full bg-[#B8963E] px-6 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-white transition-all duration-300 hover:bg-[#a07e32] hover:shadow-[0_8px_30px_rgba(184,150,62,0.35)] disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    <Send className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                    {sending ? 'Wird gesendet …' : 'Anfrage senden'}
                  </button>

                  {error && (
                    <p className="text-center text-xs text-red-400 mt-1">{error}</p>
                  )}

                  <p className="text-center text-[0.65rem] text-white/20 mt-1">
                    Unverbindlich · Kostenlos · Antwort innerhalb 24h
                  </p>
                </form>
              )}
            </div>
          </div>

          {/* RIGHT – Info */}
          <div
            className="lg:col-span-2 flex flex-col gap-5 transition-all duration-700 delay-300"
            style={{ opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(24px)" }}
          >

            {/* Promise card */}
            <div
              className="p-6"
              style={{ background: 'rgba(26,43,30,0.6)', border: '1px solid rgba(255,255,255,0.07)' }}
            >
              <div className="flex items-center gap-3 mb-3">
                <Clock className="w-4 h-4 text-[#B8963E] flex-shrink-0" />
                <p className="text-white text-sm font-semibold">Persönliche Rückmeldung in 24h</p>
              </div>
              <p className="text-white/40 text-xs leading-relaxed">
                Keine automatisierten Antworten. Ich lese jede Anfrage persönlich und antworte individuell.
              </p>
            </div>

            {/* Contact details */}
            <div
              className="p-6 flex flex-col gap-5"
              style={{ border: '1px solid rgba(255,255,255,0.07)' }}
            >
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-[#B8963E]">Direkter Kontakt</p>

              <a href="mailto:tim@goebel-partner.de" className="flex items-center gap-3 group">
                <div
                  className="w-8 h-8 flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(255,255,255,0.04)' }}
                >
                  <Mail className="w-3.5 h-3.5 text-[#B8963E]" />
                </div>
                <div>
                  <p className="text-[0.65rem] text-white/30 mb-0.5">E-Mail</p>
                  <p className="text-sm text-white/70 font-medium group-hover:text-[#B8963E] transition-colors">tim@goebel-partner.de</p>
                </div>
              </a>

              <div className="flex items-center gap-3">
                <div
                  className="w-8 h-8 flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(255,255,255,0.04)' }}
                >
                  <MapPin className="w-3.5 h-3.5 text-[#B8963E]" />
                </div>
                <div>
                  <p className="text-[0.65rem] text-white/30 mb-0.5">Standort</p>
                  <p className="text-sm text-white/70 font-medium">Dortmund / NRW</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div
                  className="w-8 h-8 flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(255,255,255,0.04)' }}
                >
                  <Globe className="w-3.5 h-3.5 text-[#B8963E]" />
                </div>
                <div>
                  <p className="text-[0.65rem] text-white/30 mb-0.5">Verfügbarkeit</p>
                  <p className="text-sm text-white/70 font-medium">Deutschlandweit remote</p>
                </div>
              </div>
            </div>

            {/* Quote */}
            <blockquote className="border-l-2 border-[#B8963E] pl-5 py-1">
              <p className="text-sm italic text-white/40 leading-relaxed">
                „Ich nehme mir die Zeit, Ihre Situation wirklich zu verstehen – bevor ich irgendetwas empfehle."
              </p>
              <footer className="mt-3 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-[#B8963E]">
                — Tim Goebel
              </footer>
            </blockquote>

          </div>
        </div>
      </div>
    </section>
  )
}
