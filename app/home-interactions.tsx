"use client"

import { useEffect } from "react"

/**
 * Verhalten der Startseite (entspricht 1:1 dem <script> der Spec-Seite),
 * sauber als React-Effekt mit Cleanup verdrahtet. Rendert nichts.
 * Der Cal.com-/zcal-Fallback-Alert wurde entfernt — der Button ist ein echter Link.
 */
export function HomeInteractions() {
  useEffect(() => {
    /* Header border on scroll */
    const header = document.querySelector(".header")
    const onScroll = () => header?.classList.toggle("scrolled", window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })

    /* Mobile menu */
    const burger = document.getElementById("burger")
    const menu = document.getElementById("mobileMenu")
    const onBurger = () => {
      const open = menu?.classList.toggle("open")
      burger?.setAttribute("aria-expanded", String(!!open))
      burger?.setAttribute("aria-label", open ? "Menü schließen" : "Menü öffnen")
    }
    burger?.addEventListener("click", onBurger)
    const menuLinks = menu ? Array.from(menu.querySelectorAll("a")) : []
    const onMenuLink = () => {
      menu?.classList.remove("open")
      burger?.setAttribute("aria-expanded", "false")
    }
    menuLinks.forEach((a) => a.addEventListener("click", onMenuLink))

    /* FAQ accordion */
    const faqBtns = Array.from(document.querySelectorAll<HTMLButtonElement>(".faq-q"))
    const setPanel = (btn: Element, open: boolean) => {
      btn.setAttribute("aria-expanded", String(open))
      const panel = btn.nextElementSibling as HTMLElement | null
      if (panel) panel.style.maxHeight = open ? `${panel.scrollHeight}px` : ""
    }
    faqBtns.forEach((btn) => {
      if (btn.getAttribute("aria-expanded") === "true") {
        requestAnimationFrame(() => setPanel(btn, true))
      }
    })
    const faqHandlers = faqBtns.map((btn) => {
      const handler = () => {
        const open = btn.getAttribute("aria-expanded") === "true"
        faqBtns.forEach((other) => {
          if (other !== btn) setPanel(other, false)
        })
        setPanel(btn, !open)
      }
      btn.addEventListener("click", handler)
      return handler
    })
    const onResize = () => {
      document
        .querySelectorAll<HTMLElement>('.faq-q[aria-expanded="true"]')
        .forEach((b) => {
          const panel = b.nextElementSibling as HTMLElement | null
          if (panel) panel.style.maxHeight = `${panel.scrollHeight}px`
        })
    }
    window.addEventListener("resize", onResize)

    /* Scroll reveal */
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in")
            io.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    )
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el))

    /* Year */
    const year = document.getElementById("year")
    if (year) year.textContent = String(new Date().getFullYear())

    return () => {
      window.removeEventListener("scroll", onScroll)
      burger?.removeEventListener("click", onBurger)
      menuLinks.forEach((a) => a.removeEventListener("click", onMenuLink))
      faqBtns.forEach((btn, i) => btn.removeEventListener("click", faqHandlers[i]))
      window.removeEventListener("resize", onResize)
      io.disconnect()
    }
  }, [])

  return null
}
