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
      "instagram.fsyd4-1.fna.fbcdn.net",
      "scontent-iad3-1.cdninstagram.com",
      "scontent-iad3-2.cdninstagram.com"
    ],
  },
  experimental: {
    appDir: true,
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'Content-Security-Policy',
            value: "frame-src 'self' https://www.instagram.com https://instagram.com; script-src 'self' 'unsafe-eval' 'unsafe-inline' https://www.instagram.com https://instagram.com; connect-src 'self' https://www.instagram.com https://instagram.com https://graph.instagram.com; img-src 'self' data: https: blob:;",
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig

