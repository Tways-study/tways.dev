import type { NextConfig } from 'next'

const isProd = process.env.NODE_ENV === 'production'

const nextConfig: NextConfig = {
  output: 'export',       // Static export for GitHub Pages
  trailingSlash: true,
  images: {
    unoptimized: true,    // Required for static export
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: isProd ? '/tways.dev' : '',
  },
  ...(isProd ? { basePath: '/tways.dev' } : {}),
}

export default nextConfig
