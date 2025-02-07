"use client"

import type * as React from "react"
import { cn } from "@/lib/utils"
import { BentoGrid, BentoCard } from "@/components/ui/bento-grid"
import { BellIcon, CalendarIcon, FileTextIcon, GlobeIcon, InputIcon } from "@radix-ui/react-icons"
import { Tag, Wand2, Car, Shield, Sparkles } from "lucide-react"
import { ShineBorder } from "@/components/ui/shine-border"
import { motion, useScroll, useTransform } from "framer-motion"
import Link from "next/link"

interface HeroSectionProps {
  title?: React.ReactNode
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
  className?: string
  children?: React.ReactNode
}

const features = [
  {
    name: "Premium Wraps",
    Icon: Sparkles,
    href: "/services?section=full-vehicle-wraps",
    description: "Elevate your vehicle with our premium wraps, offering unmatched quality and style.",
    cta: "View Premium Wraps",
    className: "lg:row-start-1 lg:row-end-3 lg:col-start-2 lg:col-end-3",
    background: (
      <div 
        className="absolute inset-0 bg-cover bg-center z-1"
        style={{ 
          backgroundImage: 'url("/premiumbento.png")'
        }}
      />
    ),
  },
  {
    Icon: Wand2,
    name: "Custom Designs",
    description: "Create unique, eye-catching designs for your vehicle.",
    href: "/services?section=custom-designs",
    cta: "Learn more",
    background: (
      <div 
        className="absolute inset-0 bg-cover bg-left z-1"
        style={{ 
          backgroundImage: 'url("/custom2.jpg")'
        }}
      />
    ),
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-2",
  },
  {
    Icon: Shield,
    name: "Paint Protection",
    description: "Shield your vehicle's paint from scratches and debris.",
    href: "/services?section=paint-protection-film",
    cta: "Learn more",
    background: (
      <div 
        className="absolute inset-0 bg-cover bg-top z-1"
        style={{ 
          backgroundImage: 'url("/ppf.jpg")'
        }}
      />
    ),
    className: "lg:col-start-3 lg:col-end-4 lg:row-start-1 lg:row-end-2",
  },
  {
    Icon: Tag,
    name: "Special Offer",
    description: "Get 10% off on full vehicle wraps this month.",
    href: "/contact?service=full-vehicle-wraps",
    cta: "Get Offer",
    specialOffer: true,
    background: (
      <div 
        className="absolute inset-0 bg-cover bg-center z-1"
        style={{ 
          backgroundImage: 'url("/sale.jpg")'
        }}
      />
    ),
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-2 lg:row-end-3",
  },
  {
    Icon: GlobeIcon,
    name: "Professional Team",
    description: "Expert installers with years of experience.",
    href: "/about",
    cta: "Meet the Team",
    background: (
      <div 
        className="absolute inset-0 bg-cover bg-center z-1"
        style={{ 
          backgroundImage: 'url("/team.jpg")'
        }}
      />
    ),
    className: "lg:col-start-3 lg:col-end-4 lg:row-start-2 lg:row-end-3",
  },
]

export function HeroSection({
  className,
  title,
  subtitle = {
    regular: "Get ",
    gradient: "Wrapped",
  },
  description = "",
  ctaText = "Get a Quote",
  ctaHref = "/contact",
  gridOptions,
  children,
}: HeroSectionProps) {
  return (
    <section className="relative min-h-[100svh] w-full flex items-center justify-center overflow-hidden bg-black">
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-[url('/mobilebg.jpg')] md:bg-[url('/hb.jpg')]"
          style={{
            backgroundPosition: '50% 50%',
            backgroundSize: 'cover',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black" />
      </div>
      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="pt-24 md:pt-32 space-y-5 max-w-3xl mx-auto text-center">
          <motion.h1 
            className="text-3xl sm:text-4xl md:text-7xl tracking-tighter font-serpentine text-white"
            style={{
              textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000'
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {subtitle.regular}
            <span className="text-white">
              {subtitle.gradient}
            </span>
          </motion.h1>
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
                  href="/contact?scroll=contact-form"
                  className="inline-flex rounded-full text-center group items-center w-full justify-center bg-white/10 text-gray-200 py-2 px-6 text-sm hover:bg-white/20 hover:text-white transition-all sm:w-auto relative z-20"
                  aria-label="Get a quote for our services"
                >
                  {ctaText}
                </Link>
              </div>
            </span>
          </motion.div>
        </div>
        <motion.div 
          className="mt-16 md:mt-32 relative z-10"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 1,
            delay: 0.6,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <BentoGrid className="px-2 md:px-0">
            {features.map((feature, index) => (
              <BentoCard 
                key={feature.name} 
                {...feature} 
                specialOffer={feature.specialOffer}
                className={cn(
                  feature.className,
                  "min-h-[200px] md:min-h-[250px]"
                )} 
              />
            ))}
          </BentoGrid>
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 md:h-64 bg-gradient-to-b from-transparent via-black/70 to-black"></div>
    </section>
  )
}

