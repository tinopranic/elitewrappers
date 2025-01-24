"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface FadeInHeadingProps {
  children: ReactNode
  className?: string
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
}

export function FadeInHeading({ children, className, as = "h2" }: FadeInHeadingProps) {
  const HeadingTag = as

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
    >
      <HeadingTag className={className}>{children}</HeadingTag>
    </motion.div>
  )
}

