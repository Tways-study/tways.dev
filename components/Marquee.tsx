import { MARQUEE_ITEMS } from '@/lib/data'

// Pure CSS animation — no JS needed, server component
export default function Marquee() {
  // Double the items so translateX(-50%) loops seamlessly
  const doubled = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS]

  return (
    <div className="relative overflow-hidden py-7 border-y border-border marquee-outer">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-bg to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-bg to-transparent z-10 pointer-events-none" />

      <div className="flex whitespace-nowrap animate-marquee marquee-inner">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-5 font-mono text-[10px] text-muted uppercase tracking-[0.22em] px-6 shrink-0"
          >
            {/* Diamond separator */}
            <span className="text-accent text-xs">◆</span>
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
