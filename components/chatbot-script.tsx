"use client"

import { useEffect } from "react"

declare global {
  interface Window {
    n8nChatInstance?: any
    demoChat?: any
    createChat?: any
  }
}

export default function ChatbotScript() {
  useEffect(() => {
    const initializeChat = async () => {
      // Check if we're on the production domain or localhost
      const isProduction =
        window.location.hostname.includes("snedkerautomations") ||
        window.location.hostname === "localhost" ||
        window.location.hostname.includes("vercel.app")

      if (isProduction) {
        // Use real n8n chat for production and localhost
        try {
          // Load the script dynamically using script tag instead of import
          await loadN8nChatScript()

          if (window.createChat) {
            // For now, use demo mode until n8n is deployed to production
            const webhookUrl = "DEMO_MODE" // This will trigger the demo chat

            if (webhookUrl === "DEMO_MODE") {
              throw new Error("Using demo mode - n8n not deployed yet")
            }

            const chatInstance = window.createChat({
              webhookUrl: webhookUrl,
              webhookConfig: { method: "POST", headers: {} },
              target: "#n8n-chat",
              mode: "window",
              loadPreviousSession: false,
              showWelcomeScreen: true,
              defaultLanguage: "en",
              initialMessages: [
                "Hi there! 👋",
                "My name is Jake, I am the AI Assistant for Snedker Automations, and I could be working for you. Try me out, ask me anything.",
              ],
              i18n: {
                en: {
                  title: "Hi there! 👋",
                  subtitle: "Start a chat. We're here to help you 24/7.",
                  getStarted: "New Conversation",
                  inputPlaceholder: "Type your question..",
                },
              },
            })

            window.n8nChatInstance = chatInstance
          } else {
            throw new Error("createChat function not available")
          }
        } catch (error) {
          console.error("Failed to initialize n8n chat:", error)
          createDemoChat()
        }
      } else {
        // Create a demo chat interface for other domains
        createDemoChat()
      }
    }

    const loadN8nChatScript = (): Promise<void> => {
      return new Promise((resolve, reject) => {
        // Check if script is already loaded
        if (window.createChat) {
          resolve()
          return
        }

        const script = document.createElement("script")
        script.src = "https://cdn.jsdelivr.net/npm/@n8n/chat/dist/chat.bundle.es.js"
        script.type = "module"
        script.onload = () => {
          // Give it a moment for the module to initialize
          setTimeout(() => {
            if (window.createChat) {
              resolve()
            } else {
              reject(new Error("createChat not available after script load"))
            }
          }, 100)
        }
        script.onerror = () => reject(new Error("Failed to load n8n chat script"))

        document.head.appendChild(script)
      })
    }

    const createDemoChat = () => {
      const chatContainer = document.getElementById("n8n-chat")
      if (!chatContainer) return

      // Create demo chat interface
      chatContainer.innerHTML = `
        <div id="demo-chat-toggle" style="
          position: fixed;
          bottom: 20px;
          right: 20px;
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, #be42e7, #20b69e);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-shadow: 0 4px 12px rgba(190, 66, 231, 0.3);
          z-index: 1000;
          transition: all 0.3s ease;
        ">
          <svg width="24" height="24" fill="white" viewBox="0 0 24 24">
            <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4l4 4 4-4h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/>
          </svg>
        </div>
        
        <div id="demo-chat-window" style="
          position: fixed;
          bottom: 90px;
          right: 20px;
          width: 350px;
          height: 500px;
          background: white;
          border-radius: 12px;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
          z-index: 1001;
          display: flex;
          flex-direction: column;
          overflow: hidden;
        ">
          <!-- Header -->
          <div style="
            background: #101330;
            color: white;
            padding: 16px;
            display: flex;
            justify-content: space-between;
            align-items: center;
          ">
            <div>
              <h3 style="margin: 0; font-size: 18px;">Hi there! 👋</h3>
              <p style="margin: 4px 0 0 0; font-size: 14px; opacity: 0.8;">Start a chat. We're here to help you 24/7.</p>
            </div>
            <button id="demo-chat-close" style="
              background: none;
              border: none;
              color: white;
              font-size: 20px;
              cursor: pointer;
              padding: 4px;
            ">×</button>
          </div>
          
          <!-- Messages -->
          <div id="demo-chat-messages" style="
            flex: 1;
            padding: 16px;
            overflow-y: auto;
            background: #f8f9fa;
          ">
            <div style="
              background: white;
              padding: 12px;
              border-radius: 8px;
              margin-bottom: 12px;
              box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
            ">
              Hi there! 👋
            </div>
            <div style="
              background: white;
              padding: 12px;
              border-radius: 8px;
              margin-bottom: 12px;
              box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
            ">
              My name is Jake, I am the AI Assistant for Snedker Automations, and I could be working for you. Try me out, ask me anything.
            </div>
            <div style="
              background: #e3f2fd;
              padding: 12px;
              border-radius: 8px;
              margin-bottom: 12px;
              font-style: italic;
              color: #666;
            ">
              <strong>Demo Mode:</strong> This is a preview of the chat interface. In the live version, Jake will respond to your questions about AI automation services.
            </div>
          </div>
          
          <!-- Input -->
          <div style="
            padding: 16px;
            border-top: 1px solid #eee;
            background: white;
          ">
            <div style="
              display: flex;
              gap: 8px;
            ">
              <input id="demo-chat-input" type="text" placeholder="Type your question.." style="
                flex: 1;
                padding: 12px;
                border: 1px solid #ddd;
                border-radius: 6px;
                outline: none;
              ">
              <button id="demo-chat-send" style="
                background: #20b69e;
                color: white;
                border: none;
                padding: 12px 16px;
                border-radius: 6px;
                cursor: pointer;
              ">Send</button>
            </div>
          </div>
        </div>
      `

      // Add event listeners
      const toggle = document.getElementById("demo-chat-toggle")
      const window_el = document.getElementById("demo-chat-window")
      const close = document.getElementById("demo-chat-close")
      const input = document.getElementById("demo-chat-input") as HTMLInputElement
      const send = document.getElementById("demo-chat-send")
      const messages = document.getElementById("demo-chat-messages")

      const toggleChat = () => {
        if (window_el) {
          const isVisible = window_el.style.display === "flex"
          window_el.style.display = isVisible ? "none" : "flex"
        }
      }

      const sendMessage = () => {
        if (!input || !messages) return
        const message = input.value.trim()
        if (!message) return

        // Add user message
        const userMsg = document.createElement("div")
        userMsg.style.cssText = `
          background: #20b69e;
          color: white;
          padding: 12px;
          border-radius: 8px;
          margin-bottom: 12px;
          margin-left: 40px;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        `
        userMsg.textContent = message
        messages.appendChild(userMsg)

        // Add demo response
        setTimeout(() => {
          const botMsg = document.createElement("div")
          botMsg.style.cssText = `
            background: white;
            padding: 12px;
            border-radius: 8px;
            margin-bottom: 12px;
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
          `
          botMsg.textContent =
            "Thanks for your message! In the live version, I'd provide detailed information about our AI automation services. For now, please book a call or contact us directly."
          messages.appendChild(botMsg)
          messages.scrollTop = messages.scrollHeight
        }, 1000)

        input.value = ""
        messages.scrollTop = messages.scrollHeight
      }

      toggle?.addEventListener("click", toggleChat)
      close?.addEventListener("click", toggleChat)
      send?.addEventListener("click", sendMessage)
      input?.addEventListener("keypress", (e) => {
        if (e.key === "Enter") sendMessage()
      })

      // Store demo chat instance
      window.demoChat = { open: toggleChat }
    }

    // Only initialize on client side
    if (typeof window !== "undefined") {
      initializeChat()
    }
  }, [])

  return null
}
