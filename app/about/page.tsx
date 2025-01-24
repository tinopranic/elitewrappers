"use client"
import Image from "next/image"
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials"

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
    <div className="bg-white">
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-black to-gray-900 py-24 sm:py-32">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dark-overlay-car-wrap-zNXbgGXMXBXZXXXXXXXXXXXXXXXXXX.jpg"
          alt="Dark overlay of a vehicle being wrapped"
          fill
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-50"
          priority
        />
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">About Elite Wrappers</h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Transforming vehicles with precision, creativity, and unmatched expertise since 2010.
            </p>
          </div>
        </div>
      </div>

      <div className="overflow-hidden bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg">
                <h2 className="text-base font-semibold leading-7 text-indigo-600">Our Story</h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  A Decade of Excellence
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Founded in 2010, Elite Wrappers has been at the forefront of the vehicle wrapping industry in Sydney.
                  Our journey began with a passion for cars and a vision to offer top-tier wrapping services that would
                  transform vehicles and exceed client expectations.
                </p>
                <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                  {[
                    {
                      name: "Expert Team",
                      description:
                        "Our team of certified professionals brings years of experience and a keen eye for detail to every project.",
                    },
                    {
                      name: "Premium Materials",
                      description:
                        "We use only the highest quality wrapping materials from industry-leading brands to ensure durability and stunning results.",
                    },
                    {
                      name: "Custom Solutions",
                      description:
                        "From personal vehicles to commercial fleets, we offer tailored wrapping solutions to meet diverse client needs.",
                    },
                  ].map((feature) => (
                    <div key={feature.name} className="relative pl-9">
                      <dt className="inline font-semibold text-gray-900">
                        <div className="absolute left-1 top-1 h-5 w-5 text-indigo-600">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path
                              fillRule="evenodd"
                              d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        {feature.name}
                      </dt>{" "}
                      <dd className="inline">{feature.description}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
            <Image
              src="https://images.unsplash.com/photo-1621799754526-a0d52c49fad5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
              alt="Elite Wrappers team at work"
              className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
              width={2432}
              height={1442}
            />
          </div>
        </div>
      </div>

      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">Our Commitment</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Dedicated to Quality and Innovation
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              At Elite Wrappers, we're not just wrapping vehicles; we're creating mobile works of art. Our commitment to
              quality, innovation, and customer satisfaction drives everything we do.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {[
                {
                  name: "Cutting-edge Technology",
                  description:
                    "We invest in the latest wrapping technologies and techniques to deliver superior results.",
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                      />
                    </svg>
                  ),
                },
                {
                  name: "Eco-friendly Options",
                  description:
                    "We offer environmentally conscious wrapping solutions without compromising on quality or durability.",
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M20.893 13.393l-1.135-1.135a2.252 2.252 0 01-.421-.585l-1.08-2.16a.414.414 0 00-.663-.107.827.827 0 01-.812.21l-1.273-.363a.89.89 0 00-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 01-1.81 1.025 1.055 1.055 0 01-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 01-1.383-2.46l.007-.042a2.25 2.25 0 01.29-.787l.09-.15a2.25 2.25 0 012.37-1.048l1.178.236a1.125 1.125 0 001.302-.795l.208-.73a1.125 1.125 0 00-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 01-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 01-1.458-1.137l1.411-2.353a2.25 2.25 0 00.286-.76m11.928 9.869A9 9 0 008.965 3.525m11.928 9.868A9 9 0 118.965 3.525"
                      />
                    </svg>
                  ),
                },
                {
                  name: "Customer Education",
                  description:
                    "We believe in empowering our clients with knowledge about vehicle wrapping and maintenance.",
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
                      />
                    </svg>
                  ),
                },
              ].map((feature) => (
                <div key={feature.name} className="flex flex-col items-start">
                  <div className="rounded-md bg-indigo-500 p-2 ring-1 ring-indigo-600">{feature.icon}</div>
                  <dt className="mt-4 font-semibold text-gray-900">{feature.name}</dt>
                  <dd className="mt-2 leading-7 text-gray-600">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      <div className="bg-black py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-white text-center mb-12">What Our Customers Say</h2>
          <AnimatedTestimonials testimonials={testimonials} autoplay={true} />
        </div>
      </div>
    </div>
  )
}

