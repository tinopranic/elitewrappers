import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import localFont from 'next/font/local'
import "./globals.css"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"

const inter = Inter({ subsets: ["latin"] })

const serpentine = localFont({
  src: '../public/fonts/Serpentine Bold.otf',
  variable: '--font-serpentine',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: "Elite Wrappers Sydney - Premium Vehicle Wrapping Services",
    template: "%s | Elite Wrappers Sydney",
  },
  description:
    "Sydney's premier vehicle wrapping service. Professional car wraps, paint protection, and commercial fleet branding with premium quality materials.",
  keywords: [
    "car wrapping",
    "vehicle wraps",
    "paint protection",
    "fleet branding",
    "Sydney",
    "automotive",
    "car customization",
  ],
  verification: {
    google: "YZAVdKk7y8M97415XRiv05e3qX88og7dly6trD4iGoQ",
  },
  icons: {
    icon: [
      {
        url: "/favicon.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/favicon.png",
        sizes: "16x16",
        type: "image/png",
      },
    ],
    apple: {
      url: "/favicon.png",
      sizes: "180x180",
      type: "image/png",
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${serpentine.variable}`}>
      <body className={inter.className}>
        <Header />
        <main id="main-content" role="main">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

