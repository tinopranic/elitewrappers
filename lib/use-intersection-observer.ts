import { useEffect, useRef, useState } from "react"

export function useIntersectionObserver(options?: IntersectionObserverInit) {
  const [isIntersecting, setIsIntersecting] = useState(false)
  const targetRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    if (!targetRef.current) return

    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting)
    }, options)

    observer.observe(targetRef.current)

    return () => {
      observer.disconnect()
    }
  }, [options])

  return [targetRef, isIntersecting] as const
}

