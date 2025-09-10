"use client"

import { useState } from "react"
import { ChatbotButton } from "./chatbot-button"
import { ChatSidebar } from "./chat-sidebar"

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleChatbot = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <ChatbotButton isOpen={isOpen} onToggle={toggleChatbot} />
      <ChatSidebar isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  )
}