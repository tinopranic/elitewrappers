"use client"

import { Timeline } from "@/components/ui/timeline"
import { SectionHeading } from "@/components/ui/section-heading"
import { SparklesCore } from "@/components/ui/sparkles"
import { MessageSquare, Palette, Calendar, Wrench, Car, Shield } from "lucide-react"
import Image from "next/image"
import { Suspense } from "react"

const ImageWithFallback = ({ src, alt, ...props }: { src: string; alt: string; [key: string]: any }) => {
  return (
    <div className="relative w-full h-48 sm:h-64 md:h-80 rounded-lg overflow-hidden bg-[#141414]">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover transition-opacity duration-300 group-hover:opacity-90"
        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
        loading="lazy"
        quality={75}
        {...props}
      />
    </div>
  )
}

const timelineData = [
  {
    title: "Consultation",
    content: (
      <div className="space-y-6 group">
        <Suspense fallback={<div className="w-full h-48 sm:h-64 md:h-80 bg-[#141414] rounded-lg animate-pulse" />}>
          <ImageWithFallback
            src="/consult.jpg"
            alt="Consultation process"
          />
        </Suspense>
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <MessageSquare className="w-5 h-5 text-teal-500 mt-1 flex-shrink-0" />
            <span className="font-semibold text-white">In-depth discussion of your vision and requirements</span>
          </div>
          <div className="flex items-start gap-3">
            <Palette className="w-5 h-5 text-pink-500 mt-1 flex-shrink-0" />
            <span className="font-semibold text-white">Color and material selection</span>
          </div>
          <div className="flex items-start gap-3">
            <Calendar className="w-5 h-5 text-teal-500 mt-1 flex-shrink-0" />
            <span className="font-semibold text-white">Timeline and budget planning</span>
          </div>
        </div>
      </div>
    ),
    description: "We begin with a thorough consultation to understand your goals and preferences, ensuring we deliver exactly what you envision."
  },
  {
    title: "Preparation",
    content: (
      <div className="space-y-6 group">
        <Suspense fallback={<div className="w-full h-48 sm:h-64 md:h-80 bg-[#141414] rounded-lg animate-pulse" />}>
          <ImageWithFallback
            src="/prep.jpg"
            alt="Vehicle preparation process"
          />
        </Suspense>
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <Car className="w-5 h-5 text-teal-500 mt-1 flex-shrink-0" />
            <span className="font-semibold text-white">Vehicle inspection and surface preparation</span>
          </div>
          <div className="flex items-start gap-3">
            <Shield className="w-5 h-5 text-pink-500 mt-1 flex-shrink-0" />
            <span className="font-semibold text-white">Protection of sensitive areas</span>
          </div>
          <div className="flex items-start gap-3">
            <Wrench className="w-5 h-5 text-teal-500 mt-1 flex-shrink-0" />
            <span className="font-semibold text-white">Removal of necessary components</span>
          </div>
        </div>
      </div>
    ),
    description: "We meticulously prepare your vehicle to ensure the best possible results, paying attention to every detail."
  },
  {
    title: "Installation",
    content: (
      <div className="space-y-6 group">
        <Suspense fallback={<div className="w-full h-48 sm:h-64 md:h-80 bg-[#141414] rounded-lg animate-pulse" />}>
          <ImageWithFallback
            src="/ppf.jpg"
            alt="Installation process"
          />
        </Suspense>
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <Shield className="w-5 h-5 text-teal-500 mt-1 flex-shrink-0" />
            <span className="font-semibold text-white">Premium material application</span>
          </div>
          <div className="flex items-start gap-3">
            <Wrench className="w-5 h-5 text-pink-500 mt-1 flex-shrink-0" />
            <span className="font-semibold text-white">Precision fitting and trimming</span>
          </div>
          <div className="flex items-start gap-3">
            <Car className="w-5 h-5 text-teal-500 mt-1 flex-shrink-0" />
            <span className="font-semibold text-white">Quality control at each step</span>
          </div>
        </div>
      </div>
    ),
    description: "Our expert technicians carefully install your chosen materials using industry-leading techniques for a flawless finish."
  },
  {
    title: "Final Inspection",
    content: (
      <div className="space-y-6 group">
        <Suspense fallback={<div className="w-full h-48 sm:h-64 md:h-80 bg-[#141414] rounded-lg animate-pulse" />}>
          <ImageWithFallback
            src="/custom4.png"
            alt="Final inspection process"
          />
        </Suspense>
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <Shield className="w-5 h-5 text-teal-500 mt-1 flex-shrink-0" />
            <span className="font-semibold text-white">Thorough quality check</span>
          </div>
          <div className="flex items-start gap-3">
            <MessageSquare className="w-5 h-5 text-pink-500 mt-1 flex-shrink-0" />
            <span className="font-semibold text-white">Client walkthrough and approval</span>
          </div>
          <div className="flex items-start gap-3">
            <Car className="w-5 h-5 text-teal-500 mt-1 flex-shrink-0" />
            <span className="font-semibold text-white">Care instructions and documentation</span>
          </div>
        </div>
      </div>
    ),
    description: "We conduct a comprehensive inspection and provide you with detailed care instructions to maintain your vehicle's new look."
  }
]

export function ProcessTimeline() {
  return (
    <section className="relative bg-premium-dark py-12 sm:py-24">
      <div className="absolute inset-0 -z-10">
        <SparklesCore
          id="tsparticlesfull"
          background="transparent"
          minSize={0.4}
          maxSize={1.0}
          particleDensity={50}
          className="w-full h-full"
          particleColor="#00bac5"
          speed={0.1}
        />
      </div>
      
      <div className="container mx-auto px-4">
        <SectionHeading className="text-white">Our Process</SectionHeading>
        <p className="text-center text-gray-300 max-w-2xl mx-auto mb-8 sm:mb-16 text-sm sm:text-base">
          Experience our streamlined approach to vehicle transformation, where every step is executed with precision and care.
        </p>
      </div>

      <div className="w-full">
        <Timeline data={timelineData} />
      </div>
      
      <div
        className="absolute left-0 right-0 top-0 -z-10 m-auto h-[200px] w-[200px] sm:h-[310px] sm:w-[310px] rounded-full bg-teal-500"
        style={{
          opacity: '0.1',
          filter: 'blur(7px)',
          background:
            'conic-gradient(from 90deg at 50% 50%, #00bac5 -60.49deg, #ee2b7c 59.93deg, #00bac5 299.51deg, #ee2b7c 419.93deg)',
        }}
      />
    </section>
  )
} 