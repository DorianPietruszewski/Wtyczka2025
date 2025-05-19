import { Facebook, Instagram, Linkedin } from "lucide-react"
import Link from "next/link"

export default function SocialButtons() {
  return (
    <div className="flex items-center space-x-4">
      <Link
        href="https://facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        style={{ height: '50.4px', width: '50.4px' }}
        className="flex items-center justify-center rounded-full border-2 border-cyan-400 bg-transparent text-cyan-300 shadow-[0_0_16px_2px_rgba(34,211,238,0.5)] transition-all hover:scale-105 hover:shadow-[0_0_32px_6px_rgba(34,211,238,0.8)] hover:text-cyan-100 focus:outline-none focus:ring-2 focus:ring-cyan-400"
        aria-label="Facebook"
      >
        <Facebook size={22} />
      </Link>

      <Link
        href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        style={{ height: '50.4px', width: '50.4px' }}
        className="flex items-center justify-center rounded-full border-2 border-cyan-400 bg-transparent text-cyan-300 shadow-[0_0_16px_2px_rgba(34,211,238,0.5)] transition-all hover:scale-105 hover:shadow-[0_0_32px_6px_rgba(34,211,238,0.8)] hover:text-cyan-100 focus:outline-none focus:ring-2 focus:ring-cyan-400"
        aria-label="Instagram"
      >
        <Instagram size={22} />
      </Link>

      <Link
        href="https://linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
        style={{ height: '50.4px', width: '50.4px' }}
        className="flex items-center justify-center rounded-full border-2 border-cyan-400 bg-transparent text-cyan-300 shadow-[0_0_16px_2px_rgba(34,211,238,0.5)] transition-all hover:scale-105 hover:shadow-[0_0_32px_6px_rgba(34,211,238,0.8)] hover:text-cyan-100 focus:outline-none focus:ring-2 focus:ring-cyan-400"
        aria-label="LinkedIn"
      >
        <Linkedin size={22} />
      </Link>
    </div>
  )
}
