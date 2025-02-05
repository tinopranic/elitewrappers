"use client"

import React from "react"
import { WavyBackground } from "@/components/ui/wavy-background"
import { InstagramFeed } from "@/components/sections/InstagramFeed"
import { SectionHeading } from "@/components/ui/section-heading"
import { Instagram } from "lucide-react"
import Link from "next/link"

export default function GalleryPage() {
  return (
    <div className="relative">
      <WavyBackground
        colors={["#14B8A6", "#EC4899", "#14B8A6", "#EC4899", "#14B8A6"]}
        waveWidth={100}
        backgroundFill="black"
        blur={5}
        speed="slow"
        waveOpacity={0.5}
        containerClassName="min-h-screen"
        className="w-full"
      >
        <div className="container mx-auto px-4 pt-40 pb-48">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Our Gallery</h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Explore our latest vehicle transformations and custom wrapping projects.
            </p>
            <Link
              href="https://www.instagram.com/elitewrapperssydney/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-teal-400 hover:text-teal-300 mt-4 transition-colors"
            >
              <Instagram className="w-5 h-5" />
              <span>Follow us on Instagram</span>
            </Link>
          </div>
        </div>
      </WavyBackground>

      {/* Simple gradient transition */}
      <div className="relative h-32 bg-gradient-to-b from-transparent to-black -mt-24"></div>

      <section className="relative z-10 bg-black -mt-16">
        <div className="container mx-auto px-4 pt-16">
          <SectionHeading>Latest Projects</SectionHeading>
          <InstagramFeed />
        </div>
      </section>
    </div>
  )
}

