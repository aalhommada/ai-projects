import { createMDX } from 'fumadocs-mdx/next'

const withMDX = createMDX()

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  // Performance optimizations
  experimental: {
    // Optimize package imports
    optimizePackageImports: ['mermaid', 'lucide-react'],
  },
  // Compiler optimizations
  compiler: {
    // Remove console.log in production
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // Enable production source maps for debugging (optional)
  productionBrowserSourceMaps: false,
}

export default withMDX(config)
