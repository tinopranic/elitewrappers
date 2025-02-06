"use client"
import { useMotionValueEvent, useScroll, useTransform, motion } from "framer-motion"
import type React from "react"
import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

interface TimelineEntry {
  title: string
  content: React.ReactNode
  description: React.ReactNode
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [height, setHeight] = useState(0)

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect()
      setHeight(rect.height)
    }
  }, [ref])

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  })

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height])
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1])

  return (
    <div className={cn("w-full bg-white font-sans md:px-10", "pb-20 md:pb-4")} ref={containerRef}>
      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div key={index} className="flex justify-start pt-10 md:pt-40 md:gap-10">
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full will-change-transform">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-gray-100 flex items-center justify-center will-change-transform">
                <div className="h-4 w-4 rounded-full bg-gray-300 border border-gray-400 p-2" />
              </div>
              <h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-black will-change-transform">{item.title}</h3>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-black will-change-transform">{item.title}</h3>
              <div className="text-black will-change-transform">{item.content}</div>
              <div className="mt-4 text-sm text-gray-700 will-change-transform">{item.description}</div>
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
            transform: 'translateZ(0)',
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-gray-300 [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] max-h-[calc(100%-4rem)] md:max-h-full will-change-transform"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
              transform: 'translateZ(0)',
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-teal-500 via-pink-500 to-transparent from-[0%] via-[10%] rounded-full will-change-transform"
          />
        </div>
      </div>
    </div>
  )
}

