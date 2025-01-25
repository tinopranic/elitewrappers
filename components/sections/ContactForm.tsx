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

      // Show success message
      toast.success('Message sent successfully! We will get back to you soon.')
      
      // Reset form
      setFormState({
        name: "",
        phone: "",
        email: "",
        serviceType: "",
        jobDescription: "",
      })
    } catch (error) {
      console.error('Error sending message:', error)
      toast.error('Failed to send message. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="py-24 bg-black text-white">
      <Suspense fallback={null}>
        <FormStateInitializer setFormState={setFormState} />
      </Suspense>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-pink-500 font-air-travellers">
            Get in Touch
          </h2>
          <p className="text-center text-gray-400 mb-12">
            Ready to transform your vehicle? Fill out the form below, and we'll get back to you shortly.
          </p>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                name="name"
                value={formState.name}
                onChange={handleChange}
                className="bg-gray-800 border-gray-700 text-white"
                required
              />
            </div>
            <div>
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formState.phone}
                onChange={handleChange}
                className="bg-gray-800 border-gray-700 text-white"
                required
              />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formState.email}
                onChange={handleChange}
                className="bg-gray-800 border-gray-700 text-white"
                required
              />
            </div>
            <div>
              <Label htmlFor="serviceType">Service Type</Label>
              <Select
                id="serviceType"
                name="serviceType"
                value={formState.serviceType}
                onChange={handleChange}
                className="bg-gray-800 border-gray-700 text-white"
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
              <Label htmlFor="jobDescription">Job Description</Label>
              <Textarea
                id="jobDescription"
                name="jobDescription"
                value={formState.jobDescription}
                onChange={handleChange}
                className="bg-gray-800 border-gray-700 text-white"
                rows={4}
                required
              />
            </div>
            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 px-6 text-white bg-gradient-to-r from-teal-500 to-pink-500 rounded-md hover:from-teal-600 hover:to-pink-600 transition-all duration-300 font-semibold ${
                  isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? 'Sending...' : 'Submit'}
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  )
}

