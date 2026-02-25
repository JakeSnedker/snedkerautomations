"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Navigation() {
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
            className={`transition-colors text-sm sm:text-base ${pathname === "/beta" ? "text-cyan-400" : "text-purple-400 hover:text-purple-300"
              }`}
          >
            Beta Program
          </Link>
        </div>
      </div>
    </nav>
  )
}
