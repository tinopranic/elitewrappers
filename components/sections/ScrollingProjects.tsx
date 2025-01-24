"use client"

import { ScrollVelocity } from "@/components/ui/scroll-velocity"
import Image from "next/image"

const scrollImages = [
  {
    title: "Matte Black Luxury",
    thumbnail: "/projects/luxury-sedan-after.jpg",
  },
  {
    title: "Racing Stripes",
    thumbnail: "/projects/sports-car-after.jpg",
  },
  {
    title: "Color Change SUV",
    thumbnail: "/projects/suv-after.jpg",
  },
  {
    title: "Commercial Van",
    thumbnail: "/projects/van-after.jpg",
  },
  {
    title: "Metallic Sports Car",
    thumbnail: "/projects/metallic-sports-car.jpg",
  },
]

export function ScrollingProjects() {
  return (
    <section className="py-16 bg-black relative">
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-white"></div>
      <div className="relative z-10">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-white mb-12">Our Latest Projects</h2>
          <div className="w-full overflow-hidden">
            <ScrollVelocity velocity={3} className="mb-4">
              {scrollImages.map(({ title, thumbnail }) => (
                <div
                  key={title}
                  className="relative h-[6rem] w-[9rem] md:h-[8rem] md:w-[12rem] xl:h-[12rem] xl:w-[18rem]"
                >
                  <Image
                    src={thumbnail || "/placeholder.svg"}
                    alt={title}
                    fill
                    className="h-full w-full object-cover object-center rounded-lg"
                  />
                </div>
              ))}
            </ScrollVelocity>
            <ScrollVelocity velocity={-3}>
              {scrollImages.reverse().map(({ title, thumbnail }) => (
                <div
                  key={title}
                  className="relative h-[6rem] w-[9rem] md:h-[8rem] md:w-[12rem] xl:h-[12rem] xl:w-[18rem]"
                >
                  <Image
                    src={thumbnail || "/placeholder.svg"}
                    alt={title}
                    fill
                    className="h-full w-full object-cover object-center rounded-lg"
                  />
                </div>
              ))}
            </ScrollVelocity>
          </div>
        </div>
      </div>
    </section>
  )
}

