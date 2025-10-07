"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import TestimonialCard from "./testimonial_card"

const testimonials = [
  {
    id: 1,
    category: "MEDICAL DEVICE DISTRIBUTION",
    title: "Streamlined operations with Innovation Labs ERP",
    description:
      "Our medical device distribution company saw a 60% improvement in inventory management and regulatory compliance after implementing Innovation Labs' comprehensive ERP solution.",
    thumbnail: "/placeholder.svg?height=300&width=400",
    videoUrl: "https://www.youtube.com/watch?v=example1",
  },
  {
    id: 2,
    category: "HEALTHCARE SERVICES",
    title: "Transforming service management in healthcare",
    description:
      "Innovation Labs helped us revolutionize our medical equipment service operations, reducing response times by 75% and improving customer satisfaction significantly.",
    thumbnail: "/placeholder.svg?height=300&width=400",
    videoUrl: "https://www.youtube.com/watch?v=example2",
  },
  {
    id: 3,
    category: "MEDICAL IMPORT",
    title: "Compliance made simple with automated workflows",
    description:
      "The regulatory compliance features in Innovation Labs' system have streamlined our import processes, ensuring we meet all medical device regulations efficiently.",
    thumbnail: "/placeholder.svg?height=300&width=400",
    videoUrl: "https://www.youtube.com/watch?v=example3",
  },
]

const positions = [
  { left: "5%", zIndex: 1, y: 20 },
  { left: "35%", zIndex: 3, y: -20 },
  { left: "65%", zIndex: 1, y: 20 },
]

export default function VideoTestimonials() {
  const [activeVideoId, setActiveVideoId] = useState<number | null>(null)
  const [cardOrder, setCardOrder] = useState([0, 1, 2])
  const [isAnimating, setIsAnimating] = useState(false)


const handleVideoPlay = (id: number) => {
    setActiveVideoId(id === activeVideoId ? null : id)
}

  const rotateLeft = () => {
    setCardOrder((prevOrder) => {
      const newOrder = [...prevOrder]
      const first = newOrder[0]
      newOrder[0] = newOrder[1]
      newOrder[1] = newOrder[2]
      newOrder[2] = first
      return newOrder
    })
  }

  const rotateRight = () => {
    setCardOrder((prevOrder) => {
      const newOrder = [...prevOrder]
      const last = newOrder[2]
      newOrder[2] = newOrder[1]
      newOrder[1] = newOrder[0]
      newOrder[0] = last
      return newOrder
    })
  }

interface HandleCardClickParams {
    clickedPosition: number
}

const handleCardClick = ({ clickedPosition }: HandleCardClickParams) => {
    if (isAnimating || clickedPosition === 1) return

    setIsAnimating(true)

    if (clickedPosition === 0) {
        rotateRight()
    } else {
        rotateLeft()
    }

    setTimeout(() => {
        setIsAnimating(false)
    }, 700)
}

  return (
    <div>
      <motion.h1
        className="text-4xl font-bold text-center mb-16 mt-20"
        initial={{ y: "80px", opacity: 0 }}
        whileInView={{
          y: 0,
          opacity: 1,
          transition: { duration: 1.4 },
        }}
        viewport={{ once: true, amount: 0.8 }}
      >
        Hear from our clients
      </motion.h1>

      <div className="relative w-full h-[600px] mb-20">
        <div className="relative w-full h-full">
          {testimonials.map((testimonial, index) => {
            const positionIndex = cardOrder.indexOf(index)

            return (
            <motion.div
                key={`card-${index}`}
                className="absolute"
                style={{
                    width: positionIndex === 1 ? "32%" : "30%",
                }}
                animate={{
                    left: positions[positionIndex].left,
                    zIndex: positions[positionIndex].zIndex,
                    y: positions[positionIndex].y,
                    scale: positionIndex === 1 ? 1.05 : 1,
                }}
                transition={{
                    duration: 0.7,
                    ease: "easeInOut",
                }}
                onClick={() => handleCardClick({ clickedPosition: positionIndex })}
            >
                <TestimonialCard
                    testimonial={testimonial}
                    isPlaying={testimonial.id === activeVideoId}
                    onPlay={() => handleVideoPlay(testimonial.id)}
                    isMiddle={positionIndex === 1}
                />
            </motion.div>
            )
          })}
        </div>

        <div className="flex justify-center mt-8 gap-2">
          {testimonials.map((_, index) => (
            <motion.button
              key={`dot-${index}`}
              className={`w-3 h-3 rounded-full transition-colors ${
                cardOrder.indexOf(index) === 1 ? "bg-orange-500" : "bg-gray-300 hover:bg-gray-400"
              }`}
              onClick={() => {
                const position = cardOrder.indexOf(index)
                if (position !== 1) handleCardClick({ clickedPosition: position })
              }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
