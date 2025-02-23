"use client"

import React, { useEffect, useState } from "react"
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials"
import { SectionHeading } from "@/components/ui/section-heading"
import Link from "next/link"

interface GoogleReview {
  quote: string
  name: string
  designation: string
  rating: number
  time: number
}

const fallbackTestimonials = [
  {
    quote: "Absolutely amazing work! Had my car wrapped in satin black and it looks incredible. The attention to detail is second to none. Highly recommend Elite Wrappers to anyone looking to get their car wrapped.",
    name: "Liam Huynh",
    designation: "5 ★",
    src: "/google1.png"
  },
  {
    quote: "Elite Wrappers did an amazing job on my car. The quality of work is outstanding and the service was great. They took the time to explain everything and made sure I was happy with the result. Would definitely recommend!",
    name: "Jai Sharma",
    designation: "5 ★",
    src: "/google1.png"
  },
  {
    quote: "Had my car wrapped in Satin Ghost Flip and it looks absolutely amazing! The team at Elite Wrappers are very professional and their attention to detail is second to none. Very happy with the end result.",
    name: "Lachlan Mcdonald",
    designation: "5 ★",
    src: "/google1.png"
  },
  {
    quote: "Great service and quality work. Had my car wrapped in XPEL PPF and ceramic coated. The team was very professional and kept me updated throughout the process. The end result exceeded my expectations.",
    name: "Daniel Lee",
    designation: "5 ★",
    src: "/google1.png"
  },
  {
    quote: "Had my Tesla wrapped in XPEL Stealth PPF and it looks amazing. The team at Elite Wrappers are very professional and their work is top notch. Would highly recommend them to anyone looking to protect their car.",
    name: "Michael Chen",
    designation: "5 ★",
    src: "/google1.png"
  }
]

export function Testimonials() {
  const [testimonials, setTestimonials] = useState(fallbackTestimonials)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchReviews() {
      try {
        const response = await fetch('/api/reviews')
        const data = await response.json()

        if (!response.ok) {
          throw new Error(data.error || 'Failed to fetch reviews')
        }

        if (!data.success) {
          throw new Error(data.error || 'Failed to fetch reviews')
        }

        // Map the reviews and add the Google logo
        const reviewsWithLogo = data.data.map((review: GoogleReview) => ({
          quote: review.quote,
          name: review.name,
          designation: `${review.rating} ★`,
          src: "/google1.png"
        }))

        setTestimonials(reviewsWithLogo)
        setError(null)
      } catch (err) {
        console.error('Error fetching reviews:', err)
        setError('Failed to load reviews')
        // Keep using fallback testimonials
      } finally {
        setLoading(false)
      }
    }

    fetchReviews()
  }, [])

  return (
    <section className="py-24 bg-premium-gradient text-white">
      <div className="container mx-auto px-4">
        <SectionHeading>
          What Our Customers Say
        </SectionHeading>
        
        {loading ? (
          <div className="flex justify-center items-center min-h-[200px]">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-teal-500"></div>
          </div>
        ) : error ? (
          <div className="text-center text-gray-400">
            <p>{error}</p>
            <AnimatedTestimonials testimonials={fallbackTestimonials} autoplay={true} />
          </div>
        ) : (
          <>
            <AnimatedTestimonials testimonials={testimonials} autoplay={true} />
            <div className="mt-8 text-center">
              <Link
                href="https://www.google.com/maps/place/Elite+Wrappers+Sydney"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-400 hover:text-teal-300 transition-colors"
              >
                View all reviews on Google
              </Link>
            </div>
          </>
        )}
      </div>
    </section>
  )
}

