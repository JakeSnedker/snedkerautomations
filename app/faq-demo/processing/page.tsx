"use client"

import { useEffect, useState } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import SiteNav from "@/components/site-nav"
import { Loader2, CheckCircle2, XCircle } from "lucide-react"

type StatusType = "processing" | "success" | "invalid_url" | "unreachable" | "error"

export default function ProcessingPage() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [status, setStatus] = useState<StatusType>("processing")
  const [message, setMessage] = useState<string>("")

  useEffect(() => {
    const urlStatus = searchParams.get("status") as StatusType
    const urlMessage = searchParams.get("message")

    console.log("[v0] Processing page - status:", urlStatus)
    console.log("[v0] Processing page - message:", urlMessage)

    if (urlStatus && urlMessage) {
      setStatus(urlStatus)
      setMessage(urlMessage)
    } else if (urlStatus === "success") {
      setStatus("success")
      setMessage("Your FAQ sandbox is being prepared! We'll notify you via email once it's ready.")
    } else if (urlStatus === "error") {
      setStatus("error")
      setMessage("We encountered an issue processing your request. Please try again or contact support.")
    }
  }, [searchParams])

  const renderContent = () => {
    switch (status) {
      case "processing":
        return (
          <>
            <div className="flex flex-col items-center justify-center py-12">
              <Loader2 className="h-16 w-16 text-cyan-400 animate-spin mb-6" />
              <h2 className="text-2xl font-semibold text-white mb-2">Processing your request...</h2>
              <p className="text-gray-400">Please wait while we set up your FAQ sandbox</p>
            </div>
            <Button
              disabled
              className="w-full bg-gray-700 text-gray-400 cursor-not-allowed font-semibold px-8 py-3 text-base"
            >
              Back to FAQ Application
            </Button>
          </>
        )

      case "success":
        return (
          <>
            <div className="flex flex-col items-center justify-center py-12">
              <CheckCircle2 className="h-16 w-16 text-green-400 mb-6" />
              <h2 className="text-2xl font-semibold text-white mb-2">Success!</h2>
              <p className="text-gray-300 text-center max-w-md mt-4">{message}</p>
            </div>
            <Button
              onClick={() => router.push("/faq-demo")}
              className="w-full bg-cyan-500 hover:bg-cyan-600 text-black font-semibold px-8 py-3 text-base"
            >
              Back to FAQ Application
            </Button>
          </>
        )

      case "invalid_url":
      case "unreachable":
      case "error":
        return (
          <>
            <div className="flex flex-col items-center justify-center py-12">
              <XCircle className="h-16 w-16 text-red-400 mb-6" />
              <h2 className="text-2xl font-semibold text-white mb-2">Something Went Wrong</h2>
              <p className="text-gray-300 text-center max-w-md mt-4">{message}</p>
            </div>
            <Button
              onClick={() => router.push("/faq-demo")}
              className="w-full bg-cyan-500 hover:bg-cyan-600 text-black font-semibold px-8 py-3 text-base"
            >
              Back to FAQ Application
            </Button>
          </>
        )
    }
  }

  return (
    <div className="min-h-screen bg-black">
      <SiteNav />
      
      <main className="max-w-2xl mx-auto px-4 py-12">
        <Card className="bg-gray-900 border-gray-700">
          <CardContent className="pt-6">{renderContent()}</CardContent>
        </Card>
      </main>
    </div>
  )
}
