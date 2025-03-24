"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRightIcon, Leaf, Globe, Droplets, Wind, Recycle, ChevronDown } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useRef } from "react";

interface InitiativeProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const Initiative = ({ icon, title, description, index }: InitiativeProps) => {
  return (
    <motion.div 
      className="relative group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent rounded-3xl blur-xl group-hover:opacity-75 transition-opacity opacity-0" />
      <div className="relative flex flex-col h-full p-8 rounded-3xl bg-black/40 border border-white/5 backdrop-blur-xl hover:border-primary/20 transition-colors">
        <div className="p-4 rounded-2xl bg-white/5 text-primary w-fit mb-6">
          {icon}
        </div>
        <h3 className="text-2xl font-semibold mb-4 bg-gradient-to-br from-white to-white/70 bg-clip-text text-transparent">{title}</h3>
        <p className="text-white/70 leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
};

const StatCard = ({ number, label }: { number: string; label: string }) => (
  <motion.div 
    className="flex flex-col items-center p-8 rounded-3xl bg-black/40 border border-white/5 backdrop-blur-xl"
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
  >
    <span className="text-5xl font-bold bg-gradient-to-r from-primary to-primary-foreground bg-clip-text text-transparent mb-2">
      {number}
    </span>
    <span className="text-white/70 text-center">{label}</span>
  </motion.div>
);

export function SustainabilityPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const initiatives = [
    {
      icon: <Leaf className="h-8 w-8" />,
      title: "Eco-Friendly Materials",
      description: "Our commitment to sustainability begins with our choice of materials. We use premium eco-conscious vinyl wraps that minimize environmental impact without compromising on quality."
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Zero Waste Initiative",
      description: "Through advanced cutting techniques and digital planning, we've achieved a remarkable reduction in material waste, setting new industry standards for efficiency."
    },
    {
      icon: <Droplets className="h-8 w-8" />,
      title: "Water Conservation",
      description: "Our innovative cleaning processes use 50% less water than traditional methods, while our eco-friendly products ensure zero harmful runoff into water systems."
    },
    {
      icon: <Wind className="h-8 w-8" />,
      title: "Energy Innovation",
      description: "Our facility operates on 100% renewable energy, utilizing smart LED systems and energy-efficient equipment to minimize our carbon footprint."
    },
    {
      icon: <Recycle className="h-8 w-8" />,
      title: "Circular Economy",
      description: "We've established partnerships with local recycling facilities to ensure 95% of our vinyl waste is properly recycled and repurposed."
    }
  ];

  return (
    <div ref={containerRef} className="bg-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <motion.div 
          style={{ y, opacity }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-primary/30 via-transparent to-black mix-blend-multiply z-10" />
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sustainability-hero-9Hs2Hs0Hs2Hs0Hs2Hs0.jpg"
            alt="Sustainability at Elite Wrappers"
            fill
            className="object-cover object-center brightness-75"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        </motion.div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 py-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <Badge variant="outline" className="mb-8 border-primary/40 bg-black/40 backdrop-blur-xl px-4 py-2 text-primary shadow-[0_0_15px_rgba(20,184,166,0.3)]">
              Environmental Leadership
            </Badge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-8 text-white [text-shadow:_0_2px_20px_rgba(0,0,0,0.5)]"
          >
            <span className="inline-block">Pioneering Sustainable</span>
            <br />
            <span className="inline-block">Vehicle Aesthetics</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-white/90 max-w-3xl mx-auto mb-12 leading-relaxed font-medium [text-shadow:_0_2px_10px_rgba(0,0,0,0.5)]"
          >
            Redefining the future of vehicle wrapping through innovative eco-conscious practices and cutting-edge sustainable technologies.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2"
          >
            <ChevronDown className="w-6 h-6 animate-bounce text-primary drop-shadow-lg" />
          </motion.div>
        </div>
      </section>

      {/* Sustainability Statement Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-primary/5 to-black opacity-30" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent opacity-40" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent opacity-40" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-white to-primary bg-clip-text text-transparent">
              Our Commitment to Sustainability
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="prose prose-lg prose-invert mx-auto"
          >
            <div className="space-y-6 text-white/80">
              <p className="text-xl leading-relaxed">
                At Elite Wrappers Sydney, we recognize that as a business dedicated to transforming fleets
                and vehicles with premium branding solutions, we have a responsibility to minimize our
                environmental impact. Our mission is to offer sustainable, high-performance fleet branding
                options that not only help our clients stand out on the road, but also contribute to a more
                sustainable future.
              </p>

              <div className="relative p-8 rounded-3xl bg-black/40 border border-white/5 backdrop-blur-xl my-12">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent rounded-3xl blur-xl opacity-30" />
                <div className="relative">
                  <h3 className="text-2xl font-semibold mb-4 bg-gradient-to-br from-white to-white/70 bg-clip-text text-transparent">
                    Innovative Materials: DPF V9700
                  </h3>
                  <p className="mb-4">
                    We are committed to reducing our carbon footprint by carefully selecting eco-friendly
                    products, such as Arlon's DPF V9700—a non-PVC cast polyurethane film that exemplifies our
                    dedication to sustainability. Manufactured using a water-based formulation, DPF
                    V9700 significantly reduces volatile organic compounds (VOCs) by 57.1% during production,
                    making it one of the most environmentally responsible options available in the market
                    today.
                  </p>
                  <ul className="space-y-2 list-none pl-0">
                    <li className="flex items-center gap-2">
                      <span className="text-primary">•</span>
                      High heat tolerance and enhanced structural stability
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-primary">•</span>
                      Minimizes material waste and rework needs
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-primary">•</span>
                      Reduces excess materials sent to landfills
                    </li>
                  </ul>
                </div>
              </div>

              <div className="space-y-6">
                <p>
                  Furthermore, the use of FLITE Technology ensures an easy, seamless installation process
                  with superior repositionability and a clean removal when the wrap reaches the end of its life
                  cycle. This innovation allows us to further our commitment to sustainability by facilitating
                  the reuse and recycling of materials whenever possible.
                </p>

                <p>
                  At Elite Wrappers Sydney, we believe that being environmentally responsible doesn't mean
                  sacrificing quality. Through the combination of cutting-edge technology and eco-friendly
                  materials, we are proud to offer a service that reflects our commitment to a cleaner,
                  greener future while helping our clients achieve visually striking and durable fleet branding
                  that lasts.
                </p>

                <p className="text-xl font-medium text-white">
                  Every project we complete not only represents a milestone in our clients'
                  branding journey but also a step forward in our collective commitment to reducing
                  environmental impact.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-32 overflow-hidden bg-gradient-to-b from-black via-black to-black">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent opacity-30" />
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <StatCard number="95%" label="Waste Materials Recycled" />
            <StatCard number="50%" label="Water Usage Reduction" />
            <StatCard number="100%" label="Renewable Energy" />
            <StatCard number="0" label="Harmful Chemical Usage" />
          </div>
        </div>
      </section>

      {/* Initiatives Section */}
      <section className="relative py-32">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-white to-primary bg-clip-text text-transparent">
              Our Sustainability Initiatives
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Pioneering eco-friendly practices that set new standards in the vehicle wrapping industry.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {initiatives.map((initiative, index) => (
              <Initiative 
                key={index}
                index={index}
                icon={initiative.icon}
                title={initiative.title}
                description={initiative.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-primary/5 to-black opacity-30" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent opacity-20" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative z-10"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-white to-primary bg-clip-text text-transparent">
              Join Our Sustainable Journey
            </h2>
            <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto">
              Partner with Elite Wrappers Sydney for premium vehicle aesthetics that respect and protect our environment.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
              Get Started Today
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 