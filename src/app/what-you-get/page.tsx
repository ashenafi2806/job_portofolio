"use client"
import { ArrowRight, Zap, Shield, Star, Target, TrendingUp, Award } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"

export default function WhatYouGetPage() {
  const solutions = [
    {
      id: 1,
      title: "🏥 Medical Device & Service Management Suite",
      subtitle: "Everything you need to manage medical devices like a pro",
      description:
        "The complete toolkit designed specifically for medical device professionals who demand excellence and efficiency in every operation.",
      features: [
        "📦 Smart inventory tracking that never misses a device",
        "🔧 Automated service scheduling that keeps everything running",
        "📋 Compliance documentation that passes every audit",
        "👥 Customer relationship tools that build lasting partnerships",
        "📊 Real-time analytics that reveal hidden opportunities",
        "📱 Mobile field service that works anywhere, anytime",
        "🚨 Intelligent alerts that prevent problems before they happen",
        "⚙️ Configuration management that keeps everything organized",
      ],
      link: "/medical-device-features",
      color: "bg-blue-600",
      hoverColor: "hover:bg-blue-700",
      bgGradient: "bg-gradient-to-br from-blue-50 to-blue-100",
      gradient: "from-blue-500 to-cyan-500",
      stats: "90% faster operations",
      icon: "🏥",
    },
    {
      id: 2,
      title: "💼 Complete ERP Business Engine",
      subtitle: "Your entire business, perfectly orchestrated",
      description:
        "A comprehensive enterprise resource planning system that connects every part of your medical device business into one powerful, unified platform.",
      features: [
        "💰 Financial management that maximizes every dollar",
        "🚚 Supply chain optimization that never runs dry",
        "👨‍💼 HR and payroll systems that keep teams happy",
        "📈 Sales management that closes more deals",
        "🏪 Warehouse operations that run like clockwork",
        "🧠 Business intelligence that predicts the future",
        "🏢 Asset management that protects your investments",
        "✅ Quality systems that ensure perfection",
      ],
      link: "/erp-core-modules",
      color: "bg-purple-600",
      hoverColor: "hover:bg-purple-700",
      bgGradient: "bg-gradient-to-br from-purple-50 to-purple-100",
      gradient: "from-purple-500 to-pink-500",
      stats: "300% ROI increase",
      icon: "💼",
    },
  ]

  const additionalBenefits = [
    {
      title: "🔄 Seamless Integration Magic",
      description:
        "All systems work together like a perfectly choreographed dance - no data silos, no manual transfers, just pure efficiency.",
      icon: <Zap className="h-8 w-8 text-blue-500" />,
      stat: "100% data sync",
    },
    {
      title: "📈 Unlimited Growth Runway",
      description:
        "Start with 10 users or 10,000 - our platform scales effortlessly as your business reaches new heights.",
      icon: <TrendingUp className="h-8 w-8 text-green-500" />,
      stat: "Scales to 10K+ users",
    },
    {
      title: "🎯 Industry-Specific Expertise",
      description:
        "Built by medical device experts, for medical device professionals - every feature designed with your success in mind.",
      icon: <Target className="h-8 w-8 text-purple-500" />,
      stat: "100% industry-focused",
    },
    {
      title: "🛡️ Enterprise-Grade Support",
      description:
        "24/7 expert support, regular updates, and a dedicated success team that treats your success as their mission.",
      icon: <Shield className="h-8 w-8 text-red-500" />,
      stat: "24/7 support",
    },
  ]

  const valueProps = [
    { icon: "⚡", title: "Lightning Fast", desc: "90% faster than traditional systems" },
    { icon: "🔒", title: "Bank-Level Security", desc: "Your data protected like Fort Knox" },
    { icon: "🌍", title: "Global Ready", desc: "Multi-location, multi-currency support" },
    { icon: "🚀", title: "Future-Proof", desc: "Always updated with latest technology" },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Header */}
      <section className="bg-gradient-to-br from-gray-50 via-white to-blue-50 py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-full text-sm font-medium mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Award className="h-4 w-4 mr-2" />
              Complete Solution Suite - Everything Included
            </motion.div>

            <motion.h1
              className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              What You Get With{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Innovation Labs
              </span>
            </motion.h1>

            <motion.p
              className="text-xl text-gray-600 leading-relaxed mb-12 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Two powerful solution suites that work together seamlessly to transform your medical device business from
              ordinary to extraordinary.
            </motion.p>

            {/* Value Props */}
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {valueProps.map((prop, index) => (
                <div key={index} className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="text-2xl mb-2">{prop.icon}</div>
                  <div className="font-bold text-gray-900 text-sm">{prop.title}</div>
                  <div className="text-xs text-gray-600">{prop.desc}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Solutions */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Two Powerful Solution Suites</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each suite is packed with features designed to solve real problems and deliver measurable results
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden h-full">
                  {/* Header */}
                  <div className={`${solution.bgGradient} p-8 relative overflow-hidden`}>
                    <div className="absolute top-4 right-4">
                      <span
                        className={`text-xs font-bold px-3 py-1 rounded-full bg-gradient-to-r ${solution.gradient} text-white`}
                      >
                        {solution.stats}
                      </span>
                    </div>

                    <div className="text-4xl mb-4">{solution.icon}</div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{solution.title}</h3>
                    <p className="text-lg font-medium text-gray-700 mb-4">{solution.subtitle}</p>
                    <p className="text-gray-600">{solution.description}</p>
                  </div>

                  {/* Features */}
                  <div className="p-8">
                    <h4 className="font-bold text-gray-900 mb-6 text-lg">🎯 What&apos;s Included:</h4>
                    <ul className="space-y-4 mb-8">
                      {solution.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start space-x-3">
                          <div className="text-lg">{feature.split(" ")[0]}</div>
                          <span className="text-gray-700 font-medium leading-relaxed">
                            {feature.substring(feature.indexOf(" ") + 1)}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <Link href={solution.link}>
                      <button
                        className={`w-full ${solution.color} ${solution.hoverColor} text-white px-6 py-4 rounded-xl font-bold text-lg transition-all duration-300 inline-flex items-center justify-center group-hover:scale-105 shadow-lg hover:shadow-xl`}
                      >
                        🚀 Explore All Features
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Benefits */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Plus These Game-Changing Benefits</h2>
            <p className="text-xl text-gray-600">
              Everything you need for a complete medical device management transformation
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {additionalBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 h-full">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 p-3 bg-gray-50 rounded-lg group-hover:scale-110 transition-transform duration-300">
                      {benefit.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-xl font-bold text-gray-900">{benefit.title}</h3>
                        <span className="text-xs font-bold px-2 py-1 bg-green-100 text-green-700 rounded-full">
                          {benefit.stat}
                        </span>
                      </div>
                      <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
                <div className="flex items-center justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 text-yellow-300 fill-current" />
                  ))}
                </div>
                <blockquote className="text-xl mb-4">
                  &quot;Innovation Labs gave us everything we needed and more. The ROI was incredible - 300% increase in just
                  6 months!&quot;
                </blockquote>
                <div className="text-blue-100">- Medical Device Industry Leader</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Ready to Get Everything You Need?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your medical device business with our comprehensive solution suite. Everything included, nothing
              extra to buy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/" className="bg-[#FF6B35] hover:bg-[#FF8C5A] text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors shadow-lg hover:shadow-xl">
                🚀 Start Your Transformation
              </Link>
              <Link href="/contact" className="border-2 border-gray-300 text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-bold text-lg transition-colors">
                📞 Talk to Our Experts
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
