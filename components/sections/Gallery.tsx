"use client"

import React from "react"
import { motion } from "framer-motion"
import { Instagram, ExternalLink, Camera } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const galleryImages = [
  {
    src: "/images/gallery/fleet-branding.jpg",
    alt: "Fleet Branding",
    category: "Commercial"
  },
  {
    src: "/images/gallery/luxury-sedan-after.jpg",
    alt: "Luxury Sedan Wrap",
    category: "Premium"
  },
  {
    src: "/images/gallery/sports-car-after.jpg",
    alt: "Sports Car Wrap",
    category: "Performance"
  },
  {
    src: "/images/gallery/van-after.jpg",
    alt: "Van Wrap",
    category: "Commercial"
  },
  {
    src: "/commercial1.jpg",
    alt: "Commercial Vehicle Wrap",
    category: "Commercial"
  },
  {
    src: "/commercial2.jpg",
    alt: "Commercial Fleet Wrap",
    category: "Commercial"
  },
  {
    src: "/commercial3.jpg",
    alt: "Commercial Vehicle Branding",
    category: "Commercial"
  },
  {
    src: "/custom1.jpg",
    alt: "Custom Vehicle Wrap",
    category: "Custom"
  },
  {
    src: "/custom2.jpg",
    alt: "Custom Car Wrap",
    category: "Custom"
  },
  {
    src: "/custom3.jpg",
    alt: "Custom Vehicle Design",
    category: "Custom"
  },
  {
    src: "/premiumwraps.jpg",
    alt: "Premium Vehicle Wrap",
    category: "Premium"
  },
  {
    src: "/ppf.jpg",
    alt: "Paint Protection Film",
    category: "Protection"
  }
]

export function Gallery() {
  return (
    <div className="space-y-12">
      {/* Gallery Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
      >
        {galleryImages.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative aspect-square overflow-hidden rounded-xl bg-gray-900 border border-gray-800"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
            />
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-white font-semibold text-sm">{image.alt}</h3>
                    <p className="text-gray-300 text-xs">{image.category}</p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <Camera className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Instagram Link Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center"
      >
        <div className="bg-gradient-to-r from-teal-500/10 to-pink-500/10 border border-teal-500/20 rounded-2xl p-8 backdrop-blur-sm">
          <div className="flex flex-col items-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-teal-500/20 to-pink-500/20 flex items-center justify-center">
              <Instagram className="w-8 h-8 text-teal-400" />
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">
                See More on Instagram
              </h3>
              <p className="text-gray-400 max-w-md mx-auto mb-6">
                Follow us on Instagram for the latest projects, behind-the-scenes content, and exclusive offers.
              </p>
            </div>

            <Link
              href="https://www.instagram.com/elitewrapperssydney/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-teal-500 to-pink-500 hover:from-teal-600 hover:to-pink-600 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-teal-500/25"
            >
              <Instagram className="w-5 h-5" />
              <span>Follow @elitewrapperssydney</span>
              <ExternalLink className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  )
} 