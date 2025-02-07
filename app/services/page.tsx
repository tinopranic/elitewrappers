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

const services = [
  {
    icon: Car,
    title: "Full Vehicle Wraps",
    description: "Transform your vehicle's appearance completely with our premium vinyl wrapping solutions.",
    details:
      "Our full vehicle wraps offer a complete transformation of your vehicle's exterior. Using top-quality vinyl from leading manufacturers like 3M, Avery, and XPEL, we can change your car's color, add custom designs, or create a unique textured finish. Our wraps not only enhance aesthetics but also protect your original paint, maintaining your vehicle's resale value. With a durability of 5-7 years and a wide range of finishes including matte, gloss, satin, chrome, and color-shifting options, the possibilities are endless.",
    id: "full-vehicle-wraps",
  },
  {
    icon: Truck,
    title: "Trailer Signage",
    description: "Professional signage and wrapping solutions for commercial trailers and trucks.",
    details:
      "Our trailer signage service is specifically designed for commercial fleet operators and businesses with transport needs. We provide high-quality, durable wraps and signage solutions for trailers of all sizes, from small cargo trailers to full-size semi-trailers. Using commercial-grade materials that withstand harsh weather conditions and frequent use, we ensure your branding remains vibrant and professional. Our solutions include full trailer wraps, partial wraps, DOT compliance lettering, and reflective safety markings. Each project is custom-designed to maximize visibility and impact while meeting all industry regulations.",
    id: "trailer-signage",
  },
  {
    icon: Shield,
    title: "Paint Protection Film",
    description: "Preserve your vehicle's pristine appearance with our advanced protection solutions.",
    details:
      "Our paint protection films provide an invisible shield that safeguards your vehicle's paint from road debris, stone chips, scratches, and environmental damage. We use XPEL's industry-leading self-healing film technology, which automatically repairs minor scratches and swirl marks when exposed to heat. The film is virtually invisible once applied and comes with a multi year warranty. We cover high-impact areas like the hood, fenders, mirrors, and door edges, or can apply full-body protection for maximum preservation of your vehicle's finish.",
    id: "paint-protection-film",
  },
  {
    icon: Paintbrush,
    title: "Custom Designs",
    description: "Stand out from the crowd with personalized vehicle graphics and unique design elements.",
    details:
      "Our custom design service combines artistic creativity with technical expertise to create truly unique vehicle appearances. Our in-house design team works closely with you to develop concepts that match your vision, whether it's subtle accents or bold statements. We utilize advanced digital design tools to create precise mockups, allowing you to visualize the final result before application. From racing stripes and custom graphics to complete artistic wraps, we can transform your ideas into reality while ensuring perfect execution and longevity.",
    id: "custom-designs",
  },
  {
    icon: Truck,
    title: "Commercial Vehicle Wraps",
    description: "Transform your fleet into powerful mobile advertising platforms that capture attention.",
    details:
      "Our commercial wrapping solutions turn your vehicles into effective marketing tools that generate thousands of daily impressions. We handle everything from single vehicles to entire fleets, ensuring consistent branding across all units. Our commercial-grade vinyl materials are specifically chosen for durability and weather resistance, maintaining your professional image in all conditions. We work with your existing branding guidelines or can help develop new designs that maximize visibility and impact. All installations are precisely measured and professionally applied to ensure your message looks perfect from every angle.",
    id: "commercial-vehicle-wraps",
  },
  {
    icon: FileText,
    title: "Signage Solutions",
    description: "Create impactful business signage that enhances your brand presence and visibility.",
    details:
      "Our signage solutions extend beyond vehicles to help establish your brand's physical presence. We create high-impact business signs, window graphics, wall wraps, and trade show displays using premium materials and advanced printing technology. Our team handles everything from design and production to professional installation, ensuring your signage not only looks outstanding but also withstands the test of time. Whether you need indoor or outdoor signage, we use weather-resistant materials and UV-protected inks to maintain vibrant colors and clarity for years.",
    id: "signage-solutions",
  },
  {
    icon: Zap,
    title: "Ceramic Coating",
    description: "Add an extra layer of protection and brilliant shine to your vehicle's exterior.",
    details:
      "Our ceramic coating service provides the ultimate in paint protection and aesthetic enhancement. This advanced nano-ceramic technology bonds with your vehicle's paint at a molecular level, creating a permanent protective layer that repels water, dirt, and contaminants. The coating enhances your paint's gloss and depth while making cleaning easier and reducing the need for waxing. With proper maintenance, our ceramic coatings can last up to 5 years, providing long-term protection against environmental damage, UV rays, and chemical contaminants while keeping your vehicle looking showroom-fresh.",
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
    <>
      <Suspense fallback={null}>
        <ScrollToSection />
      </Suspense>
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
              className={`flex flex-col ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } items-center justify-between gap-16`}
            >
              <div className="md:w-1/2">
                <FadeInHeading as="h2" className="text-3xl font-bold text-white mb-4">
                  {service.title}
                </FadeInHeading>
                <p className="text-xl text-gray-300 mb-6">{service.description}</p>
                <p className="text-gray-400">{service.details}</p>
              </div>
              <div className="md:w-1/2">
                <Image
                  src={
                    service.id === "paint-protection-film"
                      ? "/ppf.jpg"
                      : service.id === "custom-designs"
                      ? "/custom5.png"
                      : service.id === "commercial-vehicle-wraps"
                      ? "/commercial2.jpg"
                      : service.id === "trailer-signage"
                      ? "/trailer1.png"
                      : service.id === "full-vehicle-wraps"
                      ? "/custom1.jpg"
                      : service.id === "ceramic-coating"
                      ? "/ceramic.jpg"
                      : service.id === "signage-solutions"
                      ? "/commercial1.jpg"
                      : "/placeholder.svg"
                  }
                  alt={`${service.title} - ${service.description}`}
                  width={500}
                  height={300}
                  className="rounded-lg shadow-lg object-cover w-full"
                  loading={index === 0 ? "eager" : "lazy"}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  quality={85}
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRseHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/2wBDAR4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                />
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="py-24 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-lg text-gray-400">Find answers to common questions about our services.</p>
            </div>
            <div className="grid gap-6">
              {faqs.map((faq, index) => (
                <Accordion key={index} type="single" collapsible>
                  <AccordionItem value={`item-${index}`}>
                    <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                    <AccordionContent>{faq.answer}</AccordionContent>
                  </AccordionItem>
                </Accordion>
              ))}
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
                      loading="lazy"
                      quality={85}
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
    </>
  )
}

