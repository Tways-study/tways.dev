'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { HERO_STATS } from '@/lib/data'

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
          {char === ' ' ? ' ' : char}
        </motion.span>
      ))}
    </span>
  )
}

export default function Hero() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center pt-28 pb-16 px-8 md:px-16 lg:px-20"
    >
      {/* Background layer — overflow-hidden isolated here so the heading stroke isn't clipped */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
        <div className="grid-bg absolute inset-0" />
        <div
          className="absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(16,185,129,0.05) 0%, transparent 65%)' }}
        />
        <div
          className="absolute bottom-0 -left-40 w-[500px] h-[500px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(16,185,129,0.03) 0%, transparent 70%)' }}
        />
      </div>

      {/* Name byline */}
      <motion.p
        className="font-mono text-xs md:text-sm text-muted tracking-[0.15em] mb-3 md:mb-4"
        initial={{ opacity: 0, x: -16 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        Tways Navarro
      </motion.p>

      {/* Available badge */}
      <motion.div
        className="flex items-center gap-3 mb-10 md:mb-14"
        initial={{ opacity: 0, x: -16 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
      >
        <span className="h-px w-8 bg-border" />
        <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
        <span className="font-body text-[11px] md:text-xs text-muted uppercase tracking-[0.22em]">
          Available for work
        </span>
      </motion.div>

      {/* Display headline */}
      <h1
        className="font-display font-bold leading-[0.9] tracking-[-0.035em] -ml-0.5 mb-10 md:mb-14"
        style={{ fontSize: 'clamp(3.5rem, 10.5vw, 10.5rem)' }}
      >
        <div className="block text-text">
          <SplitReveal text="Full-Stack" baseDelay={0} />
        </div>
        <div className="block text-accent">
          <SplitReveal text="Developer" baseDelay={0.22} />
        </div>
        <div className="block font-semibold" style={{ color: 'rgba(240, 237, 232, 0.44)' }}>
          <SplitReveal text="& Designer" baseDelay={0.5} />
        </div>
      </h1>

      {/* Thin divider */}
      <motion.div
        className="h-px w-full bg-border mb-10 md:mb-12"
        initial={{ scaleX: 0, originX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
        aria-hidden
      />

      {/* Bottom info row */}
      <div className="flex flex-col md:flex-row md:items-end gap-8 md:gap-12">

        {/* Description */}
        <motion.p
          className="font-body text-muted text-sm md:text-base leading-relaxed max-w-[260px]"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9, ease: 'easeOut' }}
        >
          Building precise, purposeful<br />digital experiences. Based in{' '}
          <strong className="text-text font-medium">Iloilo City, PH</strong>.
        </motion.p>

        {/* Stats — desktop only */}
        <motion.div
          className="hidden md:flex items-center gap-6 md:gap-8"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0, ease: 'easeOut' }}
        >
          <span className="h-8 w-px bg-border" aria-hidden />
          {HERO_STATS.map((stat) => (
            <div key={stat.num} className="flex flex-col gap-1">
              <span className="font-display text-xl md:text-2xl font-bold text-text">{stat.num}</span>
              <span className="font-body text-[10px] text-muted uppercase tracking-widest leading-tight whitespace-pre-line">
                {stat.label}
              </span>
            </div>
          ))}
          <span className="h-8 w-px bg-border" aria-hidden />
        </motion.div>

        {/* CTAs */}
        <motion.div
          className="flex gap-3 md:ml-auto"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1, ease: 'easeOut' }}
        >
          <a href="#projects" className="btn-primary">View Work ↓</a>
          <a href="#contact" className="btn-ghost">Get in Touch</a>
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
        <span className="font-mono text-[9px] text-muted uppercase tracking-[0.3em] [writing-mode:vertical-rl]">
          Scroll
        </span>
        <div className="w-px h-10 bg-border overflow-hidden">
          <motion.div
            className="w-full bg-accent"
            animate={prefersReducedMotion ? { height: '40%' } : { height: ['0%', '100%', '0%'] }}
            transition={
              prefersReducedMotion
                ? { duration: 0 }
                : { duration: 2, repeat: Infinity, ease: 'easeInOut' }
            }
          />
        </div>
      </motion.div>
    </section>
  )
}
