"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

const navItems = [
  { href: "#leistungen", label: "Leistungen" },
  { href: "#ablauf", label: "Ablauf" },
  { href: "#referenzen", label: "Referenzen" },
  { href: "#ueber-mich", label: "Über mich" },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-[#090D0A]/95 backdrop-blur-md border-b border-white/[0.06]"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto max-w-[1200px] px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="group flex items-center gap-3">
          <span
            className="flex h-8 w-8 items-center justify-center font-serif text-xs font-bold"
            style={{ background: "#1A2B1E", color: "#B8963E" }}
          >
            G
          </span>
          <span className="font-serif text-base font-semibold tracking-wide text-white transition-colors duration-300">
            Goebel & Partner
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-10">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "relative text-xs font-medium uppercase tracking-[0.15em] transition-colors duration-200 text-white/60 hover:text-white",
                "after:absolute after:bottom-[-3px] after:left-0 after:h-px after:w-0 after:bg-[#B8963E] after:transition-all after:duration-300 hover:after:w-full"
              )}
            >
              {item.label}
            </Link>
          ))}

          {/* CTA */}
          <Link
            href="#kontakt"
            className="ml-2 inline-flex items-center gap-2 bg-[#B8963E] px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-white transition-all duration-300 hover:bg-[#a07e32] hover:shadow-[0_4px_20px_rgba(184,150,62,0.35)]"
          >
            Projekt anfragen
          </Link>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 lg:hidden transition-colors text-white"
          aria-label="Menü"
        >
          {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={cn(
          "lg:hidden overflow-hidden transition-all duration-300",
          isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}
        style={{ background: "#0C1510", borderTop: "1px solid rgba(255,255,255,0.06)" }}
      >
        <div className="px-6 pb-6 pt-2 flex flex-col gap-5">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-sm font-medium text-white/50 hover:text-white transition-colors uppercase tracking-[0.15em]"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="#kontakt"
            onClick={() => setIsMobileMenuOpen(false)}
            className="mt-2 inline-flex justify-center bg-[#B8963E] px-5 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-white"
          >
            Projekt anfragen
          </Link>
        </div>
      </div>
    </header>
  )
}
