/** Kleine Linienicons in der Stärke der Schrift — nur die, die die Seite braucht. */
type P = { size?: number; className?: string }

export const Check = ({ size = 18, className }: P) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <path d="M20 6 9 17l-5-5" />
  </svg>
)
export const Arrow = ({ size = 16, className }: P) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true" style={{ display: "inline-block", flex: "0 0 auto" }}>
    <path d="M5 12h14" />
    <path d="m13 6 6 6-6 6" />
  </svg>
)
/** Blaues Verifiziert-Abzeichen (Rosette mit Häkchen), wie auf Instagram/Meta. */
export const Verified = ({ size = 18, className }: P) => (
  <svg width={size} height={size} viewBox="0 0 24 24" className={className} role="img" aria-label="verifiziert" style={{ display: "inline-block", flex: "0 0 auto" }}>
    <path fill="#276AE8" d="M12 .5Q14.59 2.34 17.75 2.04Q19.07 4.93 21.96 6.25Q21.66 9.41 23.5 12Q21.66 14.59 21.96 17.75Q19.07 19.07 17.75 21.96Q14.59 21.66 12 23.5Q9.41 21.66 6.25 21.96Q4.93 19.07 2.04 17.75Q2.34 14.59 .5 12Q2.34 9.41 2.04 6.25Q4.93 4.93 6.25 2.04Q9.41 2.34 12 .5Z" />
    <path d="m7.6 12.3 3 3 5.8-6.2" fill="none" stroke="#fff" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)
export const Dash = ({ size = 18, className }: P) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className={className} aria-hidden="true">
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
)
export const Replay = ({ size = 15, className }: P) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <path d="M3 3v5h5" />
    <path d="M3.05 13A9 9 0 1 0 6 5.3L3 8" />
  </svg>
)
export const LinkedIn = ({ size = 18, className }: P) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
  </svg>
)
