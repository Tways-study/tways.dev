'use client'

import { motion } from 'framer-motion'
import { SKILLS } from '@/lib/data'
import Marquee from './Marquee'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] as const },
  },
}

export default function Skills() {
  return (
    <section id="skills" className="py-28 md:py-36 border-t border-border">

      {/* Section header */}
      <div className="px-8 md:px-16 lg:px-24">
        <motion.div
          className="flex items-center gap-4 mb-16"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
        >
          <span className="font-mono text-[10px] text-muted">02</span>
          <div className="h-px w-10 bg-border" />
          <span className="font-mono text-[10px] text-muted uppercase tracking-[0.22em]">Toolset</span>
        </motion.div>
      </div>

      {/* Infinite marquee strip */}
      <Marquee />

      {/* Skill groups grid */}
      <div className="px-8 md:px-16 lg:px-24 mt-14">
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          transition={{ delay: 0.1 }}
        >
          {SKILLS.map(group => (
            <div key={group.group} className="flex flex-col gap-4">
              {/* Group label */}
              <span className="font-mono text-[9px] uppercase tracking-[0.26em] text-muted border-b border-border pb-2">
                {group.group}
              </span>

              {/* Skill pills */}
              <div className="flex flex-col gap-2">
                {group.items.map((item, i) => (
                  <span
                    key={item}
                    className={`font-mono text-[10px] px-3 py-2 border transition-colors duration-200 ${
                      group.active[i]
                        ? 'border-accent/25 text-text bg-accent/5 hover:bg-accent/10 hover:border-accent/50'
                        : 'border-border text-muted opacity-35'
                    }`}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

    </section>
  )
}
