'use client'

import { usePathname, useSearchParams } from 'next/navigation'
import { useEffect, useState, Suspense } from 'react'
import { pageview as gtmPageview } from '@/lib/gtm'

function RouteChangeTrackerInner() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [hasConsent, setHasConsent] = useState(false)

  useEffect(() => {
    // Check consent on mount
    const consent = localStorage.getItem('cookie-consent')
    if (consent === 'accepted') {
      setHasConsent(true)
    }
  }, [])

  useEffect(() => {
    if (!hasConsent) return

    const url = pathname + searchParams.toString()
    gtmPageview(url)
    
    // Ensure fbq is available before calling
    if (typeof window.fbq !== 'undefined') {
      window.fbq('track', 'PageView')
    }
  }, [pathname, searchParams, hasConsent])

  return null
}

export function RouteChangeTracker() {
  return (
    <Suspense fallback={null}>
      <RouteChangeTrackerInner />
    </Suspense>
  )
} 