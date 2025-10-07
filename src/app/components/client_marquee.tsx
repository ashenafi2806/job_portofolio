"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import Image from "next/image"
const upperMarquee = [
  "/placeholder.svg?height=64&width=128",
  "/placeholder.svg?height=64&width=128",
  "/placeholder.svg?height=64&width=128",
  "/placeholder.svg?height=64&width=128",
  "/placeholder.svg?height=64&width=128",
  "/placeholder.svg?height=64&width=128",
  "/placeholder.svg?height=64&width=128",
  "/placeholder.svg?height=64&width=128",
]

const lowerMarquee = [
  "/placeholder.svg?height=64&width=128",
  "/placeholder.svg?height=64&width=128",
  "/placeholder.svg?height=64&width=128",
  "/placeholder.svg?height=64&width=128",
  "/placeholder.svg?height=64&width=128",
  "/placeholder.svg?height=64&width=128",
  "/placeholder.svg?height=64&width=128",
  "/placeholder.svg?height=64&width=128",
]

export default function ClientMarquee() {
  const [hoveredIndexUpper, setHoveredIndexUpper] = useState<number | null>(null)
  const [hoveredIndexLower, setHoveredIndexLower] = useState<number | null>(null)

  return (
    <section className="w-full py-20 bg-gray-50">
      <p className="text-4xl font-bold text-center mb-12">Our trusted partners</p>

      <div className="relative w-full px-16 md:px-32 overflow-hidden">
        <motion.div
          className="flex gap-20 mb-12 items-center"
          initial={{ x: "100%" }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 20, ease: "linear" }}
        >
          <div className="w-36" />
          {[...upperMarquee, ...upperMarquee, ...upperMarquee].map((logo, index) => (
            <Image
              key={index}
              src={logo || "/placeholder.svg"}
              alt={`Medical Partner ${index + 1}`}
              width={128}
              height={64}
              className="object-contain transition-transform hover:scale-110 filter grayscale hover:grayscale-0"
              onMouseEnter={() => setHoveredIndexUpper(index)}
              onMouseLeave={() => setHoveredIndexUpper(null)}
            />
          ))}
          <div className="w-36" />
        </motion.div>

        <motion.div
          className="flex gap-20 items-center"
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 20, ease: "linear" }}
        >
          <div className="w-36" />
          {[...lowerMarquee, ...lowerMarquee, ...lowerMarquee].map((logo, index) => (
            <img
              key={index}
              src={logo || "/placeholder.svg"}
              alt={`Medical Partner ${index + 1}`}
              width={128}
              height={64}
              className="object-contain transition-transform hover:scale-110 filter grayscale hover:grayscale-0"
              onMouseEnter={() => setHoveredIndexLower(index)}
              onMouseLeave={() => setHoveredIndexLower(null)}
            />
          ))}
          <div className="w-36" />
        </motion.div>
      </div>
    </section>
  )
}
