"use client"

import { type MotionValue, motion, useSpring, useTransform } from "framer-motion"
import { useEffect } from "react"

const fontSize = 30
const padding = 15
const height = fontSize + padding

export function AnimatedCounter({ value }: { value: number }) {
  const clampedValue = Math.min(500, Math.max(0, value))
  return (
    <div style={{ fontSize }} className="flex space-x-3 overflow-hidden rounded-md px-2 leading-none text-white">
      <Digit place={100} value={clampedValue} />
      <Digit place={10} value={clampedValue} />
      <Digit place={1} value={clampedValue} />
    </div>
  )
}

function Digit({ place, value }: { place: number; value: number }) {
  const valueRoundedToPlace = Math.floor(value / place)
  const animatedValue = useSpring(valueRoundedToPlace)

  useEffect(() => {
    animatedValue.set(valueRoundedToPlace)
  }, [animatedValue, valueRoundedToPlace])

  return (
    <div style={{ height }} className="relative w-[1ch] tabular-nums">
      {[...Array(10).keys()].map((i) => (
        <Number key={i} mv={animatedValue} number={i} />
      ))}
    </div>
  )
}

function Number({ mv, number }: { mv: MotionValue; number: number }) {
  const y = useTransform(mv, (latest) => {
    const placeValue = latest % 10
    const offset = (10 + number - placeValue) % 10
    let memo = offset * height
    if (offset > 5) {
      memo -= 10 * height
    }
    return memo
  })

  return (
    <motion.span style={{ y }} className="absolute inset-0 flex items-center justify-center">
      {number}
    </motion.span>
  )
}

