"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

interface SectionPlaceholderProps {
  id: string
  title: string
  description: string
  alternate?: boolean
}

export function SectionPlaceholder({
  id,
  title,
  description,
  alternate = false,
}: SectionPlaceholderProps) {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id={id}
      ref={sectionRef}
      className={cn(
        "px-6 py-24 md:py-32",
        alternate ? "bg-[#F8F7F4]" : "bg-background"
      )}
    >
      <div className="mx-auto max-w-[1200px]">
        <div
          className={cn(
            "flex flex-col items-center text-center transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <h2 className="font-serif text-3xl font-semibold text-foreground md:text-4xl">
            {title}
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">{description}</p>
          <div className="mt-12 flex h-48 w-full max-w-3xl items-center justify-center rounded-lg border-2 border-dashed border-border">
            <span className="text-sm text-muted-foreground">
              Inhalt wird hier eingefügt
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
