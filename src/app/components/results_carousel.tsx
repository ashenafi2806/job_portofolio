"use client"
import { motion } from "framer-motion"
import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const results = [
  {
    title: "90%",
    description: "Reduction in manual processes",
  },
  {
    title: "50%",
    description: "Faster regulatory compliance",
  },
  {
    title: "3x",
    description: "Improved inventory turnover",
  },
  {
    title: "75%",
    description: "Decrease in service response time",
  },
  {
    title: "60%",
    description: "Cost savings in operations",
  },
  {
    title: "99%",
    description: "System uptime reliability",
  },
]

export default function ResultsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const cardsToShow = 4
  const cardWidthPercentage = 100 / cardsToShow

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    }
  }

  const handleNext = () => {
    if (currentIndex < results.length - cardsToShow) {
      setCurrentIndex(currentIndex + 1)
    }
  }

const goToSlide = (index: number) => {
    setCurrentIndex(index)
}

  return (
    <div className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative left-[10vw] top-[-12vw] text-3xl md:text-4xl font-bold mb-12 text-black "
      >
        Results We&apos;ve Delivered
      </motion.h2>

      <div className="relative mx-auto max-w-[90vw] left-[10vw] top-[-6vw]">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 gap-5 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * cardWidthPercentage}%)`,
              width: `${(results.length * 100) / cardsToShow}%`,
            }}
          >
            {results.map((item, index) => (
              <div key={index} className="px-2 flex-shrink-0" style={{ width: `${cardWidthPercentage * 0.73}%` }}>
                <div className="bg-white p-6 h-70 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow flex flex-col justify-center items-center text-center space-y-8">
                  <h3 className="text-4xl md:text-5xl font-bold mb-6 text-[#FF6B35]">{item.title}</h3>
                  <p className="text-black text-lg mt-4 mb-6">{item.description}</p>
                 
                </div>
              </div>
            ))}
          </div>
        </div>

        {currentIndex > 0 && (
          <div className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white p-4 rounded-full shadow-lg hover:bg-gray-100 border border-gray-300">
            <button onClick={handlePrev} className="flex items-center justify-center">
              <motion.div whileHover={{ x: -10 }} transition={{ type: "spring", stiffness: 100, damping: 20 }}>
                <ChevronLeft className="h-16 w-16 text-orange-500" />
              </motion.div>
            </button>
          </div>
        )}

        {currentIndex < results.length - cardsToShow && (
          <div className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white p-6 rounded-full shadow-lg hover:bg-gray-100 border border-gray-300">
            <button onClick={handleNext} className="flex items-center justify-center">
              <motion.div whileHover={{ x: 10 }} transition={{ type: "spring", stiffness: 100, damping: 20 }}>
                <ChevronRight className="h-16 w-16 text-orange-500" />
              </motion.div>
            </button>
          </div>
        )}
      </div>

      <div className="flex justify-center mt-10 gap-5">
        {Array.from({
          length: Math.ceil(results.length - cardsToShow + 1),
        }).map((_, index) => (
          <motion.button
            key={index}
            onClick={() => goToSlide(index)}
            className={`mx-1 w-5 h-5 rounded-full transition-colors ${
              index === currentIndex ? "bg-orange-500" : "bg-gray-300 hover:bg-gray-400"
            }`}
            aria-label={`Go to slide ${index + 1}`}
            animate={{
              scale: index === currentIndex ? 1.5 : 1,
            }}
          />
        ))}
      </div>
    </div>
  )
}
