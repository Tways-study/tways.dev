import type { Metadata } from 'next'
import { Syne, Manrope, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import CursorDot from '@/components/CursorDot'
import Navbar from '@/components/Navbar'

const syne = Syne({
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  variable: '--font-syne',
})

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-manrope',
})

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-jetbrains',
})

export const metadata: Metadata = {
  title: 'Tways Navarro — Full-Stack Developer & Designer',
  description:
    'Portfolio of Tways Navarro, a full-stack developer and designer building precise, purposeful digital products from Iloilo City, PH.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${syne.variable} ${manrope.variable} ${jetbrains.variable} font-body bg-bg text-text antialiased overflow-x-hidden`}
      >
        <CursorDot />
        <Navbar />
        {children}
      </body>
    </html>
  )
}
