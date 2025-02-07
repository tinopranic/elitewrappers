"use client"

import { FadeInHeading } from "./fade-in-heading"
import type { ReactNode, ElementType } from "react"
import { cn } from "@/lib/utils"

export interface SectionHeadingProps {
  children: ReactNode
  className?: string
  as?: ElementType
  textColor?: string
  id?: string
}

export function SectionHeading({ 
  children, 
  className, 
  as: Component = "div",
  textColor = "text-white",
  id
}: SectionHeadingProps) {
  return (
    <Component
      id={id}
      className={cn(
        "text-3xl md:text-4xl lg:text-5xl font-serpentine text-center mb-12",
        textColor,
        className
      )}
    >
      {children}
    </Component>
  )
} 