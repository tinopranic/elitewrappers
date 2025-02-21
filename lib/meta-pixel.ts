'use client'

declare global {
  interface Window {
    fbq: any
  }
}

export const FB_PIXEL_ID = '1283822006034432'

export const pageview = () => {
  if (typeof window.fbq !== 'undefined') {
    window.fbq('track', 'PageView')
  }
}

// For custom events
export const event = (name: string, options = {}) => {
  if (typeof window.fbq !== 'undefined') {
    window.fbq('track', name, options)
  }
} 