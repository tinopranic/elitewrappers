'use client'

import { usePathname, useSearchParams } from 'next/navigation'
import { useEffect, Suspense } from 'react'
import { pageview as gtmPageview } from '@/lib/gtm'
import { pageview as fbPageview } from '@/lib/meta-pixel'

function RouteChangeTrackerInner() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    const url = pathname + searchParams.toString()
    gtmPageview(url)
    fbPageview()
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