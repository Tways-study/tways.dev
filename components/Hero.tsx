'use client'

import { motion } from 'framer-motion'
import { HERO_STATS } from '@/lib/data'

// Character-staggered reveal — each letter slides up from a clip
function SplitReveal({
  text,
  baseDelay = 0,
  className = '',
}: {
  text: string
  baseDelay?: number
  className?: string
}) {
  return (
    <span className={`inline-flex overflow-hidden ${className}`} aria-label={text}>
      {text.split('').map((char, i) => (
        <motion.span
          key={i}
          aria-hidden
          className="inline-block"
          initial={{ y: '110%' }}
          animate={{ y: 0 }}
          transition={{
            duration: 0.72,
            delay: baseDelay + i * 0.028,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </span>
  )
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center pt-28 pb-16 px-8 md:px-16 lg:px-20 overflow-hidden"
    >
      {/* Dot-grid atmosphere */}
      <div className="grid-bg absolute inset-0 pointer-events-none" aria-hidden />

      {/* Radial accent glow — top-right */}
      <div
        className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(26,76,57,0.06) 0%, transparent 70%)' }}
        aria-hidden
      />

      {/* Available badge */}
      <motion.div
        className="flex items-center gap-3 mb-10 md:mb-14"
        initial={{ opacity: 0, x: -16 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <span className="h-px w-8 bg-muted" />
        <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
        <span className="font-mono text-[11px] md:text-xs text-muted uppercase tracking-[0.22em]">
          Available for work
        </span>
      </motion.div>

      {/* ── Display headline ── */}
      <h1
        className="font-display font-bold leading-[0.92] tracking-[-0.035em] -ml-0.5 mb-12 md:mb-16"
        style={{ fontSize: 'clamp(3.5rem, 10.5vw, 10.5rem)' }}
      >
        <div className="block text-text">
          <SplitReveal text="Full-Stack" baseDelay={0} />
        </div>
        <div className="block text-accent">
          <SplitReveal text="Developer" baseDelay={0.22} />
        </div>
        <div className="block text-muted">
          <SplitReveal text="& Designer" baseDelay={0.5} />
        </div>
      </h1>

      {/* ── Bottom info row ── */}
      <div className="flex flex-col md:flex-row md:items-end gap-8 md:gap-12">

        {/* Description */}
        <motion.p
          className="font-body text-muted text-sm md:text-base leading-relaxed max-w-[240px]"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9, ease: 'easeOut' }}
        >
          Building precise, purposeful<br />digital experiences. Based in{' '}
          <strong className="text-text font-medium">Iloilo City, PH</strong>.
        </motion.p>

        {/* Stats */}
        <motion.div
          className="flex gap-8 md:gap-10"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0, ease: 'easeOut' }}
        >
          {HERO_STATS.map(({ num, label }) => (
            <div key={label} className="flex flex-col gap-0.5">
              <span className="font-display text-3xl md:text-4xl font-bold text-text leading-none">
                {num}
              </span>
              <span className="font-mono text-[10px] md:text-[11px] text-muted uppercase tracking-widest whitespace-pre-line leading-snug mt-1">
                {label}
              </span>
            </div>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          className="flex gap-3 md:ml-auto"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1, ease: 'easeOut' }}
        >
          <a href="#projects" className="btn-primary">View Work ↓</a>
          <a href="#contact"  className="btn-ghost">Get in Touch</a>
        </motion.div>
      </div>

      {/* Vertical scroll indicator */}
      <motion.div
        className="absolute right-8 bottom-10 hidden md:flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        aria-hidden
      >
        <span className="font-mono text-[9px] md:text-[10px] text-muted uppercase tracking-[0.3em] [writing-mode:vertical-rl]">
          Scroll
        </span>
        <div className="w-px h-10 bg-border overflow-hidden">
          <motion.div
            className="w-full bg-accent"
            animate={{ height: ['0%', '100%', '0%'] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
      </motion.div>
    </section>
  )
}
