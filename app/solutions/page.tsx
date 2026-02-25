"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Bot, Database, ShoppingCart, Calendar, TrendingUp, BarChart3, Workflow } from "lucide-react"
import Navigation from "@/components/navigation"

export default function SolutionsPage() {
  const solutions = [
    {
      category: "Customer Service",
      icon: <Bot className="h-8 w-8" />,
      color: "from-cyan-500 to-blue-600",
      solutions: [
        {
          name: "AI Chatbots",
          description: "24/7 customer support with intelligent responses",
          features: ["Multi-language support", "Lead capture", "FAQ automation", "Live chat handoff"],
        },
        {
          name: "Ticket Management",
          description: "Automated support ticket routing and prioritization",
          features: ["Auto-categorization", "Priority scoring", "Team assignment", "SLA tracking"],
        },
      ],
    },
    {
      category: "Marketing & Sales",
      icon: <TrendingUp className="h-8 w-8" />,
      color: "from-purple-500 to-pink-600",
      solutions: [
        {
          name: "Email Automation",
          description: "Personalized email campaigns and follow-ups",
          features: ["Drip campaigns", "Behavioral triggers", "A/B testing", "Analytics"],
        },
        {
          name: "Lead Scoring",
          description: "Automated lead qualification and nurturing",
          features: ["Behavior tracking", "Score calculation", "CRM integration", "Sales alerts"],
        },
      ],
    },
    {
      category: "Data & Analytics",
      icon: <Database className="h-8 w-8" />,
      color: "from-green-500 to-emerald-600",
      solutions: [
        {
          name: "Data Processing",
          description: "Automated data entry, cleaning, and analysis",
          features: ["CSV processing", "Data validation", "Report generation", "API integrations"],
        },
        {
          name: "Business Intelligence",
          description: "Automated reporting and dashboard updates",
          features: ["Real-time dashboards", "Scheduled reports", "KPI monitoring", "Alerts"],
        },
      ],
    },
    {
      category: "E-commerce",
      icon: <ShoppingCart className="h-8 w-8" />,
      color: "from-orange-500 to-red-600",
      solutions: [
        {
          name: "Order Processing",
          description: "Automated order fulfillment and tracking",
          features: ["Inventory sync", "Shipping automation", "Customer notifications", "Returns handling"],
        },
        {
          name: "Price Monitoring",
          description: "Competitive pricing and inventory management",
          features: ["Competitor tracking", "Dynamic pricing", "Stock alerts", "Market analysis"],
        },
      ],
    },
    {
      category: "Operations",
      icon: <Workflow className="h-8 w-8" />,
      color: "from-indigo-500 to-purple-600",
      solutions: [
        {
          name: "Document Processing",
          description: "Automated document handling and workflows",
          features: ["OCR processing", "Data extraction", "Approval workflows", "Archive management"],
        },
        {
          name: "Task Scheduling",
          description: "Automated task assignment and tracking",
          features: ["Team coordination", "Deadline tracking", "Progress monitoring", "Notifications"],
        },
      ],
    },
    {
      category: "Finance & HR",
      icon: <BarChart3 className="h-8 w-8" />,
      color: "from-teal-500 to-cyan-600",
      solutions: [
        {
          name: "Invoice Processing",
          description: "Automated invoicing and payment tracking",
          features: ["Invoice generation", "Payment reminders", "Expense tracking", "Financial reports"],
        },
        {
          name: "HR Workflows",
          description: "Employee onboarding and management automation",
          features: ["Onboarding flows", "Leave management", "Performance tracking", "Document handling"],
        },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent leading-tight">
            Plug & Play Automation Solutions
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Ready-to-deploy automation solutions that integrate seamlessly with your existing systems. Choose from our
            library of proven automations or request a custom solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://calendly.com/snedkerautomations/30min?month=2026-02" target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
              >
                Get a Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
            <Button
              size="lg"
              variant="outline"
              className="border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 bg-transparent"
              onClick={() => document.getElementById("solutions")?.scrollIntoView({ behavior: "smooth" })}
            >
              Browse Solutions
            </Button>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section id="solutions" className="py-20 px-6 bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Automation Solutions by Category
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Explore our comprehensive library of automation solutions designed to streamline every aspect of your
              business
            </p>
          </div>

          <div className="space-y-16">
            {solutions.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <div className="flex items-center gap-4 mb-8">
                  <div
                    className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-full flex items-center justify-center`}
                  >
                    {category.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white">{category.category}</h3>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {category.solutions.map((solution, solutionIndex) => (
                    <Card
                      key={solutionIndex}
                      className="bg-gray-900/50 border-gray-700 hover:border-cyan-500/50 transition-all duration-300"
                    >
                      <CardHeader>
                        <CardTitle className="text-xl font-bold text-white mb-2">{solution.name}</CardTitle>
                        <p className="text-gray-400">{solution.description}</p>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2 mb-6">
                          {solution.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center gap-2 text-gray-300 text-sm">
                              <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                        <a href="https://calendly.com/snedkerautomations/30min?month=2026-02" target="_blank" rel="noopener noreferrer" className="block w-full">
                          <Button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white">
                            Get a Free Consultation
                          </Button>
                        </a>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Solutions CTA */}
      <section className="py-20 px-6 bg-gradient-to-b from-gray-800 to-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Need Something Custom?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Do not see exactly what you need? We specialize in creating custom automation solutions tailored to your
            unique business requirements. During Beta, consultations are free.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://calendly.com/snedkerautomations/30min?month=2026-02" target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
              >
                Get a Free Consultation
                <Calendar className="ml-2 h-5 w-5" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-gray-900 border-t border-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-6">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              SnedkerAutomations
            </h3>
            <div className="h-0.5 w-16 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto mt-2 rounded-full" />
          </div>
          <p className="text-gray-400 mb-4">Empowering businesses through intelligent automation solutions.</p>
          <p className="text-gray-500 text-sm">&copy; 2025 SnedkerAutomations. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
