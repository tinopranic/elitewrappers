"use client"

import React, { useState } from "react"
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar"
import { Menu } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { BorderTrail } from "@/components/ui/border-trail"
import { Timeline } from "@/components/ui/timeline"
import { OurPartners } from "./OurPartners"
import { SparklesCore } from "@/components/ui/sparkles"
import { ScrollVelocity } from "@/components/ui/scroll-velocity"
import { SectionHeading } from "@/components/ui/section-heading"
import { Paintbrush, Shield, Truck, FileText } from "lucide-react"

interface Service {
  label: string;
  id: string;
  icon: JSX.Element;
  description: string;
  content: string;
  images: string[];
}

interface TimelineEntry {
  title: string;
  description: string;
  content: React.ReactNode;
}

const partnerImages = [
  {
    name: "XPEL",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/9c027b020a2b4498db5b33df5ffc9aa8_1200_80-JigfZudV9VTjcJOUFHk8NHd453FhMZ.webp",
  },
  {
    name: "ORAFOL",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2cb6bba3ef033e75d41f87a1df05ecc7_1200_80-P8SV5W04zpV4wcgYK7Am5XWuScLANd.webp",
  },
  {
    name: "Avery Dennison",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/0afcec5316ee8fada821ec7de589b2b6_1200_80-MG6K8HQG9r3C0vWhwERbFiNPo9oMSW.webp",
  },
  {
    name: "Hexis",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/10ffc1bcd9eeceeb93e68b0b41a0f875_1200_80-abST1GLtVnp7JkKognoBt6VfM5TRDN.webp",
  },
  {
    name: "3M",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/e6995ac9a03e04cb8db47235ac13c0a1_1200_80-6xH4err9wiRtcyR8QrU3PK1cS6kmLZ.webp",
  },
  {
    name: "KPMF",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/71f7a46599b9c059eb7697b4a5bd245d_1200_80-yp9sqJMvis98cD4Dc3WEmOdqbQdG7u.webp",
  },
  {
    name: "Seven2Media",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/s2m-d0Gvl8h9dky44dqGaBYhhzFekIAePF.png",
  },
]

const services: Service[] = [
  {
    label: "Custom Wraps",
    id: "custom-wraps",
    icon: <Paintbrush className="text-white h-5 w-5 flex-shrink-0" />,
    description: "Transform your vehicle with our premium custom wraps.",
    content:
      "Our custom wraps are designed to give your vehicle a unique look. We use high-quality vinyl and expert application techniques to ensure a perfect finish every time.",
    images: [
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
    ],
  },
  {
    label: "Paint Protection",
    id: "paint-protection",
    icon: <Shield className="text-white h-5 w-5 flex-shrink-0" />,
    description: "Shield your car's paint from scratches and debris.",
    content:
      "Our paint protection films provide an invisible shield against road debris, stone chips, and minor scratches. Preserve your vehicle's finish and resale value with our top-tier protection solutions.",
    images: [
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
    ],
  },
  {
    label: "Commercial Wraps",
    id: "commercial-wraps",
    icon: <Truck className="text-white h-5 w-5 flex-shrink-0" />,
    description: "Turn your fleet into moving billboards.",
    content:
      "Make your business stand out with our commercial vehicle wraps. We offer custom designs that transform your fleet into eye-catching mobile advertisements, increasing brand visibility wherever you go.",
    images: [
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
    ],
  },
  {
    label: "Signage",
    id: "signage",
    icon: <FileText className="text-white h-5 w-5 flex-shrink-0" />,
    description: "Create impactful business signage.",
    content:
      "From storefront signs to trade show displays, our signage solutions help your business make a lasting impression. We use durable materials and vibrant printing techniques to create signs that get noticed.",
    images: [
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
    ],
  },
]

const eliteProcessData: TimelineEntry[] = [
  {
    title: "Consultation",
    description: "We start with a detailed consultation to understand your vision and requirements for your vehicle.",
    content: (
      <div>
        <p className="text-black text-xs md:text-sm font-normal mb-8">
          We start with a detailed consultation to understand your vision and requirements for your vehicle.
        </p>
        <Image
          src="/placeholder.svg?height=300&width=500"
          alt="Consultation process"
          width={500}
          height={300}
          className="rounded-lg object-cover h-40 w-full shadow-lg"
        />
      </div>
    ),
  },
  {
    title: "Design",
    description: "Our expert designers create custom designs tailored to your preferences and vehicle specifications.",
    content: (
      <div>
        <p className="text-black text-xs md:text-sm font-normal mb-8">
          Our expert designers create custom designs tailored to your preferences and vehicle specifications.
        </p>
        <Image
          src="/placeholder.svg?height=300&width=500"
          alt="Design process"
          width={500}
          height={300}
          className="rounded-lg object-cover h-40 w-full shadow-lg"
        />
      </div>
    ),
  },
  {
    title: "Preparation",
    description: "We meticulously clean and prepare your vehicle to ensure the best possible application of wraps or treatments.",
    content: (
      <div>
        <p className="text-black text-xs md:text-sm font-normal mb-8">
          We meticulously clean and prepare your vehicle to ensure the best possible application of wraps or treatments.
        </p>
        <Image
          src="/placeholder.svg?height=300&width=500"
          alt="Vehicle preparation"
          width={500}
          height={300}
          className="rounded-lg object-cover h-40 w-full shadow-lg"
        />
      </div>
    ),
  },
  {
    title: "Application",
    description: "Our skilled technicians apply the wrap or treatment with precision, ensuring a flawless finish.",
    content: (
      <div>
        <p className="text-black text-xs md:text-sm font-normal mb-8">
          Our skilled technicians apply the wrap or treatment with precision, ensuring a flawless finish.
        </p>
        <Image
          src="/placeholder.svg?height=300&width=500"
          alt="Wrap application"
          width={500}
          height={300}
          className="rounded-lg object-cover h-40 w-full shadow-lg"
        />
      </div>
    ),
  },
  {
    title: "Quality Check",
    description: "We perform a thorough quality check to ensure every detail meets our high standards.",
    content: (
      <div>
        <p className="text-black text-xs md:text-sm font-normal mb-8">
          We perform a thorough quality check to ensure every detail meets our high standards.
        </p>
        <Image
          src="/placeholder.svg?height=300&width=500"
          alt="Quality check process"
          width={500}
          height={300}
          className="rounded-lg object-cover h-40 w-full shadow-lg"
        />
      </div>
    ),
  },
  {
    title: "Delivery",
    description: "We deliver your transformed vehicle, providing care instructions to maintain its new look.",
    content: (
      <div>
        <p className="text-black text-xs md:text-sm font-normal mb-8">
          We deliver your transformed vehicle, providing care instructions to maintain its new look.
        </p>
        <Image
          src="/placeholder.svg?height=300&width=500"
          alt="Vehicle delivery"
          width={500}
          height={300}
          className="rounded-lg object-cover h-40 w-full shadow-lg"
        />
      </div>
    ),
  },
]

export function Services() {
  const [open, setOpen] = useState(false)
  const [selectedService, setSelectedService] = useState<Service>(services[0])

  return (
    <>
      <section className="py-24 bg-black text-white relative">
        <SparklesCore
          id="tsparticlesservices"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="absolute inset-0 w-full h-full"
          particleColor={["#14B8A6", "#EC4899"]}
          speed={1}
        />
        <div className="relative z-10">
          <div className="container mx-auto px-4">
            <div className="relative">
              <SectionHeading>
                Our Services
              </SectionHeading>
            </div>
            <div
              className={cn(
                "rounded-md flex flex-col md:flex-row bg-neutral-900 text-white w-full flex-1 max-w-7xl mx-auto border border-neutral-700 overflow-hidden",
                "h-[450px] md:h-[500px] lg:h-[550px]",
              )}
            >
              <div className="w-[300px] bg-neutral-800 border-r border-neutral-700 p-4">
                <Logo />
                <div className="mt-8 flex flex-col gap-2">
                  {services.map((service, idx) => (
                    <button
                      key={idx}
                      className={cn(
                        "flex items-center gap-2 p-2 rounded hover:bg-neutral-700 transition-colors text-white text-left w-full",
                        selectedService.label === service.label && "bg-neutral-700"
                      )}
                      onClick={() => {
                        setSelectedService(service)
                        setOpen(false)
                      }}
                    >
                      {service.icon}
                      <span>{service.label}</span>
                    </button>
                  ))}
                </div>
              </div>
              <ServiceContent service={selectedService} />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-black relative">
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-b from-transparent via-black to-black opacity-90"></div>
        <div className="relative z-10">
          <div className="container mx-auto px-4">
            <div className="relative">
              <SectionHeading>
                Our Partners
              </SectionHeading>
            </div>
            <div className="w-full overflow-hidden">
              <ScrollVelocity velocity={3} className="mb-4">
                {partnerImages.map(({ name, logo }) => (
                  <div key={name} className="relative h-16 w-32 md:h-20 md:w-40 xl:h-24 xl:w-48 mx-8">
                    <Image
                      src={logo || "/placeholder.svg"}
                      alt={`${name} logo`}
                      fill
                      sizes="(max-width: 768px) 128px, (max-width: 1200px) 160px, 192px"
                      className="h-full w-full object-contain object-center"
                    />
                  </div>
                ))}
              </ScrollVelocity>
              <ScrollVelocity velocity={-3}>
                {[...partnerImages].reverse().map(({ name, logo }) => (
                  <div key={`reverse-${name}`} className="relative h-16 w-32 md:h-20 md:w-40 xl:h-24 xl:w-48 mx-8">
                    <Image
                      src={logo || "/placeholder.svg"}
                      alt={`${name} logo`}
                      fill
                      sizes="(max-width: 768px) 128px, (max-width: 1200px) 160px, 192px"
                      className="h-full w-full object-contain object-center"
                    />
                  </div>
                ))}
              </ScrollVelocity>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 mt-24">
        <div className="container mx-auto px-4">
          <div className="relative">
            <SectionHeading textColor="text-gray-900">
              The Elite Process
            </SectionHeading>
          </div>
          <Timeline data={eliteProcessData} />
        </div>
      </section>
    </>
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

interface ServiceContentProps {
  service: Service;
}

const ServiceContent = ({ service }: ServiceContentProps) => {
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
            {React.cloneElement(service.icon, { className: "h-5 w-5 md:h-6 md:w-6 text-white" })}
            {service.label}
          </h3>
          <p className="text-sm md:text-base text-gray-300">{service.description}</p>
          <p className="mt-2 text-sm md:text-base text-white">{service.content}</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mt-auto">
            {service.images.map((image: string, index: number) => (
              <div key={index} className="relative aspect-video">
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${service.label} image ${index + 1}`}
                  fill
                  className="rounded-lg object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

