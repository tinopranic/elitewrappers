"use client"

import { ScrollVelocity } from "@/components/ui/scroll-velocity"
import Image from "next/image"
import { memo } from "react"

const partnerImages = [
  {
    name: "XPEL",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/9c027b020a2b4498db5b33df5ffc9aa8_1200_80-JigfZudV9VTjcJOUFHk8NHd453FhMZ.webp",
  },
  {
    name: "ORAFOL",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2cb6bba3ef033e75d41f87a1df05ecc7_1200_80-P8SV5W04zpV4wcgYK7Am5XWuScLANd.webp",
  },
  {
    name: "Avery Dennison",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/0afcec5316ee8fada821ec7de589b2b6_1200_80-MG6K8HQG9r3C0vWhwERbFiNPo9oMSW.webp",
  },
  {
    name: "Hexis",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/10ffc1bcd9eeceeb93e68b0b41a0f875_1200_80-abST1GLtVnp7JkKognoBt6VfM5TRDN.webp",
  },
  {
    name: "3M",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/e6995ac9a03e04cb8db47235ac13c0a1_1200_80-6xH4err9wiRtcyR8QrU3PK1cS6kmLZ.webp",
  },
  {
    name: "KPMF",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/71f7a46599b9c059eb7697b4a5bd245d_1200_80-yp9sqJMvis98cD4Dc3WEmOdqbQdG7u.webp",
  },
  {
    name: "Seven2Media",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/s2m-d0Gvl8h9dky44dqGaBYhhzFekIAePF.png",
  },
]

const PartnerLogo = memo(({ name, logo }: { name: string; logo: string }) => (
  <div
    className="relative h-16 w-32 md:h-20 md:w-40 xl:h-24 xl:w-48 mx-8 rounded-lg p-4"
    role="img"
    aria-label={`${name} logo`}
  >
    <Image
      src={logo || "/placeholder.svg"}
      alt={`${name} logo`}
      fill
      sizes="(max-width: 768px) 128px, (max-width: 1200px) 160px, 192px"
      className="h-full w-full object-contain object-center"
      loading="lazy"
      quality={75}
    />
  </div>
))
PartnerLogo.displayName = "PartnerLogo"

export function OurPartners() {
  return (
    <section className="py-16 bg-black relative" aria-labelledby="partners-heading">
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-black via-black to-white"></div>
      <div className="relative z-10">
        <div className="container mx-auto px-4">
          <h2 id="partners-heading" className="text-4xl font-bold text-center text-white mb-12">
            Our Partners
          </h2>
          <div className="w-full overflow-hidden" role="region" aria-label="Partner logos carousel">
            <ScrollVelocity velocity={3} className="mb-4">
              {partnerImages.map((partner) => (
                <PartnerLogo key={partner.name} {...partner} />
              ))}
            </ScrollVelocity>
            <ScrollVelocity velocity={-3}>
              {[...partnerImages].reverse().map((partner) => (
                <PartnerLogo key={`reverse-${partner.name}`} {...partner} />
              ))}
            </ScrollVelocity>
          </div>
        </div>
      </div>
    </section>
  )
}

