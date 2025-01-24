/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["hebbkx1anhila5yf.public.blob.vercel-storage.com", "images.unsplash.com"],
  },
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig

