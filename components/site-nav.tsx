"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export default function SiteNav() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-40 bg-black/90 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <span className="font-bold text-lg bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent tracking-tight">
              Snedker Automations
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className={`text-sm font-medium ${pathname === "/" ? "text-cyan-400" : "text-gray-300 hover:text-white"}`}
            >
              Home
            </Link>
            <Link
              href="/solutions"
              className={`text-sm font-medium ${pathname === "/solutions" ? "text-cyan-400" : "text-gray-300 hover:text-white"}`}
            >
              Solutions
            </Link>
            <Link
              href="/faq-demo"
              className={`text-sm font-medium ${pathname === "/faq-demo" ? "text-cyan-400" : "text-gray-300 hover:text-white"}`}
            >
              Free FAQ Bot Demo
            </Link>
            <Link
              href="/about"
              className={`text-sm font-medium ${pathname === "/about" ? "text-cyan-400" : "text-gray-300 hover:text-white"}`}
            >
              About
            </Link>
            <Link href="/beta">
              <Button className="bg-cyan-500 hover:bg-cyan-600 text-black">Join the Beta</Button>
            </Link>
          </div>

          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-white">
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3">
            <Link
              href="/"
              className={`block text-sm font-medium ${pathname === "/" ? "text-cyan-400" : "text-gray-300"}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/solutions"
              className={`block text-sm font-medium ${pathname === "/solutions" ? "text-cyan-400" : "text-gray-300"}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Solutions
            </Link>
            <Link
              href="/faq-demo"
              className={`block text-sm font-medium ${pathname === "/faq-demo" ? "text-cyan-400" : "text-gray-300"}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Free FAQ Bot Demo
            </Link>
            <Link
              href="/about"
              className={`block text-sm font-medium ${pathname === "/about" ? "text-cyan-400" : "text-gray-300"}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link href="/beta" onClick={() => setMobileMenuOpen(false)}>
              <Button className="w-full bg-cyan-500 hover:bg-cyan-600 text-black">Join the Beta</Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
