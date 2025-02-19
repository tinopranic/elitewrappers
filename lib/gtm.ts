'use client'

declare global {
  interface Window {
    dataLayer: any[]
    gtag: (...args: any[]) => void
  }
}

export const GTM_ID = 'GTM-5745RZDP'
export const GA_ID = 'G-7VWQRTXFVB'

export const pageview = (url: string) => {
  if (typeof window.dataLayer !== 'undefined') {
    window.dataLayer.push({
      event: 'pageview',
      page: url,
    })
  }
  if (typeof window.gtag !== 'undefined') {
    window.gtag('config', GA_ID, {
      page_path: url,
    })
  }
} 