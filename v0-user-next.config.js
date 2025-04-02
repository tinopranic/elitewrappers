/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "hebbkx1anhila5yf.public.blob.vercel-storage.com",
      "images.unsplash.com",
      "scontent.cdninstagram.com",
      "scontent-syd2-1.cdninstagram.com",
      "graph.instagram.com",
      "instagram.fsyd3-1.fna.fbcdn.net",
      "instagram.fsyd4-1.fna.fbcdn.net"
    ],
  },
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig

