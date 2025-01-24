"use client"

import type * as React from "react"
import { cn } from "@/lib/utils"
import { BentoGrid, BentoCard } from "@/components/ui/bento-grid"
import { BellIcon, CalendarIcon, FileTextIcon, GlobeIcon, InputIcon } from "@radix-ui/react-icons"
import { Tag, Wand2, Car, Shield } from "lucide-react"
import { ShineBorder } from "@/components/ui/shine-border"
import { motion, useScroll, useTransform } from "framer-motion"

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
    href: "/services",
    cta: "Learn more",
    background: <div className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
  },
  {
    Icon: Wand2,
    name: "Custom Designs",
    description: "Create unique, eye-catching designs for your vehicle.",
    href: "/services",
    cta: "Learn more",
    background: <div className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
  },
  {
    Icon: Shield,
    name: "Paint Protection",
    description: "Shield your vehicle's paint with premium protection films.",
    href: "/services",
    cta: "Learn more",
    background: <div className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
  },
  {
    Icon: Tag,
    name: "Special Offer",
    description: "Limited time offer: 15% off on full vehicle wraps this month!",
    href: "/contact",
    cta: "Claim Offer",
    background: <div className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
    specialOffer: true,
  },
  {
    Icon: BellIcon,
    name: "Professional Team",
    description: "Expert installers with years of experience in vehicle wrapping.",
    href: "/about",
    cta: "Meet the team",
    background: <div className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
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
      <motion.div className="absolute inset-0 z-0" style={{ y }}>
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat h-[120vh]"
          style={{
            backgroundImage:
              'url("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Untitled-1.jpg-BxyUdrLQf9oHWBQ5XsmLMFUEtgVDBc.jpeg")',
          }}
        />
        <div className="absolute inset-0 bg-black/60" /> {/* Darkening overlay */}
      </motion.div>

      {/* Content */}
      <section className="relative max-w-full mx-auto z-10 pt-32">
        {" "}
        {/* Added top padding to account for the header */}
        <div className="max-w-screen-xl mx-auto px-4 py-28 gap-12 md:px-8">
          <div className="space-y-5 max-w-3xl leading-0 lg:leading-5 mx-auto text-center">
            <h2 className="text-4xl tracking-tighter font-geist text-white md:text-6xl">
              {subtitle.regular}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-pink-500 dark:from-teal-300 dark:to-pink-300">
                {subtitle.gradient}
              </span>
            </h2>
            <p className="max-w-2xl mx-auto text-white/90">{description}</p>
            <div className="items-center justify-center gap-x-3 space-y-3 sm:flex sm:space-y-0">
              <span className="relative inline-block overflow-hidden rounded-full p-[1.5px]">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#14B8A6_0%,#EC4899_50%,#14B8A6_100%)]" />
                <div className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-black/60 text-xs font-medium backdrop-blur-3xl">
                  <a
                    href={ctaHref}
                    className="inline-flex rounded-full text-center group items-center w-full justify-center bg-white/10 text-gray-200 py-2 px-6 text-sm hover:bg-white/20 hover:text-white transition-all sm:w-auto"
                  >
                    {ctaText}
                  </a>
                </div>
              </span>
            </div>
          </div>
          <div className="mt-32 mx-10 relative z-10">
            <BentoGrid className="lg:grid-rows-3">
              {features.map((feature) => (
                <BentoCard key={feature.name} {...feature} specialOffer={feature.specialOffer} />
              ))}
            </BentoGrid>
          </div>
        </div>
      </section>
      <div className="absolute bottom-0 left-0 right-0 h-64 backdrop-blur-3xl bg-gradient-to-b from-transparent via-black/70 to-black"></div>
    </div>
  )
}

