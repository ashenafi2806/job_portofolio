"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % 3)
    }, 10000)

    return () => clearInterval(interval)
  }, [])

  const slides = [
    {
      background: (
        <div className="w-full h-full bg-gradient-to-br from-blue-900 via-purple-900 to-blue-800">
          
        </div>
      ),
      title: "Revolutionize Your Medical Device Business",
      description:
        "Transform your operations with our All-in-One ERP & Service Management System designed specifically for medical device importers, distributors, and service providers.",
      indicatorTitle: "DISCOVER OUR SOLUTION",
    },
    {
      background: (
        <div className="w-full h-full bg-gradient-to-br from-green-900 via-teal-900 to-blue-900">
         
        </div>
      ),
      title: "Efficient, Tailored, Scalable Solutions",
      description:
        "Built specifically for the medical sector with automated workflows, regulatory compliance, and intelligent process management that grows with your business.",
      indicatorTitle: "EXPLORE FEATURES",
    },
    {
      background: (
        <div className="w-full h-full bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900">
         
        </div>
      ),
      title: "Complete ERP & Service Management",
      description:
        "Comprehensive modules covering inventory, compliance, customer management, financial operations, and real-time analytics for the medical device industry.",
      indicatorTitle: "VIEW ERP MODULES",
    },
  ]

  return (
    <div className="relative w-full h-[850px] overflow-hidden rounded-b-[45px]">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            activeSlide === index ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <div className="absolute inset-0 bg-black">
            {slide.background}
            <div className="absolute inset-0 bg-black/40"></div>
          </div>

          <div className="relative z-20 container mx-auto h-full flex flex-col justify-center px-4 md:px-6 lg:px-8">
            <div className="max-w-2xl text-white mb-20">
              <motion.h1
                className="text-4xl md:text-6xl font-bold my-20"
                initial={{ opacity: 0, y: 50 }}
                animate={{
                  opacity: activeSlide === index ? 1 : 0,
                  y: activeSlide === index ? 0 : 50,
                }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {slide.title}
              </motion.h1>

              <motion.p
                className="text-xl mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{
                  opacity: activeSlide === index ? 1 : 0,
                  y: activeSlide === index ? 0 : 30,
                }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                {slide.description}
              </motion.p>

              
            </div>
          </div>
        </div>
      ))}

      <div className="absolute bottom-10 left-0 right-0 z-30 px-4 md:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 rounded-xl p-4">
            {slides.map((slide, index) => {
              const isActive = activeSlide === index

              return (
                <div key={index} className="w-full md:w-1/3 flex flex-col">
                  <div className="flex items-center gap-3 mb-2">
                    <div
                      className={`flex items-center justify-center w-8 h-8 rounded-full text-sm font-bold
                        ${isActive ? "bg-[#FF6B35] text-white" : "bg-white/30 text-white"}`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    <a
                      href={`#slide-${index}`}
                      onClick={(e) => {
                        e.preventDefault()
                        setActiveSlide(index)
                      }}
                      className={`text-sm font-semibold uppercase ${isActive ? "text-white" : "text-white/50"}`}
                    >
                      {slide.indicatorTitle}
                    </a>
                  </div>
                  <div className="relative h-2 w-3/4 bg-white/20 rounded-full overflow-hidden mx-auto">
                    <motion.div
                      className="absolute top-0 left-0 h-full rounded-full bg-[#FF6B35]"
                      style={{
                        background: "linear-gradient(90deg, #ff6b35 60%, #ffb347 100%)",
                        boxShadow: isActive ? "0 0 8px 2px #ff6b35, 0 0 16px 4px #ffb347" : "none",
                      }}
                      initial={{ width: "0%" }}
                      animate={{
                        width: isActive ? "100%" : "0%",
                      }}
                      transition={{
                        duration: isActive ? 10 : 0,
                        ease: "linear",
                      }}
                    />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 right-10 z-40">
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2">
          <div className="flex flex-col items-center">
            <div className="text-white text-xs mb-1">INNOVATION LABS</div>
            <div className="font-bold text-white mb-1">Medical ERP</div>
            <div className="flex text-[#FF6B35]">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <div className="text-white text-xs">TRUSTED SOLUTION</div>
          </div>
        </div>
      </div>
    </div>
  )
}
