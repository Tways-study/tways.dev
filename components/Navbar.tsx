'use client'

import { useState, useEffect } from 'react'
import { NAV_ITEMS } from '@/lib/data'

export default function Navbar() {
  const [active,   setActive]   = useState('')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60)

      // Highlight the section currently in view
      const sections = document.querySelectorAll<HTMLElement>('section[id]')
      let current = ''
      sections.forEach(s => {
        if (window.scrollY >= s.offsetTop - 140) current = s.id
      })
      setActive(current)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      {/* ── Desktop: fixed left sidebar ── */}
      <nav
        className="fixed left-0 top-0 h-full w-16 border-r border-border bg-bg/80 backdrop-blur-md z-50 hidden md:flex flex-col items-center py-8"
        aria-label="Primary navigation"
      >
        {/* Logo — vertical writing */}
        <a
          href="#home"
          className="font-display font-bold text-[11px] tracking-[0.25em] text-text [writing-mode:vertical-rl] rotate-180 hover:text-accent transition-colors duration-200"
        >
          TWAYS<span className="text-accent">.dev</span>
        </a>

        {/* Nav links — vertical, centred */}
        <div className="flex flex-col items-center gap-7 my-auto">
          {NAV_ITEMS.map(item => (
            <a
              key={item.href}
              href={item.href}
              className={`font-mono text-[9px] uppercase tracking-[0.18em] [writing-mode:vertical-rl] rotate-180 transition-colors duration-200 ${
                active === item.href.slice(1)
                  ? 'text-accent'
                  : 'text-muted hover:text-text'
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Hire Me — bottom CTA */}
        <a
          href="mailto:twicenavarro23@gmail.com"
          className="font-mono text-[9px] uppercase tracking-[0.2em] text-accent border border-accent/30 hover:border-accent hover:bg-accent/10 transition-all duration-200 px-[7px] py-3 [writing-mode:vertical-rl] rotate-180"
        >
          Hire Me
        </a>
      </nav>

      {/* ── Mobile: top bar ── */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 md:hidden flex items-center justify-between px-5 py-4 transition-all duration-300 ${
          scrolled ? 'bg-bg/90 backdrop-blur-md border-b border-border' : ''
        }`}
        aria-label="Primary navigation"
      >
        <a href="#home" className="font-display font-bold text-[13px] tracking-widest text-text">
          TWAYS<span className="text-accent">.dev</span>
        </a>

        <div className="flex items-center gap-5">
          {NAV_ITEMS.map(item => (
            <a
              key={item.href}
              href={item.href}
              className={`font-mono text-[9px] uppercase tracking-widest transition-colors ${
                active === item.href.slice(1) ? 'text-accent' : 'text-muted'
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </>
  )
}
