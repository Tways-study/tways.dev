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
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-16 lg:px-20 py-4 md:py-6 transition-all duration-300 ${
        scrolled ? 'bg-bg/90 backdrop-blur-md border-b border-border' : ''
      }`}
      aria-label="Primary navigation"
    >
      {/* Logo */}
      <a
        href="#home"
        className="font-display font-bold text-xs md:text-sm tracking-widest text-text hover:text-accent transition-colors duration-200"
      >
        TWAYS<span className="text-accent">.dev</span>
      </a>

      {/* Nav links */}
      <div className="flex items-center gap-5 md:gap-8">
        {NAV_ITEMS.map(item => (
          <a
            key={item.href}
            href={item.href}
            className={`font-mono text-[9px] md:text-[10px] uppercase tracking-[0.18em] transition-colors duration-200 ${
              active === item.href.slice(1)
                ? 'text-accent'
                : 'text-muted hover:text-text'
            }`}
          >
            {item.label}
          </a>
        ))}
      </div>

      {/* Hire Me — CTA (hidden on mobile, shown on desktop) */}
      <a
        href="mailto:twicenavarro23@gmail.com"
        className="hidden md:inline-block font-mono text-[9px] md:text-[10px] uppercase tracking-[0.2em] text-accent border border-accent/30 hover:border-accent hover:bg-accent/10 transition-all duration-200 px-4 py-2 rounded-sm"
      >
        Hire Me
      </a>
    </nav>
  )
}
