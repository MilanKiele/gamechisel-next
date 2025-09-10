"use client"

import { Button } from "@/components/ui/button"
import { MessageCircle, X } from "lucide-react"
import { cn } from "@/lib/utils"

interface ChatbotButtonProps {
  isOpen: boolean
  onToggle: () => void
}

export function ChatbotButton({ isOpen, onToggle }: ChatbotButtonProps) {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        onClick={onToggle}
        size="lg"
        className={cn(
          "h-14 w-14 rounded-full shadow-lg transition-all duration-300 hover:scale-105",
          isOpen 
            ? "bg-destructive hover:bg-destructive/90" 
            : "bg-primary hover:bg-primary/90"
        )}
        aria-label={isOpen ? "Close chatbot" : "Open chatbot"}
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <MessageCircle className="h-6 w-6" />
        )}
      </Button>
    </div>
  )
}