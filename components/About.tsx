'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

// Shared fade-up variant used across the section
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
  },
}

const TAGS = ['React', 'Next.js', 'TypeScript', 'Capacitor', 'Supabase', 'UI/UX']

export default function About() {
  return (
    <section
      id="about"
      className="py-28 md:py-36 px-8 md:px-16 lg:px-24 bg-surface border-t border-border"
    >
      {/* ── Section header ── */}
      <motion.div
        className="flex items-center gap-5 mb-16 md:mb-20"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-80px' }}
      >
        <span className="font-mono text-[11px] md:text-xs text-accent shrink-0">01</span>
        <div className="h-px flex-1 bg-border" />
        <span className="font-mono text-[11px] md:text-xs text-muted uppercase tracking-[0.22em] shrink-0">About</span>
      </motion.div>

      {/* ── Two-column grid ── */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center max-w-6xl mx-auto">

        {/* Text column */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="mx-auto lg:ml-0"
        >
          <h2 className="font-display text-5xl md:text-6xl lg:text-[5.5rem] font-bold text-text leading-[1.0] mb-8">
            Tways<br />Navarro
          </h2>

          <p className="font-body text-muted text-lg md:text-xl leading-relaxed mb-4 max-w-xl">
            I&rsquo;m a web developer and designer from Iloilo City who obsesses over the intersection
            of engineering and aesthetics. I build interfaces that don&rsquo;t just work. They feel
            inevitable.
          </p>

          <p className="font-body text-muted text-lg md:text-xl leading-relaxed mb-10 max-w-xl">
            My work spans mobile apps, full-stack platforms, and interactive UIs. I approach every
            project with design intent and technical rigor, because craft matters.
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {TAGS.map(tag => (
              <span
                key={tag}
                className="font-mono text-xs md:text-sm border border-border text-muted px-3 py-1.5 uppercase tracking-widest hover:border-accent/50 hover:text-text transition-all duration-200"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Photo column */}
        <motion.div
          className="relative w-full"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          transition={{ delay: 0.15 }}
        >
          <div className="relative w-full max-w-sm mx-auto group">
            {/* Top-left inset border */}
            <div className="absolute -top-3 -left-3 w-full h-full border border-border" aria-hidden />

            {/* Solid accent block — bottom right, shifts on hover */}
            <div
              className="absolute -bottom-[20px] -right-[20px] w-[80px] h-[80px] bg-accent z-[1] transition-transform duration-500 group-hover:translate-x-[5px] group-hover:translate-y-[5px]"
              aria-hidden
            />

            {/* Photo: greyscale → colour on hover */}
            <div className="relative overflow-hidden z-[2]">
              <Image
                src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}/profile-pic.jpg`}
                alt="Tways Navarro"
                width={400}
                height={500}
                className="w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                priority
              />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
