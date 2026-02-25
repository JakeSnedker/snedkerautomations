"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  ArrowRight,
  Bot,
  Shield,
  MessageSquare,
  Users,
  TrendingUp,
  Check,
  Clock,
  Zap,
  Target,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import Navigation from "@/components/navigation"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center px-4 py-2 bg-cyan-500/10 rounded-full border border-cyan-500/30 mb-8">
                <Bot className="h-4 w-4 text-cyan-400 mr-2" />
                <span className="text-sm text-cyan-400 font-semibold">BETA - FREE CONSULTATIONS &amp; AUTOMATIONS</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent leading-tight">
                AI Automation Solutions for Your Business
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 leading-relaxed">
                We build, host, and maintain intelligent automation solutions that save you time and money. From AI chatbots
                to workflow automation &mdash; tailored to your business.
              </p>

              <p className="text-lg text-cyan-400 font-semibold mb-4">
                Free consultations &middot; Free simple automations during Beta
              </p>
              <p className="text-sm text-gray-400 mb-8">
                All we ask in return is honest feedback and a testimonial.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
                <Link href="/beta">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
                  >
                    Get Started Free
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/faq-demo">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 bg-transparent"
                  >
                    Try Free FAQ Bot Demo
                  </Button>
                </Link>
              </div>
            </div>

            <div className="hidden lg:flex justify-center">
              <div className="relative w-full max-w-md">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl blur-3xl" />
                <Image
                  src="/hero-bg.png"
                  alt="Snedker Automations - AI-powered business automation"
                  width={400}
                  height={400}
                  className="relative z-10 w-full h-auto rounded-2xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 px-6 bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              What We Can Do For You
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
                <h3 className="text-2xl font-bold mb-4 text-cyan-400">AI Chatbots</h3>
                <p className="text-gray-300 leading-relaxed">
                  Custom AI assistants trained on your business that answer customer questions, capture leads, and
                  work 24/7.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-gray-700 hover:border-purple-500/50 transition-all duration-300 group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <MessageSquare className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-purple-400">Workflow Automation</h3>
                <p className="text-gray-300 leading-relaxed">
                  Streamline repetitive tasks, data processing, and business operations so you can focus on growing.
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
                  Tailored automation solutions designed specifically for your unique business needs and processes.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How the AI Assistant Works */}
      <section className="py-20 px-6 bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            AI Assistant &mdash; Trained on Your Business
          </h2>
          <p className="text-xl text-gray-300 text-center mb-12">
            Your AI assistant handles customer inquiries 24/7, trained specifically on your website and brand
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: <Check className="h-6 w-6 text-cyan-400" />,
                title: "Trained on your website",
                desc: "We scrape your site and train the AI on your content, services, and brand voice",
              },
              {
                icon: <Zap className="h-6 w-6 text-cyan-400" />,
                title: "Answers FAQs instantly",
                desc: "Common questions get answered immediately, 24/7",
              },
              {
                icon: <Target className="h-6 w-6 text-cyan-400" />,
                title: "Drafts professional email replies",
                desc: "Your assistant writes customer responses in your brand voice",
              },
              {
                icon: <Users className="h-6 w-6 text-cyan-400" />,
                title: "Detects booking intent",
                desc: "Recognizes when customers want to book and helps them take action",
              },
              {
                icon: <Clock className="h-6 w-6 text-cyan-400" />,
                title: "Runs 24/7",
                desc: "Never miss an inquiry again, even outside business hours",
              },
              {
                icon: <Shield className="h-6 w-6 text-cyan-400" />,
                title: "Try before you commit",
                desc: "Test your assistant in a free sandbox before going live",
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-cyan-500/20 rounded-full flex items-center justify-center">
                    {item.icon}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-6 bg-gradient-to-b from-gray-800 to-gray-900">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              How It Works
            </h2>
            <p className="text-xl text-gray-400">
              Getting started is simple
            </p>
          </div>

          <div className="space-y-8">
            {[
              {
                step: 1,
                color: "from-cyan-500 to-blue-600",
                title: "Tell us about your business",
                description: "Apply for Beta access with your details and what you want to automate",
              },
              {
                step: 2,
                color: "from-purple-500 to-pink-600",
                title: "We design your solution",
                description: "Our team creates custom automation workflows tailored to your needs",
              },
              {
                step: 3,
                color: "from-green-500 to-emerald-600",
                title: "Test it for free",
                description: "Get a fully hosted sandbox where you can try your automation before going live",
              },
              {
                step: 4,
                color: "from-orange-500 to-red-600",
                title: "Go live when you are ready",
                description: "Love it? We deploy it. Not convinced? No commitment, no charge.",
              },
            ].map((item) => (
              <div key={item.step} className="flex items-start gap-6">
                <div
                  className={`w-12 h-12 bg-gradient-to-br ${item.color} rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0`}
                >
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

      {/* Who This Is For */}
      <section className="py-20 px-6 bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Who This Is For
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              "Service Businesses",
              "Agencies",
              "Consultants",
              "Coaches",
              "Local Businesses",
              "E-commerce Stores",
            ].map((business) => (
              <Card key={business} className="bg-gray-900/50 border-gray-700">
                <CardContent className="p-6 text-center">
                  <Check className="h-8 w-8 text-cyan-400 mx-auto mb-3" />
                  <p className="text-white font-semibold">{business}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Beta Offer */}
      <section className="py-20 px-6 bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-br from-cyan-900/20 to-purple-900/20 border-cyan-500/50 border-2">
            <CardContent className="p-10">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Beta Program
                </h2>
                <p className="text-gray-300 text-lg">
                  We are offering free consultations and free simple automations to a limited number of early adopters.
                  All we ask in return is your honest feedback and a testimonial.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="flex gap-3 items-start">
                  <Check className="h-6 w-6 text-cyan-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-white font-semibold">Free consultation</p>
                    <p className="text-gray-400 text-sm">
                      We will discuss your business and identify where automation can help most
                    </p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <Check className="h-6 w-6 text-cyan-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-white font-semibold">Free simple automations</p>
                    <p className="text-gray-400 text-sm">
                      We will build you a simple automation so you can see the value first-hand
                    </p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <Check className="h-6 w-6 text-cyan-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-white font-semibold">Limited spots available</p>
                    <p className="text-gray-400 text-sm">
                      Not everyone will be accepted &mdash; we want to give each project proper attention
                    </p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <Check className="h-6 w-6 text-cyan-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-white font-semibold">Your cost: a review</p>
                    <p className="text-gray-400 text-sm">
                      In exchange, we ask for honest feedback and a testimonial we can share
                    </p>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <Link href="/beta">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-12 py-6 text-lg font-semibold rounded-full shadow-lg"
                  >
                    Apply for Beta Access
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
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
          <p className="text-gray-500 text-sm">
            &copy; 2025 Snedker Automations. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
