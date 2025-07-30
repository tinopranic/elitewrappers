"use client"

import React, { useState } from "react"
import { Gallery } from "@/components/sections/Gallery"
import { Instagram, ChevronRight, ArrowRight, Camera, Shield, Truck } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { SparklesCore } from "@/components/ui/sparkles"
import { cn } from "@/lib/utils"

export default function GalleryPage() {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <div className="relative bg-gradient-to-b from-black to-zinc-900 min-h-screen text-white">
      {/* Hero Section - Minimalist with Dynamic Content */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h5 className="text-teal-400 font-medium mb-2 tracking-wide uppercase text-sm">OUR PORTFOLIO</h5>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 font-serpentine leading-tight">
                Transformation <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-pink-500">
                  Gallery
                </span>
              </h1>
              <p className="text-lg text-zinc-400 max-w-lg mb-8">
                Explore our collection of premium vehicle wraps, commercial branding, and custom transformations across Sydney.
              </p>
              
              <Link
                href="https://www.instagram.com/elitewrapperssydney/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white group"
              >
                <span className="bg-gradient-to-r from-pink-600 to-pink-500 p-3 rounded-full transition-transform group-hover:scale-110">
                  <Instagram className="w-5 h-5" />
                </span>
                <span className="font-medium">@elitewrapperssydney</span>
                <ChevronRight className="w-4 h-4 opacity-70 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative aspect-square rounded-2xl overflow-hidden hidden lg:block"
            >
              <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 gap-2">
                <div className="relative overflow-hidden rounded-lg">
                  <div className="absolute inset-0 bg-gradient-to-tr from-teal-500/20 to-pink-500/20 mix-blend-overlay z-10" />
                  <div className="relative w-full h-full">
                    <Image 
                      src="/ppf.jpg"
                      alt="Paint Protection"
                      fill
                      className="object-cover transition-transform duration-700 hover:scale-110"
                      sizes="(max-width: 768px) 100vw, 300px"
                    />
                  </div>
                </div>
                <div className="relative overflow-hidden rounded-lg">
                  <div className="absolute inset-0 bg-gradient-to-tr from-teal-500/20 to-pink-500/20 mix-blend-overlay z-10" />
                  <div className="relative w-full h-full">
                    <Image 
                      src="/custom4.png"
                      alt="Custom Wrap"
                      fill
                      className="object-cover transition-transform duration-700 hover:scale-110"
                      sizes="(max-width: 768px) 100vw, 300px"
                    />
                  </div>
                </div>
                <div className="relative overflow-hidden rounded-lg">
                  <div className="absolute inset-0 bg-gradient-to-tr from-teal-500/20 to-pink-500/20 mix-blend-overlay z-10" />
                  <div className="relative w-full h-full">
                    <Image 
                      src="/commercial1.jpg"
                      alt="Commercial Wrap"
                      fill
                      className="object-cover transition-transform duration-700 hover:scale-110"
                      sizes="(max-width: 768px) 100vw, 300px"
                    />
                  </div>
                </div>
                <div className="relative overflow-hidden rounded-lg">
                  <div className="absolute inset-0 bg-gradient-to-tr from-teal-500/20 to-pink-500/20 mix-blend-overlay z-10" />
                  <div className="relative w-full h-full">
                    <Image 
                      src="/trailer1.png"
                      alt="Trailer Signage"
                      fill
                      className="object-cover transition-transform duration-700 hover:scale-110"
                      sizes="(max-width: 768px) 100vw, 300px"
                    />
                  </div>
                </div>
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none z-10" />
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 backdrop-blur-md bg-black/30 px-4 py-2 rounded-full text-sm z-20">
                Elite Wrappers Portfolio
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Background Particle Effect - Subtle */}
        <div className="absolute inset-0 -z-10">
          <SparklesCore
            id="heroparticles"
            background="transparent"
            minSize={0.2}
            maxSize={0.6}
            particleDensity={20}
            className="w-full h-full"
            particleColor="#14B8A6"
            speed={0.05}
          />
        </div>
      </section>
      
      {/* Gallery Section - Redesigned */}
      <section className="relative z-10 py-16">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold font-serpentine">
                Latest Projects
              </h2>
              <p className="text-zinc-400">Browse our most recent transformations</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="hidden md:block"
            >
              <Link 
                href="/contact" 
                className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-500 to-teal-600 px-5 py-2.5 rounded-lg text-white shadow-lg shadow-teal-500/20 hover:shadow-teal-500/40 transition-all hover:-translate-y-1"
              >
                <span>Discuss Your Project</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
          
          <div className="relative mb-16">
            <Gallery />
          </div>
        </div>
        
        {/* Animated Gradient Background */}
        <div className="absolute inset-0 -z-10 opacity-10">
          <div className="absolute w-[500px] h-[500px] rounded-full bg-teal-500/30 blur-[120px] top-1/4 -left-64 animate-blob animation-delay-4000"></div>
          <div className="absolute w-[600px] h-[600px] rounded-full bg-pink-500/20 blur-[120px] bottom-1/4 -right-64 animate-blob animation-delay-2000"></div>
        </div>
      </section>
      
      {/* Services Overview */}
      <section className="relative py-20 overflow-hidden bg-black/50">
        <div className="container max-w-7xl mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-serpentine mb-4">
              Transform Your Vehicle with Elite Wrappers
            </h2>
            <p className="text-zinc-400">
              Our premium quality materials and expert craftsmanship deliver outstanding results every time.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Premium Wraps",
                description: "High-quality materials and precise application for stunning vehicle transformations.",
                icon: <Camera className="w-8 h-8 text-teal-500" />,
                link: "/services#premium-wraps"
              },
              {
                title: "Paint Protection",
                description: "Shield your vehicle's paintwork from damage with our protective films.",
                icon: <Shield className="w-8 h-8 text-pink-500" />,
                link: "/services#paint-protection"
              },
              {
                title: "Commercial Branding",
                description: "Transform your fleet with eye-catching branding that promotes your business.",
                icon: <Truck className="w-8 h-8 text-teal-500" />,
                link: "/services#commercial-branding"
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-zinc-900/50 backdrop-blur-sm p-8 rounded-2xl border border-zinc-800"
              >
                <div className="bg-gradient-to-br from-zinc-800 to-zinc-900 p-4 inline-block rounded-xl mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-zinc-400 mb-4">{service.description}</p>
                <Link
                  href={service.link}
                  className="text-teal-400 inline-flex items-center gap-1 hover:text-teal-300 transition-colors"
                >
                  Learn more
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section - Simplified and Modern */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-b from-zinc-900 to-black">
        <div className="container max-w-5xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-zinc-900/80 to-black/80 backdrop-blur-lg border border-zinc-800/50 rounded-3xl p-10 md:p-14 text-center relative overflow-hidden"
            style={{ position: 'relative', zIndex: 1 }}
          >
            <div className="absolute inset-0 overflow-hidden opacity-20 -z-10">
              <div className="absolute w-[300px] h-[300px] rounded-full bg-teal-500 blur-[80px] -top-10 -left-10"></div>
              <div className="absolute w-[300px] h-[300px] rounded-full bg-pink-500 blur-[80px] -bottom-10 -right-10"></div>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serpentine">
              Ready to Transform Your Vehicle?
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto mb-8">
              Contact our team today to discuss your project and discover how we can bring your vision to life with our premium wrapping services.
            </p>
            
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-500 to-teal-600 px-8 py-4 rounded-lg text-white font-medium shadow-lg shadow-teal-500/20 hover:shadow-teal-500/40 transition-all hover:-translate-y-1 relative z-10"
            >
              Get in Touch
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
      
      {/* Add keyframes for animation */}
      <style jsx global>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  )
}

