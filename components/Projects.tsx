'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { PROJECTS } from '@/lib/data'

export default function Projects() {
  const [hovered, setHovered] = useState<string | null>(null)

  return (
    <section id="projects" className="py-28 md:py-36 px-8 md:px-16 lg:px-24 border-t border-border">

      {/* Section header */}
      <motion.div
        className="flex items-center gap-4 mb-16"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
      >
        <span className="font-mono text-[10px] text-muted">03</span>
        <div className="h-px w-10 bg-border" />
        <span className="font-mono text-[10px] text-muted uppercase tracking-[0.22em]">Selected Work</span>
      </motion.div>

      {/* Project rows */}
      <div>
        {PROJECTS.map((project, i) => (
          <motion.article
            key={project.num}
            className="relative group border-b border-border last:border-b-0"
            onMouseEnter={() => setHovered(project.num)}
            onMouseLeave={() => setHovered(null)}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Orange left border — grows to full height on hover */}
            <div
              className="absolute left-0 top-0 w-[2px] bg-accent transition-all duration-300 ease-out"
              style={{ height: hovered === project.num ? '100%' : '0%' }}
              aria-hidden
            />

            <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 py-8 pl-6 pr-2 transition-all duration-300 group-hover:pl-8 group-hover:bg-surface/40">

              {/* Project number */}
              <span className="font-mono text-[10px] text-muted shrink-0 w-6">
                {project.num}
              </span>

              {/* Title + description */}
              <div className="flex-1 min-w-0">
                <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-4 mb-2">
                  <h3 className="font-display text-xl md:text-2xl font-semibold text-text group-hover:text-accent transition-colors duration-200">
                    {project.title}
                  </h3>
                  {/* Tags — reveal fully on hover */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map(tag => (
                      <span
                        key={tag}
                        className="font-mono text-[8px] text-muted border border-border px-2 py-0.5 uppercase tracking-wider"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <p className="font-body text-[13px] text-muted leading-relaxed max-w-xl">
                  {project.desc}
                </p>
              </div>

              {/* Link button */}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 self-start md:self-auto font-mono text-[10px] uppercase tracking-widest border border-border text-muted px-4 py-2.5 hover:border-accent hover:text-accent transition-all duration-200"
                aria-label={`View ${project.title}`}
              >
                View ↗
              </a>

            </div>
          </motion.article>
        ))}
      </div>

    </section>
  )
}
