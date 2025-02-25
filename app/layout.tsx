import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import localFont from 'next/font/local'
import Script from 'next/script'
import "./globals.css"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { RouteChangeTracker } from "@/components/analytics/RouteChangeTracker"
import { GTM_ID } from "@/lib/gtm"
import { MetaPixel } from "@/components/analytics/MetaPixel"
import { CookieConsent } from "@/components/CookieConsent"

const GA_ID = 'G-7VWQRTXFVB'

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
      <head>
        {/* Google Tag Manager - Load only after consent */}
        <Script
          id="gtm-script"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              // Check for cookie consent
              if (localStorage.getItem('cookie-consent') === 'accepted') {
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
                var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
                j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
                f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','GTM-5745RZDP');
              }
            `,
          }}
        />
      </head>
      {/* Google Analytics - Load only after consent */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
        data-cookieconsent="statistics"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            if (localStorage.getItem('cookie-consent') === 'accepted') {
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_ID}');
            }
          `,
        }}
      />
      <body className={inter.className}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5745RZDP"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <MetaPixel />
        <RouteChangeTracker />
        <Header />
        <main id="main-content" role="main">
          {children}
        </main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  )
}

