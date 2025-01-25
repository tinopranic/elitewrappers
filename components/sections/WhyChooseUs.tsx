"use client"

import React, { useRef, useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import { SparklesCore } from "@/components/ui/sparkles"
import { AnimatedCounter } from "@/components/ui/animated-counter"
import Link from "next/link"
import { SectionHeading } from "@/components/ui/section-heading"
import { Award, Clock, ThumbsUp } from "lucide-react"

const stats = [
  { name: "Years of Experience", value: 10, icon: Clock },
  { name: "Satisfied Customers", value: 5000, icon: ThumbsUp },
  { name: "Industry Awards", value: 15, icon: Award },
]

interface CountUpAnimationProps {
  endValue: number;
}

const CountUpAnimation = ({ endValue }: CountUpAnimationProps) => {
  const [count, setCount] = useState(0)
  const countRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && count === 0) {
          let start = 0
          const duration = 2000 // 2 seconds
          const step = (timestamp: number) => {
            if (!start) start = timestamp
            const progress = Math.min((timestamp - start) / duration, 1)
            setCount(Math.floor(progress * endValue))
            if (progress < 1) {
              window.requestAnimationFrame(step)
            }
          }
          window.requestAnimationFrame(step)
        }
      },
      { threshold: 0.1 },
    )

    if (countRef.current) {
      observer.observe(countRef.current)
    }

    return () => {
      if (countRef.current) {
        observer.unobserve(countRef.current)
      }
    }
  }, [endValue])

  return (
    <div ref={countRef} className="flex justify-center mb-2">
      <AnimatedCounter value={count} />
    </div>
  )
}

export function WhyChooseUs() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="py-24 bg-gradient-to-b from-black to-gray-900 text-white relative overflow-hidden">
      <SparklesCore
        id="tsparticleswhychooseus"
        background="transparent"
        minSize={0.6}
        maxSize={1.4}
        particleDensity={100}
        className="absolute inset-0 w-full h-full"
        particleColor={["#14B8A6", "#EC4899"]}
        speed={1}
      />
      <div className="container mx-auto px-4 relative z-20">
        <SectionHeading>
          Why Choose Us
        </SectionHeading>
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <stat.icon className="w-16 h-16 mx-auto text-teal-400 mb-4" />
              <CountUpAnimation endValue={stat.value} />
              <p className="text-xl text-gray-300">{stat.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="mt-12 text-center">
        <span className="relative inline-block overflow-hidden rounded-full p-[1.5px]">
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#14B8A6_0%,#EC4899_50%,#14B8A6_100%)]" />
          <div className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-black/60 text-xs font-medium backdrop-blur-3xl">
            <Link
              href="/contact"
              className="inline-flex rounded-full text-center group items-center w-full justify-center bg-white/10 text-gray-200 py-2 px-6 text-sm hover:bg-white/20 hover:text-white transition-all sm:w-auto"
            >
              Contact Us
            </Link>
          </div>
        </span>
      </div>
    </section>
  )
}

