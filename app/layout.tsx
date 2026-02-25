import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Snedker Automations - AI Automation for Your Business",
  description:
    "We build, host, and maintain intelligent automation solutions that save you time and money. Free consultations and free simple automations during our Beta.",
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "Snedker Automations - AI Automation for Your Business",
    description:
      "We build, host, and maintain intelligent automation solutions that save you time and money. Free consultations and free simple automations during our Beta.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
