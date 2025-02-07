"use client"

import React, { useState } from "react"
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar"
import { Menu } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { BorderTrail } from "@/components/ui/border-trail"
import { OurPartners } from "./OurPartners"
import { SparklesCore } from "@/components/ui/sparkles"
import { ScrollVelocity } from "@/components/ui/scroll-velocity"
import { SectionHeading } from "@/components/ui/section-heading"
import { Paintbrush, Shield, Truck, FileText } from "lucide-react"
import { services } from "@/config/services"
import type { Service } from "@/types"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"

interface ServiceContentProps {
  service: Service
}

export function Services() {
  const [selectedService, setSelectedService] = useState(services[0])
  const [open, setOpen] = useState(true)

  return (
    <section className="relative bg-black py-24" id="services">
      <div className="container mx-auto px-4">
        <SectionHeading>Our Services</SectionHeading>
        
        {/* Mobile Accordion View */}
        <div className="lg:hidden">
          <Accordion type="single" collapsible>
            {services.map((service) => (
              <AccordionItem key={service.id} value={service.id}>
                <AccordionTrigger className="text-white hover:text-teal-400">
                  <div className="flex items-center gap-3">
                    <service.icon className="h-5 w-5" />
                    <span>{service.label}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <ServiceContent service={service} />
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Desktop Sidebar View */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-[300px_1fr] gap-8">
            <Sidebar open={open} setOpen={setOpen}>
              <div className="flex flex-col h-full bg-neutral-900/50 backdrop-blur-sm rounded-lg">
                <div className="flex-1 py-2">
                  {services.map((service) => (
                    <button
                      key={service.id}
                      onClick={() => setSelectedService(service)}
                      className={cn(
                        "flex w-full items-center gap-2 px-4 py-2 text-sm font-medium text-white hover:bg-white/10 transition-colors",
                        selectedService.id === service.id && "bg-white/10"
                      )}
                    >
                      <service.icon className="h-5 w-5 text-white" aria-hidden="true" />
                      {service.label}
                    </button>
                  ))}
                </div>
              </div>
            </Sidebar>
            <ServiceContent service={selectedService} />
          </div>
        </div>
      </div>
    </section>
  )
}

const Logo = () => {
  return (
    <Link href="#" className="font-normal flex space-x-2 items-center text-sm text-white py-1 relative z-20">
      <Image
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/NEW%20Logo%20jpg-6ER5dcL86gISqvgRIepb8CjEGxn8HQ.png"
        alt="Elite Wrappers Sydney Logo"
        width={24}
        height={20}
        className="flex-shrink-0"
        priority
      />
      <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="font-medium ml-2">
        Elite Wrappers
      </motion.span>
    </Link>
  )
}

const ServiceContent = ({ service }: ServiceContentProps) => {
  const Icon = service.icon
  return (
    <div className="flex flex-1 bg-neutral-800 text-white">
      <div className="relative p-2 md:p-4 lg:p-6 rounded-tl-2xl border-l border-neutral-700 flex flex-col gap-2 flex-1 w-full h-full">
        <BorderTrail
          className="bg-gradient-to-r from-teal-400 via-pink-500 to-teal-400"
          size={250}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 12,
            ease: "linear",
          }}
        />
        <div className="flex flex-col gap-2 h-full">
          <h3 className="text-xl md:text-2xl font-semibold flex items-center gap-2 text-white font-air-travellers">
            <Icon className="h-5 w-5 md:h-6 md:w-6 text-white" aria-hidden="true" />
            {service.label}
          </h3>
          <p className="text-sm md:text-base text-gray-300">{service.description}</p>
          <p className="mt-2 text-sm md:text-base text-white">{service.content}</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mt-auto">
            {service.images.map((image: string, index: number) => (
              <div key={index} className="relative aspect-video">
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${service.label} - ${index === 0 ? 'Primary' : index === 1 ? 'Secondary' : 'Additional'} view`}
                  fill
                  className={`rounded-lg object-cover ${index === 2 && image !== '/commercial3.jpg' && image !== '/trailer3.png' ? 'object-top' : 'object-center'}`}
                  loading={index === 0 ? "eager" : "lazy"}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                  quality={85}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

