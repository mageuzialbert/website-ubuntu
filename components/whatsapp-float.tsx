"use client";

import { MessageCircle } from "lucide-react";

export function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/255656721324?text=Hello%20Ubuntu%20AfyaLink%2C%20I%27d%20like%20to%20learn%20more%20about%20your%20solutions"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Need quick help? Chat with us instantly!"
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-brand px-4 py-3 text-white shadow-lg hover:bg-brand/90 transition-all duration-300 hover:scale-105 focus-ring group"
    >
      <MessageCircle className="h-5 w-5" />
      <span className="hidden sm:inline text-sm font-medium">Need quick help? Chat with us instantly!</span>
      <span className="sm:hidden text-sm font-medium">Chat</span>
    </a>
  );
}

