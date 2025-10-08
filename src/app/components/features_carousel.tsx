  "use client"

  import { useState } from "react"
  import { ChevronLeft, ChevronRight} from "lucide-react"
  import { motion } from "framer-motion"
  import { useRouter } from "next/navigation"
  const InventoryIcon = ({ className }: { className?: string }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
      <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" />
      <path d="M12 3v6" />
    </svg>
  )



  const ServiceIcon = ({ className }: { className?: string }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  )

  const AnalyticsIcon = ({ className }: { className?: string }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M3 3v18h18" />
      <path d="m19 9-5 5-4-4-3 3" />
    </svg>
  )

  const ERPIcon = ({ className }: { className?: string }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
      <path d="M9 9h6v6H9z" />
      <path d="M9 3v6" />
      <path d="M15 3v6" />
      <path d="M9 15v6" />
      <path d="M15 15v6" />
      <path d="M3 9h6" />
      <path d="M15 9h6" />
      <path d="M3 15h6" />
      <path d="M15 15h6" />
    </svg>
  )

  export default function FeaturesCarousel() {
    const router=useRouter();
    const cards = [
      {
        id: 1,
        type: "INVENTORY",
        title: "Medical Device\nInventory\nManagement",
        gradient: "bg-gradient-to-r from-blue-800 to-blue-600",
      },
     
      {
        id: 2,
        type: "SERVICE",
        title: "Service\nScheduling &\nMaintenance",
        gradient: "bg-gradient-to-r from-purple-800 to-purple-600",
      },
      {
        id: 3,
        type: "ANALYTICS",
        title: "Real-time\nReporting &\nAnalytics",
        gradient: "bg-gradient-to-r from-red-800 to-red-600",
      },
      {
        id: 4,
        type: "ERP",
        title: "Complete ERP\nCore Modules\nIntegration",
        gradient: "bg-gradient-to-r from-orange-800 to-orange-600",
      },
    ]

    const [startIndex, setStartIndex] = useState(0)
    const visibleCount = 3
    const showLeftChevron = startIndex > 0
    const showRightChevron = startIndex < cards.length - visibleCount
    const visibleCards = cards.slice(startIndex, startIndex + visibleCount)
    const totalDots = 3
    const [currentDot, setCurrentDot] = useState(0)

    const handlePrevious = () => {
      if (startIndex > 0) {
        setStartIndex(startIndex - 1)
        setCurrentDot((prev) => Math.max(prev - 1, 0))
      }
    }

    const handleNext = () => {
      if (startIndex < cards.length - visibleCount) {
        setStartIndex(startIndex + 1)
        setCurrentDot((prev) => Math.min(prev + 1, totalDots - 1))
      }
    }

  interface FeatureCard {
      id: number
      type: "INVENTORY" | "COMPLIANCE" | "SERVICE" | "ANALYTICS" | "ERP"
      title: string
      gradient: string
  }

  const handleDotClick = (dotIndex: number) => {
      setStartIndex(dotIndex * visibleCount)
  }

 
  const getButtonText = (type: FeatureCard["type"]): string => {
      switch (type) {
          case "SERVICE":
              return "Learn more"
          case "ANALYTICS":
              return "View demo"
          default:
              return "Explore"
      }
  }

    const cardVariants = {
      initial: { y: 0 },
      hovered: { y: 10 },
    }

    const imageVariants = {
      initial: { scale: 1 },
      hovered: { scale: 1.08 },
    }

    return (
      <div className="relative w-full max-w-5xl mx-auto my-0 left-[10vw]">
        <motion.h1
          className="font-bold font-sans text-4xl ml-[6vw] mb-[1.5vw]"
          initial={{ opacity: 0, y: "60px" }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 2 },
          }}
          viewport={{ once: true, amount: 0 }}
        >
          Our Solutions
        </motion.h1>

        <div className="flex relative gap-4 overflow-visible py-8 px-4 top-[5vw]">
          {visibleCards.map((card) => (
            <div key={card.id} className="flex-none w-[250px] transition-all sm:w-[350px] duration-300 ease-in-out mr-0">
              <motion.div
                className="flex flex-col h-[500px] rounded-lg overflow-visible shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-2px_rgba(0,0,0,0.05)]"
                variants={cardVariants}
                initial="initial"
                whileHover="hovered"
                animate="initial"
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="h-[250px] bg-gray-200 overflow-hidden">
                  <motion.img
                    src={`images/${card.type.toLowerCase()}.jpg`}
                    alt={card.title}
                    className="w-full h-full object-cover"
                    variants={imageVariants}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  />
                </div>
                <div className={`${card.gradient} p-6 flex-grow h-[400px] text-white flex flex-col`}>
                  <div className="flex items-center mb-4 gap-3">
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                      {card.type === "INVENTORY" && <InventoryIcon className="text-white" />}
                      {card.type === "SERVICE" && <ServiceIcon className="text-white w-5 h-5" />}
                      {card.type === "ANALYTICS" && <AnalyticsIcon className="text-white w-5 h-5" />}
                      {card.type === "ERP" && <ERPIcon className="text-white w-5 h-5" />}
                    </div>
                    <span className="uppercase text-sm font-bold tracking-wider whitespace-nowrap">{card.type}</span>
                  </div>

                  <h3 className="w-full text-3xl font-bold whitespace-pre-line leading-snug mb-6 px-10">{card.title}</h3>

                  
                </div>
              </motion.div>
            </div>
          ))}
        </div>

        {showLeftChevron && (
          <button
            onClick={handlePrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg z-10 border-none cursor-pointer transition-all hover:bg-gray-100"
            aria-label="Previous cards"
          >
            <ChevronLeft className="h-6 w-6 text-gray-700" />
          </button>
        )}

        {showRightChevron && (
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg z-10 border-none cursor-pointer transition-all hover:bg-gray-100"
            aria-label="Next cards"
          >
            <ChevronRight className="h-6 w-6 text-gray-700" />
          </button>
        )}

        <div className="mt-8 flex justify-center gap-2">
          {Array.from({ length: totalDots }).map((_, index) => (
            <motion.button
              key={index}
              className={`w-3 h-3 rounded-[9999px] bg-gray-100 ${index === currentDot ? "bg-[rgb(255,165,0)]" : ""}`}
              onClick={() => handleDotClick(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    )
  }
