'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

const SOCIALS = [
  { label: 'GitHub',   href: 'https://github.com/Tways-study',      symbol: '⌥' },
  { label: 'LinkedIn', href: '#',                                    symbol: '⊞' },
  { label: 'Email',    href: 'mailto:twicenavarro23@gmail.com',      symbol: '✉' },
]

// Floating-label text field — peer CSS trick
function Field({
  id,
  label,
  type = 'text',
  required,
}: {
  id: string
  label: string
  type?: 'text' | 'email' | 'textarea'
  required?: boolean
}) {
  return (
    <div className="relative">
      {type === 'textarea' ? (
        <textarea
          id={id}
          name={id}
          required={required}
          rows={4}
          placeholder=" "
          className="peer w-full bg-transparent border-b border-border text-text font-body text-base py-2 outline-none placeholder-transparent resize-none focus:border-accent transition-colors duration-200"
        />
      ) : (
        <input
          id={id}
          name={id}
          type={type}
          required={required}
          placeholder=" "
          className="peer w-full bg-transparent border-b border-border text-text font-body text-base py-2 outline-none placeholder-transparent focus:border-accent transition-colors duration-200"
        />
      )}
      {/* Label floats up when field has value or focus */}
      <label
        htmlFor={id}
        className="absolute left-0 top-2 font-mono text-[11px] md:text-xs text-muted uppercase tracking-widest transition-all duration-200
                   peer-focus:-top-4 peer-focus:text-[9px] peer-focus:text-accent md:peer-focus:text-[10px]
                   peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-[9px] md:peer-[:not(:placeholder-shown)]:text-[10px]"
      >
        {label}
      </label>
    </div>
  )
}

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('sending')
    // Simulated success — replace with Formspree or your API endpoint
    setTimeout(() => setStatus('sent'), 1200)
  }

  return (
    <section id="contact" className="py-28 md:py-36 px-8 md:px-16 lg:px-24 border-t border-border">

      {/* Section header */}
      <motion.div
        className="flex items-center gap-4 mb-16"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
      >
        <span className="font-mono text-[11px] md:text-xs text-accent shrink-0">04</span>
        <div className="h-px flex-1 bg-border" />
        <span className="font-mono text-[11px] md:text-xs text-muted uppercase tracking-[0.22em] shrink-0">Contact</span>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

        {/* Left — headline + socials */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-text leading-[1.05] mb-6">
            Let&rsquo;s build<br />something{' '}
            <span className="text-accent">real.</span>
          </h2>

          <p className="font-body text-muted text-base md:text-lg leading-relaxed mb-10 max-w-md">
            Open for freelance, internships, and full-time roles. If you have an interesting problem,
            I want to hear it.
          </p>

          <div className="flex flex-col gap-4">
            {SOCIALS.map(({ label, href, symbol }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="group inline-flex items-center gap-3 font-mono text-[11px] md:text-xs text-muted uppercase tracking-widest hover:text-accent transition-colors duration-200"
              >
                <span className="text-accent group-hover:translate-x-1 transition-transform duration-200">
                  {symbol}
                </span>
                {label}
                <span className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-200">↗</span>
              </a>
            ))}
          </div>
        </motion.div>

        {/* Right — form */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          {status === 'sent' ? (
            <div className="flex flex-col items-start gap-4 py-10">
              <span className="font-mono text-5xl text-accent">✓</span>
              <p className="font-display text-2xl font-semibold text-text">Message sent.</p>
              <p className="font-body text-muted text-sm">I&rsquo;ll get back to you shortly.</p>
              <button
                onClick={() => setStatus('idle')}
                className="font-mono text-[11px] md:text-xs text-muted uppercase tracking-widest hover:text-accent transition-colors duration-200 mt-4"
              >
                Send another →
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-9">
              <Field id="name"    label="Name"    type="text"  required />
              <Field id="email"   label="Email"   type="email" required />
              <Field id="message" label="Message" type="textarea" required />

              <button
                type="submit"
                disabled={status === 'sending'}
                className="btn-primary self-start mt-1 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'sending' ? 'Sending…' : 'Send Message →'}
              </button>
            </form>
          )}
        </motion.div>

      </div>
    </section>
  )
}
