"use client"

import { useState } from "react"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

export default function SignUpButton() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <button
      className="flex items-center justify-center gap-2 px-8 py-2 rounded-full border-2 border-cyan-400 bg-cyan-400 text-black font-semibold text-lg transition-all duration-200 shadow-[0_0_16px_2px_rgba(34,211,238,0.5)] hover:bg-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span>Zapisz się</span>
      <ArrowRight className={cn("h-5 w-5 transition-transform duration-300", isHovered && "animate-arrow-move")} />
    </button>
  )
}

// Dodaj tę animację do globals.css lub do pliku tailwind.config.ts
