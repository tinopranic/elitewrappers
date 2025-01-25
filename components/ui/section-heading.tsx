"use client"

import { FadeInHeading } from "./fade-in-heading"
import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface SectionHeadingProps {
  children: ReactNode
  className?: string
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
  textColor?: string
}

export function SectionHeading({ 
  children, 
  className, 
  as = "h2",
  textColor = "text-white"
}: SectionHeadingProps) {
  return (
    <FadeInHeading 
      as={as}
      className={cn(
        "text-5xl font-bold text-center mb-12 font-air-travellers",
        textColor,
        className
      )}
    >
      {children}
    </FadeInHeading>
  )
} 