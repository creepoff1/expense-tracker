/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // Optimize package imports for better bundle size
    optimizePackageImports: ['lucide-react', '@tanstack/react-query'],
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
    // Only run ESLint on relevant directories during production builds
    dirs: ['app', 'components', 'lib'],
  },
  // Enable detailed fetch logging in development
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  // Optimize images
  images: {
    formats: ['image/webp', 'image/avif'],
  },
  // Enable compression
  compress: true,
  // Optimize bundle
  webpack: (config, { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }) => {
    // Disable webpack cache in production to reduce memory usage
    if (config.cache && !dev) {
      config.cache = Object.freeze({
        type: 'memory',
      })
    }
    return config
  },
}

module.exports = nextConfig
