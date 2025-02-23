"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { services } from "@/config/services"
import type { Service } from "@/types"
import { SectionHeading } from "@/components/ui/section-heading"
import Image from "next/image"
import Link from "next/link"

export function Services() {
  const [selectedService, setSelectedService] = useState(services[0])
  const [hoveredService, setHoveredService] = useState<string | null>(null)

  return (
    <section 
      className="relative bg-premium-black py-12 sm:py-16 md:py-24" 
      id="services"
      aria-labelledby="services-heading"
    >
      <div className="absolute inset-0 bg-noise opacity-50 mix-blend-soft-light" aria-hidden="true"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading id="services-heading">Our Services</SectionHeading>
        <p className="text-center text-gray-400 max-w-2xl mx-auto mb-8 sm:mb-12 md:mb-16 text-sm sm:text-base">
          Experience premium vehicle transformation services tailored to your vision.
        </p>

        {/* Desktop Layout */}
        <div className="hidden lg:grid grid-cols-[1fr_2fr] gap-8 lg:gap-12">
          {/* Service Navigation */}
          <div className="space-y-4" role="tablist" aria-label="Service options">
            {services.map((service) => (
              <motion.button
                key={service.id}
                onClick={() => setSelectedService(service)}
                onMouseEnter={() => setHoveredService(service.id)}
                onMouseLeave={() => setHoveredService(null)}
                className={cn(
                  "w-full text-left p-6 rounded-xl transition-all duration-300",
                  "relative overflow-hidden group",
                  selectedService.id === service.id
                    ? "bg-gradient-to-r from-teal-500/20 to-pink-500/20 text-white"
                    : "bg-neutral-900/50 text-gray-400 hover:bg-neutral-800/50 hover:text-white"
                )}
                role="tab"
                aria-selected={selectedService.id === service.id}
                aria-controls={`panel-${service.id}`}
                id={`tab-${service.id}`}
              >
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-2">
                    <service.icon className="w-6 h-6" aria-hidden="true" />
                    <h3 className="text-lg font-semibold">{service.label}</h3>
                  </div>
                  <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                    {service.description}
                  </p>
                </div>
                {selectedService.id === service.id && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-teal-500/10 to-pink-500/10"
                    layoutId="serviceBg"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    aria-hidden="true"
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* Service Content */}
          <motion.div
            key={selectedService.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-neutral-900/50 backdrop-blur-sm rounded-xl p-8"
            role="tabpanel"
            aria-labelledby={`tab-${selectedService.id}`}
            id={`panel-${selectedService.id}`}
          >
            <div className="flex items-center gap-4 mb-6">
              <selectedService.icon className="w-8 h-8 text-teal-400" aria-hidden="true" />
              <h2 className="text-2xl font-bold text-white">{selectedService.label}</h2>
            </div>
            
            <div className="prose prose-invert max-w-none mb-8">
              {selectedService.content.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-gray-300 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            <div 
              className="grid grid-cols-3 gap-4"
              role="list"
              aria-label={`${selectedService.label} example images`}
            >
              {selectedService.images.map((image, index) => (
                <motion.div
                  key={image}
                  className="relative aspect-video rounded-lg overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                  role="listitem"
                >
                  <Image
                    src={image}
                    alt={`${selectedService.label} example ${index + 1}`}
                    fill
                    className={cn(
                      "object-cover",
                      image === "/premium.jpg" && "object-top",
                      image === "/trailer22.jpg" && "object-center"
                    )}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                    loading={index === 0 ? "eager" : "lazy"}
                    quality={index === 0 ? 90 : 75}
                    priority={index === 0 && selectedService.id === services[0].id}
                  />
                </motion.div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <span className="relative inline-block overflow-hidden rounded-full p-[1.5px]">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#14B8A6_0%,#EC4899_50%,#14B8A6_100%)]" />
                <div className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-black/60 text-xs font-medium backdrop-blur-3xl">
                  <Link
                    href="/contact"
                    className="inline-flex rounded-full text-center group items-center w-full justify-center bg-white/10 text-gray-200 py-2 px-6 text-sm hover:bg-white/20 hover:text-white transition-all sm:w-auto"
                  >
                    Contact Us
                  </Link>
                </div>
              </span>
            </div>
          </motion.div>
        </div>

        {/* Mobile Accordion Layout */}
        <div className="lg:hidden space-y-4 overflow-hidden">
          {services.map((service) => (
            <motion.div
              key={service.id}
              className="bg-neutral-900/50 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => {
                  if (selectedService.id === service.id) {
                    setSelectedService(services[0])
                  } else {
                    setSelectedService(service)
                  }
                }}
                className="w-full text-left p-4 sm:p-6 flex items-center justify-between relative z-10"
                aria-expanded={selectedService.id === service.id}
                aria-controls={`content-${service.id}`}
                id={`mobile-tab-${service.id}`}
              >
                <div className="flex items-center gap-3">
                  <service.icon className="w-5 h-5 sm:w-6 sm:h-6 text-teal-400" aria-hidden="true" />
                  <h3 className="text-base sm:text-lg font-semibold text-white">{service.label}</h3>
                </div>
                <motion.div
                  animate={{ rotate: selectedService.id === service.id ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center justify-center w-8 h-8"
                  aria-hidden="true"
                >
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </motion.div>
              </button>

              <motion.div
                id={`content-${service.id}`}
                initial={false}
                animate={{
                  height: selectedService.id === service.id ? "auto" : 0,
                  opacity: selectedService.id === service.id ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
                role="region"
                aria-labelledby={`mobile-tab-${service.id}`}
              >
                <div className="p-4 sm:p-6 pt-0">
                  <div className="prose prose-invert max-w-none mb-6">
                    <p className="text-sm sm:text-base text-gray-400 mb-4">{service.description}</p>
                    {service.content.split('\n\n').map((paragraph, index) => (
                      <p key={index} className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  <div 
                    className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4"
                    role="list"
                    aria-label={`${service.label} example images`}
                  >
                    {service.images.map((image, index) => (
                      <div
                        key={image}
                        className="relative aspect-video rounded-lg overflow-hidden"
                        role="listitem"
                      >
                        <Image
                          src={image}
                          alt={`${service.label} example ${index + 1}`}
                          fill
                          className={cn(
                            "object-cover",
                            image === "/premium.jpg" && "object-top",
                            image === "/trailer22.jpg" && "object-center"
                          )}
                          sizes="(max-width: 640px) 100vw, (max-width: 768px) 33vw, 25vw"
                          loading={index === 0 ? "eager" : "lazy"}
                          quality={index === 0 ? 85 : 75}
                          priority={index === 0 && service.id === services[0].id}
                        />
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 text-center">
                    <Link
                      href="/contact?scroll=contact-form"
                      className="inline-flex items-center justify-center px-6 py-2 text-xs sm:text-sm font-medium text-white bg-gradient-to-r from-teal-500 to-pink-500 rounded-full hover:from-teal-600 hover:to-pink-600 transition-all duration-300 relative z-20"
                      aria-label={`Get started with ${service.label} service`}
                    >
                      Get Started with {service.label}
                    </Link>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

