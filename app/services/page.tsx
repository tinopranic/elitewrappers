"use client"

import React, { useEffect, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import { WavyBackground } from "@/components/ui/wavy-background"
import { ScrollVelocity } from "@/components/ui/scroll-velocity"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Car, Shield, Paintbrush, Truck, FileText, Zap } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Pricing } from "@/components/blocks/pricing"
import { FadeInHeading } from "@/components/ui/fade-in-heading"
import { SectionHeading } from "@/components/ui/section-heading"
import { motion } from "framer-motion"
import { services } from "@/config/services"
import { SparklesCore } from "@/components/ui/sparkles"

const faqs = [
  {
    question: "How long does a vehicle wrap last?",
    answer: "A high-quality vehicle wrap can last 5-7 years with proper care and maintenance.",
  },
  {
    question: "Will a wrap damage my vehicle's paint?",
    answer:
      "No, when applied and removed correctly by professionals, a wrap will not damage your vehicle's paint. In fact, it can help protect the paint from minor scratches and sun damage.",
  },
  {
    question: "Can I wash my wrapped vehicle?",
    answer:
      "Yes, you can wash your wrapped vehicle. We recommend hand washing or using a touchless car wash. Avoid high-pressure washers and harsh chemicals.",
  },
  {
    question: "How long does the wrapping process take?",
    answer:
      "The wrapping process typically takes 3-5 days, depending on the complexity of the design and the size of the vehicle.",
  },
]

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

const pricingPlans = [
  {
    name: "Basic Wrap",
    price: "3500",
    period: "per vehicle",
    features: ["Full vehicle wrap", "Single color", "3-year warranty", "Professional installation"],
    description: "Perfect for simple, single-color wraps",
    buttonText: "Get Started",
    href: "/contact",
    isPopular: false,
  },
  {
    name: "Premium Wrap",
    price: "4900",
    period: "per vehicle",
    features: [
      "Full vehicle wrap",
      "Custom design",
      "5-year warranty",
      "Professional installation",
      "Paint protection film on high-impact areas",
    ],
    description: "Ideal for custom designs and added protection",
    buttonText: "Choose Premium",
    href: "/contact",
    isPopular: true,
  },
  {
    name: "Elite Package",
    price: "7000",
    period: "per vehicle",
    features: [
      "Full vehicle wrap",
      "Premium vinyl with color-shifting options",
      "Custom design with graphics",
      "7-year warranty",
      "Full paint protection film",
      "Ceramic coating",
    ],
    description: "The ultimate vehicle transformation",
    buttonText: "Go Elite",
    href: "/contact",
    isPopular: false,
  },
]

function ScrollToSection() {
  const searchParams = useSearchParams()

  useEffect(() => {
    const hash = searchParams.get("section")
    if (hash) {
      const element = document.getElementById(hash)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }
  }, [searchParams])

  return null
}

export default function ServicesPage() {
  return (
    <div className="relative min-h-screen bg-black" role="main">
      {/* Hero Section */}
      <section aria-label="Services Introduction" className="relative">
        <WavyBackground
          colors={["#14B8A6", "#EC4899", "#14B8A6"]}
          waveWidth={100}
          backgroundFill="black"
          blur={5}
          speed="slow"
          waveOpacity={0.5}
          className="h-[60vh] md:h-[70vh] flex items-center"
        >
          <div className="relative z-10 container mx-auto px-4">
            <div className="max-w-3xl">
              <motion.h1 
                className="text-3xl sm:text-4xl md:text-7xl font-bold text-white mb-4 md:mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Our Services
              </motion.h1>
              <motion.p 
                className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Premium vehicle transformation services tailored to your vision
              </motion.p>
            </div>
          </div>
        </WavyBackground>
      </section>

      {/* Services Grid */}
      <section aria-label="Services Details" className="relative">
        <div className="absolute inset-0 -z-10" aria-hidden="true">
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

        <div className="container mx-auto px-4 py-12 md:py-24">
          <div className="grid gap-8 md:gap-12">
            {services.map((service, index) => (
              <motion.article
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true, margin: "-100px" }}
                className="relative"
                aria-labelledby={`service-heading-${service.id}`}
              >
                <div className={`grid md:grid-cols-2 gap-6 md:gap-8 items-start md:items-center ${
                  index % 2 === 0 ? 'md:grid-flow-row' : 'md:grid-flow-row-dense'
                }`}>
                  {/* Content */}
                  <div className={`space-y-4 md:space-y-6 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                    <header className="inline-flex items-center gap-3 text-teal-400">
                      <service.icon className="w-6 h-6 md:w-8 md:h-8" aria-hidden="true" />
                      <h2 id={`service-heading-${service.id}`} className="text-2xl md:text-3xl font-bold text-white">
                        {service.label}
                      </h2>
                    </header>
                    <p className="text-base md:text-lg text-gray-400">{service.description}</p>
                    <div className="prose prose-invert max-w-none">
                      {service.content.split('\n\n').map((paragraph, i) => (
                        <p key={i} className="text-sm md:text-base text-gray-300 leading-relaxed">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                    <div className="pt-4">
                      <Link
                        href={`/contact?service=${service.id}`}
                        className="inline-flex items-center justify-center px-6 md:px-8 py-2.5 md:py-3 text-sm font-medium text-white bg-gradient-to-r from-teal-500 to-pink-500 rounded-full hover:from-teal-600 hover:to-pink-600 transition-all duration-300"
                        aria-label={`Get started with ${service.label}`}
                      >
                        Get Started
                      </Link>
                    </div>
                  </div>

                  {/* Images */}
                  <div className="grid grid-cols-2 gap-3 md:gap-4 relative mt-6 md:mt-0" role="presentation" aria-label={`${service.label} gallery`}>
                    <div className="col-span-2">
                      <div className="relative aspect-[16/9] rounded-lg md:rounded-xl overflow-hidden">
                        <Image
                          src={service.images[0]}
                          alt={`${service.label} showcase`}
                          fill
                          className="object-cover hover:scale-105 transition-transform duration-500"
                          sizes="(max-width: 768px) 100vw, 50vw"
                          priority={index === 0}
                          quality={85}
                        />
                      </div>
                    </div>
                    <div className="relative aspect-[4/3] rounded-lg md:rounded-xl overflow-hidden">
                      <Image
                        src={service.images[1]}
                        alt={`${service.label} detail view 1`}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 50vw, 25vw"
                        quality={85}
                      />
                    </div>
                    <div className="relative aspect-[4/3] rounded-lg md:rounded-xl overflow-hidden">
                      <Image
                        src={service.images[2]}
                        alt={`${service.label} detail view 2`}
                        fill
                        className={`object-cover hover:scale-105 transition-transform duration-500 ${
                          service.images[2] === "/premium.jpg" ? "object-top" : "object-center"
                        }`}
                        sizes="(max-width: 768px) 50vw, 25vw"
                        quality={85}
                      />
                    </div>
                  </div>
                </div>

                {/* Separator */}
                {index !== services.length - 1 && (
                  <div className="my-8 md:my-16 w-full h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent" role="separator" aria-hidden="true" />
                )}
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-black text-white" aria-labelledby="faq-heading">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <header className="text-center mb-8 md:mb-12">
              <h2 id="faq-heading" className="text-3xl md:text-4xl font-bold mb-3 md:mb-4">Frequently Asked Questions</h2>
              <p className="text-base md:text-lg text-gray-400">Find answers to common questions about our services.</p>
            </header>
            <div className="grid gap-4 md:gap-6" role="region" aria-label="FAQ Accordion">
              {faqs.map((faq, index) => (
                <Accordion key={index} type="single" collapsible>
                  <AccordionItem value={`item-${index}`}>
                    <AccordionTrigger className="text-left text-sm md:text-base">{faq.question}</AccordionTrigger>
                    <AccordionContent className="text-sm md:text-base">{faq.answer}</AccordionContent>
                  </AccordionItem>
                </Accordion>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-12 md:py-16 bg-black relative" aria-labelledby="partners-heading">
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-b from-transparent via-black to-black opacity-90" aria-hidden="true"></div>
        <div className="relative z-10">
          <div className="container mx-auto px-4">
            <div className="relative">
              <h2 id="partners-heading" className="text-3xl md:text-4xl font-bold text-center text-white mb-8 md:mb-12">Our Partners</h2>
            </div>
            <div className="w-full overflow-hidden" role="region" aria-label="Partner logos carousel">
              <ScrollVelocity velocity={3} className="mb-4">
                {partnerImages.map(({ name, logo }) => (
                  <div key={name} className="relative h-12 w-24 md:h-20 md:w-40 xl:h-24 xl:w-48 mx-4 md:mx-8">
                    <Image
                      src={logo || "/placeholder.svg"}
                      alt={`${name} logo`}
                      fill
                      sizes="(max-width: 768px) 96px, (max-width: 1200px) 160px, 192px"
                      className="h-full w-full object-contain object-center"
                      loading="lazy"
                      quality={85}
                    />
                  </div>
                ))}
              </ScrollVelocity>
              <ScrollVelocity velocity={-3}>
                {[...partnerImages].reverse().map(({ name, logo }) => (
                  <div key={`reverse-${name}`} className="relative h-12 w-24 md:h-20 md:w-40 xl:h-24 xl:w-48 mx-4 md:mx-8">
                    <Image
                      src={logo || "/placeholder.svg"}
                      alt={`${name} logo`}
                      fill
                      sizes="(max-width: 768px) 96px, (max-width: 1200px) 160px, 192px"
                      className="h-full w-full object-contain object-center"
                      loading="lazy"
                      quality={85}
                    />
                  </div>
                ))}
              </ScrollVelocity>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

