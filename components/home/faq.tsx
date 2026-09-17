"use client"

import * as Accordion from "@radix-ui/react-accordion"
import Link from "next/link"
import { Reveal } from "@/components/site/reveal"
import { SectionHead } from "@/components/site/section-head"
import { FAQ_ITEMS } from "./faq-data"

export function Faq() {
  return (
    <section className="section" id="faq">
      <div className="container faq-grid">
        <Reveal>
          <SectionHead
            n="10"
            kicker="Fragen"
            title="Was Verwalter mich vor dem ersten Gespräch fragen."
            sub="Die ehrlichen Antworten — ohne Marketing-Sprech."
          />
        </Reveal>
        <Reveal>
          <Accordion.Root type="single" collapsible defaultValue="f0" className="faq-list">
            {FAQ_ITEMS.map((item, i) => (
              <Accordion.Item key={i} value={`f${i}`} className="faq-item">
                <Accordion.Header asChild>
                  <h3 style={{ margin: 0, font: "inherit" }}>
                    <Accordion.Trigger className="faq-q">
                      <span className="n">{String(i + 1).padStart(2, "0")}</span>
                      <span>{item.q}</span>
                      <span className="pm" aria-hidden="true" />
                    </Accordion.Trigger>
                  </h3>
                </Accordion.Header>
                <Accordion.Content className="faq-a">
                  <div className="faq-a-inner">{item.a}</div>
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
          <p className="faq-more">
            <Link href="#buchung" className="textlink">Offene Frage? Klären wir im 45-Minuten-Gespräch →</Link>
          </p>
        </Reveal>
      </div>
    </section>
  )
}
