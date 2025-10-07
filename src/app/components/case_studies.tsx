"use client"

import { ChevronRight, ChevronLeft } from "lucide-react"
import { useState } from "react"
import Image from "next/image"
const case_studies = [
  {
    id: 1,
    imageUrl: "/placeholder.svg?height=400&width=600",
    title: "MEDICAL DEVICE INVENTORY",
    description:
      "Streamlining inventory management for a leading medical device distributor with real-time tracking and automated compliance reporting...",
    techtags: ["ERP INTEGRATION", "INVENTORY TRACKING", "COMPLIANCE AUTOMATION", "REAL-TIME ANALYTICS"],
  },
  {
    id: 2,
    imageUrl: "/placeholder.svg?height=400&width=600",
    title: "SERVICE MANAGEMENT",
    description:
      "Implementing comprehensive service management solution for medical equipment maintenance and customer support operations...",
    techtags: ["SERVICE SCHEDULING", "MAINTENANCE TRACKING", "CUSTOMER PORTAL", "MOBILE APP"],
  },
  {
    id: 3,
    imageUrl: "/placeholder.svg?height=400&width=600",
    title: "REGULATORY COMPLIANCE",
    description:
      "Automating regulatory compliance processes for medical device importers with integrated documentation and audit trails...",
    techtags: ["REGULATORY AUTOMATION", "DOCUMENT MANAGEMENT", "AUDIT TRAILS", "COMPLIANCE REPORTING"],
  },
  {
    id: 4,
    imageUrl: "/placeholder.svg?height=400&width=600",
    title: "DISTRIBUTION NETWORK",
    description:
      "Optimizing distribution network operations for medical device suppliers with advanced logistics and tracking capabilities...",
    techtags: ["LOGISTICS OPTIMIZATION", "SUPPLY CHAIN", "TRACKING SYSTEMS", "NETWORK MANAGEMENT"],
  },
  {
    id: 5,
    imageUrl: "/placeholder.svg?height=400&width=600",
    title: "BUSINESS INTELLIGENCE",
    description:
      "Delivering comprehensive business intelligence solution for medical device companies with advanced analytics and reporting...",
    techtags: ["BUSINESS INTELLIGENCE", "ADVANCED ANALYTICS", "CUSTOM DASHBOARDS", "PREDICTIVE INSIGHTS"],
  },
]

export default function CaseStudies() {
  const [current, setCurrent] = useState(0)

  const handlePrev = () => setCurrent((prev) => (prev === 0 ? case_studies.length - 1 : prev - 1))
  const handleNext = () => setCurrent((prev) => (prev === case_studies.length - 1 ? 0 : prev + 1))


const handleSelect = (idx: number) => setCurrent(idx)

  const study = case_studies[current]

  return (
    <div className="w-full bg-white">
      <div className="w-full max-w-7xl mx-auto px-6 py-16">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start">
          <div className="flex-1">
            <h2 className="text-4xl lg:text-5xl font-bold text-black leading-tight lg:ml-20">Case studies</h2>
          </div>
          <div className="flex-1 space-y-8 lg:space-y-20">
            <p className="text-lg text-gray-700 leading-relaxed">
              Innovative solutions and demonstrable results – discover how
              <br />
              we&apos;ve helped medical device companies transform their operations.
            </p>
            <a
              href="#"
              className="inline-flex items-center text-orange-500 hover:text-orange-600 font-normal text-lg transition-colors duration-200 group"
            >
              See all case studies
              <ChevronRight className="ml-1 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
            </a>
          </div>
        </div>
      </div>

      <div className="w-full px-6 mb-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex rounded-3xl overflow-hidden shadow-2xl bg-white min-h-[400px]">
            <div className="w-1/2 relative">
              <Image
                src={study.imageUrl || "/placeholder.svg"}
                alt={study.title}
                width={350}
                height={250}
                className=" object-cover"
              />
            </div>
            <div className="w-1/2 bg-gradient-to-r from-[#3a224f] to-[#ff7f29] p-10 flex flex-col justify-center text-white">
              <span className="uppercase text-xs tracking-widest mb-2 opacity-90">{study.title}</span>
              <h2 className="text-4xl font-bold mb-6 leading-tight">{study.description}</h2>
              <div className="flex flex-wrap gap-3 mb-8">
                {study.techtags.map((tag) => (
                  <span
                    key={tag}
                    className="border border-white rounded-full px-4 py-2 text-sm font-semibold bg-white/10 backdrop-blur-sm"
                  >
                    <a href="#">{tag}</a>
                  </span>
                ))}
              </div>
              <a
                href="#"
                className="inline-flex items-center text-lg font-medium hover:text-orange-200 transition-colors duration-200"
              >
                Learn more{" "}
                <ChevronRight className="ml-1 h-5 w-5 group-hover:translate-x-5 transition-transform duration-200" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center gap-4 pb-16">
        <button
          onClick={handlePrev}
          className="p-2 rounded-full hover:bg-orange-100 transition-colors duration-200"
          aria-label="Previous case study"
        >
          <ChevronLeft className="h-10 w-10 text-orange-500" />
        </button>
        <div className="flex items-center gap-2">
          {case_studies.map((_, idx) => (
            <button
              key={idx}
              onClick={() => handleSelect(idx)}
              className={`mx-1 text-lg font-medium transition-colors duration-200 ${
                idx === current
                  ? "text-orange-500 border-b-2 border-orange-500 pb-1"
                  : "text-gray-400 hover:text-gray-600"
              }`}
            >
              {String(idx + 1).padStart(2, "0")}
            </button>
          ))}
        </div>
        <button
          onClick={handleNext}
          className="p-2 rounded-full hover:bg-orange-100 transition-colors duration-200"
          aria-label="Next case study"
        >
          <ChevronRight className="h-10 w-10 text-orange-500" />
        </button>
      </div>
    </div>
  )
}
