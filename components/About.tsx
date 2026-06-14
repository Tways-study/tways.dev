'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

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
      {/* Section header */}
      <motion.div
        className="flex items-center gap-5 mb-20 md:mb-24"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-80px' }}
      >
        <span className="font-mono text-[11px] md:text-xs text-accent shrink-0">01</span>
        <div className="h-px flex-1 bg-border" />
        <span className="font-mono text-[11px] md:text-xs text-muted uppercase tracking-[0.22em] shrink-0">About</span>
      </motion.div>

      {/* Two-column grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-28 items-center max-w-6xl mx-auto">

        {/* Text column */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="mx-auto lg:ml-0"
        >
          <h2
            className="font-display font-bold text-text leading-[0.95] mb-8"
            style={{ fontSize: 'clamp(3rem, 7vw, 5.5rem)' }}
          >
            Tways<br />
            <span className="text-outlined">Navarro</span>
          </h2>

          <p className="font-body text-muted text-base md:text-lg leading-relaxed mb-5 max-w-xl">
            I&rsquo;m a web developer and designer from Iloilo City who obsesses over
            the intersection of engineering and aesthetics. I build interfaces that
            don&rsquo;t just work — they feel inevitable.
          </p>

          <p className="font-body text-muted text-base md:text-lg leading-relaxed mb-10 max-w-xl">
            My work spans mobile apps, full-stack platforms, and interactive UIs.
            I approach every project with design intent and technical rigor,
            because craft matters.
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {TAGS.map(tag => (
              <span
                key={tag}
                className="font-mono text-[11px] md:text-xs border border-border text-muted px-3 py-1.5 uppercase tracking-widest hover:border-accent/50 hover:text-text transition-all duration-200 cursor-default"
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
            {/* Offset frame */}
            <div className="absolute -top-4 -left-4 w-full h-full border border-border pointer-events-none" aria-hidden />

            {/* Accent block — shifts on hover */}
            <div
              className="absolute -bottom-5 -right-5 w-20 h-20 bg-accent z-[1] transition-transform duration-500 ease-out group-hover:translate-x-1.5 group-hover:translate-y-1.5"
              aria-hidden
            />

            {/* Photo: greyscale → colour on hover */}
            <div className="relative overflow-hidden z-[2]">
              <Image
                src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}/profile-pic.jpg`}
                alt="Tways Navarro"
                width={400}
                height={500}
                className="w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                priority
              />
              {/* Subtle overlay */}
              <div className="absolute inset-0 bg-bg/10 group-hover:bg-transparent transition-all duration-700 pointer-events-none" />
            </div>

            {/* Role label */}
            <div className="absolute -bottom-10 left-0 z-[3]">
              <span className="font-mono text-[10px] text-muted uppercase tracking-widest">
                Full-Stack Developer & Designer
              </span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
