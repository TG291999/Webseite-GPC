import Link from "next/link"

const navItems = [
  { href: "/#leistungen", label: "Leistungen" },
  { href: "/#ablauf", label: "Ablauf" },
  { href: "/#referenzen", label: "Referenzen" },
  { href: "/#ueber-mich", label: "Über mich" },
  { href: "/#kontakt", label: "Kontakt" },
]

function LinkedInIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="text-white" style={{ background: '#060A07' }}>

      {/* Top gold rule */}
      <div className="h-px w-full bg-[#B8963E]/30" />

      <div className="mx-auto max-w-[1200px] px-6 pt-14 pb-0">
        <div className="grid gap-12 md:grid-cols-3 mb-14">

          {/* Col 1 – Brand */}
          <div>
            <Link href="/" className="inline-flex items-center gap-3 mb-5">
              <span className="flex h-8 w-8 items-center justify-center font-serif text-xs font-bold bg-[#1A2B1E]" style={{ color: "#B8963E" }}>
                G
              </span>
              <div>
                <span className="block font-serif text-sm font-semibold text-white leading-tight">
                  Goebel & Partner
                </span>
                <span className="block text-[0.6rem] font-medium uppercase tracking-[0.2em] text-[#B8963E]">
                  Consulting
                </span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed text-white/30 max-w-[200px]">
              Prozessoptimierung, Strategie und individuelle Softwareentwicklung.
            </p>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="mt-6 inline-flex items-center gap-2 text-xs text-white/30 transition-colors hover:text-[#B8963E]"
            >
              <LinkedInIcon />
              <span>LinkedIn</span>
            </a>
          </div>

          {/* Col 2 – Navigation */}
          <div>
            <h3 className="mb-5 text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-[#B8963E]">
              Navigation
            </h3>
            <ul className="flex flex-col gap-3">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-xs text-white/30 transition-colors hover:text-white uppercase tracking-[0.15em]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 – Contact */}
          <div>
            <h3 className="mb-5 text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-[#B8963E]">
              Kontakt
            </h3>
            <address className="not-italic flex flex-col gap-3">
              <a
                href="mailto:tim@goebel-partner.de"
                className="text-xs text-white/30 transition-colors hover:text-[#B8963E]"
              >
                tim@goebel-partner.de
              </a>
              <span className="text-xs text-white/20">
                Dortmund / NRW · Deutschlandweit remote
              </span>
            </address>

            {/* CTA */}
            <Link
              href="/#kontakt"
              className="mt-8 inline-flex items-center gap-2 bg-[#B8963E] px-5 py-2.5 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-white transition-all duration-300 hover:bg-[#a07e32]"
            >
              Projekt anfragen
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M2 6H10M10 6L7 3M10 6L7 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 flex flex-col items-center justify-between gap-3 py-6 text-[0.65rem] text-white/20 md:flex-row">
          <p>&copy; {currentYear} Goebel & Partner Consulting</p>
          <div className="flex gap-6">
            <Link href="/impressum" className="transition-colors hover:text-white uppercase tracking-[0.15em]">Impressum</Link>
            <Link href="/datenschutz" className="transition-colors hover:text-white uppercase tracking-[0.15em]">Datenschutz</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
