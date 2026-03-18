import type { Metadata, Viewport } from 'next'
import { Playfair_Display, DM_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-serif',
  display: 'swap',
})

const dmSans = DM_Sans({ 
  subsets: ["latin"],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Goebel & Partner Consulting | Strategieberatung & Softwareentwicklung',
  description: 'Ich berate nicht nur – ich baue die Lösung selbst. Prozessoptimierung, Strategieberatung, individuelle Softwareentwicklung und KI-Integration für den deutschen Mittelstand.',
  keywords: ['Unternehmensberatung', 'Softwareentwicklung', 'KI-Integration', 'Prozessoptimierung', 'Strategieberatung', 'Mittelstand', 'Deutschland'],
  authors: [{ name: 'Tim Goebel' }],
  creator: 'Tim Goebel',
  openGraph: {
    title: 'Goebel & Partner Consulting',
    description: 'Strategieberatung & Softwareentwicklung aus einer Hand',
    type: 'website',
    locale: 'de_DE',
  },
}

export const viewport: Viewport = {
  themeColor: '#1B5E3B',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="de" className={`${playfair.variable} ${dmSans.variable}`} suppressHydrationWarning data-scroll-behavior="smooth">
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
