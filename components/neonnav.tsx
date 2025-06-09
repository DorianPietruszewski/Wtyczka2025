"use client"

const navLinks = [
  { id: "home", label: "Strona Główna" },
  { id: "participants", label: "Dla uczestników" },
  { id: "rules", label: "Regulamin" },
  { id: "contact", label: "Kontakt" },
];

interface NeonNavProps {
  onTabChange?: (id: string) => void;
  activeTab?: string; // dodajemy prop do synchronizacji aktywnej zakładki
}

export default function NeonNav({ onTabChange, activeTab: externalActiveTab }: NeonNavProps) {
  // Usuwamy lokalny useState, korzystamy tylko z props
  const activeTab = externalActiveTab ?? "home";

  const handleTabClick = (id: string) => {
    if (onTabChange) onTabChange(id);
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="flex justify-center items-center gap-6 py-8">
      {navLinks.map((link) => (
        <button
          key={link.id}
          onClick={() => handleTabClick(link.id)}
          className={`relative px-8 py-2 rounded-full border-2 border-cyan-400 font-semibold text-lg transition-all duration-200 shadow-[0_0_16px_2px_rgba(34,211,238,0.5)] hover:scale-105 hover:shadow-[0_0_32px_6px_rgba(34,211,238,0.8)] hover:text-cyan-100 focus:outline-none focus:ring-2 focus:ring-cyan-400 ${activeTab === link.id ? 'bg-cyan-500 text-black neon-glow ring-2 ring-cyan-200' : 'bg-black/60 text-cyan-300'} cursor-pointer`}
          style={{ boxShadow: "0 0 16px 2px rgba(34,211,238,0.5)" }}
        >
          {link.label}
        </button>
      ))}
    </nav>
  );
}
