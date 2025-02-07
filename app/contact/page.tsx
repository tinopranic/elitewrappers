"use client"

import React, { useEffect, Suspense } from "react"
import { WavyBackground } from "@/components/ui/wavy-background"
import { ContactForm } from "@/components/sections/ContactForm"
import { MapPin, Phone, Mail, Instagram, Facebook } from "lucide-react"
import { useSearchParams } from "next/navigation"
import { SparklesCore } from "@/components/ui/sparkles"

function ContactFormWithParams() {
  const searchParams = useSearchParams()
  const service = searchParams.get("service")
  const plan = searchParams.get("plan")

  return (
    <ContactForm defaultService={service} defaultPlan={plan} />
  )
}

function ScrollHandler() {
  const searchParams = useSearchParams()

  useEffect(() => {
    const shouldScroll = searchParams.get("scroll") === "contact-form"
    if (shouldScroll || searchParams.has("service") || searchParams.has("plan")) {
      const contactForm = document.getElementById("contact-form")
      if (contactForm) {
        const yOffset = -100
        const y = contactForm.getBoundingClientRect().top + window.pageYOffset + yOffset
        window.scrollTo({ top: y, behavior: "smooth" })
      }
    }
  }, [searchParams])

  return null
}

export default function ContactPage() {
  return (
    <>
      <Suspense fallback={null}>
        <ScrollHandler />
      </Suspense>

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <WavyBackground
          colors={["#14B8A6", "#EC4899", "#14B8A6", "#EC4899", "#14B8A6"]}
          waveWidth={100}
          backgroundFill="black"
          blur={5}
          speed="slow"
          waveOpacity={0.5}
          containerClassName="min-h-screen flex items-center bg-black"
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
                    <MapPin className="h-6 w-6 text-teal-400" />
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
                    <Phone className="h-6 w-6 text-pink-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">Call Us</h3>
                  <p className="text-gray-300">
                    <a href="tel:+61247616929" className="hover:text-teal-400 transition-colors">
                      Phone: (02) 4761 6929
                    </a>
                  </p>
                </div>
              </div>

              {/* Email Us Card */}
              <div className="group relative overflow-hidden rounded-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-pink-500/10 backdrop-blur-md border border-white/10" />
                <div className="relative p-8 text-center">
                  <div className="mb-4 inline-block rounded-full bg-teal-500/10 p-3">
                    <Mail className="h-6 w-6 text-teal-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">Email Us</h3>
                  <div className="text-gray-300">
                    <a 
                      href="mailto:getwrapped@elitewrappers.com.au" 
                      className="hover:text-teal-400 transition-colors break-words"
                    >
                      getwrapped@
                      <br />
                      elitewrappers.com.au
                    </a>
                  </div>
                </div>
              </div>

              {/* Visit Our Socials Card */}
              <div className="group relative overflow-hidden rounded-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-pink-500/10 backdrop-blur-md border border-white/10" />
                <div className="relative p-8 text-center">
                  <div className="mb-4 inline-block rounded-full bg-pink-500/10 p-3">
                    <Instagram className="h-6 w-6 text-pink-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">Visit Our Socials</h3>
                  <div className="flex flex-col space-y-4">
                    <a
                      href="https://www.instagram.com/elitewrapperssydney/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-pink-400 transition-colors flex items-center justify-center gap-2"
                    >
                      <Instagram className="h-5 w-5" />
                      <span>@elitewrapperssydney</span>
                    </a>
                    <a
                      href="https://www.facebook.com/elitewrapperssydney/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-blue-400 transition-colors flex items-center justify-center gap-2"
                    >
                      <Facebook className="h-5 w-5" />
                      <span>Elite Wrappers Sydney</span>
                    </a>
                    <a
                      href="https://www.tiktok.com/@elitewrapperssydney"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-[#00f2ea] transition-colors flex items-center justify-center gap-2"
                    >
                      <svg
                        fill="currentColor"
                        className="h-5 w-5"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.687a8.182 8.182 0 0 0 4.773 1.526V6.79a4.831 4.831 0 0 1-1.003-.104z" />
                      </svg>
                      <span>@elitewrapperssydney</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </WavyBackground>
      </div>

      {/* Contact Form Section */}
      <div id="contact-form">
        <Suspense fallback={<div>Loading form...</div>}>
          <ContactFormWithParams />
        </Suspense>
      </div>

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

      <div className="absolute inset-0 -z-10">
        <SparklesCore
          id="tsparticlesfull"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#00bac5"
          speed={0.1}
        />
      </div>

      <div
        className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-teal-500"
        style={{
          opacity: '0.1',
          filter: 'blur(7px)',
          background:
            'conic-gradient(from 90deg at 50% 50%, #00bac5 -60.49deg, #ee2b7c 59.93deg, #00bac5 299.51deg, #ee2b7c 419.93deg)',
        }}
      />
    </>
  )
}

