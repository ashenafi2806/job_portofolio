"use client"
import React from "react"
interface Testimonial {
  id: number
  category: string
  title: string
  description: string
  thumbnail: string
  videoUrl: string
}

interface TestimonialCardProps {
  testimonial: Testimonial
  isPlaying: boolean
  onPlay: () => void
  isMiddle: boolean
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  testimonial,
  isPlaying,
  onPlay,
  isMiddle,
}) => {
  return (
    <div
      className={`rounded-xl shadow-lg bg-white p-6 transition-all duration-300 ${
        isMiddle ? "scale-105 border-2 border-orange-500" : "scale-100"
      }`}
    >
      <div className="flex flex-col items-center">
        <img
          src={testimonial.thumbnail}
          alt={testimonial.title}
          className="w-full h-40 object-cover rounded-lg mb-4"
        />
        <span className="text-xs font-semibold uppercase text-orange-600 mb-2">
          {testimonial.category}
        </span>
        <h3 className="text-lg font-bold text-center mb-2">
          {testimonial.title}
        </h3>
        <p className="text-gray-700 text-center mb-4">
          {testimonial.description}
        </p>
        <button
          onClick={onPlay}
          className={`px-4 py-2 rounded-full font-medium transition-colors ${
            isPlaying ? "bg-orange-500 text-white" : "bg-gray-200 text-orange-600 hover:bg-orange-100"
          }`}
        >
          {isPlaying ? "Playing..." : "Play Video"}
        </button>
      </div>
    </div>
  )
}
export default TestimonialCard;
