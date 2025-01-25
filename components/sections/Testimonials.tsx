"use client"

import React from "react"
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials"
import { SectionHeading } from "@/components/ui/section-heading"

const testimonials = [
  {
    quote: "Elite Wrappers transformed my car into a work of art. The attention to detail is incredible!",
    name: "John Doe",
    designation: "Car Enthusiast",
    src: "/placeholder.svg",
  },
  {
    quote: "Professional service and outstanding results. My business van looks better than ever!",
    name: "Jane Smith",
    designation: "Business Owner",
    src: "/placeholder.svg",
  },
  {
    quote: "I couldn't be happier with my new car wrap. It's exactly what I wanted and more!",
    name: "Mike Johnson",
    designation: "Sports Car Owner",
    src: "/placeholder.svg",
  },
  {
    quote: "The team at Elite Wrappers are true professionals. They made my vision a reality!",
    name: "Sarah Lee",
    designation: "Luxury Car Owner",
    src: "/placeholder.svg",
  },
  {
    quote: "Exceptional quality and service. My fleet has never looked better. Highly recommended!",
    name: "David Brown",
    designation: "Fleet Manager",
    src: "/placeholder.svg",
  },
]

export function Testimonials() {
  return (
    <section className="py-24 bg-black text-white">
      <div className="container mx-auto px-4">
        <SectionHeading>
          What Our Customers Say
        </SectionHeading>
        <AnimatedTestimonials testimonials={testimonials} autoplay={true} />
      </div>
    </section>
  )
}

