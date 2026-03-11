import type { Metadata, Viewport } from 'next'
import { Space_Grotesk } from 'next/font/google'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
})

export const viewport: Viewport = {
  themeColor: '#0f0f12',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://antonioguerriere.com'),
  title: 'Antonio Guerriere — Founder & CEO, Mind Technica',
  description:
    'Antonio Guerriere is the founder and CEO of Mind Technica, an AI and automation consultancy based in Northern Ireland. MSc AI & Data Science candidate at Queen\'s University Belfast.',
  openGraph: {
    title: 'Antonio Guerriere — Founder & CEO, Mind Technica',
    description:
      'Founder and CEO of Mind Technica. AI, automation, and intelligent systems.',
    type: 'website',
    url: 'https://antonioguerriere.com',
    images: [{ url: '/images/antonio.webp' }],
  },
  alternates: {
    canonical: 'https://antonioguerriere.com',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
  },
  manifest: '/site.webmanifest',
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={spaceGrotesk.className}>
      <body>{children}</body>
    </html>
  )
}
