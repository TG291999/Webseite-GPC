"use client"

import * as Accordion from "@radix-ui/react-accordion"
import Link from "next/link"
import { SectionHead } from "@/components/site/section-head"
import { FAQ_ITEMS } from "./faq-data"
import { Arrow } from "@/components/site/icons"

export function Faq() {
  return (
    <section className="section" id="faq">
      <div className="container faq-grid">
        <SectionHead
            title="Was Verwalter mich vor dem ersten Gespräch fragen."
            sub="Die ehrlichen Antworten — ohne Marketing-Sprech."
          />
        <div>
          <Accordion.Root type="single" collapsible defaultValue="f0" className="faq-list">
            {FAQ_ITEMS.map((item, i) => (
              <Accordion.Item key={i} value={`f${i}`} className="faq-item">
                <Accordion.Header asChild>
                  <h3 style={{ margin: 0, font: "inherit" }}>
                    <Accordion.Trigger className="faq-q">
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
            <Link href="#buchung" className="link">Offene Frage? Klären wir im 45-Minuten-Gespräch <Arrow /></Link>
          </p>
        </div>
      </div>
    </section>
  )
}
