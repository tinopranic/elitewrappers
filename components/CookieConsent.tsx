'use client'

import { useEffect, useState } from 'react'

declare global {
  interface Window {
    dataLayer: any[]
    gtag: (...args: any[]) => void
    fbq: any
  }
}

export function CookieConsent() {
  const [hasConsent, setHasConsent] = useState<boolean | null>(null)

  useEffect(() => {
    // Check if user has already given consent
    const consent = localStorage.getItem('cookie-consent')
    if (consent === 'accepted') {
      setHasConsent(true)
    } else if (consent === 'declined') {
      setHasConsent(false)
    } else {
      setHasConsent(null)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    setHasConsent(true)
    window.location.reload() // Reload to initialize tracking scripts
  }

  const declineCookies = () => {
    localStorage.setItem('cookie-consent', 'declined')
    setHasConsent(false)
  }

  // Don't show banner until we've checked localStorage
  if (hasConsent !== null) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black/95 text-white p-4 z-50">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm">
          <p>
            We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic. 
            By clicking "Accept All", you consent to our use of cookies.
          </p>
        </div>
        <div className="flex gap-4">
          <button
            onClick={declineCookies}
            className="px-4 py-2 text-sm bg-gray-600 hover:bg-gray-700 rounded-md transition-colors"
          >
            Decline
          </button>
          <button
            onClick={acceptCookies}
            className="px-4 py-2 text-sm bg-teal-600 hover:bg-teal-700 rounded-md transition-colors"
          >
            Accept All
          </button>
        </div>
      </div>
    </div>
  )
} 