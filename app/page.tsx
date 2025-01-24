import { Hero } from "@/components/sections/Hero"
import { Services } from "@/components/sections/Services"
import { FeaturedProjects } from "@/components/sections/FeaturedProjects"
import { WhyChooseUs } from "@/components/sections/WhyChooseUs"
import { Testimonials } from "@/components/sections/Testimonials"
import { ContactForm } from "@/components/sections/ContactForm"

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <FeaturedProjects />
      <WhyChooseUs />
      <Testimonials />
      <ContactForm />
    </>
  )
}

