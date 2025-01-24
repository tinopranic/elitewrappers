"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectGroup,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
} from "@/components/ui/select"
import { useSearchParams } from "next/navigation"

const serviceTypes = [
  "Full Vehicle Wrap",
  "Partial Wrap",
  "Paint Protection Film",
  "Ceramic Coating",
  "Commercial Fleet Wrapping",
  "Other",
]

export function ContactForm() {
  const searchParams = useSearchParams()
  const [formState, setFormState] = useState({
    name: "",
    phone: "",
    email: "",
    serviceType: "",
    jobDescription: "",
  })

  useEffect(() => {
    const plan = searchParams.get("plan")
    if (plan) {
      setFormState((prev) => ({
        ...prev,
        jobDescription: `I'm interested in the ${plan} pricing plan.`,
      }))
    }
  }, [searchParams])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log(formState)
  }

  return (
    <section className="py-24 bg-black text-white">
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
                className="w-full py-3 px-6 text-white bg-gradient-to-r from-teal-500 to-pink-500 rounded-md hover:from-teal-600 hover:to-pink-600 transition-all duration-300 font-semibold"
              >
                Submit
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  )
}

