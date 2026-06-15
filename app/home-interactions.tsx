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
            if (entry.target.classList.contains("hero-demo")) {
              entry.target.classList.add("play")
            }
            io.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    )
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el))

    /* Interaktive Hero-Demo: Freigeben → Erfolgszustand, Bearbeiten, Nochmal */
    const demo = document.querySelector(".hero-demo")
    const approve = demo?.querySelector<HTMLButtonElement>(".hw-approve")
    const editBtn = demo?.querySelector<HTMLButtonElement>(".hw-edit")
    const replayBtn = demo?.querySelector<HTMLButtonElement>(".hw-replay")
    const hint = demo?.querySelector<HTMLElement>(".hw-hint")
    const onApprove = () => {
      demo?.classList.remove("editing")
      demo?.classList.add("is-sent")
    }
    const onEdit = () => {
      if (!demo) return
      const editing = demo.classList.toggle("editing")
      if (hint) hint.textContent = editing ? "Anpassen, dann freigeben" : "Sie sind dran"
    }
    const onReplay = () => {
      if (!demo) return
      demo.classList.remove("is-sent", "editing")
      if (hint) hint.textContent = "Sie sind dran"
      demo.classList.remove("play")
      void (demo as HTMLElement).offsetWidth
      demo.classList.add("play")
    }
    approve?.addEventListener("click", onApprove)
    editBtn?.addEventListener("click", onEdit)
    replayBtn?.addEventListener("click", onReplay)

    /* Vorher/Nachher-Showcase: eigener State pro Karte (kein Auto-Play) */
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const scCleanups: Array<() => void> = []
    document.querySelectorAll<HTMLElement>(".sc-card").forEach((card) => {
      const runBtn = card.querySelector<HTMLButtonElement>(".sc-run")
      const segs = Array.from(card.querySelectorAll<HTMLButtonElement>(".sc-seg"))
      const approveBtn = card.querySelector<HTMLButtonElement>(".sc-approve")
      const approveHTML = approveBtn?.innerHTML
      let runTimer: number | undefined
      const apply = (state: string) => {
        card.dataset.state = state
        segs.forEach((s) => s.setAttribute("aria-pressed", String(s.dataset.state === state)))
        if (runBtn) {
          runBtn.innerHTML =
            state === "after"
              ? "Zurücksetzen ↺"
              : 'Automatisierung ausführen <span class="arrow">→</span>'
          runBtn.classList.toggle("is-reset", state === "after")
        }
        if (approveBtn && state === "before") {
          if (approveHTML !== undefined) approveBtn.innerHTML = approveHTML
          approveBtn.classList.remove("sc-done")
          approveBtn.disabled = false
        }
      }
      const onRun = () => {
        if (card.dataset.state === "after") {
          window.clearTimeout(runTimer)
          card.classList.remove("running")
          apply("before")
          return
        }
        if (prefersReduced) {
          apply("after")
          return
        }
        card.classList.add("running")
        apply("after")
        window.clearTimeout(runTimer)
        runTimer = window.setTimeout(() => card.classList.remove("running"), 1500)
      }
      const segHandlers = segs.map((s) => {
        const h = () => {
          window.clearTimeout(runTimer)
          card.classList.remove("running")
          apply(s.dataset.state || "before")
        }
        s.addEventListener("click", h)
        return [s, h] as const
      })
      const onApproveSc = () => {
        if (!approveBtn) return
        approveBtn.innerHTML = 'Gesendet &amp; dokumentiert <span class="arrow">✓</span>'
        approveBtn.classList.add("sc-done")
        approveBtn.disabled = true
      }
      runBtn?.addEventListener("click", onRun)
      approveBtn?.addEventListener("click", onApproveSc)
      apply("before")
      scCleanups.push(() => {
        window.clearTimeout(runTimer)
        runBtn?.removeEventListener("click", onRun)
        segHandlers.forEach(([s, h]) => s.removeEventListener("click", h))
        approveBtn?.removeEventListener("click", onApproveSc)
      })
    })

    /* Year */
    const year = document.getElementById("year")
    if (year) year.textContent = String(new Date().getFullYear())

    return () => {
      window.removeEventListener("scroll", onScroll)
      burger?.removeEventListener("click", onBurger)
      menuLinks.forEach((a) => a.removeEventListener("click", onMenuLink))
      faqBtns.forEach((btn, i) => btn.removeEventListener("click", faqHandlers[i]))
      window.removeEventListener("resize", onResize)
      approve?.removeEventListener("click", onApprove)
      editBtn?.removeEventListener("click", onEdit)
      replayBtn?.removeEventListener("click", onReplay)
      scCleanups.forEach((fn) => fn())
      io.disconnect()
    }
  }, [])

  return null
}
