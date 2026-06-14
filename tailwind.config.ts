import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg:          '#0a0a0a',
        surface:     '#111111',
        'surface-2': '#1a1a1a',
        accent:      '#10b981',
        text:        '#f0ede8',
        muted:       '#a3a3a3',
        border:      '#242424',
      },
      fontFamily: {
        display: ['var(--font-syne)',       'sans-serif'],
        body:    ['var(--font-manrope)',    'sans-serif'],
        mono:    ['var(--font-jetbrains)',  'monospace'],
      },
      animation: {
        marquee: 'marquee 32s linear infinite',
      },
      keyframes: {
        marquee: {
          from: { transform: 'translateX(0)' },
          to:   { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
