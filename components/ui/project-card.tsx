import * as React from 'react'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

export interface ProjectCardProps extends React.HTMLAttributes<HTMLDivElement> {
  imgSrc: string
  title: string
  role: string
  description: string
  tags: string[]
  link: string
  linkText?: string
}

const ProjectCard = React.forwardRef<HTMLDivElement, ProjectCardProps>(
  ({ className, imgSrc, title, role, description, tags, link, linkText = 'View Project', ...props }, ref) => {
    const isLinked = link !== '#'

    return (
      <div
        ref={ref}
        className={cn(
          'group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-all duration-500 ease-in-out hover:-translate-y-2 hover:shadow-xl hover:shadow-black/40',
          className
        )}
        {...props}
      >
        <div className="aspect-video overflow-hidden">
          <img
            src={imgSrc}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
            loading="lazy"
          />
        </div>

        <div className="flex flex-1 flex-col p-6">
          <span className="font-body text-[10px] text-accent uppercase tracking-widest mb-1.5">
            {role}
          </span>
          <h3 className="font-display text-xl font-semibold text-text transition-colors duration-300 group-hover:text-accent">
            {title}
          </h3>
          <p className="font-body mt-3 flex-1 text-sm text-muted leading-relaxed">{description}</p>

          <div className="flex flex-wrap gap-1.5 mt-4">
            {tags.map((tag) => (
              <span
                key={tag}
                className="font-mono text-[10px] text-muted border border-border px-2 py-0.5 uppercase tracking-wider"
              >
                {tag}
              </span>
            ))}
          </div>

          {isLinked ? (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="group/button font-body mt-4 inline-flex items-center gap-2 text-sm font-medium text-accent transition-all duration-300 hover:underline"
              onClick={(e) => e.stopPropagation()}
            >
              {linkText}
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/button:translate-x-1" />
            </a>
          ) : (
            <span className="font-body mt-4 inline-flex items-center gap-2 text-[9px] text-muted border border-border px-1.5 py-0.5 uppercase tracking-widest self-start">
              Private
            </span>
          )}
        </div>
      </div>
    )
  }
)
ProjectCard.displayName = 'ProjectCard'

export { ProjectCard }
