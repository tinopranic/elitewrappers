'use client'

import { usePathname, useSearchParams } from 'next/navigation'
import { useEffect, Suspense } from 'react'
import { pageview as gtmPageview } from '@/lib/gtm'
import { pageview as fbPageview } from '@/lib/meta-pixel'

function RouteChangeTrackerInner() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    // Only track if consent is given
    if (localStorage.getItem('cookie-consent') === 'accepted') {
      const url = pathname + searchParams.toString()
      gtmPageview(url)
      
      // Ensure fbq is available before calling
      if (typeof window.fbq !== 'undefined') {
        window.fbq('track', 'PageView')
      }
    }
  }, [pathname, searchParams])

  return null
}

export function RouteChangeTracker() {
  return (
    <Suspense fallback={null}>
      <RouteChangeTrackerInner />
    </Suspense>
  )
} 