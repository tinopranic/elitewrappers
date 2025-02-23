"use client"

import type React from "react"
import { useState, useEffect, Suspense } from "react"
import { motion } from "framer-motion"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select } from "@/components/ui/select"
import { useSearchParams } from "next/navigation"
import { toast } from "sonner"
import { SparklesCore } from "@/components/ui/sparkles"
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react"

const serviceTypes = [
  "Full Vehicle Wrap",
  "Partial Wrap",
  "Paint Protection Film",
  "Ceramic Coating",
  "Commercial Fleet Wrapping",
  "Other",
]

interface ContactFormProps {
  defaultService?: string | null;
  defaultPlan?: string | null;
}

function FormStateInitializer({ setFormState }: { setFormState: (prev: any) => void }) {
  const searchParams = useSearchParams()

  useEffect(() => {
    const plan = searchParams.get("plan")
    if (plan) {
      setFormState((prev: any) => ({
        ...prev,
        jobDescription: `I'm interested in the ${plan} pricing plan.`,
      }))
    }
  }, [searchParams, setFormState])

  return null
}

const ContactInfo = () => (
  <div className="space-y-8">
    <div className="flex items-center gap-4">
      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-teal-500/20 to-pink-500/20 flex items-center justify-center">
        <Phone className="w-5 h-5 text-teal-400" />
      </div>
      <div>
        <h4 className="text-lg font-semibold text-white">Phone</h4>
        <p className="text-gray-400">
          <a href="tel:+61247616929" className="hover:text-teal-400 transition-colors">
            (02) 4761 6929
          </a>
        </p>
      </div>
    </div>
    <div className="flex items-center gap-4">
      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-teal-500/20 to-pink-500/20 flex items-center justify-center">
        <Mail className="w-5 h-5 text-pink-400" />
      </div>
      <div>
        <h4 className="text-lg font-semibold text-white">Email</h4>
        <p className="text-gray-400">
          <a href="mailto:getwrapped@elitewrappers.com.au" className="hover:text-teal-400 transition-colors">
            getwrapped@elitewrappers.com.au
          </a>
        </p>
      </div>
    </div>
    <div className="flex items-center gap-4">
      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-teal-500/20 to-pink-500/20 flex items-center justify-center">
        <MapPin className="w-5 h-5 text-teal-400" />
      </div>
      <div>
        <h4 className="text-lg font-semibold text-white">Location</h4>
        <p className="text-gray-400">
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
    <div className="flex items-center gap-4">
      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-teal-500/20 to-pink-500/20 flex items-center justify-center">
        <Clock className="w-5 h-5 text-pink-400" />
      </div>
      <div>
        <h4 className="text-lg font-semibold text-white">Hours</h4>
        <p className="text-gray-400">Mon-Fri: 9am - 6pm</p>
        <p className="text-gray-400">Sat: By Appointment</p>
      </div>
    </div>
  </div>
)

export function ContactForm({ defaultService, defaultPlan }: ContactFormProps) {
  const [formState, setFormState] = useState({
    name: "",
    phone: "",
    email: "",
    serviceType: "",
    jobDescription: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formState),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message')
      }

      toast.success('Message Sent Successfully!', {
        description: "Thank you for contacting Elite Wrappers. We'll get back to you within 24-48 hours.",
        duration: 5000,
        position: "top-center",
      })
      
      setFormState({
        name: "",
        phone: "",
        email: "",
        serviceType: "",
        jobDescription: "",
      })
    } catch (error) {
      console.error('Error sending message:', error)
      toast.error('Failed to Send Message', {
        description: 'Please try again or contact us directly by phone.',
        duration: 5000,
        position: "top-center",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact-form" className="relative py-24 bg-premium-dark overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <SparklesCore
          id="tsparticlesfull"
          background="transparent"
          minSize={0.4}
          maxSize={1.0}
          particleDensity={30}
          className="w-full h-full"
          particleColor="#00bac5"
          speed={0.1}
        />
      </div>
      
      <Suspense fallback={null}>
        <FormStateInitializer setFormState={setFormState} />
      </Suspense>

      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-pink-500 font-air-travellers mb-4">
                Get in Touch
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Ready to transform your vehicle? Fill out the form below, and our team of experts will get back to you with a customized solution.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
              {/* Contact Information */}
              <div className="relative">
                <div className="sticky top-24">
                  <h3 className="text-2xl font-bold text-white mb-8">Contact Information</h3>
                  <ContactInfo />
                  
                  <div className="mt-12 p-6 rounded-2xl bg-gradient-to-br from-teal-500/10 to-pink-500/10 border border-gray-800">
                    <h4 className="text-lg font-semibold text-white mb-3">Premium Service Guarantee</h4>
                    <p className="text-gray-400">
                      Experience unmatched quality and attention to detail with Sydney's leading vehicle transformation specialists.
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="relative">
                <div className="p-6 sm:p-8 rounded-2xl bg-[#141414]/80 backdrop-blur-xl border border-gray-800">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="name" className="text-gray-300">Name</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formState.name}
                          onChange={handleChange}
                          className="bg-[#1a1a1a] border-gray-800 text-white mt-2 focus:ring-teal-500"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone" className="text-gray-300">Phone Number</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formState.phone}
                          onChange={handleChange}
                          className="bg-[#1a1a1a] border-gray-800 text-white mt-2 focus:ring-teal-500"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="email" className="text-gray-300">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formState.email}
                        onChange={handleChange}
                        className="bg-[#1a1a1a] border-gray-800 text-white mt-2 focus:ring-teal-500"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="serviceType" className="text-gray-300">Service Type</Label>
                      <Select
                        id="serviceType"
                        name="serviceType"
                        value={formState.serviceType}
                        onChange={handleChange}
                        className="bg-[#1a1a1a] border-gray-800 text-white mt-2 focus:ring-teal-500"
                        required
                      >
                        <option value="">Select a service</option>
                        {serviceTypes.map((service) => (
                          <option key={service} value={service}>
                            {service}
                          </option>
                        ))}
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="jobDescription" className="text-gray-300">Project Details</Label>
                      <Textarea
                        id="jobDescription"
                        name="jobDescription"
                        value={formState.jobDescription}
                        onChange={handleChange}
                        className="bg-[#1a1a1a] border-gray-800 text-white mt-2 focus:ring-teal-500 min-h-[120px]"
                        placeholder="Tell us about your project..."
                        required
                      />
                    </div>

                    <span className="relative inline-block overflow-hidden rounded-full p-[1.5px] w-full">
                      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#14B8A6_0%,#EC4899_50%,#14B8A6_100%)]" />
                      <div className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-black/60 text-xs font-medium backdrop-blur-3xl">
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className={`inline-flex rounded-full text-center group items-center w-full justify-center bg-white/10 text-gray-200 py-3 px-6 text-sm hover:bg-white/20 hover:text-white transition-all gap-2 ${
                            isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                          }`}
                        >
                          <Send className="w-5 h-5" />
                          {isSubmitting ? 'Sending...' : 'Send Message'}
                        </button>
                      </div>
                    </span>
                  </form>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background Gradient */}
      <div
        className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-teal-500"
        style={{
          opacity: '0.1',
          filter: 'blur(7px)',
          background:
            'conic-gradient(from 90deg at 50% 50%, #00bac5 -60.49deg, #ee2b7c 59.93deg, #00bac5 299.51deg, #ee2b7c 419.93deg)',
        }}
      />
    </section>
  )
}

