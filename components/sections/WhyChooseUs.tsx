"use client"

import React, { useRef, useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import { SparklesCore } from "@/components/ui/sparkles"
import { AnimatedCounter } from "@/components/ui/animated-counter"
import Link from "next/link"
import { SectionHeading } from "@/components/ui/section-heading"
import { Award, Clock, ThumbsUp, Users, Shield, Star, CheckCircle2 } from "lucide-react"

const stats = [
  { 
    name: "Years of Experience", 
    value: 15, 
    icon: Clock,
    description: "Dedicated to vehicle transformation excellence"
  },
  { 
    name: "Satisfied Customers", 
    value: 5000, 
    icon: ThumbsUp,
    description: "Trust us with their vehicles"
  },
  { 
    name: "Expert Team Members", 
    value: 15, 
    icon: Users,
    description: "Skilled professionals at your service"
  },
]

const features = [
  {
    icon: Shield,
    title: "Premium Materials",
    description: "We use only the highest quality wrapping materials from trusted brands."
  },
  {
    icon: Star,
    title: "Expert Installation",
    description: "Our certified technicians ensure flawless application every time."
  },
  {
    icon: CheckCircle2,
    title: "Quality Guarantee",
    description: "We stand behind our work with comprehensive warranties."
  }
]

interface CountUpAnimationProps {
  endValue: number;
  description: string;
}

const CountUpAnimation = ({ endValue, description }: CountUpAnimationProps) => {
  const [count, setCount] = useState(0)
  const countRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && count === 0) {
          let start = 0
          const duration = 2000
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
    <div ref={countRef} className="text-center">
      <div className="flex justify-center mb-2">
        <AnimatedCounter value={count} />
      </div>
      <p className="text-sm text-gray-400">{description}</p>
    </div>
  )
}

export function WhyChooseUs() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="relative py-24 bg-premium-dark overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <SparklesCore
          id="tsparticlesfull"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#00bac5"
          speed={0.1}
        />
      </div>
      <div className="absolute inset-0 bg-noise opacity-50 mix-blend-soft-light"></div>
      
      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-7xl mx-auto">
          <SectionHeading>
            Why Choose Us
          </SectionHeading>
          <p className="text-center text-gray-400 max-w-2xl mx-auto mb-16 text-lg">
            Experience excellence in vehicle transformation with Sydney's premier wrapping specialists.
          </p>

          {/* Stats Grid */}
          <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-24">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="relative p-8 rounded-2xl bg-[#141414]/60 backdrop-blur-sm border border-gray-800"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="absolute -top-6 left-1/2 -translate-x-1/2">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-teal-500/20 to-pink-500/20 flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-teal-400" />
                  </div>
                </div>
                <CountUpAnimation endValue={stat.value} description={stat.description} />
                <h3 className="text-xl font-semibold text-white text-center mt-4">{stat.name}</h3>
              </motion.div>
            ))}
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="p-6 rounded-xl bg-gradient-to-br from-[#1a1a1a] to-[#141414] border border-gray-800"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <feature.icon className="w-8 h-8 text-teal-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="text-center">
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
        </div>
      </div>

      {/* Background Gradient */}
      <div
        className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full"
        style={{
          opacity: '0.1',
          filter: 'blur(7px)',
          background:
            'conic-gradient(from 90deg at 50% 50%, #1a1a1a -60.49deg, #242424 59.93deg, #1a1a1a 299.51deg, #242424 419.93deg)',
        }}
      />
    </section>
  )
}

