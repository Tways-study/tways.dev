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
        surface:     '#141414',
        'surface-2': '#1c1c1c',
        accent:      '#1A4C39',
        text:        '#f0ede8',
        muted:       '#525252',
        border:      '#1f1f1f',
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
