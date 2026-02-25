"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import SiteNav from "@/components/site-nav"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function FAQSandboxPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    website: "",
    assistantName: "",
    country: "",
    businessDescription: "",
    servicesOffered: "",
    assistantTone: "",
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) newErrors.name = "Name is required"
    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format"
    }
    if (!formData.website.trim()) {
      newErrors.website = "Website URL is required"
    }
    if (!formData.assistantName.trim()) newErrors.assistantName = "Assistant name is required"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleWebsiteBlur = () => {
    if (formData.website && !formData.website.match(/^https?:\/\//)) {
      setFormData({ ...formData, website: `https://${formData.website}` })
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    const webhookUrl = "https://bot.snedkerautomations.com/webhook/free-faq-intake"

    const payload = {
      name: formData.name,
      email: formData.email,
      website: formData.website,
      assistantName: formData.assistantName,
      country: formData.country || "",
      business_description: formData.businessDescription || "",
      services_offered: formData.servicesOffered || "",
      assistant_tone: formData.assistantTone || "",
    }

    try {
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      })

      if (response.ok) {
        router.push("/faq-demo/processing?status=success")
      } else {
        router.push("/faq-demo/processing?status=error")
      }
    } catch (error) {
      console.error("[v0] Error submitting to n8n:", error)
      router.push("/faq-demo/processing?status=error")
    }
  }

  return (
    <div className="min-h-screen bg-black">
      <SiteNav />
      
      {/* Hero Section */}
      <section className="py-16 px-6 bg-gray-900/50">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Free Website FAQ Bot Sandbox
          </h1>
          <p className="text-lg text-gray-300 mb-4">
            Drop in your website and we'll build a free FAQ sandbox bot from your content. After you submit, you'll see
            a status message here.
          </p>
          <p className="text-xl text-cyan-400 font-semibold">Try before you buy… what have you got to lose??</p>
        </div>
      </section>

      {/* Main Content - Single Column */}
      <main className="max-w-2xl mx-auto px-4 py-12 space-y-8">
        {/* Card 1 - Intake Form */}
        <Card className="bg-gray-900 border-gray-700">
          <CardHeader>
            <CardTitle className="text-2xl text-white">Start your free FAQ sandbox</CardTitle>
            <p className="text-gray-400 text-sm">
              Tell us a bit about you and your site, and we'll send everything straight into our automations.
            </p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name */}
              <div>
                <Label htmlFor="name" className="text-gray-300">
                  Name <span className="text-red-400">*</span>
                </Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Jake Snedker"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className={`bg-gray-800 border-gray-600 text-white mt-1 ${errors.name ? "border-red-500" : ""}`}
                />
                {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
              </div>

              {/* Email */}
              <div>
                <Label htmlFor="email" className="text-gray-300">
                  Email <span className="text-red-400">*</span>
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={`bg-gray-800 border-gray-600 text-white mt-1 ${errors.email ? "border-red-500" : ""}`}
                />
                {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
              </div>

              {/* Website URL */}
              <div>
                <Label htmlFor="website" className="text-gray-300">
                  Website URL <span className="text-red-400">*</span>
                </Label>
                <Input
                  id="website"
                  type="text"
                  placeholder="https://www.yourwebsite.com"
                  value={formData.website}
                  onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                  onBlur={handleWebsiteBlur}
                  className={`bg-gray-800 border-gray-600 text-white mt-1 ${errors.website ? "border-red-500" : ""}`}
                />
                {errors.website && <p className="text-red-400 text-sm mt-1">{errors.website}</p>}
              </div>

              {/* Assistant Name */}
              <div>
                <Label htmlFor="assistantName" className="text-gray-300">
                  What should we call your bot? <span className="text-red-400">*</span>
                </Label>
                <Input
                  id="assistantName"
                  type="text"
                  placeholder="Jiminy Cricket"
                  value={formData.assistantName}
                  onChange={(e) => setFormData({ ...formData, assistantName: e.target.value })}
                  className={`bg-gray-800 border-gray-600 text-white mt-1 ${
                    errors.assistantName ? "border-red-500" : ""
                  }`}
                />
                {errors.assistantName && <p className="text-red-400 text-sm mt-1">{errors.assistantName}</p>}
              </div>

              <div>
                <Label htmlFor="businessDescription" className="text-gray-300">
                  Business description
                </Label>
                <Textarea
                  id="businessDescription"
                  placeholder="Describe your business in 1–3 sentences…"
                  value={formData.businessDescription}
                  onChange={(e) => setFormData({ ...formData, businessDescription: e.target.value })}
                  className="bg-gray-800 border-gray-600 text-white mt-1 min-h-[100px]"
                />
              </div>

              <div>
                <Label htmlFor="servicesOffered" className="text-gray-300">
                  Services offered
                </Label>
                <Input
                  id="servicesOffered"
                  type="text"
                  placeholder="Main services you offer (comma separated)"
                  value={formData.servicesOffered}
                  onChange={(e) => setFormData({ ...formData, servicesOffered: e.target.value })}
                  className="bg-gray-800 border-gray-600 text-white mt-1"
                />
              </div>

              <div>
                <Label htmlFor="assistantTone" className="text-gray-300">
                  Assistant tone
                </Label>
                <select
                  id="assistantTone"
                  value={formData.assistantTone}
                  onChange={(e) => setFormData({ ...formData, assistantTone: e.target.value })}
                  className="w-full bg-gray-800 border-gray-600 text-white mt-1 rounded-md px-3 py-2 border"
                >
                  <option value="">Select a tone</option>
                  <option value="Friendly & Casual">Friendly & Casual</option>
                  <option value="Professional & Concise">Professional & Concise</option>
                  <option value="Formal & Respectful">Formal & Respectful</option>
                  <option value="Playful & Humorous">Playful & Humorous</option>
                  <option value="Luxury Concierge">Luxury Concierge</option>
                  <option value="Warm & Empathetic">Warm & Empathetic</option>
                  <option value="Direct & No-BS">Direct & No-BS</option>
                </select>
              </div>

              {/* Country (Optional) */}
              <div>
                <Label htmlFor="country" className="text-gray-300">
                  Country (optional)
                </Label>
                <select
                  id="country"
                  value={formData.country}
                  onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                  className="w-full bg-gray-800 border-gray-600 text-white mt-1 rounded-md px-3 py-2 border"
                >
                  <option value="">Select your country</option>
                  <option value="US">United States</option>
                  <option value="UK">United Kingdom</option>
                  <option value="CA">Canada</option>
                  <option value="AU">Australia</option>
                  <option value="DE">Germany</option>
                  <option value="FR">France</option>
                  <option value="NL">Netherlands</option>
                  <option value="DK">Denmark</option>
                  <option value="SE">Sweden</option>
                  <option value="NO">Norway</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-cyan-500 hover:bg-cyan-600 text-black font-semibold px-8 py-3 text-base"
              >
                {isSubmitting ? "Creating sandbox…" : "Spin up my FAQ sandbox"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
