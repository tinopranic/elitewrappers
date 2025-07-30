"use client"

import React, { useEffect, useState } from "react"
import { GridMotion } from "@/components/ui/grid-motion"
import { SparklesCore } from "@/components/ui/sparkles"
import { SectionHeading } from "@/components/ui/section-heading"
import Link from "next/link"

export function FeaturedProjects() {
  const [projects, setProjects] = React.useState<(string | JSX.Element)[]>([])
  const [loading, setLoading] = React.useState(true)
  const [mounted, setMounted] = useState(false)

  React.useEffect(() => {
    // Use local images instead of Instagram API
    setProjects([
      "/images/gallery/luxury-sedan-after.jpg",
      "/images/gallery/sports-car-after.jpg",
      "/images/gallery/van-after.jpg",
      "/images/gallery/fleet-branding.jpg",
      "/commercial1.jpg",
      "/commercial2.jpg",
      "/commercial3.jpg",
      "/custom1.jpg",
      "/custom2.jpg",
      "/custom3.jpg",
      "/premiumwraps.jpg",
      "/ppf.jpg",
      <div key="custom-1" className="bg-black/80 backdrop-blur-sm p-6 h-full flex items-center justify-center">
        <h3 className="text-2xl font-bold text-white text-center">Premium Vehicle Wraps</h3>
      </div>,
      <div key="custom-2" className="bg-black/80 backdrop-blur-sm p-6 h-full flex items-center justify-center">
        <h3 className="text-2xl font-bold text-white text-center">Paint Protection</h3>
      </div>,
      <div key="custom-3" className="bg-black/80 backdrop-blur-sm p-6 h-full flex items-center justify-center">
        <h3 className="text-2xl font-bold text-white text-center">Commercial Fleet Wraps</h3>
      </div>,
    ])
    setLoading(false)
  }, [])

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section className="relative min-h-screen bg-premium-dark pb-24">
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
      <div className="relative z-10 pt-24 pb-12">
        <SectionHeading>
          Featured Projects
        </SectionHeading>
        <p className="text-center text-gray-400 max-w-2xl mx-auto px-4 text-lg">
          Discover our portfolio of premium vehicle wraps, paint protection, and commercial fleet branding projects.
        </p>
      </div>
      <div className="h-[calc(100vh-200px)] md:h-[800px]">
        {loading ? (
          <div className="flex justify-center items-center h-full">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-teal-500"></div>
          </div>
        ) : (
          <GridMotion 
            items={projects} 
            gradientColor="rgba(20, 20, 20, 0.8)" 
            className="relative z-20"
          />
        )}
      </div>
      <div className="relative z-20 flex justify-center mt-12">
        <span className="relative inline-block overflow-hidden rounded-full p-[1.5px]">
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#14B8A6_0%,#EC4899_50%,#14B8A6_100%)]" />
          <div className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-black/60 text-xs font-medium backdrop-blur-3xl">
            <Link
              href="/gallery"
              className="inline-flex rounded-full text-center group items-center w-full justify-center bg-white/10 text-gray-200 py-2 px-6 text-sm hover:bg-white/20 hover:text-white transition-all sm:w-auto"
            >
              Explore More Projects
            </Link>
          </div>
        </span>
      </div>
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

