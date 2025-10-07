"use client"
import { Users, Zap, TrendingUp, Shield, Clock, Award} from "lucide-react"
import { motion } from "framer-motion"

export default function WhyChooseUsPage() {
  const benefits = [
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Lightning-Fast Efficiency",
      description:
        "Transform your daily operations from chaos to clarity. Our intelligent automation eliminates 90% of manual tasks, letting your team focus on what truly matters - growing your business.",
      features: [
        "🚀 Automated workflows that work 24/7 for you",
        "⚡ Real-time data sync across all departments",
        "🎯 Smart process optimization that learns and adapts",
        "📊 Instant decision-making with live dashboards",
        "🔄 Seamless integration with your existing tools",
      ],
      color: "bg-blue-100 text-blue-600",
      gradient: "from-blue-500 to-cyan-500",
      stats: "90% faster processing",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Perfectly Tailored for You",
      description:
        "No more forcing square pegs into round holes. Our system adapts to YOUR unique business needs, not the other way around. Built specifically for medical device professionals who demand excellence.",
      features: [
        "🏥 Medical industry expertise built-in from day one",
        "📋 Regulatory compliance that's always up-to-date",
        "🔧 Flexible configuration for any business size",
        "📈 Scalable architecture that grows with you",
        "👤 Personalized user experience for every role",
      ],
      color: "bg-green-100 text-green-600",
      gradient: "from-green-500 to-emerald-500",
      stats: "100% industry-focused",
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Unlimited Growth Potential",
      description:
        "Start small, dream big. Our cloud-native platform scales effortlessly from your first device to managing thousands. No limits, no compromises, no expensive upgrades.",
      features: [
        "☁️ Cloud-powered infrastructure that never sleeps",
        "🌍 Multi-location support across the globe",
        "👥 Unlimited users - bring your whole team aboard",
        "⚡ Performance that stays fast as you grow",
        "🔮 Future-proof technology that evolves with trends",
      ],
      color: "bg-purple-100 text-purple-600",
      gradient: "from-purple-500 to-pink-500",
      stats: "Scales to 10,000+ users",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Fort Knox-Level Security",
      description:
        "Your data is your most valuable asset. We protect it like our own with military-grade security that exceeds industry standards. Sleep peacefully knowing your information is safe.",
      features: [
        "🔐 Bank-level encryption protects every byte",
        "🏥 HIPAA compliance built into every feature",
        "🛡️ Regular security audits by top experts",
        "👮 Role-based access - right person, right data",
        "💾 Automatic backups with instant recovery",
      ],
      color: "bg-red-100 text-red-600",
      gradient: "from-red-500 to-orange-500",
      stats: "99.99% security uptime",
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Always-On Reliability",
      description:
        "When your business never stops, neither do we. Our 99.9% uptime guarantee means your operations run smoothly around the clock, backed by 24/7 monitoring and instant support.",
      features: [
        "⏰ 99.9% uptime guarantee - we mean it",
        "🔍 24/7 system monitoring by our expert team",
        "🔄 Automatic failover systems prevent downtime",
        "🛠️ Proactive maintenance during off-hours",
        "🚨 Instant alerts and lightning-fast resolution",
      ],
      color: "bg-orange-100 text-orange-600",
      gradient: "from-orange-500 to-yellow-500",
      stats: "99.9% uptime guaranteed",
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Proven Success Stories",
      description:
        "Join the winners' circle. Over 500+ medical device companies trust us with their most critical operations. Our track record speaks louder than any promise we could make.",
      features: [
        "🏆 500+ successful implementations worldwide",
        "📚 Proven methodology refined over 10+ years",
        "🎓 Comprehensive training that gets results",
        "🤝 Ongoing support that feels like family",
        "📈 Average 300% ROI within first year",
      ],
      color: "bg-teal-100 text-teal-600",
      gradient: "from-teal-500 to-blue-500",
      stats: "500+ happy customers",
    },
  ]

  

  return (
    <div className="min-h-screen bg-white">
    
     

      {/* Benefits Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Six Game-Changing Advantages</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each advantage is designed to solve real problems and deliver measurable results for your business
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 h-full p-8 border border-gray-100 group-hover:border-gray-200">
                  {/* Header */}
                  <div className="text-center mb-6">
                    <div
                      className={`w-16 h-16 ${benefit.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      {benefit.icon}
                    </div>
                    <div className="mb-2">
                      <span
                        className={`text-xs font-bold px-3 py-1 rounded-full bg-gradient-to-r ${benefit.gradient} text-white`}
                      >
                        {benefit.stats}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                    <p className="text-gray-600 text-base leading-relaxed mb-6">{benefit.description}</p>
                  </div>

                  {/* Features */}
                  <div>
                    <ul className="space-y-3">
                      {benefit.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start space-x-3">
                          <div className="text-lg">{feature.split(" ")[0]}</div>
                          <span className="text-gray-700 font-medium">
                            {feature.substring(feature.indexOf(" ") + 1)}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Join the Success Stories</h2>
              <p className="text-xl text-gray-600 mb-12">
                &quot;Innovation Labs transformed our entire operation. We&apos;ve seen incredible results that exceeded all our
                expectations.&quot;
              </p>

              
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Experience the Innovation Labs Advantage?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Join hundreds of medical device companies that have transformed their operations and achieved remarkable
              growth with our proven system.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-bold text-lg transition-colors shadow-lg hover:shadow-xl">
                🚀 Start Your Transformation
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-bold text-lg transition-colors">
                📞 Talk to Our Experts
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
