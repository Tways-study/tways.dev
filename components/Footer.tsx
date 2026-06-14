import { NAV_ITEMS } from '@/lib/data'

export default function Footer() {
  return (
    <footer className="border-t border-border">
      {/* Nav strip */}
      <div className="border-b border-border px-8 md:px-16 lg:px-24 py-6 hidden md:flex items-center justify-center gap-10">
        {NAV_ITEMS.map(item => (
          <a
            key={item.href}
            href={item.href}
            className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted hover:text-accent transition-colors duration-200 cursor-pointer"
          >
            {item.label}
          </a>
        ))}
      </div>

      {/* Bottom row */}
      <div className="px-8 md:px-16 lg:px-24 py-8 flex flex-col md:flex-row items-center justify-between gap-4">

        <a
          href="#home"
          className="font-display font-bold text-sm tracking-widest text-text hover:text-accent transition-colors duration-200 cursor-pointer"
        >
          TWICE<span className="text-accent">CODED</span>
        </a>

        <span className="font-mono text-[10px] md:text-[11px] text-muted uppercase tracking-widest">
          © 2026 — Designed &amp; Built by Tways Navarro
        </span>

        <a
          href="#home"
          className="font-mono text-[10px] md:text-[11px] text-muted uppercase tracking-widest hover:text-accent transition-colors duration-200 cursor-pointer"
        >
          Back to top ↑
        </a>

      </div>
    </footer>
  )
}
