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
        regular: "Premium wrapping",
        gradient: "& fleet branding",
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
              'url("/trx.jpg")',
          }}
        />
        <div className="absolute inset-0 bg-black/70 md:bg-black/50" />
      </div>
      <div className="pt-20 md:pt-0">
        <p className="max-w-2xl mx-auto text-white">description</p>
      </div>
    </HeroSection>
  )
}

