'use client'

import { motion } from 'framer-motion'
import { PROJECTS } from '@/lib/data'
import { ProjectCard } from '@/components/ui/project-card'

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
  },
}

export function ProjectShowcase() {
  return (
    <section
      id="projects"
      className="py-28 md:py-36 px-8 md:px-16 lg:px-24 border-t border-border"
    >
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-80px' }}
        className="mb-16"
      >
        <span className="font-body text-accent uppercase tracking-widest text-xs md:text-sm block mb-4">
          Selected Work
        </span>
        <h2
          className="font-display font-bold text-text leading-[0.95]"
          style={{ fontSize: 'clamp(3rem, 7vw, 5.5rem)' }}
        >
          Projects
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map((project, i) => (
          <motion.div
            key={project.num}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
          >
            <ProjectCard
              imgSrc={project.image}
              title={project.title}
              role={project.role}
              description={project.desc}
              tags={project.tags}
              link={project.link}
            />
          </motion.div>
        ))}
      </div>
    </section>
  )
}
