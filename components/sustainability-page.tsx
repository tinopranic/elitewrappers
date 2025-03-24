"use client";

import * as React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { Button } from "./ui/button";
import {
  Leaf,
  Droplets,
  Wind,
  Recycle,
  TreePine,
  ChevronDown,
  ArrowRight,
  Globe,
} from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const ImpactCard = ({ title, value, description }: { 
  title: string; 
  value: string; 
  description: string;
}) => (
  <motion.div 
    className="relative overflow-hidden group"
    whileHover={{ y: -5 }}
    transition={{ duration: 0.2 }}
  >
    <div className="bg-black/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-pink-500/20 h-full">
      <div className="space-y-2">
        <h3 className="text-lg font-medium text-pink-500">{title}</h3>
        <p className="text-5xl font-bold text-teal-500">
          {value}
        </p>
        <p className="text-white mt-2">{description}</p>
      </div>
    </div>
  </motion.div>
);

const InitiativeCard = ({ 
  icon: Icon, 
  title, 
  description 
}: { 
  icon: React.ElementType; 
  title: string; 
  description: string;
}) => (
  <motion.div 
    className="group relative h-full"
    whileHover={{ y: -5 }}
    transition={{ duration: 0.2 }}
  >
    <div className="relative overflow-hidden rounded-2xl bg-black/80 backdrop-blur-sm p-8 shadow-lg border border-pink-500/20 h-full flex flex-col">
      <div className="absolute top-0 right-0 -mt-4 -mr-4 h-24 w-24 rounded-full bg-pink-500/10 blur-2xl transform group-hover:scale-150 transition-transform duration-500" />
      <div className="relative flex flex-col h-full">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-pink-500/10 mb-6">
          <Icon className="w-6 h-6 text-pink-500" />
        </div>
        <h3 className="text-xl font-semibold text-teal-500 mb-4">{title}</h3>
        <p className="text-white text-base leading-relaxed">{description}</p>
      </div>
    </div>
  </motion.div>
);

const StatementSection = () => (
  <section className="relative py-24 bg-gradient-to-b from-[#111] via-[#151515] to-[#111]">
    <div className="absolute inset-0">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-pink-500/5 via-transparent to-transparent opacity-30" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-teal-500/10 via-transparent to-transparent opacity-20" />
    </div>
    <div className="container mx-auto px-4 relative z-10">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="prose prose-invert max-w-none"
        >
          <h2 className="text-4xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-pink-500 to-teal-500 bg-clip-text text-transparent">
              Sustainability Statement
            </span>
          </h2>
          
          <div className="space-y-8">
            <div className="bg-black/60 backdrop-blur-xl rounded-2xl p-8 border border-pink-500/20 shadow-lg">
              <p className="text-xl leading-relaxed text-white">
                At Elite Wrappers Sydney, we recognize that as a business dedicated to transforming fleets
                and vehicles with premium branding solutions, we have a responsibility to minimize our
                environmental impact. Our mission is to offer sustainable, high-performance fleet branding
                options that not only help our clients stand out on the road, but also contribute to a more
                sustainable future.
              </p>
            </div>

            <div className="relative p-8 rounded-2xl bg-black/60 border border-teal-500/20 backdrop-blur-xl">
              <div className="relative space-y-6">
                <p className="text-white text-lg leading-relaxed">
                  We are committed to reducing our carbon footprint by carefully selecting eco-friendly
                  products, such as Arlon's, DPF V9700. A non-PVC cast polyurethane film that exemplifies our
                  dedication to sustainability. Manufactured using a water-based formulation, DPF
                  V9700 significantly reduces volatile organic compounds (VOCs) by 57.1% during production,
                  making it one of the most environmentally responsible options available in the market
                  today.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                  <div className="bg-black/40 rounded-xl p-4 border border-pink-500/10">
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 rounded-full bg-pink-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-pink-500 text-lg">✓</span>
                      </div>
                      <p className="text-white font-medium">High heat tolerance and enhanced structural stability</p>
                    </div>
                  </div>
                  <div className="bg-black/40 rounded-xl p-4 border border-teal-500/10">
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 rounded-full bg-teal-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-teal-500 text-lg">✓</span>
                      </div>
                      <p className="text-white font-medium">Minimizes material waste and rework needs</p>
                    </div>
                  </div>
                  <div className="bg-black/40 rounded-xl p-4 border border-pink-500/10">
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 rounded-full bg-pink-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-pink-500 text-lg">✓</span>
                      </div>
                      <p className="text-white font-medium">Reduces excess materials sent to landfills</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-black/60 backdrop-blur-xl rounded-2xl p-8 border border-teal-500/20">
                <p className="text-white text-lg leading-relaxed">
                  In addition to its environmentally conscious formulation, DPF V9700 is designed for
                  efficiency—its high heat tolerance and enhanced structural stability reduce the need for
                  reworking and minimize material waste. This not only saves our clients time and labour but
                  also reduces the overall environmental impact by decreasing the number of excess
                  materials sent to landfills.
                </p>
              </div>

              <div className="bg-black/60 backdrop-blur-xl rounded-2xl p-8 border border-pink-500/20">
                <p className="text-white text-lg leading-relaxed">
                  Furthermore, the use of FLITE Technology ensures an easy, seamless installation process
                  with superior repositionability and a clean removal when the wrap reaches the end of its life
                  cycle. This innovation allows us to further our commitment to sustainability by facilitating
                  the reuse and recycling of materials whenever possible.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-pink-500/10 to-teal-500/10 rounded-2xl p-8 border border-white/10 backdrop-blur-xl">
              <div className="flex items-start space-x-6">
                <div className="w-1 bg-gradient-to-b from-pink-500 to-teal-500 rounded-full self-stretch" />
                <p className="text-xl font-medium text-white leading-relaxed">
                  At Elite Wrappers Sydney, we believe that being environmentally responsible doesn't mean
                  sacrificing quality. Through the combination of cutting-edge technology and eco-friendly
                  materials, we are proud to offer a service that reflects our commitment to a cleaner,
                  greener future while helping our clients achieve visually striking and durable fleet branding
                  that lasts.
                </p>
              </div>
            </div>

            <div className="text-center">
              <p className="text-xl font-medium bg-gradient-to-r from-pink-500 to-teal-500 bg-clip-text text-transparent inline-block">
                Every project we complete not only represents a milestone in our clients'
                branding journey but also a step forward in our collective commitment to reducing
                environmental impact.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export function SustainabilityPage() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2], [0, 100]);

  return (
    <div className="bg-[#111] text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <motion.div 
          style={{ opacity, y }}
          className="absolute inset-0 z-0"
        >
          <Image
            src="/sustain.jpg"
            alt="Sustainability at Elite Wrappers"
            fill
            className="object-cover object-center brightness-50"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-transparent" />
        </motion.div>

        <div className="relative z-10 container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-block"
            >
              <span className="inline-flex items-center px-4 py-1.5 rounded-full border border-pink-500/20 bg-black/40 backdrop-blur-sm text-sm text-white mb-8">
                <TreePine className="w-4 h-4 mr-2 text-pink-500" />
                Environmental Leadership
              </span>
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
              Leading Sustainable Vehicle Aesthetics
            </h1>
            <p className="text-xl text-white mb-12 max-w-2xl mx-auto">
              Pioneering eco-conscious practices and innovative technologies to transform the future of vehicle wrapping.
            </p>
            <Button 
              size="lg"
              className="bg-pink-500 text-white hover:bg-pink-600 hover:scale-105 transform transition-all duration-200"
              onClick={() => window.location.href = '/contact?scroll=contact-form'}
            >
              Get Started Today
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown className="w-6 h-6 text-white/80" />
        </motion.div>
      </section>

      {/* Statement Section */}
      <StatementSection />

      {/* Impact Stats */}
      <section className="relative py-24 bg-gradient-to-b from-[#151515] via-[#111] to-[#151515]">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-pink-500/5 via-transparent to-transparent opacity-30" />
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-pink-500/10 to-transparent" />
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-pink-500/10 to-transparent" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-teal-500 mb-4">
              Our Environmental Impact
            </h2>
            <p className="text-xl text-white">
              Measurable results that demonstrate our commitment to sustainability and environmental stewardship.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <ImpactCard
              title="Waste Reduction"
              value="95%"
              description="Of materials recycled through our innovative waste management program"
            />
            <ImpactCard
              title="Water Conservation"
              value="50%"
              description="Reduction in water usage through eco-friendly cleaning processes"
            />
            <ImpactCard
              title="Clean Energy"
              value="100%"
              description="Transitioning to renewable energy systems across our operations"
            />
          </div>
        </div>
      </section>

      {/* Initiatives */}
      <section className="relative py-24 bg-gradient-to-b from-[#111] via-[#151515] to-[#111]">
        <div className="absolute inset-0">
          <Image
            src="/sustain2.jpg"
            alt="Sustainable Initiatives Background"
            fill
            className="object-cover object-center brightness-[0.2]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#111] via-transparent to-[#111]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-pink-500/5 via-transparent to-transparent opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-teal-500/5 to-transparent" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-teal-500 mb-4">
              Sustainable Initiatives
            </h2>
            <p className="text-xl text-white">
              Leading the industry with innovative approaches to environmental responsibility.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            <InitiativeCard
              icon={Leaf}
              title="Eco-Materials"
              description="Premium eco-conscious vinyl wraps that minimize environmental impact while maximizing quality."
            />
            <InitiativeCard
              icon={Droplets}
              title="Water Conservation"
              description="Advanced cleaning processes that reduce water usage and eliminate harmful runoff."
            />
            <InitiativeCard
              icon={Wind}
              title="Clean Energy"
              description="Implementing renewable energy systems and smart LED technology to reduce our carbon footprint."
            />
            <InitiativeCard
              icon={Recycle}
              title="Zero Waste"
              description="Comprehensive recycling program ensuring 95% of materials avoid landfills."
            />
          </div>
        </div>
      </section>

      {/* Innovation Highlight */}
      <section className="relative py-24 bg-gradient-to-b from-[#151515] via-[#111] to-[#151515]">
        <div className="absolute inset-0">
          <Image
            src="/sustain.jpg"
            alt="Next Generation Materials Background"
            fill
            className="object-cover object-center brightness-[0.15] blur-sm"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#151515] via-transparent to-[#151515]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-teal-500/5 via-transparent to-transparent opacity-30" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-pink-500/10 via-transparent to-transparent opacity-40" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="bg-black/60 backdrop-blur-xl border border-pink-500/10 rounded-3xl p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 -mt-16 -mr-16 w-64 h-64 bg-gradient-to-br from-pink-500/20 to-teal-500/20 rounded-full blur-3xl" />
              <div className="relative">
                <h3 className="text-3xl font-bold text-teal-500 mb-6">
                  Next-Generation Materials
                </h3>
                <div className="grid md:grid-cols-2 gap-12">
                  <div>
                    <p className="text-white mb-8">
                      Our commitment to sustainability is exemplified by our use of advanced materials like the DPF V9700—a non-PVC cast polyurethane film that reduces VOCs by 57.1% during production.
                    </p>
                    <Button 
                      className="bg-pink-500 text-white hover:bg-pink-600 hover:scale-105 transform transition-all duration-200"
                      onClick={() => window.location.href = '/contact?scroll=contact-form'}
                    >
                      Learn More
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </div>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4 bg-black/40 rounded-xl p-4 border border-pink-500/10 backdrop-blur-sm">
                      <div className="w-8 h-8 rounded-full bg-pink-500/20 flex items-center justify-center flex-shrink-0">
                        <span className="text-pink-500 text-lg">✓</span>
                      </div>
                      <p className="text-white">Enhanced durability and heat tolerance for longer-lasting applications</p>
                    </div>
                    <div className="flex items-start space-x-4 bg-black/40 rounded-xl p-4 border border-teal-500/10 backdrop-blur-sm">
                      <div className="w-8 h-8 rounded-full bg-teal-500/20 flex items-center justify-center flex-shrink-0">
                        <span className="text-teal-500 text-lg">✓</span>
                      </div>
                      <p className="text-white">Significant reduction in material waste through precise digital planning</p>
                    </div>
                    <div className="flex items-start space-x-4 bg-black/40 rounded-xl p-4 border border-pink-500/10 backdrop-blur-sm">
                      <div className="w-8 h-8 rounded-full bg-pink-500/20 flex items-center justify-center flex-shrink-0">
                        <span className="text-pink-500 text-lg">✓</span>
                      </div>
                      <p className="text-white">Zero harmful chemicals and reduced environmental impact</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 bg-gradient-to-b from-[#111] via-[#151515] to-[#111]">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-pink-500/5 to-black opacity-30" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-teal-500/10 via-transparent to-transparent opacity-20" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-teal-500 mb-6">
              Join Our Sustainable Journey
            </h2>
            <p className="text-xl text-white mb-8">
              Partner with us to make a lasting impact on the environment while achieving exceptional vehicle aesthetics.
            </p>
            <Button 
              size="lg"
              className="bg-pink-500 hover:bg-pink-600 text-white font-semibold hover:scale-105 transform transition-all duration-200"
              onClick={() => window.location.href = '/contact?scroll=contact-form'}
            >
              Contact Us Today
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
} 