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
  title: 'Antonio Guerriere — Short Bio',
  description:
    'Short bio of Antonio Guerriere — technologist and entrepreneur. Open University First-Class graduate.',
  openGraph: {
    title: 'Antonio Guerriere — Short Bio',
    description: 'Technologist & entrepreneur. Open University First-Class graduate.',
    type: 'website',
    url: 'https://antonioguerriere.com',
    images: [{ url: '/images/antonio.webp' }],
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={spaceGrotesk.className}>
      <body>{children}</body>
    </html>
  )
}
