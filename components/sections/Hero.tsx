"use client"

import React from "react"
import { HeroSection } from "@/components/blocks/hero-section-dark"
import { FadeInHeading } from "@/components/ui/fade-in-heading"

export function Hero() {
  return (
    <HeroSection
      title={
        <FadeInHeading as="h1" className="text-4xl tracking-tighter font-air-travellers text-white md:text-6xl">
          Transform Your Ride
        </FadeInHeading>
      }
      subtitle={{
        regular: "Premium Car Wrapping Services in ",
        gradient: "Sydney",
      }}
      description="Elite Wrappers Sydney offers top-quality vehicle wraps, paint protection, and custom designs to transform your car's appearance and protect its value."
      ctaText="Get a Quote"
      ctaHref="/contact"
      gridOptions={{
        angle: 65,
        opacity: 0.4,
        cellSize: 50,
        lightLineColor: "rgba(20, 184, 166, 0.2)", // Teal with low opacity
        darkLineColor: "rgba(20, 184, 166, 0.3)", // Teal with slightly higher opacity
      }}
      className="bg-transparent"
    >
      <div className="absolute top-0 z-[0] h-full w-screen">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              'url("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Untitled-1.jpg-BxyUdrLQf9oHWBQ5XsmLMFUEtgVDBc.jpeg")',
          }}
        />
        <div className="absolute inset-0 bg-black/70 md:bg-black/50" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black" />
      </div>
      <div className="pt-20 md:pt-0">
        <p className="max-w-2xl mx-auto text-white">description</p>
      </div>
    </HeroSection>
  )
}

