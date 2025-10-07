"use client"
import {
  CheckCircle,
  Calendar,
  FileText,
  Shield,
  Users,
  BarChart3,
  Settings,
  Smartphone,
  Database,
  AlertTriangle,
  Clock,
} from "lucide-react"
import { motion } from "framer-motion"
export default function MedicalDeviceFeaturesPage() {
  const features = [
    {
      icon: <Database className="h-8 w-8" />,
      title: "Device Inventory Tracking",
      description: "Comprehensive tracking of medical devices throughout their lifecycle",
      details: [
        "Real-time inventory levels and locations",
        "Serial number and batch tracking",
        "Expiration date monitoring",
        "Automated reorder points",
        "Multi-location inventory management",
      ],
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: <Calendar className="h-8 w-8" />,
      title: "Service Scheduling & Maintenance",
      description: "Automated scheduling and tracking of maintenance activities",
      details: [
        "Preventive maintenance scheduling",
        "Service technician assignment",
        "Work order management",
        "Maintenance history tracking",
        "Service performance analytics",
      ],
      color: "bg-green-100 text-green-600",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Regulatory Compliance",
      description: "Ensure compliance with medical device regulations",
      details: [
        "FDA and CE marking compliance",
        "Quality management system (QMS)",
        "Audit trail documentation",
        "Regulatory reporting automation",
        "Risk management integration",
      ],
      color: "bg-red-100 text-red-600",
    },
    {
      icon: <FileText className="h-8 w-8" />,
      title: "Documentation Management",
      description: "Centralized document control and version management",
      details: [
        "Technical documentation storage",
        "Version control and approval workflows",
        "Document distribution tracking",
        "Electronic signatures",
        "Regulatory document templates",
      ],
      color: "bg-purple-100 text-purple-600",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Customer Relationship Management",
      description: "Manage relationships with healthcare providers and distributors",
      details: [
        "Customer profile management",
        "Sales opportunity tracking",
        "Service history per customer",
        "Contract and warranty management",
        "Customer communication logs",
      ],
      color: "bg-orange-100 text-orange-600",
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Real-time Analytics & Reporting",
      description: "Comprehensive insights into your medical device operations",
      details: [
        "Device performance dashboards",
        "Service efficiency metrics",
        "Compliance status reports",
        "Inventory turnover analysis",
        "Custom report builder",
      ],
      color: "bg-teal-100 text-teal-600",
    },
    {
      icon: <AlertTriangle className="h-8 w-8" />,
      title: "Alert & Notification System",
      description: "Proactive alerts for critical events and deadlines",
      details: [
        "Maintenance due notifications",
        "Compliance deadline alerts",
        "Inventory shortage warnings",
        "Service escalation alerts",
        "Customizable notification rules",
      ],
      color: "bg-yellow-100 text-yellow-600",
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Mobile Field Service",
      description: "Mobile app for field technicians and service teams",
      details: [
        "Mobile work order access",
        "Offline capability",
        "Photo and signature capture",
        "GPS tracking and routing",
        "Real-time status updates",
      ],
      color: "bg-indigo-100 text-indigo-600",
    },
    {
      icon: <Settings className="h-8 w-8" />,
      title: "Configuration Management",
      description: "Manage device configurations and software versions",
      details: [
        "Device configuration tracking",
        "Software version management",
        "Configuration change control",
        "Compatibility matrix",
        "Update deployment tracking",
      ],
      color: "bg-gray-100 text-gray-600",
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Workflow Automation",
      description: "Automate routine processes and approvals",
      details: [
        "Automated approval workflows",
        "Process standardization",
        "Task assignment automation",
        "Escalation procedures",
        "Performance monitoring",
      ],
      color: "bg-pink-100 text-pink-600",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            

            <motion.h1
              className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Comprehensive Medical Device Management Features
            </motion.h1>

            <motion.p
              className="text-xl text-gray-600 leading-relaxed mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Everything you need to manage medical devices, ensure compliance, and deliver exceptional service to
              healthcare providers.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow h-full p-6">
                  <div className="mb-6">
                    <div className="flex items-start space-x-4">
                      <div className={`p-3 rounded-lg ${feature.color}`}>{feature.icon}</div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                        <p className="text-gray-600">{feature.description}</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <ul className="space-y-3">
                      {feature.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">{detail}</span>
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
              Ready to Transform Your Medical Device Operations?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Get started with our comprehensive medical device management solution and see the difference it makes for
              your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-medium transition-colors">
                Schedule a Demo
              </button>
              <button className="border border-white text-white hover:bg-white hover:text-blue-600 px-6 py-3 rounded-lg font-medium transition-colors">
                Contact Sales
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
