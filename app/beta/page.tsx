"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Check, Clock, Zap, Shield, Users, Target, Star } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

export default function BetaPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    businessName: "",
    website: "",
    businessType: "",
    aiGoal: "",
  })

  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const normalizeWebsite = (value: string) => {
    const v = value.trim()
    if (!v) return ""
    if (!/^https?:\/\//i.test(v)) return `https://${v}`
    return v
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError(null)
    setSubmitting(true)

    try {
      const res = await fetch("/api/beta-application", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          page: "/beta",
          submittedAt: new Date().toISOString(),
        }),
      })

      const json = await res.json().catch(() => ({}))

      if (!res.ok || json?.ok === false) {
        throw new Error(json?.error || `Request failed: ${res.status}`)
      }

      setSubmitted(true)
    } catch (err) {
      console.error("Submit failed:", err)
      setError("Something went wrong. Please try again in a moment.")
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-black">
      {/* Logo-only header on /beta */}
      <header className="sticky top-0 z-40 bg-black/70 backdrop-blur border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-white font-semibold tracking-tight hover:text-cyan-400 transition-colors">
            Snedker Automations
          </Link>
          <Link href="/" className="text-sm text-gray-400 hover:text-white transition-colors">
            Back to Home
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-6 px-6 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full">
            <span className="text-cyan-400 font-semibold">Beta Program &mdash; Limited Spots</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent leading-tight">
            Free Automations &amp; Consultations &mdash; In Exchange for Your Feedback
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-4 leading-relaxed">
            We will consult on your business, identify automation opportunities, and build you a simple automation
            &mdash; completely free.
          </p>
          <p className="text-lg text-gray-400 mb-8">
            All we ask is honest feedback and a testimonial. Not everyone will be accepted &mdash; spots are limited so we
            can give each project proper attention.
          </p>
          <a href="#beta-form">
            <Button
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-12 py-6 text-lg font-semibold rounded-full shadow-lg"
            >
              Join the Beta
            </Button>
          </a>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 px-6 bg-gray-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            The Problem
          </h2>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3">Missed Inquiries</h3>
                <p className="text-gray-400">
                  Customer questions come in at all hours. If you are not there, they move on to your competitor.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3">Slow Responses</h3>
                <p className="text-gray-400">
                  Even a few hours delay can lose you business. Speed matters more than perfection.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3">Email Overload</h3>
                <p className="text-gray-400">
                  You are drowning in customer emails, answering the same questions over and over.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3">Lost Leads</h3>
                <p className="text-gray-400">
                  People visit your website, have questions, but there is no one there to help them convert.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center">
            <p className="text-2xl font-semibold text-cyan-400">If you do not respond fast, customers move on.</p>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 px-6 bg-black">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Snedker Automations &mdash; AI Assistant Sandbox
          </h2>
          <p className="text-xl text-gray-300 text-center mb-12">
            Your AI assistant handles customer inquiries 24/7, trained specifically on your business
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-cyan-500/20 rounded-full flex items-center justify-center">
                  <Check className="h-6 w-6 text-cyan-400" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Trained on your website</h3>
                <p className="text-gray-400">
                  We scrape your site and train the AI on your content, services, and brand voice
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-cyan-500/20 rounded-full flex items-center justify-center">
                  <Zap className="h-6 w-6 text-cyan-400" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Answers FAQs instantly</h3>
                <p className="text-gray-400">Common questions get answered immediately, 24/7</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-cyan-500/20 rounded-full flex items-center justify-center">
                  <Target className="h-6 w-6 text-cyan-400" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Drafts professional email replies</h3>
                <p className="text-gray-400">Your assistant writes customer responses in your brand voice</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-cyan-500/20 rounded-full flex items-center justify-center">
                  <Users className="h-6 w-6 text-cyan-400" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Detects booking intent</h3>
                <p className="text-gray-400">Recognizes when customers want to book and helps them take action</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-cyan-500/20 rounded-full flex items-center justify-center">
                  <Clock className="h-6 w-6 text-cyan-400" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Runs 24/7</h3>
                <p className="text-gray-400">Never miss an inquiry again, even outside business hours</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-6 bg-gray-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            How It Works
          </h2>
          <div className="space-y-8">
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Submit your website</h3>
                <p className="text-gray-400">Fill out the form below with your website URL and business details</p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">We train your AI assistant</h3>
                <p className="text-gray-400">
                  We scrape your site, tune the brand voice, and configure your personalized AI assistant
                </p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">You test it in a sandbox environment</h3>
                <p className="text-gray-400">
                  Get a fully hosted test link where you can try your assistant before going live
                </p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold text-white">4</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Go live when you are ready</h3>
                <p className="text-gray-400">Love it? We deploy it. Not convinced? No commitment, no charge.</p>
              </div>
            </div>
          </div>
          <div className="text-center mt-12">
            <p className="text-2xl font-semibold text-cyan-400">See it working before you commit.</p>
          </div>
        </div>
      </section>

      {/* Beta Offer */}
      <section className="py-20 px-6 bg-black">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-br from-cyan-900/20 to-purple-900/20 border-cyan-500/50 border-2">
            <CardContent className="p-10">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  What You Get &mdash; And What We Ask
                </h2>
                <p className="text-gray-300 text-lg">
                  This is a genuine exchange: we provide real value, and you help us grow with your feedback
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="flex gap-3 items-start">
                  <Check className="h-6 w-6 text-cyan-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-white font-semibold">Free consultation</p>
                    <p className="text-gray-400 text-sm">We will discuss your business and identify where automation can save you time and money</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <Check className="h-6 w-6 text-cyan-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-white font-semibold">Free simple automations</p>
                    <p className="text-gray-400 text-sm">We build you a working automation so you experience the value first-hand</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <Star className="h-6 w-6 text-yellow-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-white font-semibold">Your cost: a review</p>
                    <p className="text-gray-400 text-sm">In return, we ask for honest feedback and a testimonial we can share</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <Shield className="h-6 w-6 text-orange-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-white font-semibold">Limited spots</p>
                    <p className="text-gray-400 text-sm">Not everyone will be accepted &mdash; we want to give each project proper attention</p>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <div className="inline-block px-6 py-3 bg-cyan-500/10 border border-cyan-500/30 rounded-lg mb-6">
                  <p className="text-cyan-400 font-semibold">
                    <Shield className="inline h-5 w-5 mr-2" />
                    Limited spots available
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-20 px-6 bg-gray-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Who This Is For
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {["Service Businesses", "Agencies", "Consultants", "Coaches", "Local Businesses", "E-commerce Stores"].map(
              (business) => (
                <Card key={business} className="bg-gray-800 border-gray-700">
                  <CardContent className="p-6 text-center">
                    <Check className="h-8 w-8 text-cyan-400 mx-auto mb-3" />
                    <p className="text-white font-semibold">{business}</p>
                  </CardContent>
                </Card>
              ),
            )}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 bg-black">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <Card className="bg-gray-900 border-gray-800">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3">Is this just ChatGPT?</h3>
                <p className="text-gray-400">
                  No. We train your AI specifically on your website content, services, and brand voice. It answers as if
                  it knows your business because it does.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-gray-900 border-gray-800">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3">Can I cancel?</h3>
                <p className="text-gray-400">
                  Yes. No long-term contracts. You can cancel anytime. We want you to stay because it works, not because
                  you are locked in.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-gray-900 border-gray-800">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3">Do I have to pay during the Beta?</h3>
                <p className="text-gray-400">
                  No. We are offering free consultations and free simple automations during the Beta period. You can test
                  and see the value before any commitment.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-gray-900 border-gray-800">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3">How long does setup take?</h3>
                <p className="text-gray-400">
                  For a FAQ bot, typically 48 hours. More complex automations depend on scope, but we will give you a
                  clear timeline after our initial consultation.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Beta Application Form */}
      <section id="beta-form" className="py-20 px-6 bg-gray-900/50">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Apply for Beta Access
            </h2>
            <p className="text-gray-300">Tell us about your business and we will be in touch</p>
          </div>

          {!submitted ? (
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
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="bg-gray-800 border-gray-600 text-white mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-gray-300">
                      Email *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="bg-gray-800 border-gray-600 text-white mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="businessName" className="text-gray-300">
                      Business name *
                    </Label>
                    <Input
                      id="businessName"
                      type="text"
                      required
                      value={formData.businessName}
                      onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                      className="bg-gray-800 border-gray-600 text-white mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="website" className="text-gray-300">
                      Website URL *
                    </Label>
                    <Input
                      id="website"
                      type="text"
                      inputMode="url"
                      required
                      value={formData.website}
                      onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                      onBlur={(e) => setFormData({ ...formData, website: normalizeWebsite(e.target.value) })}
                      className="bg-gray-800 border-gray-600 text-white mt-1"
                      placeholder="https://www.yourwebsite.com"
                    />
                  </div>

                  <div>
                    <Label htmlFor="businessType" className="text-gray-300">
                      Business type *
                    </Label>
                    <select
                      id="businessType"
                      required
                      value={formData.businessType}
                      onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                      className="w-full bg-gray-800 border-gray-600 text-white mt-1 rounded-md px-3 py-2 border"
                    >
                      <option value="">Select business type</option>
                      <option value="Service Business">Service Business</option>
                      <option value="Agency">Agency</option>
                      <option value="Consultant">Consultant</option>
                      <option value="Coach">Coach</option>
                      <option value="Local Business">Local Business</option>
                      <option value="E-commerce">E-commerce</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <Label htmlFor="aiGoal" className="text-gray-300">
                      What do you want automated, or are you just curious about what is possible? *
                    </Label>
                    <Textarea
                      id="aiGoal"
                      required
                      value={formData.aiGoal}
                      onChange={(e) => setFormData({ ...formData, aiGoal: e.target.value })}
                      className="bg-gray-800 border-gray-600 text-white mt-1 min-h-[100px]"
                      placeholder="e.g., I want to automate my customer follow-up emails, or I'm just curious what automation could do for my business..."
                    />
                  </div>

                  {error && <p className="text-sm text-red-400" role="alert">{error}</p>}

                  <Button
                    type="submit"
                    disabled={submitting}
                    className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white py-6 text-lg font-semibold disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {submitting ? "Submitting..." : "Submit Beta Application"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          ) : (
            <Card className="bg-gradient-to-br from-green-900/20 to-cyan-900/20 border-green-500/50 border-2">
              <CardContent className="p-12 text-center">
                <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Check className="h-10 w-10 text-green-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Application Received!</h3>
                <p className="text-gray-300 text-lg mb-6">
                  Thanks &mdash; we have got your application. We will reach out shortly to discuss how we can help your business.
                </p>
                <p className="text-gray-400">Check your email at {formData.email}</p>
              </CardContent>
            </Card>
          )}
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6 bg-black">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to See What Automation Can Do For You?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Apply for our Beta &mdash; free consultation, free simple automation, in exchange for your honest feedback.
          </p>
          <a href="#beta-form">
            <Button
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-12 py-6 text-lg font-semibold rounded-full shadow-lg"
            >
              Apply for Beta Access
            </Button>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-black border-t border-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400 mb-4">&copy; 2025 SnedkerAutomations. All rights reserved.</p>
          <p className="text-gray-500 text-sm">
            <a href="mailto:hello@snedkerautomations.com" className="hover:text-cyan-400 transition-colors">
              hello@snedkerautomations.com
            </a>
          </p>
        </div>
      </footer>
    </div>
  )
}
