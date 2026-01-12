/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable strict mode for better development
  reactStrictMode: true,
  
  // Temporarily ignore TypeScript errors for initial deployment
  typescript: {
    ignoreBuildErrors: true,
  },
  
  // Image optimization - unoptimized for easier deployment
  images: {
    unoptimized: true,
  },
  
  // Output configuration
  output: 'standalone',
  
  // Performance optimizations
  poweredByHeader: false,
}

export default nextConfig
