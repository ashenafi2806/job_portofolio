"use client"
import { motion } from "framer-motion"
import { ChevronRight } from "lucide-react"

export default function IntroSection() {
  return (
    <section className="w-full py-50 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start gap-4 md:gap-16">
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 5, ease: "easeOut" },
            }}
            viewport={{ once: true, margin: "0px 0px -50px 0px" }}
          >
            <h1 className="text-black font-bold text-2xl md:text-3xl lg:text-4xl  leading-tight tracking-tight relative left-[10vw] top-[-6vw]">
              Medical Device
              <br />
              Management
              <br />
              Reimagined
            </h1>
          </motion.div>

          <div className="md:w-1/2">
            <motion.p
              className="text-lg md:text-xl text-black mb-8 leading-relaxed relative top-[-6vw] right-[10vw]"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: { duration: 1, delay: 0.1, ease: "easeOut" },
              }}
              viewport={{ once: true, margin: "0px 0px -50px 0px" }}
            >
              Innovation Labs delivers cutting-edge ERP and service management solutions specifically designed for
              medical device importers, distributors, and service providers. Our comprehensive platform streamlines
              operations, ensures regulatory compliance, and drives business growth in the medical sector.
            </motion.p>

            <motion.div className="inline-block">
              <a
                href="#"
                className="inline-flex items-center text-orange-500 font-medium text-lg hover:text-orange-600 transition-colors relative top-[-4vw] right-[10vw]"
              >
                Learn more
                <motion.span
                  className="inline-flex items-center"
                  whileHover={{ x: 10 }}
                  transition={{
                    type: "spring",
                    stiffness: 150,
                    damping: 12,
                    duration: 0.5,
                  }}
                >
                  <ChevronRight className="ml-2 h-5 w-5" />
                </motion.span>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
