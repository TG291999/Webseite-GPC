/**
 * SectionDivider
 * Renders a gradient band that overlaps the bottom of the previous section,
 * creating a smooth colour-fade between contrasting section backgrounds.
 *
 * Usage: place directly after the outgoing section in the page markup.
 *   <DarkSection />
 *   <SectionDivider from="#0E0F0C" to="#F8F7F4" />
 *   <LightSection />
 *
 * The negative marginTop pulls the div up so it sits on top of the
 * previous section's bottom padding – no real content is ever hidden.
 */
type Props = {
  from: string
  to: string
  height?: number
}

export function SectionDivider({ from, to, height = 120 }: Props) {
  return (
    <div
      aria-hidden="true"
      style={{
        height: `${height}px`,
        marginTop: `-${height}px`,
        background: `linear-gradient(to bottom, ${from}, ${to})`,
        position: "relative",
        zIndex: 10,
        pointerEvents: "none",
      }}
    />
  )
}
