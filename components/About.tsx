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
            I&rsquo;m a Full-Stack Developer based in Iloilo City, focused on the
            complete development lifecycle from interface to architecture.
            I build Front-Ends that feel intuitive and Back-Ends that hold up
            under real use.
          </p>

          <p className="font-body text-muted text-base md:text-lg leading-relaxed mb-10 max-w-xl">
            My work spans full-stack platforms, mobile apps, and interactive UIs.
            Clean code and architectural rigor aren&rsquo;t afterthoughts &mdash;
            they&rsquo;re the baseline I build from.
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {TAGS.map(tag => (
              <span
                key={tag}
                className="font-body text-[11px] md:text-xs border border-border text-muted px-3 py-1.5 uppercase tracking-widest hover:border-accent/50 hover:text-text transition-all duration-200 cursor-default"
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
                src="/profile-pic.jpg"
                alt="Tways Navarro"
                width={400}
                height={533}
                className="w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                priority
              />
              {/* Subtle overlay */}
              <div className="absolute inset-0 bg-bg/10 group-hover:bg-transparent transition-all duration-700 pointer-events-none" />
            </div>

            {/* Role label */}
            <div className="absolute -bottom-10 left-0 z-[3]">
              <span className="font-mono text-[10px] text-muted uppercase tracking-widest">
                Based in Iloilo City, PH
              </span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
