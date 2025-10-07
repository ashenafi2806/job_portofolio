"use client"
import { useEffect } from "react"
import Hero from "./components/hero"
import IntroSection from "./components/intro_section"
import ResultsCarousel from "./components/results_carousel"
import FeaturesCarousel from "./components/features_carousel"


export default function Home() {
  useEffect(() => {
    const handleScroll = () => {
      const scrollElements = document.querySelectorAll(".scroll-reveal")
      scrollElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top
        if (elementTop < window.innerHeight - 150) {
          element.classList.add("active")
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <main className="space-y-0">
      <Hero />
      <section className="w-full py-12 md:py-24 bg-white scroll-reveal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <IntroSection />
        </div>
      </section>
      <section className="w-full py-12 md:py-24 bg-white scroll-reveal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ResultsCarousel />
        </div>
      </section>
      <section className="w-full py-12 md:py-24 scroll-reveal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FeaturesCarousel />
        </div>
      </section>
      
   
     
      
    </main>
  )
}
