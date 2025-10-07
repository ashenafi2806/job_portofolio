"use client"
import {
  CheckCircle,
  DollarSign,
  Truck,
  Users,
  ShoppingCart,
  BarChart3,
  Cog,
  Building,
  FileText,
  Calculator,
  TrendingUp,
  Package,
  UserCheck,
} from "lucide-react"
import { motion } from "framer-motion"
export default function ERPCoreModulesPage() {
  const modules = [
    {
      icon: <DollarSign className="h-8 w-8" />,
      title: "Financial Management & Accounting",
      description: "Complete financial control with automated accounting processes",
      details: [
        "General ledger and chart of accounts",
        "Accounts payable and receivable",
        "Multi-currency support",
        "Financial reporting and analytics",
        "Budget planning and control",
        "Tax management and compliance",
      ],
      color: "bg-green-100 text-green-600",
    },
    {
      icon: <Truck className="h-8 w-8" />,
      title: "Supply Chain & Procurement",
      description: "Streamlined procurement and supplier management",
      details: [
        "Supplier relationship management",
        "Purchase order automation",
        "Vendor performance tracking",
        "Contract management",
        "Procurement analytics",
        "Supply chain optimization",
      ],
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Human Resources & Payroll",
      description: "Comprehensive HR management and payroll processing",
      details: [
        "Employee information management",
        "Payroll processing and benefits",
        "Time and attendance tracking",
        "Performance management",
        "Recruitment and onboarding",
        "Training and development",
      ],
      color: "bg-purple-100 text-purple-600",
    },
    {
      icon: <ShoppingCart className="h-8 w-8" />,
      title: "Sales & Distribution Management",
      description: "End-to-end sales process management and distribution",
      details: [
        "Sales order processing",
        "Customer management (CRM)",
        "Pricing and discount management",
        "Sales forecasting and analytics",
        "Distribution channel management",
        "Commission tracking",
      ],
      color: "bg-orange-100 text-orange-600",
    },
    {
      icon: <Package className="h-8 w-8" />,
      title: "Inventory & Warehouse Management",
      description: "Advanced inventory control and warehouse operations",
      details: [
        "Real-time inventory tracking",
        "Multi-location warehouse management",
        "Automated reorder points",
        "Lot and serial number tracking",
        "Inventory valuation methods",
        "Warehouse optimization",
      ],
      color: "bg-teal-100 text-teal-600",
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Business Intelligence & Reporting",
      description: "Data-driven insights and comprehensive reporting",
      details: [
        "Executive dashboards",
        "Custom report builder",
        "Key performance indicators (KPIs)",
        "Data visualization tools",
        "Predictive analytics",
        "Business intelligence automation",
      ],
      color: "bg-indigo-100 text-indigo-600",
    },
    {
      icon: <Building className="h-8 w-8" />,
      title: "Asset Management",
      description: "Complete lifecycle management of company assets",
      details: [
        "Fixed asset tracking",
        "Depreciation calculations",
        "Maintenance scheduling",
        "Asset utilization analysis",
        "Disposal and retirement",
        "Insurance and warranty tracking",
      ],
      color: "bg-red-100 text-red-600",
    },
    {
      icon: <FileText className="h-8 w-8" />,
      title: "Document Management",
      description: "Centralized document storage and workflow management",
      details: [
        "Document version control",
        "Workflow automation",
        "Electronic approvals",
        "Document security and access control",
        "Audit trail tracking",
        "Integration with other modules",
      ],
      color: "bg-yellow-100 text-yellow-600",
    },
    {
      icon: <Calculator className="h-8 w-8" />,
      title: "Cost Management",
      description: "Detailed cost tracking and analysis across operations",
      details: [
        "Activity-based costing",
        "Project cost tracking",
        "Cost center management",
        "Profitability analysis",
        "Budget vs. actual reporting",
        "Cost optimization insights",
      ],
      color: "bg-pink-100 text-pink-600",
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Planning & Forecasting",
      description: "Strategic planning and demand forecasting capabilities",
      details: [
        "Demand planning and forecasting",
        "Capacity planning",
        "Strategic business planning",
        "Scenario modeling",
        "Resource allocation",
        "Performance monitoring",
      ],
      color: "bg-cyan-100 text-cyan-600",
    },
    {
      icon: <UserCheck className="h-8 w-8" />,
      title: "Quality Management",
      description: "Comprehensive quality control and assurance processes",
      details: [
        "Quality control procedures",
        "Non-conformance tracking",
        "Corrective and preventive actions",
        "Quality metrics and reporting",
        "Supplier quality management",
        "Continuous improvement processes",
      ],
      color: "bg-emerald-100 text-emerald-600",
    },
    {
      icon: <Cog className="h-8 w-8" />,
      title: "System Administration",
      description: "Complete system configuration and user management",
      details: [
        "User access control and security",
        "System configuration management",
        "Data backup and recovery",
        "Integration management",
        "Performance monitoring",
        "System maintenance tools",
      ],
      color: "bg-gray-100 text-gray-600",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-gradient-to-br from-purple-50 via-white to-blue-50 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
           

            <motion.h1
              className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Complete ERP Solution for Medical Device Businesses
            </motion.h1>

            <motion.p
              className="text-xl text-gray-600 leading-relaxed mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Integrated modules that work together to streamline your entire business operation, from finance to supply
              chain management.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Modules Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {modules.map((module, index) => (
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
                      <div className={`p-3 rounded-lg ${module.color}`}>{module.icon}</div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{module.title}</h3>
                        <p className="text-gray-600">{module.description}</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <ul className="space-y-3">
                      {module.details.map((detail, detailIndex) => (
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

      {/* Integration Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Seamlessly Integrated Modules
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              All modules work together as a unified system, sharing data in real-time to provide a complete view of
              your medical device business operations.
            </motion.p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Cog className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Real-time Integration</h3>
                <p className="text-gray-600">Data flows seamlessly between all modules in real-time</p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Unified Reporting</h3>
                <p className="text-gray-600">Comprehensive reports across all business functions</p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Single Sign-On</h3>
                <p className="text-gray-600">One login provides access to all system modules</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Streamline Your Entire Business?
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
              Experience the power of integrated ERP modules designed specifically for the medical device industry.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-medium transition-colors">
                Request Demo
              </button>
              <button className="border border-white text-white hover:bg-white hover:text-purple-600 px-6 py-3 rounded-lg font-medium transition-colors">
                Get Pricing
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
