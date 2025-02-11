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
    gradient: React.ReactNode
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
    regular: "Premium wrapping",
    gradient: "fleet branding",
  },
  description = "",
  ctaText = "Get a Quote",
  ctaHref = "/contact",
  gridOptions,
  children,
}: HeroSectionProps) {
  return (
    <section className="relative min-h-[100svh] w-full flex items-center justify-center overflow-hidden bg-black">
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-[url('/trx.jpg')] pointer-events-none select-none"
          style={{
            backgroundPosition: '50% 50%',
            backgroundSize: 'cover',
          }}
        />
        <div 
          className="absolute inset-0 pointer-events-none select-none"
          style={{
            background: `linear-gradient(
              to bottom,
              transparent 0%,
              transparent 5%,
              rgba(0, 0, 0, 0.1) 10%,
              rgba(0, 0, 0, 0.2) 15%,
              rgba(0, 0, 0, 0.3) 20%,
              rgba(0, 0, 0, 0.3) 80%,
              rgba(0, 0, 0, 0.2) 85%,
              rgba(0, 0, 0, 0.1) 90%,
              transparent 95%,
              transparent 100%
            )`
          }}
        />
      </div>
      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="pt-36 md:pt-32 space-y-8 md:space-y-5 max-w-3xl">
          <motion.h1 
            className="text-3xl sm:text-4xl md:text-7xl tracking-tighter font-serpentine text-white mb-24 sm:mb-4 text-left flex flex-col gap-2"
            style={{
              textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000'
            }}
          >
            <motion.span
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="inline-block"
            >
              {subtitle.regular}
            </motion.span>
            <motion.span
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.3,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="text-white inline-block"
            >
              {subtitle.gradient}
            </motion.span>
          </motion.h1>
          <motion.div 
            className="items-center gap-x-3 space-y-3 sm:flex sm:space-y-0 relative z-[100] mt-24 sm:mt-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8,
              delay: 0.4,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <div className="relative inline-block overflow-hidden rounded-full p-[1.5px] z-[100]">
              <div className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#14B8A6_0%,#EC4899_50%,#14B8A6_100%)]" />
              <div className="relative inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-black/60 text-xs font-medium backdrop-blur-3xl">
                <Link
                  href="/contact?scroll=contact-form"
                  className="relative inline-flex rounded-full text-center group items-center w-full justify-center bg-white/10 text-gray-200 py-4 sm:py-2 px-10 sm:px-6 text-base sm:text-sm hover:bg-white/20 hover:text-white transition-all sm:w-auto z-[100]"
                  aria-label="Get a quote"
                  style={{ cursor: 'pointer' }}
                >
                  <span className="relative z-[100]">{ctaText}</span>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

