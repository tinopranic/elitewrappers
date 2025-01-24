"use client"

import React, { useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { WavyBackground } from "@/components/ui/wavy-background"
import { ScrollVelocity } from "@/components/ui/scroll-velocity"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Car, Shield, Paintbrush, Truck, FileText, Zap } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal"
import { Pricing } from "@/components/blocks/pricing"
import { FadeInHeading } from "@/components/ui/fade-in-heading"

const services = [
  {
    icon: Car,
    title: "Full Vehicle Wraps",
    description: "Transform your entire vehicle with a custom wrap.",
    details:
      "Our full vehicle wraps offer complete transformation, allowing you to change your car's color or add intricate designs across the entire surface.",
    id: "full-vehicle-wraps",
  },
  {
    icon: Shield,
    title: "Paint Protection Film",
    description: "Shield your vehicle's paint from scratches and debris.",
    details:
      "Our paint protection films provide an invisible shield against road debris, stone chips, and minor scratches, preserving your vehicle's finish and resale value.",
    id: "paint-protection-film",
  },
  {
    icon: Paintbrush,
    title: "Custom Designs",
    description: "Create unique, eye-catching designs for your vehicle.",
    details:
      "Our design team works closely with you to create custom graphics, patterns, or branding that make your vehicle truly one-of-a-kind.",
    id: "custom-designs",
  },
  {
    icon: Truck,
    title: "Commercial Vehicle Wraps",
    description: "Turn your fleet into moving billboards.",
    details:
      "Transform your commercial vehicles into powerful marketing tools with high-quality, durable wraps that showcase your brand wherever you go.",
    id: "commercial-vehicle-wraps",
  },
  {
    icon: FileText,
    title: "Signage Solutions",
    description: "Create impactful business signage.",
    details:
      "From storefront signs to trade show displays, our signage solutions help your business make a lasting impression with durable materials and vibrant printing techniques.",
    id: "signage-solutions",
  },
  {
    icon: Zap,
    title: "Ceramic Coating",
    description: "Long-lasting protection and shine for your vehicle.",
    details:
      "Our ceramic coating service provides a durable, hydrophobic layer that protects your vehicle's paint from environmental contaminants and makes cleaning easier.",
    id: "ceramic-coating",
  },
]

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

export default function ServicesPage() {
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

  return (
    <>
      <WavyBackground className="max-w-4xl mx-auto pb-40">
        <div className="container mx-auto px-4 pt-40 pb-24">
          <FadeInHeading as="h1" className="text-5xl md:text-6xl font-bold text-center text-white mb-6">
            Our Services
          </FadeInHeading>
          <p className="text-xl text-center text-gray-300 max-w-2xl mx-auto">
            Discover our range of premium vehicle wrapping and protection services designed to transform and safeguard
            your vehicle.
          </p>
        </div>
      </WavyBackground>

      {services.map((service, index) => (
        <section key={index} id={service.id} className={`py-20 ${index % 2 === 0 ? "bg-black" : "bg-gray-900"}`}>
          <div className="container mx-auto px-4">
            <div
              className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-center justify-between`}
            >
              <div className="md:w-1/2 mb-8 md:mb-0">
                <service.icon className="w-16 h-16 text-teal-400 mb-6" />
                <FadeInHeading as="h2" className="text-3xl font-bold text-white mb-4">
                  {service.title}
                </FadeInHeading>
                <p className="text-xl text-gray-300 mb-6">{service.description}</p>
                <p className="text-gray-400">{service.details}</p>
              </div>
              <div className="md:w-1/2">
                <Image
                  src="/placeholder.svg"
                  alt={service.title}
                  width={500}
                  height={300}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <FadeInHeading className="text-4xl font-bold text-center text-white mb-12">Our Process</FadeInHeading>
          <StickyScroll
            content={[
              {
                title: "Consultation",
                description:
                  "We start with a detailed consultation to understand your vision and requirements for your vehicle.",
                content: (
                  <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
                    Consultation
                  </div>
                ),
              },
              {
                title: "Design",
                description:
                  "Our expert designers create custom designs tailored to your preferences and vehicle specifications.",
                content: (
                  <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--pink-500),var(--indigo-500))] flex items-center justify-center text-white">
                    Design
                  </div>
                ),
              },
              {
                title: "Preparation",
                description:
                  "We meticulously clean and prepare your vehicle to ensure the best possible application of wraps or treatments.",
                content: (
                  <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
                    Preparation
                  </div>
                ),
              },
              {
                title: "Application",
                description:
                  "Our skilled technicians apply the wrap or treatment with precision, ensuring a flawless finish.",
                content: (
                  <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
                    Application
                  </div>
                ),
              },
              {
                title: "Quality Check",
                description: "We perform a thorough quality check to ensure every detail meets our high standards.",
                content: (
                  <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--pink-500),var(--indigo-500))] flex items-center justify-center text-white">
                    Quality Check
                  </div>
                ),
              },
              {
                title: "Delivery",
                description:
                  "We deliver your transformed vehicle, providing care instructions to maintain its new look.",
                content: (
                  <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
                    Delivery
                  </div>
                ),
              },
            ]}
          />
        </div>
      </section>

      <Pricing
        plans={pricingPlans}
        title="Our Pricing Plans"
        description="Choose the perfect package for your vehicle transformation"
      />

      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <FadeInHeading className="text-4xl font-bold text-center text-white mb-12">
            Frequently Asked Questions
          </FadeInHeading>
          <Accordion type="single" collapsible className="w-full max-w-2xl mx-auto">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-800">
                <AccordionTrigger className="text-white hover:text-teal-400">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-gray-400">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4 text-center">
          <FadeInHeading className="text-4xl font-bold text-white mb-8">Ready to Transform Your Vehicle?</FadeInHeading>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Contact us today to discuss your project and get a custom quote for your vehicle transformation.
          </p>
          <Button asChild size="lg" className="bg-teal-500 hover:bg-teal-600 text-white">
            <Link href="/contact">Get a Quote</Link>
          </Button>
        </div>
      </section>

      <section className="py-16 bg-black relative">
        <div className="relative z-10">
          <div className="container mx-auto px-4">
            <FadeInHeading className="text-4xl font-bold text-center text-white mb-12">Our Partners</FadeInHeading>
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
    </>
  )
}

