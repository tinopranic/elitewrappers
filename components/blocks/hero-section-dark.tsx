"use client"

import type * as React from "react"
import { cn } from "@/lib/utils"
import { BentoGrid, BentoCard } from "@/components/ui/bento-grid"
import { BellIcon, CalendarIcon, FileTextIcon, GlobeIcon, InputIcon } from "@radix-ui/react-icons"
import { Tag, Wand2, Car, Shield } from "lucide-react"
import { ShineBorder } from "@/components/ui/shine-border"
import { motion, useScroll, useTransform } from "framer-motion"
import Link from "next/link"

interface HeroSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string
  subtitle?: {
    regular: string
    gradient: string
  }
  description?: string
  ctaText?: string
  ctaHref?: string
  gridOptions?: {
    angle?: number
    cellSize?: number
    opacity?: number
    lightLineColor?: string
    darkLineColor?: string
  }
}

const features = [
  {
    Icon: Car,
    name: "Premium Wraps",
    description: "Transform your vehicle with our high-quality wrapping materials.",
    href: "/services?section=full-vehicle-wraps",
    cta: "Learn more",
    background: <div className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
  },
  {
    Icon: Wand2,
    name: "Custom Designs",
    description: "Create unique, eye-catching designs for your vehicle.",
    href: "/services?section=custom-designs",
    cta: "Learn more",
    background: <div className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
  },
  {
    Icon: Shield,
    name: "Paint Protection",
    description: "Shield your vehicle's paint from scratches and debris.",
    href: "/services?section=paint-protection-film",
    cta: "Learn more",
    background: <div className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-3 lg:col-end-4 lg:row-start-1 lg:row-end-3",
  },
  {
    Icon: Tag,
    name: "Special Offer",
    description: "Get 10% off on full vehicle wraps this month.",
    href: "/contact?service=full-vehicle-wraps",
    cta: "Get Offer",
    specialOffer: true,
    background: <div className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
  },
  {
    Icon: GlobeIcon,
    name: "Professional Team",
    description: "Expert installers with years of experience.",
    href: "/about",
    cta: "Meet the Team",
    background: <div className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-3 lg:col-end-4 lg:row-start-3 lg:row-end-4",
  },
]

export function HeroSection({
  className,
  subtitle = {
    regular: "Premium Car Wrapping Services in ",
    gradient: "Sydney",
  },
  description = "Elite Wrappers Sydney offers top-quality vehicle wraps, paint protection, and custom designs to transform your car's appearance and protect its value.",
  ctaText = "Get a Quote",
  ctaHref = "/contact",
  gridOptions,
  ...props
}: HeroSectionProps) {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, 250])

  return (
    <div className={cn("relative overflow-hidden min-h-screen", className)} {...props}>
      {/* Parallax Background Image */}
      <motion.div 
        className="absolute inset-0 z-0 will-change-transform" 
        style={{ 
          y,
          transform: 'translateZ(0)', // Force GPU acceleration
        }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat h-[120vh] will-change-transform"
          style={{
            backgroundImage:
              'url("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Untitled-1.jpg-BxyUdrLQf9oHWBQ5XsmLMFUEtgVDBc.jpeg")',
            transform: 'translateZ(0)', // Force GPU acceleration
          }}
        />
        <div className="absolute inset-0 bg-black/60 will-change-opacity" /> {/* Darkening overlay */}
      </motion.div>

      {/* Content */}
      <section className="relative max-w-full mx-auto z-10 pt-32">
        <div className="max-w-screen-xl mx-auto px-4 py-28 gap-12 md:px-8">
          <div className="space-y-5 max-w-3xl leading-0 lg:leading-5 mx-auto text-center">
            <motion.h2 
              className="text-4xl tracking-tighter font-serpentine text-white md:text-7xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1], // Custom ease curve for smoother animation
              }}
            >
              {subtitle.regular}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-pink-500 dark:from-teal-300 dark:to-pink-300">
                {subtitle.gradient}
              </span>
            </motion.h2>
            <motion.p 
              className="max-w-2xl mx-auto text-white/90"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.8,
                delay: 0.2,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {description}
            </motion.p>
            <motion.div 
              className="items-center justify-center gap-x-3 space-y-3 sm:flex sm:space-y-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.8,
                delay: 0.4,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <span className="relative inline-block overflow-hidden rounded-full p-[1.5px]">
                <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#14B8A6_0%,#EC4899_50%,#14B8A6_100%)]" />
                <div className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-black/60 text-xs font-medium backdrop-blur-3xl will-change-transform">
                  <Link
                    href={ctaHref + "?scroll=contact-form"}
                    className="inline-flex rounded-full text-center group items-center w-full justify-center bg-white/10 text-gray-200 py-2 px-6 text-sm hover:bg-white/20 hover:text-white transition-all sm:w-auto"
                  >
                    {ctaText}
                  </Link>
                </div>
              </span>
            </motion.div>
          </div>
          <motion.div 
            className="mt-32 mx-10 relative z-10"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 1,
              delay: 0.6,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <BentoGrid className="lg:grid-rows-3">
              {features.map((feature, index) => (
                <BentoCard 
                  key={feature.name} 
                  {...feature} 
                  specialOffer={feature.specialOffer}
                  className={cn(feature.className, "will-change-transform")} 
                />
              ))}
            </BentoGrid>
          </motion.div>
        </div>
      </section>
      <div className="absolute bottom-0 left-0 right-0 h-64 backdrop-blur-3xl bg-gradient-to-b from-transparent via-black/70 to-black will-change-transform"></div>
      <div
        className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-teal-500 will-change-transform"
        style={{
          opacity: '0.1',
          filter: 'blur(7px)',
          background:
            'conic-gradient(from 90deg at 50% 50%, #00bac5 -60.49deg, #ee2b7c 59.93deg, #00bac5 299.51deg, #ee2b7c 419.93deg)',
          transform: 'translateZ(0)', // Force GPU acceleration
        }}
      />
    </div>
  )
}

