import { WavyBackground } from "@/components/ui/wavy-background"

export default function GalleryPage() {
  return (
    <WavyBackground
      colors={["#14B8A6", "#EC4899", "#14B8A6", "#EC4899", "#14B8A6"]}
      waveWidth={100}
      backgroundFill="black"
      blur={5}
      speed="slow"
      waveOpacity={0.5}
      className="w-full"
    >
      <div className="container mx-auto px-4 py-32">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-12 text-center">Our Gallery</h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-16 text-center">
          Check out our latest work and get inspired for your next vehicle transformation.
        </p>
        {/* Remove InstagramFeed component for now */}
      </div>
    </WavyBackground>
  )
}

