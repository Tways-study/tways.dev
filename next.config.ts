import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',       // Static export for GitHub Pages
  trailingSlash: true,
  basePath: '/tways.dev', // Repo name — needed for GitHub Pages subpath
  images: {
    unoptimized: true,    // Required for static export
  },
}

export default nextConfig
