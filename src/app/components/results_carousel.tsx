"use client"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const results = [
  { title: "90%", description: "Reduction in manual processes" },
  { title: "50%", description: "Faster regulatory compliance" },
  { title: "3x", description: "Improved inventory turnover" },
  { title: "75%", description: "Decrease in service response time" },
  { title: "60%", description: "Cost savings in operations" },
  { title: "99%", description: "System uptime reliability" },
]

export default function ResultsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [cardsToShow, setCardsToShow] = useState(1)

  useEffect(() => {
    const updateCardsToShow = () => {
      if (window.innerWidth < 640) {
        setCardsToShow(1) // Mobile
      } else if (window.innerWidth < 1024) {
        setCardsToShow(2) // Tablet
      } else {
        setCardsToShow(3) // Desktop
      }
    }

    updateCardsToShow()
    window.addEventListener("resize", updateCardsToShow)
    return () => window.removeEventListener("resize", updateCardsToShow)
  }, [])

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, results.length - cardsToShow))
  }

  const goToSlide = (index: number) => setCurrentIndex(index)

  return (
    <div className="w-full py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 text-black"
      >
        Results We&apos;ve Delivered
      </motion.h2>

      <div className="relative mx-auto max-w-6xl">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              width: `${(results.length * 100) / cardsToShow}%`,
              transform: `translateX(-${(currentIndex * 100) / results.length}%)`,
            }}
          >
            {results.map((item, index) => (
              <div
                key={index}
                className="flex-shrink-0 px-2 sm:px-3"
                style={{ width: `${100 / results.length}%` }}
              >
                <div className="bg-white p-4 sm:p-6 lg:p-8 min-h-[220px] sm:min-h-[260px] lg:min-h-[280px] border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow flex flex-col justify-center items-center text-center space-y-4 sm:space-y-6">
                  <h3 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#FF6B35]">
                    {item.title}
                  </h3>
                  <p className="text-black text-base sm:text-lg lg:text-xl leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Left button */}
        {currentIndex > 0 && (
          <div className="absolute left-0 sm:left-2 top-1/2 -translate-y-1/2 z-20 bg-white p-2 sm:p-3 lg:p-4 rounded-full shadow-lg hover:bg-gray-100 border border-gray-300">
            <button onClick={handlePrev} className="flex items-center justify-center">
              <motion.div whileHover={{ x: -10 }} transition={{ type: "spring", stiffness: 100, damping: 20 }}>
                <ChevronLeft className="h-6 w-6 sm:h-10 sm:w-10 lg:h-12 lg:w-12 text-orange-500" />
              </motion.div>
            </button>
          </div>
        )}

        {/* Right button */}
        {currentIndex < results.length - cardsToShow && (
          <div className="absolute right-0 sm:right-2 top-1/2 -translate-y-1/2 z-20 bg-white p-2 sm:p-3 lg:p-4 rounded-full shadow-lg hover:bg-gray-100 border border-gray-300">
            <button onClick={handleNext} className="flex items-center justify-center">
              <motion.div whileHover={{ x: 10 }} transition={{ type: "spring", stiffness: 100, damping: 20 }}>
                <ChevronRight className="h-6 w-6 sm:h-10 sm:w-10 lg:h-12 lg:w-12 text-orange-500" />
              </motion.div>
            </button>
          </div>
        )}
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-6 sm:mt-8 lg:mt-10 gap-2 sm:gap-3 lg:gap-5">
        {Array.from({ length: results.length - cardsToShow + 1 }).map((_, index) => (
          <motion.button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 rounded-full transition-colors ${
              index === currentIndex ? "bg-orange-500" : "bg-gray-300 hover:bg-gray-400"
            }`}
            aria-label={`Go to slide ${index + 1}`}
            animate={{ scale: index === currentIndex ? 1.3 : 1 }}
          />
        ))}
      </div>
    </div>
  )
}
