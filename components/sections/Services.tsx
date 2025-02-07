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
import { Paintbrush, Shield, Truck, FileText, Calendar, Palette, Sparkles, CheckCircle2, ClipboardCheck, Car, MessageSquare, PaintBucket, Settings, BadgeCheck, FileCheck } from "lucide-react"

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
  description: React.ReactNode;
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
    label: "Paint Protection",
    id: "paint-protection",
    icon: <Shield className="text-white h-5 w-5 flex-shrink-0" />,
    description: "Shield your car's paint from scratches and debris.",
    content:
      "Our paint protection films provide an invisible shield against road debris, stone chips, and minor scratches. We use advanced self-healing technology that automatically removes minor scratches and swirl marks, ensuring your vehicle maintains its pristine appearance.\n\n\nOur premium installations come with multi year warranty, giving you peace of mind for years to come. The film includes UV protection to prevent paint fade and oxidation, while our certified technicians ensure flawless installation that enhances and preserves your vehicle's finish.",
    images: [
      "/ppf.jpg",
      "/ppf2.jpg",
      "/premium.jpg",
    ],
  },
  {
    label: "Custom Wraps",
    id: "custom-wraps",
    icon: <Paintbrush className="text-white h-5 w-5 flex-shrink-0" />,
    description: "Transform your vehicle with our premium custom wraps.",
    content:
      "Our custom wraps are designed to give your vehicle a unique look that stands out from the crowd. Using only premium vinyl materials, we can achieve full vehicle color changes that transform your car's appearance completely.\n\n\nOur expert team works closely with you to create custom designs and patterns tailored to your vision, offering a wide range of finishes including matte, gloss, satin, and chrome. Best of all, our wraps are completely removable without damaging your original paint, giving you the freedom to change your style whenever you want.",
    images: [
      "/custom4.png",
      "/custom5.png",
      "/custom3.jpg",
    ],
  },
  {
    label: "Commercial Wraps",
    id: "commercial-wraps",
    icon: <Truck className="text-white h-5 w-5 flex-shrink-0" />,
    description: "Turn your fleet into moving billboards.",
    content:
      "Make your business stand out with our commercial vehicle wraps. We offer custom designs that transform your fleet into eye-catching mobile advertisements, increasing brand visibility wherever you go. Our cost-effective mobile advertising solutions include professional design services to ensure your message captures attention on the road.\n\n\nWe maintain perfect consistency across your entire fleet, using durable materials specifically chosen for long-term exposure and daily commercial use. Our wraps not only advertise your business but also protect your vehicles' paintwork, maintaining their value for years to come.",
    images: [
      "/commercial1.jpg",
      "/commercial2.jpg",
      "/commercial3.jpg",
    ],
  },
  {
    label: "Trailer Signage",
    id: "trailer-signage",
    icon: <FileText className="text-white h-5 w-5 flex-shrink-0" />,
    description: "Professional signage solutions for trailers and trucks.",
    content:
      "Transform your trailers into powerful mobile advertising platforms with our professional signage solutions. We specialize in creating high-impact graphics and branding that make your trailers stand out on the road, ensuring your message reaches a wider audience wherever your fleet travels.\n\n\nUsing premium-grade materials specifically designed for trailers and heavy vehicles, we ensure your signage withstands harsh road conditions and frequent exposure to the elements. Our expert team handles everything from design to installation, delivering durable, eye-catching results that effectively promote your business 24/7.",
    images: [
      "/trailer1.png",
      "/trailer2.png",
      "/trailer3.png",
    ],
  },
]

const eliteProcessData: TimelineEntry[] = [
  {
    title: "Consultation",
    description: (
      <ul className="space-y-4">
        <li className="flex items-start gap-3">
          <MessageSquare className="w-5 h-5 text-teal-500 mt-1 flex-shrink-0" />
          <span className="font-semibold">In-depth discussion of your vision, preferences, and requirements</span>
        </li>
        <li className="flex items-start gap-3">
          <Palette className="w-5 h-5 text-pink-500 mt-1 flex-shrink-0" />
          <span className="font-semibold">Explore color options, finishes, and material selections</span>
        </li>
        <li className="flex items-start gap-3">
          <Calendar className="w-5 h-5 text-teal-500 mt-1 flex-shrink-0" />
          <span className="font-semibold">Timeline planning and budget discussion</span>
        </li>
      </ul>
    ),
    content: (
      <div>
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
    description: (
      <ul className="space-y-4">
        <li className="flex items-start gap-3">
          <Sparkles className="w-5 h-5 text-teal-500 mt-1 flex-shrink-0" />
          <span className="font-semibold">Creation of precise digital mockups</span>
        </li>
        <li className="flex items-start gap-3">
          <Settings className="w-5 h-5 text-pink-500 mt-1 flex-shrink-0" />
          <span className="font-semibold">Detailed customization of graphics and patterns</span>
        </li>
        <li className="flex items-start gap-3">
          <ClipboardCheck className="w-5 h-5 text-teal-500 mt-1 flex-shrink-0" />
          <span className="font-semibold">Multiple revision rounds until perfect</span>
        </li>
      </ul>
    ),
    content: (
      <div>
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
    description: (
      <ul className="space-y-4">
        <li className="flex items-start gap-3">
          <PaintBucket className="w-5 h-5 text-teal-500 mt-1 flex-shrink-0" />
          <span className="font-semibold">Professional cleaning and surface preparation</span>
        </li>
        <li className="flex items-start gap-3">
          <Shield className="w-5 h-5 text-pink-500 mt-1 flex-shrink-0" />
          <span className="font-semibold">Protection of sensitive areas and components</span>
        </li>
        <li className="flex items-start gap-3">
          <CheckCircle2 className="w-5 h-5 text-teal-500 mt-1 flex-shrink-0" />
          <span className="font-semibold">Surface inspection and imperfection correction</span>
        </li>
      </ul>
    ),
    content: (
      <div>
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
    description: (
      <ul className="space-y-4">
        <li className="flex items-start gap-3">
          <Car className="w-5 h-5 text-teal-500 mt-1 flex-shrink-0" />
          <span className="font-semibold">Premium vinyl application by certified installers</span>
        </li>
        <li className="flex items-start gap-3">
          <Settings className="w-5 h-5 text-pink-500 mt-1 flex-shrink-0" />
          <span className="font-semibold">Precision alignment and panel matching</span>
        </li>
        <li className="flex items-start gap-3">
          <CheckCircle2 className="w-5 h-5 text-teal-500 mt-1 flex-shrink-0" />
          <span className="font-semibold">Careful attention to curves and complex surfaces</span>
        </li>
      </ul>
    ),
    content: (
      <div>
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
    description: (
      <ul className="space-y-4">
        <li className="flex items-start gap-3">
          <BadgeCheck className="w-5 h-5 text-teal-500 mt-1 flex-shrink-0" />
          <span className="font-semibold">Multi-point inspection under various lighting conditions</span>
        </li>
        <li className="flex items-start gap-3">
          <CheckCircle2 className="w-5 h-5 text-pink-500 mt-1 flex-shrink-0" />
          <span className="font-semibold">Verification of seams, edges, and adhesion</span>
        </li>
        <li className="flex items-start gap-3">
          <FileCheck className="w-5 h-5 text-teal-500 mt-1 flex-shrink-0" />
          <span className="font-semibold">Final assembly check and cleaning</span>
        </li>
      </ul>
    ),
    content: (
      <div>
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
    description: (
      <ul className="space-y-4">
        <li className="flex items-start gap-3">
          <Car className="w-5 h-5 text-teal-500 mt-1 flex-shrink-0" />
          <span className="font-semibold">Comprehensive vehicle walkthrough</span>
        </li>
        <li className="flex items-start gap-3">
          <FileCheck className="w-5 h-5 text-pink-500 mt-1 flex-shrink-0" />
          <span className="font-semibold">Detailed care instructions and warranty documentation</span>
        </li>
        <li className="flex items-start gap-3">
          <Calendar className="w-5 h-5 text-teal-500 mt-1 flex-shrink-0" />
          <span className="font-semibold">Follow-up inspection scheduling</span>
        </li>
      </ul>
    ),
    content: (
      <div>
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
        <div className="absolute inset-0 -z-10">
          <SparklesCore
            id="tsparticlesfull"
            background="transparent"
            minSize={0.6}
            maxSize={1.4}
            particleDensity={50}
            className="w-full h-full"
            particleColor="#00bac5"
            speed={0.05}
          />
        </div>
        <div className="relative z-10 will-change-transform">
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
        <div
          className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-teal-500 will-change-transform"
          style={{
            opacity: '0.1',
            filter: 'blur(7px)',
            background:
              'conic-gradient(from 90deg at 50% 50%, #00bac5 -60.49deg, #ee2b7c 59.93deg, #00bac5 299.51deg, #ee2b7c 419.93deg)',
            transform: 'translateZ(0)',
          }}
        />
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
            <div className="w-full overflow-hidden will-change-transform">
              <ScrollVelocity velocity={2} className="mb-4">
                {partnerImages.map(({ name, logo }) => (
                  <div key={name} className="relative h-16 w-32 md:h-20 md:w-40 xl:h-24 xl:w-48 mx-8 will-change-transform">
                    <Image
                      src={logo || "/placeholder.svg"}
                      alt={`${name} logo`}
                      fill
                      sizes="(max-width: 768px) 128px, (max-width: 1200px) 160px, 192px"
                      className="h-full w-full object-contain object-center"
                      loading="lazy"
                    />
                  </div>
                ))}
              </ScrollVelocity>
              <ScrollVelocity velocity={-2}>
                {[...partnerImages].reverse().map(({ name, logo }) => (
                  <div key={`reverse-${name}`} className="relative h-16 w-32 md:h-20 md:w-40 xl:h-24 xl:w-48 mx-8 will-change-transform">
                    <Image
                      src={logo || "/placeholder.svg"}
                      alt={`${name} logo`}
                      fill
                      sizes="(max-width: 768px) 128px, (max-width: 1200px) 160px, 192px"
                      className="h-full w-full object-contain object-center"
                      loading="lazy"
                    />
                  </div>
                ))}
              </ScrollVelocity>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 mt-24 bg-white min-h-screen py-24">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] will-change-transform" />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50/80 to-white" />
        <div className="absolute inset-0 mix-blend-overlay opacity-40">
          <div className="absolute top-0 -left-4 w-3/4 h-3/4 bg-gradient-to-br from-teal-500/10 to-transparent rounded-full blur-3xl will-change-transform" style={{ transform: 'translateZ(0)' }} />
          <div className="absolute bottom-0 -right-4 w-3/4 h-3/4 bg-gradient-to-tl from-pink-500/10 to-transparent rounded-full blur-3xl will-change-transform" style={{ transform: 'translateZ(0)' }} />
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="relative mb-16">
            <SectionHeading textColor="text-gray-900">
              The Elite Process
            </SectionHeading>
          </div>
          <div className="relative bg-white/50 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-100 will-change-transform">
            <Timeline data={eliteProcessData} />
          </div>
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
                  className={`rounded-lg object-cover ${index === 2 && image !== '/commercial3.jpg' && image !== '/trailer3.png' ? 'object-top' : 'object-center'}`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

