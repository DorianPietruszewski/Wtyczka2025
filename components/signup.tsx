"use client"

import { useState } from "react"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

export default function SignUpButton() {
	const [isHovered, setIsHovered] = useState(false)

	return (
		<button
			className="flex items-center justify-center gap-3 px-16 py-5 rounded-full bg-cyan-700/90 backdrop-blur-lg shadow-lg hover:shadow-[0_0_32px_8px_rgba(14,116,144,0.25)] border-4 border-cyan-400 border-solid transition-all duration-300 text-white font-bold text-2xl drop-shadow-[0_2px_12px_rgba(14,116,144,0.18)] animate-glow focus:outline-none focus:ring-2 focus:ring-cyan-400/60 cursor-pointer"
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			<span className="font-bold text-white drop-shadow-[0_2px_12px_rgba(14,116,144,0.22)]">Zapisz się</span>
			<ArrowRight className={cn("h-6 w-6 transition-transform duration-300 text-white drop-shadow-[0_2px_12px_rgba(14,116,144,0.22)]", isHovered && "translate-x-2 scale-110")}/>
		</button>
	)
}

// Dodaj tę animację do globals.css lub do pliku tailwind.config.ts
