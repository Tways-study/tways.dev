'use client'

import type React from 'react'
import { useState, useRef, useEffect } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { PROJECTS } from '@/lib/data'

export function ProjectShowcase() {
  const [hoveredIndex, setHoveredIndex]     = useState<number | null>(null)
  const [mousePosition, setMousePosition]   = useState({ x: 0, y: 0 })
  const [smoothPosition, setSmoothPosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible]           = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const animationRef = useRef<number | null>(null)

  useEffect(() => {
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t

    const tick = () => {
      setSmoothPosition(prev => ({
        x: lerp(prev.x, mousePosition.x, 0.15),
        y: lerp(prev.y, mousePosition.y, 0.15),
      }))
      animationRef.current = requestAnimationFrame(tick)
    }

    animationRef.current = requestAnimationFrame(tick)
    return () => { if (animationRef.current) cancelAnimationFrame(animationRef.current) }
  }, [mousePosition])

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top })
  }

  const handleMouseEnter = (index: number) => { setHoveredIndex(index); setIsVisible(true) }
  const handleMouseLeave = ()               => { setHoveredIndex(null);  setIsVisible(false) }

  const rect = containerRef.current?.getBoundingClientRect()

  return (
    <section
      id="projects"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative py-28 md:py-36 px-8 md:px-16 lg:px-24 border-t border-border"
    >
      {/* Section header */}
      <motion.div
        className="flex items-center gap-4 mb-16"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
      >
        <span className="font-mono text-[11px] md:text-xs text-accent shrink-0">03</span>
        <div className="h-px flex-1 bg-border" />
        <span className="font-mono text-[11px] md:text-xs text-muted uppercase tracking-[0.22em] shrink-0">
          Selected Work
        </span>
      </motion.div>

      {/* Floating image preview — follows cursor */}
      <div
        className="pointer-events-none fixed z-50 overflow-hidden rounded-xl"
        style={{
          left:      rect?.left ?? 0,
          top:       rect?.top  ?? 0,
          transform: `translate3d(${smoothPosition.x + 24}px, ${smoothPosition.y - 130}px, 0)`,
          opacity:   isVisible ? 1 : 0,
          scale:     isVisible ? 1 : 0.85,
          transition: 'opacity 0.25s cubic-bezier(0.4,0,0.2,1), scale 0.25s cubic-bezier(0.4,0,0.2,1)',
          boxShadow: '0 25px 50px rgba(0,0,0,0.6)',
        }}
      >
        <div className="relative w-[260px] h-[165px] bg-surface rounded-xl overflow-hidden border border-border">
          {PROJECTS.map((project, index) => (
            <img
              key={project.title}
              src={project.image}
              alt={project.title}
              className="absolute inset-0 w-full h-full object-cover transition-all duration-500 ease-out"
              style={{
                opacity: hoveredIndex === index ? 1 : 0,
                scale:   hoveredIndex === index ? 1 : 1.08,
                filter:  hoveredIndex === index ? 'none' : 'blur(8px)',
              }}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-t from-bg/40 to-transparent" />
        </div>
      </div>

      {/* Project rows */}
      <div>
        {PROJECTS.map((project, i) => (
          <motion.a
            key={project.num}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group block"
            onMouseEnter={() => handleMouseEnter(i)}
            onMouseLeave={handleMouseLeave}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
            style={{ cursor: 'pointer' }}
          >
            <div className="relative py-6 border-t border-border">
              {/* Hover surface highlight */}
              <div
                className={`absolute inset-0 -mx-4 bg-surface/50 rounded-sm transition-all duration-300 ease-out ${
                  hoveredIndex === i ? 'opacity-100 scale-100' : 'opacity-0 scale-[0.98]'
                }`}
              />

              <div className="relative flex items-start justify-between gap-6">
                {/* Number + content */}
                <div className="flex items-start gap-6 flex-1 min-w-0">
                  <span className="font-mono text-[11px] md:text-xs text-muted shrink-0 mt-1 w-6">
                    {project.num}
                  </span>

                  <div className="flex-1 min-w-0">
                    {/* Title row */}
                    <div className="inline-flex items-center gap-2 mb-1.5">
                      <h3 className="font-display text-xl md:text-2xl font-semibold text-text leading-tight">
                        <span className="relative">
                          {project.title}
                          <span
                            className={`absolute left-0 -bottom-0.5 h-px bg-accent transition-all duration-300 ease-out ${
                              hoveredIndex === i ? 'w-full' : 'w-0'
                            }`}
                          />
                        </span>
                      </h3>
                      <ArrowUpRight
                        className={`w-4 h-4 text-accent transition-all duration-300 ease-out ${
                          hoveredIndex === i
                            ? 'opacity-100 translate-x-0 translate-y-0'
                            : 'opacity-0 -translate-x-2 translate-y-2'
                        }`}
                      />
                    </div>

                    {/* Role */}
                    <span className="font-mono text-[10px] md:text-[11px] text-accent uppercase tracking-wider block mb-2">
                      {project.role}
                    </span>

                    {/* Description */}
                    <p
                      className={`font-body text-sm text-muted leading-relaxed max-w-xl transition-colors duration-300 ${
                        hoveredIndex === i ? 'text-text/60' : ''
                      }`}
                    >
                      {project.desc}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {project.tags.map(tag => (
                        <span
                          key={tag}
                          className="font-mono text-[10px] md:text-[11px] text-muted border border-border px-2 py-0.5 uppercase tracking-wider"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Year */}
                <span
                  className={`font-mono text-xs text-muted tabular-nums shrink-0 transition-colors duration-300 ${
                    hoveredIndex === i ? 'text-text/50' : ''
                  }`}
                >
                  {project.year}
                </span>
              </div>
            </div>
          </motion.a>
        ))}

        {/* Bottom border */}
        <div className="border-t border-border" />
      </div>
    </section>
  )
}
