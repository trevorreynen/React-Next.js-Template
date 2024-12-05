import type { NextConfig } from 'next'
import { routes } from '@/config/routes'

// Rewrite type for routes
type Rewrite = {
  source: string // The public-facing URL
  destination: string // The internal file path
}

// Generate rewrites dynamically
const generateRewrites = (): Rewrite[] => {
  return Object.entries(routes)
    .filter(([key]) => key.endsWith('_Component')) // Find "_Component" keys
    .map(([key, destination]) => {
      const sourceKey = key.replace('_Component', '') // Get the public-facing route key
      const source = routes[sourceKey as keyof typeof routes] // Match the public route
      return { source, destination }
    })
}

// https://nextjs.org/docs/app/api-reference/next-config-js
const nextConfig: NextConfig = {
  async rewrites(): Promise<Rewrite[]> {
    return generateRewrites()
  },
}

export default nextConfig
