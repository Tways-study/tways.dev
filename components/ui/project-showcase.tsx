'use client'

import type React from 'react'

import { useState, useRef, useEffect } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { PROJECTS } from '@/lib/data'

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
  },
}

export function ProjectShowcase() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [smoothPosition, setSmoothPosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const animationRef = useRef<number | null>(null)
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    if (prefersReducedMotion) {
      setSmoothPosition(mousePosition)
      return
    }

    const lerp = (start: number, end: number, factor: number) => start + (end - start) * factor

    const animate = () => {
      setSmoothPosition((prev) => ({
        x: lerp(prev.x, mousePosition.x, 0.15),
        y: lerp(prev.y, mousePosition.y, 0.15),
      }))
      animationRef.current = requestAnimationFrame(animate)
    }

    animationRef.current = requestAnimationFrame(animate)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [mousePosition, prefersReducedMotion])

  const handleMouseMove = (e: React.MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect()
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      })
    }
  }

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index)
    setIsVisible(true)
  }

  const handleMouseLeave = () => {
    setHoveredIndex(null)
    setIsVisible(false)
  }

  return (
    <section
      id="projects"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative py-28 md:py-36 px-8 md:px-16 lg:px-24 border-t border-border"
    >
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-80px' }}
        className="max-w-6xl mx-auto mb-16"
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

      <div
        className="pointer-events-none fixed z-50 overflow-hidden rounded-xl shadow-2xl hidden lg:block"
        style={{
          left: containerRef.current?.getBoundingClientRect().left ?? 0,
          top: containerRef.current?.getBoundingClientRect().top ?? 0,
          transform: `translate3d(${smoothPosition.x + 32}px, ${smoothPosition.y - 140}px, 0)`,
          opacity: isVisible ? 1 : 0,
          scale: isVisible ? 1 : 0.8,
          transition: 'opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1), scale 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      >
        <div className="relative w-[360px] h-[240px] bg-surface rounded-xl overflow-hidden">
          {PROJECTS.map((project, index) => (
            <img
              key={project.title}
              src={project.image}
              alt={project.title}
              className="absolute inset-0 w-full h-full object-cover transition-all duration-500 ease-out"
              style={{
                opacity: hoveredIndex === index ? 1 : 0,
                scale: hoveredIndex === index ? 1 : 1.1,
                filter: hoveredIndex === index ? 'none' : 'blur(10px)',
              }}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-t from-bg/20 to-transparent" />
        </div>
      </div>

      <div className="max-w-6xl mx-auto">
        {PROJECTS.map((project, index) => {
          const isLinked = project.link !== '#'
          const isHovered = hoveredIndex === index

          const rowContent = (
            <div className="relative py-8 md:py-10 border-t border-border transition-all duration-300 ease-out">
              <div
                className={`
                  absolute inset-0 -mx-6 px-6 bg-surface/50 rounded-lg
                  transition-all duration-300 ease-out
                  ${isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}
                `}
              />

              {/* Mobile preview image — visible inline below lg, where the floating cursor preview is hidden */}
              <div className="relative mb-5 aspect-[3/2] w-full overflow-hidden rounded-lg lg:hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>

              <div className="relative flex flex-col md:flex-row md:items-start justify-between gap-4 md:gap-8">
                <div className="flex-1 min-w-0">
                  <span className="font-mono text-[10px] text-accent uppercase tracking-widest mb-2 block">
                    {project.role}
                  </span>

                  <div className="inline-flex items-center gap-2.5">
                    <h3
                      className="font-display text-text font-semibold tracking-tight"
                      style={{ fontSize: 'clamp(1.75rem, 3.4vw, 3rem)' }}
                    >
                      <span className="relative">
                        {project.title}
                        {isLinked && (
                          <span
                            className={`
                              absolute left-0 -bottom-1 h-px bg-text
                              transition-all duration-300 ease-out
                              ${isHovered ? 'w-full' : 'w-0'}
                            `}
                          />
                        )}
                      </span>
                    </h3>

                    {isLinked ? (
                      <ArrowUpRight
                        className={`
                          w-6 h-6 text-muted shrink-0
                          transition-all duration-300 ease-out
                          ${
                            isHovered
                              ? 'opacity-100 translate-x-0 translate-y-0'
                              : 'opacity-0 -translate-x-2 translate-y-2'
                          }
                        `}
                      />
                    ) : (
                      <span className="font-mono text-[9px] text-muted border border-border px-1.5 py-0.5 uppercase tracking-widest shrink-0">
                        Private
                      </span>
                    )}
                  </div>

                  <p
                    className={`
                      font-body text-sm md:text-base mt-3 leading-relaxed max-w-xl
                      transition-all duration-300 ease-out
                      ${isHovered ? 'text-text/70' : 'text-muted'}
                    `}
                  >
                    {project.desc}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-[10px] text-muted border border-border px-2 py-0.5 uppercase tracking-wider"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <span
                  className={`
                    font-mono text-xs text-muted tabular-nums shrink-0
                    transition-all duration-300 ease-out
                    ${isHovered ? 'text-text/60' : ''}
                  `}
                >
                  {project.year}
                </span>
              </div>
            </div>
          )

          const sharedProps = {
            onMouseEnter: () => handleMouseEnter(index),
            onMouseLeave: handleMouseLeave,
            onFocus: () => handleMouseEnter(index),
            onBlur: handleMouseLeave,
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true, margin: '-60px' },
            transition: { duration: 0.6, delay: index * 0.07, ease: [0.16, 1, 0.3, 1] as const },
          }

          return isLinked ? (
            <motion.a
              key={project.title}
              {...sharedProps}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4 focus-visible:ring-offset-bg rounded-sm"
            >
              {rowContent}
            </motion.a>
          ) : (
            <motion.div key={project.title} {...sharedProps} className="group block cursor-default">
              {rowContent}
            </motion.div>
          )
        })}

        <div className="border-t border-border" />
      </div>
    </section>
  )
}
