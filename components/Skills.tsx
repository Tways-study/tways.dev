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

const GROUP_NUMS = ['01', '02', '03', '04']

export default function Skills() {
  return (
    <section id="skills" className="py-28 md:py-36 border-t border-border">

      {/* Infinite marquee strip */}
      <Marquee />

      {/* Skill groups */}
      <div className="px-8 md:px-16 lg:px-24 mt-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-border">
          {SKILLS.map((group, gi) => (
            <motion.div
              key={group.group}
              className="bg-bg p-6 md:p-8"
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: gi * 0.07 }}
            >
              {/* Group number + name */}
              <div className="flex items-baseline justify-between mb-6">
                <span className="font-body text-[10px] uppercase tracking-[0.26em] text-muted">
                  {group.group}
                </span>
                <span className="font-display text-4xl font-bold text-border select-none">
                  {GROUP_NUMS[gi]}
                </span>
              </div>

              {/* Skill items */}
              <div className="flex flex-col gap-2.5">
                {group.items.map((item, i) => (
                  <div
                    key={item}
                    className={`flex items-center gap-2.5 group transition-colors duration-200 ${
                      group.active[i] ? 'cursor-default' : 'opacity-30 cursor-not-allowed'
                    }`}
                  >
                    {/* Dot indicator */}
                    <span className={`w-1 h-1 rounded-full shrink-0 transition-colors duration-200 ${
                      group.active[i] ? 'bg-accent group-hover:bg-accent' : 'bg-muted/30'
                    }`} />
                    <span className={`font-body text-[11px] md:text-xs uppercase tracking-wider transition-colors duration-200 ${
                      group.active[i] ? 'text-text group-hover:text-accent' : 'text-muted/40'
                    }`}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

    </section>
  )
}
