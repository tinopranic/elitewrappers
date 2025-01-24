"use client"

import React from "react"
import { WavyBackground } from "@/components/ui/wavy-background"
import { ContactForm } from "@/components/sections/ContactForm"

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <WavyBackground
        colors={["#14B8A6", "#EC4899", "#14B8A6", "#EC4899", "#14B8A6"]}
        waveWidth={100}
        backgroundFill="black"
        blur={5}
        speed="slow"
        waveOpacity={0.5}
        className="w-full"
      >
        <div className="container mx-auto px-4 pt-40 pb-24">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Contact Us</h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Get in touch with our team to learn more about how we can transform your vehicle with our premium wrapping
              services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {/* Visit Us Card */}
            <div className="group relative overflow-hidden rounded-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-pink-500/10 backdrop-blur-md border border-white/10" />
              <div className="relative p-8 text-center">
                <div className="mb-4 inline-block rounded-full bg-teal-500/10 p-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-teal-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 21.9a1.998 1.998 0 01-2.827 0l-4.244-5.253a2 2 0 010-2.828l4.244-5.253a1.998 1.998 0 012.827 0l4.244 5.253a2 2 0 010 2.828z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Visit Us</h3>
                <p className="text-gray-300">
                  <a
                    href="https://goo.gl/maps/8Z1Z2Z1Z2Z1Z2Z1Z2"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-teal-400 transition-colors"
                  >
                    Unit 1/16 Hickeys Rd
                    <br />
                    Penrith NSW 2750
                    <br />
                    Australia
                  </a>
                </p>
              </div>
            </div>

            {/* Call Us Card */}
            <div className="group relative overflow-hidden rounded-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-pink-500/10 backdrop-blur-md border border-white/10" />
              <div className="relative p-8 text-center">
                <div className="mb-4 inline-block rounded-full bg-pink-500/10 p-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-pink-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-1.498 4.493A1 1 0 017.28 19H5a2 2 0 01-2-2V7z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Call Us</h3>
                <p className="text-gray-300">
                  <a href="tel:+61247891000" className="hover:text-teal-400 transition-colors">
                    Phone: (02) 4789 1000
                  </a>
                </p>
              </div>
            </div>

            {/* Email Us Card */}
            <div className="group relative overflow-hidden rounded-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-pink-500/10 backdrop-blur-md border border-white/10" />
              <div className="relative p-8 text-center">
                <div className="mb-4 inline-block rounded-full bg-teal-500/10 p-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-teal-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M4.688 14.316A48.36 48.36 0 0112 12c2.487 0 4.756.437 7.031 1.217l-.497-1.493a1 1 0 00-1.976 0l-.497 1.493A48.36 48.36 0 0112 12a48.36 48.36 0 01-7.312 2.316z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Email Us</h3>
                <div className="text-gray-300 space-y-2">
                  <p>
                    <a href="mailto:getwrapped@elitewrappers.com" className="hover:text-teal-400 transition-colors">
                      General: getwrapped@elitewrappers.com
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Visit Our Socials Card */}
            <div className="group relative overflow-hidden rounded-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-pink-500/10 backdrop-blur-md border border-white/10" />
              <div className="relative p-8 text-center">
                <div className="mb-4 inline-block rounded-full bg-teal-500/10 p-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-pink-400"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.5 17.5v-6h-5v6h5v-3.5c0-2.209-1.791-4-4-4s-4 1.791-4 4v3.5h-3v-3.5c0-1.561.781-2.999 2-3.999v-1h-2v1c-1.219.999-2 2.438-2 4v3.5h-3v-6h5v6h3z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Visit Our Socials</h3>
                <a
                  href="https://www.instagram.com/elitewrapperssydney/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-teal-400 transition-colors"
                >
                  @elitewrapperssydney
                </a>
              </div>
            </div>
          </div>
        </div>
      </WavyBackground>

      {/* Contact Form Section */}
      <ContactForm />

      {/* Map Section */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Find Us</h2>
              <p className="text-lg text-gray-600">
                Visit our workshop in Penrith, where we transform vehicles with premium wrapping services
              </p>
            </div>
            <div className="rounded-xl overflow-hidden shadow-2xl">
              <div className="h-[400px] md:h-[500px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3311.5600075778184!2d150.70206087677598!3d-33.74300193326701!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b1285abb8daa685%3A0xbe388cdff1cd604e!2sElite%20Wrappers%20Sydney!5e0!3m2!1sen!2sau!4v1706160867843!5m2!1sen!2sau"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

