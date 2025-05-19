"use client"

import Link from "next/link"

export default function NeonNav() {
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/features", label: "Features" },
    { href: "/pricing", label: "Pricing" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="flex justify-center items-center gap-6 py-8">
      {navLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="relative px-8 py-2 rounded-full border-2 border-cyan-400 bg-transparent text-cyan-300 font-semibold text-lg transition-all duration-200 shadow-[0_0_16px_2px_rgba(34,211,238,0.5)] hover:scale-105 hover:shadow-[0_0_32px_6px_rgba(34,211,238,0.8)] hover:text-cyan-100 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          style={{ boxShadow: "0 0 16px 2px rgba(34,211,238,0.5)" }}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
