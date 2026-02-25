"use client"

import { useState } from "react"
import { MessageCircle, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function FloatingChatWidget() {
  const [isOpen, setIsOpen] = useState(false)

  const CHAT_URL =
    "https://bot.snedkerautomations.com/webhook/2e7933cb-9fa4-4d72-83c7-3a500b142da8/chat"

  return (
    <>
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-cyan-500 hover:bg-cyan-600 text-black rounded-full shadow-lg flex items-center justify-center transition-transform hover:scale-110"
          aria-label="Open chat"
        >
          <MessageCircle className="h-6 w-6" />
        </button>
      )}

      {isOpen && (
        <Card className="fixed bottom-6 right-6 z-50 w-96 h-[560px] shadow-2xl flex flex-col bg-gray-800 border-gray-700 overflow-hidden">
          {/* Header */}
          <div className="bg-cyan-500 text-black p-4 flex items-center justify-between">
            <div>
              <h3 className="font-semibold">Snedker Automations Assistant</h3>
              <p className="text-xs text-black/70">Ask how we can automate your business</p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:bg-cyan-600 rounded p-1"
              aria-label="Close chat"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Quick actions */}
          <div className="flex gap-2 p-3 bg-gray-900 border-b border-gray-700">
            <Button
              size="sm"
              onClick={() => {
                window.location.href = "/beta#beta-form"
              }}
              className="flex-1 bg-cyan-500 hover:bg-cyan-600 text-black"
            >
              Get my FAQ bot
            </Button>
            <Button
              size="sm"
              onClick={() => {
                window.location.href = "/beta#beta-form"
              }}
              className="flex-1 bg-gray-700 hover:bg-gray-600 text-white"
            >
              Book a consultation
            </Button>
          </div>

          {/* Embedded n8n chat */}
          <div className="flex-1 bg-gray-900">
            <iframe
              src={CHAT_URL}
              title="Snedker Automations Chat"
              className="w-full h-full border-0"
              allow="clipboard-read; clipboard-write"
            />
          </div>
        </Card>
      )}
    </>
  )
}
