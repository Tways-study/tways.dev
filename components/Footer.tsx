// Server component — no JS needed
export default function Footer() {
  return (
    <footer className="border-t border-border py-8 px-8 md:px-16 lg:px-24">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">

        <a
          href="#home"
          className="font-display font-bold text-[12px] tracking-widest text-text hover:text-accent transition-colors duration-200"
        >
          TWAYS<span className="text-accent">.dev</span>
        </a>

        <span className="font-mono text-[9px] text-muted uppercase tracking-widest">
          © 2026 — Designed &amp; Built by Tways Navarro
        </span>

        <a
          href="#home"
          className="font-mono text-[9px] text-muted uppercase tracking-widest hover:text-accent transition-colors duration-200"
        >
          Back to top ↑
        </a>

      </div>
    </footer>
  )
}
