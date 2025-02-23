"use client"

import React from "react"
import { WavyBackground } from "@/components/ui/wavy-background"
import { InstagramFeed } from "@/components/sections/InstagramFeed"
import { Instagram } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"
import { SparklesCore } from "@/components/ui/sparkles"

export default function GalleryPage() {
  return (
    <div className="relative bg-premium-dark min-h-screen">
      {/* Hero Section with Wavy Background */}
      <section className="relative overflow-hidden">
        <WavyBackground
          colors={["#14B8A6", "#EC4899", "#14B8A6"]}
          waveWidth={100}
          backgroundFill="#1f1f1f"
          blur={10}
          speed="slow"
          waveOpacity={0.15}
          containerClassName="min-h-[70vh] flex items-center bg-premium-black"
          className="w-full"
        >
          <div className="container mx-auto px-4 relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 font-serpentine">
                Project Gallery
              </h1>
              <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8">
                Discover our portfolio of premium vehicle transformations, from luxury car wraps to commercial fleet branding.
              </p>
              <div className="flex items-center justify-center gap-4">
                <Link
                  href="https://www.instagram.com/elitewrapperssydney/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-white bg-gradient-to-r from-teal-500/20 to-pink-500/20 px-6 py-3 rounded-full hover:from-teal-500/30 hover:to-pink-500/30 transition-all duration-300 backdrop-blur-sm border border-white/10"
                >
                  <Instagram className="w-5 h-5" />
                  <span>Follow on Instagram</span>
                </Link>
              </div>
            </motion.div>
          </div>
        </WavyBackground>
      </section>

      {/* Gallery Grid Section */}
      <section className="relative z-10 bg-premium-black py-24">
        <div className="container mx-auto px-4">
          <div className="relative">
            <InstagramFeed />
          </div>
        </div>

        {/* Background Effects */}
        <div className="absolute inset-0 -z-10">
          <SparklesCore
            id="tsparticlesfull"
            background="transparent"
            minSize={0.4}
            maxSize={1.0}
            particleDensity={30}
            className="w-full h-full"
            particleColor="#00bac5"
            speed={0.1}
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-premium-dark py-24 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-bold text-white mb-6 font-serpentine bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-gray-300"
            >
              Ready to Transform Your Vehicle?
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-gray-300 mb-8"
            >
              Contact us today to discuss your project and discover how we can bring your vision to life.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="relative inline-block overflow-hidden rounded-full p-[1.5px]">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#14B8A6_0%,#EC4899_50%,#14B8A6_100%)]" />
                <div className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-black/60 text-xs font-medium backdrop-blur-3xl">
                  <Link
                    href="/contact"
                    className="inline-flex rounded-full text-center group items-center w-full justify-center bg-white/10 text-gray-200 py-2 px-6 text-sm hover:bg-white/20 hover:text-white transition-all sm:w-auto"
                  >
                    Get Started
                  </Link>
                </div>
              </span>
            </motion.div>
          </div>
        </div>

        {/* Smooth Gradient Background */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-premium-black via-premium-dark to-premium-black opacity-80" />
        
        {/* Center Radial Gradient */}
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-[800px] h-[400px]"
          style={{
            background: 'radial-gradient(circle, rgba(20,184,166,0.08) 0%, rgba(236,72,153,0.08) 35%, rgba(0,0,0,0) 100%)',
          }}
        />

        {/* Animated Gradient Orb */}
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-[400px] h-[400px] rounded-full"
          style={{
            background: 'conic-gradient(from 0deg at 50% 50%, rgba(20,184,166,0.15) 0deg, rgba(236,72,153,0.15) 180deg, rgba(20,184,166,0.15) 360deg)',
            filter: 'blur(80px)',
            animation: 'spin 8s linear infinite',
          }}
        />

        {/* Additional Ambient Light */}
        <div
          className="absolute -left-1/4 top-1/2 -translate-y-1/2 -z-10 w-[400px] h-[400px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(20,184,166,0.03) 0%, transparent 70%)',
            filter: 'blur(50px)',
          }}
        />
        <div
          className="absolute -right-1/4 top-1/2 -translate-y-1/2 -z-10 w-[400px] h-[400px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(236,72,153,0.03) 0%, transparent 70%)',
            filter: 'blur(50px)',
          }}
        />
      </section>
    </div>
  )
}

