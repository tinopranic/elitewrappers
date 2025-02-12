import { Shield, Paintbrush, Truck, FileText } from "lucide-react"
import type { Service } from "@/types"

export const services: Service[] = [
  {
    label: "Paint Protection",
    id: "paint-protection",
    icon: Shield,
    description: "Shield your car's paint from scratches and debris.",
    content:
      "Our paint protection films provide an invisible shield against road debris, stone chips, and minor scratches. We use advanced self-healing technology that automatically removes minor scratches and swirl marks, ensuring your vehicle maintains its pristine appearance.\n\n\nOur premium installations come with multi year warranty, giving you peace of mind for years to come. The film includes UV protection to prevent paint fade and oxidation, while our certified technicians ensure flawless installation that enhances and preserves your vehicle's finish.",
    images: [
      "/ppf.jpg",
      "/ppf2.jpg",
      "/premium.jpg",
    ],
  },
  {
    label: "Custom Wraps",
    id: "custom-wraps",
    icon: Paintbrush,
    description: "Transform your vehicle with our premium custom wraps.",
    content:
      "Our custom wraps are designed to give your vehicle a unique look that stands out from the crowd. Using only premium vinyl materials, we can achieve full vehicle color changes that transform your car's appearance completely.\n\n\nOur expert team works closely with you to create custom designs and patterns tailored to your vision, offering a wide range of finishes including matte, gloss, satin, and chrome. Best of all, our wraps are completely removable without damaging your original paint, giving you the freedom to change your style whenever you want.",
    images: [
      "/custom4.png",
      "/custom5.png",
      "/custom3.jpg",
    ],
  },
  {
    label: "Commercial Wraps",
    id: "commercial-wraps",
    icon: Truck,
    description: "Turn your fleet into moving billboards.",
    content:
      "Make your business stand out with our commercial vehicle wraps. We offer custom designs that transform your fleet into eye-catching mobile advertisements, increasing brand visibility wherever you go. Our cost-effective mobile advertising solutions include professional design services to ensure your message captures attention on the road.\n\n\nWe maintain perfect consistency across your entire fleet, using durable materials specifically chosen for long-term exposure and daily commercial use. Our wraps not only advertise your business but also protect your vehicles' paintwork, maintaining their value for years to come.",
    images: [
      "/commercial1.jpg",
      "/commercial2.jpg",
      "/commercial3.jpg",
    ],
  },
  {
    label: "Trailer Signage",
    id: "trailer-signage",
    icon: FileText,
    description: "Professional signage solutions for trailers and trucks.",
    content:
      "Transform your trailers into powerful mobile advertising platforms with our professional signage solutions. We specialize in creating high-impact graphics and branding that make your trailers stand out on the road, ensuring your message reaches a wider audience wherever your fleet travels.\n\n\nUsing premium-grade materials specifically designed for trailers and heavy vehicles, we ensure your signage withstands harsh road conditions and frequent exposure to the elements. Our expert team handles everything from design to installation, delivering durable, eye-catching results that effectively promote your business 24/7.",
    images: [
      "/trailer1.png",
      "/trailer22.JPG",
      "/trailer3.png",
    ],
  },
] 