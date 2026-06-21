'use client'

import { motion } from 'framer-motion'
import { TIMELINE } from '@/lib/data'

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
  },
}

const entryFadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] as const },
  },
}

export default function EducationCertificates() {
  return (
    <section
      id="education"
      className="py-28 md:py-36 px-8 md:px-16 lg:px-24 border-t border-border"
    >
      {/* Heading */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-80px' }}
        className="flex items-end justify-between gap-6 mb-16 md:mb-20 max-w-3xl mx-auto"
      >
        <h2
          className="font-display font-bold text-text leading-[0.95]"
          style={{ fontSize: 'clamp(2.25rem, 5vw, 3.75rem)' }}
        >
          Education<br />&amp; Certificates
        </h2>
        <span className="font-mono text-xs text-muted tabular-nums shrink-0 pb-1">
          {String(TIMELINE.length).padStart(2, '0')} entries
        </span>
      </motion.div>

      {/* Timeline */}
      <div className="relative max-w-3xl mx-auto">
        {/* Rail — one continuous hairline, not a per-item border */}
        <div
          className="absolute left-[5px] md:left-[7px] top-2 bottom-2 w-px bg-border"
          aria-hidden
        />

        <ol className="relative flex flex-col gap-12 md:gap-14">
          {TIMELINE.map((entry, i) => (
            <motion.li
              key={`${entry.org}-${entry.title}`}
              className="relative pl-8 md:pl-10"
              variants={entryFadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: i * 0.09 }}
            >
              {/* Marker */}
              <span
                className={`absolute left-0 top-1.5 w-[11px] h-[11px] md:w-[15px] md:h-[15px] rounded-full border-2 ${
                  entry.kind === 'education'
                    ? 'bg-accent border-accent'
                    : 'bg-bg border-muted'
                }`}
                aria-hidden
              />

              <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1 md:gap-6">
                <div>
                  <span className="font-mono text-[10px] text-accent uppercase tracking-widest block mb-1.5">
                    {entry.kind === 'education' ? 'Education' : 'Certificate'}
                  </span>
                  <h3 className="font-display text-xl md:text-2xl font-semibold text-text leading-snug">
                    {entry.title}
                  </h3>
                  <p className="font-body text-sm text-muted mt-1">
                    {entry.org}
                    {entry.detail && <span className="text-muted/70"> &mdash; {entry.detail}</span>}
                  </p>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  <span className="font-mono text-xs text-muted tabular-nums">
                    {entry.start === entry.end ? entry.start : `${entry.start}–${entry.end}`}
                  </span>
                  {entry.link && entry.link !== '#' && (
                    <a
                      href={entry.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-[10px] text-muted uppercase tracking-widest hover:text-accent transition-colors duration-200"
                    >
                      View ↗
                    </a>
                  )}
                </div>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  )
}
