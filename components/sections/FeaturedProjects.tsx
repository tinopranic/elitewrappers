"use client"

import React from "react"
import { GridMotion } from "@/components/ui/grid-motion"
import { SparklesCore } from "@/components/ui/sparkles"
import { FadeInHeading } from "@/components/ui/fade-in-heading"

const projects = [
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/projects/luxury-sedan-after.jpg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/projects/sports-car-after.jpg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/projects/suv-after.jpg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/projects/van-after.jpg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/projects/metallic-sports-car.jpg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/projects/partial-hood-wrap.jpg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/projects/fleet-branding.jpg",
  <div key="custom-1" className="bg-black/80 backdrop-blur-sm p-6 h-full flex items-center justify-center">
    <h3 className="text-2xl font-bold text-white text-center">Premium Vehicle Wraps</h3>
  </div>,
  <div key="custom-2" className="bg-black/80 backdrop-blur-sm p-6 h-full flex items-center justify-center">
    <h3 className="text-2xl font-bold text-white text-center">Paint Protection</h3>
  </div>,
  <div key="custom-3" className="bg-black/80 backdrop-blur-sm p-6 h-full flex items-center justify-center">
    <h3 className="text-2xl font-bold text-white text-center">Commercial Fleet Wraps</h3>
  </div>,
]

export function FeaturedProjects() {
  return (
    <section className="relative min-h-screen bg-black pb-24">
      <SparklesCore
        id="tsparticlesfeatured"
        background="transparent"
        minSize={0.6}
        maxSize={1.4}
        particleDensity={100}
        className="absolute inset-0 w-full h-full"
        particleColor={["#14B8A6", "#EC4899"]}
        speed={1}
      />
      <div className="absolute inset-0 bg-noise opacity-50 mix-blend-soft-light"></div>
      <div className="relative z-10 pt-24 pb-12">
        <FadeInHeading className="text-4xl font-bold text-center text-white mb-4 font-air-travellers">
          Featured Projects
        </FadeInHeading>
        <p className="text-center text-gray-400 max-w-2xl mx-auto px-4">
          Discover our portfolio of premium vehicle wraps, paint protection, and commercial fleet branding projects.
        </p>
      </div>
      <div className="h-[calc(100vh-200px)] md:h-[800px]">
        <GridMotion items={projects} gradientColor="rgba(20, 184, 166, 0.15)" className="relative z-20" />
      </div>
    </section>
  )
}

