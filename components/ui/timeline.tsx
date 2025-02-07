"use client"
import { useScroll, useTransform, motion, useInView } from "framer-motion"
import type React from "react"
import { useEffect, useRef, useState, memo } from "react"
import { cn } from "@/lib/utils"

interface TimelineEntry {
  title: string
  content: React.ReactNode
  description: React.ReactNode
}

// Memoize the TimelineDot component
const TimelineDot = memo(() => (
  <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-gray-100 flex items-center justify-center will-change-transform">
    <div className="h-4 w-4 rounded-full bg-gray-300 border border-gray-400 p-2" />
  </div>
))
TimelineDot.displayName = 'TimelineDot'

// Memoize the TimelineItem component
const TimelineItem = memo(({ item, index, isInView }: { 
  item: TimelineEntry; 
  index: number;
  isInView: boolean;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={isInView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.5, delay: index * 0.2 }}
    className="flex justify-start pt-10 md:pt-40 px-4 md:px-10"
  >
    <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start w-[200px] md:w-[300px] flex-shrink-0 will-change-transform">
      <TimelineDot />
      <h3 className="hidden md:block text-xl md:pl-20 md:text-4xl font-bold text-black will-change-transform">{item.title}</h3>
    </div>

    <div className="relative pl-20 pr-4 md:pl-32 lg:pl-40 w-full">
      <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-black will-change-transform">{item.title}</h3>
      <div className="text-black will-change-transform">{item.content}</div>
    </div>
  </motion.div>
))
TimelineItem.displayName = 'TimelineItem'

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [height, setHeight] = useState(0)
  const isInView = useInView(containerRef, { 
    once: true, 
    margin: "-100px",
    amount: 0.2 // Optimize when the animation triggers
  })

  useEffect(() => {
    let resizeObserver: ResizeObserver | null = null;
    
    if (ref.current) {
      resizeObserver = new ResizeObserver((entries) => {
        window.requestAnimationFrame(() => {
          for (const entry of entries) {
            setHeight(entry.contentRect.height)
          }
        })
      })

      resizeObserver.observe(ref.current)
    }

    return () => {
      if (resizeObserver) {
        resizeObserver.disconnect()
      }
    }
  }, [])

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  })

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height], {
    clamp: true // Ensure values stay within bounds
  })
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1], {
    clamp: true
  })

  return (
    <div className="w-full bg-white font-sans" ref={containerRef}>
      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <TimelineItem 
            key={index} 
            item={item} 
            index={index}
            isInView={isInView}
          />
        ))}
        <div
          style={{
            height: height + "px",
            transform: 'translateZ(0)',
            backfaceVisibility: 'hidden',
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-gray-300 [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] max-h-[calc(100%-4rem)] md:max-h-full will-change-transform"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
              transform: 'translateZ(0)',
              backfaceVisibility: 'hidden',
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-teal-500 via-pink-500 to-transparent from-[0%] via-[10%] rounded-full will-change-transform"
          />
        </div>
      </div>
    </div>
  )
}

