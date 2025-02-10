"use client"

import { BentoGrid, BentoCard } from "@/components/ui/bento-grid"
import { GlobeIcon } from "@radix-ui/react-icons"
import { Tag, Wand2, Shield, Sparkles } from "lucide-react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

const features = [
  {
    name: "Premium Wraps",
    Icon: Sparkles,
    href: "/services?section=full-vehicle-wraps",
    description: "Elevate your vehicle with our premium wraps, offering unmatched quality and style.",
    cta: "View Premium Wraps",
    className: "lg:row-start-1 lg:row-end-3 lg:col-start-2 lg:col-end-3",
    background: (
      <div 
        className="absolute inset-0 bg-cover bg-center z-1"
        style={{ 
          backgroundImage: 'url("/premiumbento.png")'
        }}
      />
    ),
  },
  {
    Icon: Wand2,
    name: "Custom Designs",
    description: "Create unique, eye-catching designs for your vehicle.",
    href: "/services?section=custom-designs",
    cta: "Learn more",
    background: (
      <div 
        className="absolute inset-0 bg-cover bg-left z-1"
        style={{ 
          backgroundImage: 'url("/custom2.jpg")'
        }}
      />
    ),
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-2",
  },
  {
    Icon: Shield,
    name: "Paint Protection",
    description: "Shield your vehicle's paint from scratches and debris.",
    href: "/services?section=paint-protection-film",
    cta: "Learn more",
    background: (
      <div 
        className="absolute inset-0 bg-cover bg-top z-1"
        style={{ 
          backgroundImage: 'url("/ppf.jpg")'
        }}
      />
    ),
    className: "lg:col-start-3 lg:col-end-4 lg:row-start-1 lg:row-end-2",
  },
  {
    Icon: Tag,
    name: "Special Offer",
    description: "Get 10% off on full vehicle wraps this month.",
    href: "/contact?service=full-vehicle-wraps",
    cta: "Get Offer",
    specialOffer: true,
    background: (
      <div 
        className="absolute inset-0 bg-cover bg-center z-1"
        style={{ 
          backgroundImage: 'url("/sale.jpg")'
        }}
      />
    ),
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-2 lg:row-end-3",
  },
  {
    Icon: GlobeIcon,
    name: "Professional Team",
    description: "Expert installers with years of experience.",
    href: "/about",
    cta: "Meet the Team",
    background: (
      <div 
        className="absolute inset-0 bg-cover bg-center z-1"
        style={{ 
          backgroundImage: 'url("/team.jpg")'
        }}
      />
    ),
    className: "lg:col-start-3 lg:col-end-4 lg:row-start-2 lg:row-end-3",
  },
]

export function BentoFeatures() {
  return (
    <section className="relative bg-black py-24">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 1,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <BentoGrid className="px-2 md:px-0">
            {features.map((feature, index) => (
              <BentoCard 
                key={feature.name} 
                {...feature} 
                specialOffer={feature.specialOffer}
                className={cn(
                  feature.className,
                  "min-h-[200px] md:min-h-[250px]"
                )} 
              />
            ))}
          </BentoGrid>
        </motion.div>
      </div>
    </section>
  )
} 