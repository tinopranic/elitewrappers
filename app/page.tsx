import { Hero } from "@/components/sections/Hero"
import { Services } from "@/components/sections/Services"
import { ProcessTimeline } from "@/components/sections/ProcessTimeline"
import { FeaturedProjects } from "@/components/sections/FeaturedProjects"
import { WhyChooseUs } from "@/components/sections/WhyChooseUs"
import { Testimonials } from "@/components/sections/Testimonials"
import { ContactForm } from "@/components/sections/ContactForm"
import { BentoFeatures } from "@/components/sections/BentoFeatures"

export default function Home() {
  return (
    <>
      <Hero />
      <BentoFeatures />
      <Services />
      <ProcessTimeline />
      <FeaturedProjects />
      <WhyChooseUs />
      <Testimonials />
      <ContactForm />
    </>
  )
}

