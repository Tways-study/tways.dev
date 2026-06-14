'use client'

import { useState, useEffect } from 'react'
import { NAV_ITEMS } from '@/lib/data'

export default function Navbar() {
  const [active,   setActive]   = useState('')
  const [scrolled, setScrolled] = useState(false)
  const [open,     setOpen]     = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60)
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

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-16 lg:px-20 transition-all duration-300 ${
          scrolled
            ? 'bg-bg/95 backdrop-blur-md border-b border-border py-4 shadow-xl shadow-black/30'
            : 'bg-transparent py-6'
        }`}
        aria-label="Primary navigation"
      >
        {/* Logo */}
        <a
          href="#home"
          className="font-display font-bold text-sm md:text-base tracking-widest text-text hover:text-accent transition-colors duration-200 cursor-pointer"
        >
          TWICE<span className="text-accent">CODED</span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-7">
          {NAV_ITEMS.map(item => (
            <a
              key={item.href}
              href={item.href}
              className={`font-mono text-[11px] uppercase tracking-[0.2em] transition-colors duration-200 cursor-pointer ${
                active === item.href.slice(1) ? 'text-accent' : 'text-muted hover:text-text'
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA + mobile trigger */}
        <div className="flex items-center gap-4">
          <a
            href="mailto:twicenavarro23@gmail.com"
            className="hidden md:inline-block font-mono text-[11px] uppercase tracking-[0.2em] text-accent border border-accent/30 hover:border-accent hover:bg-accent/8 transition-all duration-200 px-4 py-2 cursor-pointer"
          >
            Hire Me
          </a>

          {/* Hamburger */}
          <button
            onClick={() => setOpen(v => !v)}
            className="md:hidden flex flex-col justify-center gap-[5px] w-6 h-5 cursor-pointer"
            aria-expanded={open}
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            <span className={`block h-px bg-text transition-all duration-300 origin-center ${open ? 'rotate-45 translate-y-[7px]' : 'w-full'}`} />
            <span className={`block h-px bg-text transition-all duration-200 ${open ? 'opacity-0 w-0' : 'w-full'}`} />
            <span className={`block h-px bg-text transition-all duration-300 origin-center ${open ? '-rotate-45 -translate-y-[7px]' : 'w-full'}`} />
          </button>
        </div>
      </nav>

      {/* Mobile fullscreen menu */}
      <div
        className={`fixed inset-0 z-40 bg-bg flex flex-col items-start justify-end pb-16 px-8 transition-all duration-500 md:hidden ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden={!open}
      >
        {/* Large nav links */}
        <nav className="flex flex-col gap-1 w-full">
          {NAV_ITEMS.map((item, i) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={`font-display font-bold text-5xl text-text hover:text-accent transition-all duration-300 cursor-pointer leading-tight ${
                open ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
              }`}
              style={{ transitionDelay: open ? `${i * 60}ms` : '0ms' }}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="h-px w-full bg-border mt-10 mb-8" />

        <a
          href="mailto:twicenavarro23@gmail.com"
          className="font-mono text-xs uppercase tracking-widest text-accent cursor-pointer"
        >
          twicenavarro23@gmail.com
        </a>
      </div>
    </>
  )
}
