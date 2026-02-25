"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowRight, Bot, Shield, CheckCircle, MessageSquare, Users, TrendingUp } from "lucide-react"
import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

function InlineNavigation() {
  const pathname = usePathname()

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 py-6 px-6">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <span className="font-bold text-lg bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent tracking-tight">
            Snedker Automations
          </span>
        </Link>
        <div className="flex gap-4 sm:gap-6">
          <Link
            href="/"
            className={`transition-colors text-sm sm:text-base ${pathname === "/" ? "text-cyan-400" : "text-gray-400 hover:text-white"
              }`}
          >
            Home
          </Link>
          <Link
            href="/solutions"
            className={`transition-colors text-sm sm:text-base ${pathname === "/solutions" ? "text-cyan-400" : "text-gray-400 hover:text-white"
              }`}
          >
            Solutions
          </Link>
          <Link
            href="/about"
            className={`transition-colors text-sm sm:text-base ${pathname === "/about" ? "text-cyan-400" : "text-gray-400 hover:text-white"
              }`}
          >
            About
          </Link>
          <Link
            href="/beta"
            className={`transition-colors text-sm sm:text-base ${pathname === "/pre-launch" ? "text-cyan-400" : "text-purple-400 hover:text-purple-300"
              }`}
          >
            Beta Program
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default function PreLaunchPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError(null)
    setSubmitting(true)

    try {
      const webhookUrl = "https://bot.snedkerautomations.com/webhook/d7893952-6618-4ecb-a384-623bcd04512e"

      const res = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          page: "/pre-launch",
          submittedAt: new Date().toISOString(),
        }),
      })

      if (!res.ok) throw new Error(`Webhook failed: ${res.status}`)

      setIsSubmitted(true)
    } catch (err) {
      console.error("Submit failed:", err)
      setError("Something went wrong. Please try again in a moment.")
    } finally {
      setSubmitting(false)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <InlineNavigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 bg-cyan-500/10 rounded-full border border-cyan-500/30 mb-8">
            <Bot className="h-4 w-4 text-cyan-400 mr-2" />
            <span className="text-sm text-cyan-400 font-semibold">BETA - FREE CONSULTATIONS</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent leading-tight">
            Business Automation Solutions
          </h1>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            We build, host and maintain custom automation solutions for your business &mdash; from AI chatbots to workflow
            automation, data processing, and everything in between.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
              onClick={() => document.getElementById("signup")?.scrollIntoView({ behavior: "smooth" })}
            >
              Join the Beta &mdash; Free Consultations
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-6 bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Transform Your Business Operations
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Our automation solutions work 24/7 to streamline your business processes and boost efficiency
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gray-900/50 border-gray-700 hover:border-cyan-500/50 transition-all duration-300 group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <TrendingUp className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-cyan-400">Capture Leads 24/7</h3>
                <p className="text-gray-300 leading-relaxed">
                  AI chatbots and automated systems engage visitors and collect leads around the clock.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-gray-700 hover:border-purple-500/50 transition-all duration-300 group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <MessageSquare className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-purple-400">Automate Workflows</h3>
                <p className="text-gray-300 leading-relaxed">
                  Streamline repetitive tasks, data processing, and business operations automatically.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-gray-700 hover:border-green-500/50 transition-all duration-300 group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-green-400">Custom Solutions</h3>
                <p className="text-gray-300 leading-relaxed">
                  Tailored automation solutions designed specifically for your business needs and processes.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-gray-800 to-gray-900">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              How It Works
            </h2>
            <p className="text-xl text-gray-400">Get your automation solutions up and running in just 4 simple steps</p>
          </div>

          <div className="space-y-8">
            {[
              {
                step: 1,
                title: "Tell us about your business",
                description: "Share your business processes, pain points, and automation goals",
              },
              {
                step: 2,
                title: "We design your solution",
                description: "Our experts create custom automation workflows tailored to your needs",
              },
              {
                step: 3,
                title: "Deploy & integrate",
                description: "Seamless integration with your existing systems and platforms",
              },
              {
                step: 4,
                title: "Monitor & optimize",
                description: "Continuous monitoring, support, and performance optimization",
              },
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-6">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Beta Offer */}
      <section className="py-20 px-6 bg-gradient-to-r from-cyan-900/20 to-purple-900/20 border-y border-cyan-500/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Beta Program
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            We are currently in Beta and offering <span className="text-cyan-400 font-bold">free consultations</span> and{" "}
            <span className="text-cyan-400 font-bold">free simple automations</span> to early adopters.
          </p>
          <div className="flex items-center justify-center gap-4 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-cyan-400" />
              <span>No commitment required</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-purple-400" />
              <span>Limited spots available</span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "Do I need to know how to code?",
                answer: "No. We handle all the technical work. You just need to tell us what you want to automate.",
              },
              {
                question: "What types of automation do you provide?",
                answer:
                  "We provide chatbots, workflow automation, data processing, email automation, e-commerce automation, and custom solutions for any business process.",
              },
              {
                question: "How secure is my data?",
                answer:
                  "Your data is isolated with row-level security and encrypted in transit and at rest. We follow enterprise-grade security practices.",
              },
              {
                question: "Is it really free during Beta?",
                answer:
                  "Yes. We are offering free consultations and free simple automations during the Beta period so you can see the value before any commitment.",
              },
            ].map((faq, index) => (
              <Card key={index} className="bg-gray-900/50 border-gray-700">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-white mb-3">{faq.question}</h3>
                  <p className="text-gray-300">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sign-up Form */}
      <section id="signup" className="py-20 px-6 bg-gradient-to-b from-gray-800 to-gray-900">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Ready to Automate Your Business Operations?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join the Beta today for free consultations and free simple automations.
          </p>

          {!isSubmitted ? (
            <Card className="bg-gray-900 border-gray-700">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-gray-300">
                      Name *
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="bg-gray-800 border-gray-600 text-white mt-1"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-gray-300">
                      Email *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="bg-gray-800 border-gray-600 text-white mt-1"
                      placeholder="you@company.com"
                    />
                  </div>
                  <div>
                    <Label htmlFor="company" className="text-gray-300">
                      Company / Website
                    </Label>
                    <Input
                      id="company"
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="bg-gray-800 border-gray-600 text-white mt-1"
                      placeholder="https://www.yourwebsite.com"
                    />
                  </div>

                  {error && (
                    <p className="text-sm text-red-400" role="alert">{error}</p>
                  )}

                  <Button
                    type="submit"
                    size="lg"
                    disabled={submitting}
                    className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white py-6 text-lg font-semibold disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {submitting ? "Submitting..." : "Join the Beta"}
                    {!submitting && <ArrowRight className="ml-2 h-5 w-5" />}
                  </Button>
                </form>
              </CardContent>
            </Card>
          ) : (
            <Card className="bg-gradient-to-br from-green-900/20 to-cyan-900/20 border-green-500/50 border-2">
              <CardContent className="p-12 text-center">
                <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="h-10 w-10 text-green-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">You are In!</h3>
                <p className="text-gray-300 text-lg">
                  Thanks for joining our Beta. We will be in touch soon with your exclusive early access details.
                </p>
                <p className="text-gray-400 mt-3">Check your email at {formData.email}</p>
              </CardContent>
            </Card>
          )}

          <p className="text-sm text-gray-400 mt-4">We respect your privacy and will never spam you.</p>
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
          <p className="text-gray-400 mb-4">&copy; 2025 Snedker Automations. All rights reserved.</p>
          <div className="flex justify-center gap-6 text-sm text-gray-500">
            <a href="mailto:hello@snedkerautomations.com" className="hover:text-cyan-400 transition-colors">
              Contact Us
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
