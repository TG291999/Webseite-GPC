const WORDS: Array<{ t: string; em?: boolean }> = [
  { t: "Ich" },
  { t: "gebe" },
  { t: "Ihrer" },
  { t: "Verwaltung" },
  { t: "Zeit", em: true },
  { t: "zurück." },
]

/**
 * Titel, Wort für Wort aus einer Maske nach oben — einmal, beim Laden.
 * Reines CSS unter `html.js`: Ohne JavaScript (oder bevor es lädt) steht der
 * Titel sofort lesbar da, statt in der Maske zu warten.
 */
export function HeroTitle() {
  return (
    <h1 aria-label="Ich gebe Ihrer Verwaltung Zeit zurück.">
      {WORDS.map((w, i) => (
        <span key={i} className="w" aria-hidden="true">
          <span className="wi" style={{ "--i": i } as React.CSSProperties}>
            {w.em ? <em className="mark">{w.t}</em> : w.t}
          </span>
        </span>
      )).flatMap((el, i) => (i < WORDS.length - 1 ? [el, " "] : [el]))}
    </h1>
  )
}
