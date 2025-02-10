"use client"
import Image from "next/image"
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials"
import { motion } from "framer-motion"
import { SectionHeading } from "@/components/ui/section-heading"
import { Shield, Users, Clock, Award, Star, Truck, Car } from "lucide-react"
import Link from "next/link"
import { Testimonials } from "@/components/sections/Testimonials"
import { WavyBackground } from "@/components/ui/wavy-background"

const achievements = [
  { 
    icon: Car, 
    value: "1000+", 
    label: "Vehicles Wrapped",
    description: "Successfully transformed vehicles with premium wraps"
  },
  { 
    icon: Users, 
    value: "500+", 
    label: "Happy Clients",
    description: "Satisfied customers across Sydney"
  },
  { 
    icon: Clock, 
    value: "10+", 
    label: "Years Experience",
    description: "Dedicated to vehicle transformation"
  },
  { 
    icon: Truck, 
    value: "100+", 
    label: "Commercial Projects",
    description: "Business and fleet branding solutions delivered"
  },
]

const values = [
  {
    title: "Quality First",
    description: "We use only premium materials and employ industry-leading techniques to ensure the highest quality results.",
    icon: Star,
  },
  {
    title: "Customer Satisfaction",
    description: "Your satisfaction is our priority. We work closely with you to exceed expectations.",
    icon: Users,
  },
  {
    title: "Innovation",
    description: "We stay ahead of industry trends and continuously adopt new technologies and techniques.",
    icon: Shield,
  },
  {
    title: "Professional Excellence",
    description: "Our team of certified professionals brings expertise and dedication to every project.",
    icon: Award,
  },
]

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

export default function AboutPage() {
  return (
    <div className="bg-black">
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-black to-gray-900 py-24 sm:py-32">
        <Image
          src="/aboutbg.jpg"
          alt="Elite Wrappers Sydney Workshop"
          fill
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-50"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/80 -z-10" />
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div 
            className="mx-auto max-w-2xl lg:mx-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl mb-6">About Elite Wrappers</h1>
            <p className="text-lg leading-8 text-gray-300 mb-6">
              With over 15 years of industry expertise, Elite Wrappers has established itself as Sydney's premier vehicle transformation specialist. In 2020, we proudly opened our flagship store in Penrith, bringing together our wealth of experience and passion for automotive excellence under one roof.
            </p>
            <p className="text-lg leading-8 text-gray-300">
              Our state-of-the-art facility combines cutting-edge technology with masterful craftsmanship, setting new standards in vehicle wrapping and protection services. Today, we continue to build on our legacy of excellence, serving both private and commercial clients with the same dedication to quality and innovation that has defined our journey from the beginning.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Our Story Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-video rounded-xl overflow-hidden">
              <Image
                src="/aboutus.jpg"
                alt="Elite Wrappers Journey"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Our Journey</h2>
              <div className="space-y-6 text-gray-300">
                <p>
                  Elite Wrappers began with a passion for automotive aesthetics and a vision to provide Sydney with premium vehicle transformation services. What started as a small workshop has grown into a leading force in the industry.
                </p>
                <p>
                  Over the years, we've built a reputation for excellence, working on thousands of vehicles ranging from luxury cars to commercial fleets. Our commitment to quality and innovation has made us the trusted choice for vehicle wrapping in Sydney.
                </p>
                <p>
                  Today, we continue to push boundaries, embracing new technologies and techniques while maintaining our core values of quality, integrity, and customer satisfaction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-24 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <SectionHeading>Our Achievements</SectionHeading>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.label}
                className="text-center p-6 rounded-lg bg-gray-900/50 backdrop-blur-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <achievement.icon className="w-12 h-12 mx-auto text-teal-500 mb-4" />
                <h3 className="text-3xl font-bold text-white mb-2">{achievement.value}</h3>
                <p className="text-lg font-semibold text-gray-300 mb-2">{achievement.label}</p>
                <p className="text-gray-400">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <SectionHeading>Our Values</SectionHeading>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className="p-6 rounded-lg bg-gradient-to-br from-gray-900 to-black border border-gray-800"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <value.icon className="w-10 h-10 text-teal-500 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <SectionHeading>Our Team</SectionHeading>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-gray-300">
              Our team of certified professionals brings years of experience and passion to every project. 
              Each member is committed to delivering excellence and ensuring your complete satisfaction.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((member, index) => (
              <motion.div
                key={index}
                className="relative aspect-square rounded-lg overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Image
                  src={`/team${index + 1}.jpg`}
                  alt={`Team Member ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <SectionHeading>What Our Clients Say</SectionHeading>
          <Testimonials />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-black relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Transform Your Vehicle?</h2>
            <p className="text-gray-300 mb-8">
              Contact us today to discuss your project and discover how we can help bring your vision to life.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-teal-500 to-pink-500 hover:from-teal-600 hover:to-pink-600 transition-all duration-300"
            >
              Get in Touch
            </Link>
          </div>
        </div>
        <div
          className="absolute left-0 right-0 top-1/2 -translate-y-1/2 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-teal-500"
          style={{
            opacity: '0.1',
            filter: 'blur(7px)',
            background:
              'conic-gradient(from 90deg at 50% 50%, #00bac5 -60.49deg, #ee2b7c 59.93deg, #00bac5 299.51deg, #ee2b7c 419.93deg)',
          }}
        />
      </section>
    </div>
  )
}

