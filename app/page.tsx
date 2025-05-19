"use client"

import NeonNav from "@/components/neonnav";
import SocialButtons from "@/components/social-buttons";
import { useState } from "react";

const tabData = [
  { id: "home", label: "Strona Główna", bg: "bg-cyan-900/60", text: "Tab: Strona Główna" },
  { id: "participants", label: "Dla uczestników", bg: "bg-purple-900/60", text: "Tab: Dla uczestników" },
  { id: "rules", label: "Regulamin", bg: "bg-green-900/60", text: "Tab: Regulamin" },
  { id: "contact", label: "Kontakt", bg: "bg-yellow-900/60", text: "Tab: Kontakt" },
];

export default function Home() {
  const [activeTab, setActiveTab] = useState("home"); // "home" = Strona Główna domyślnie

  return (
    <div className="min-h-screen bg-black">
      <div className="relative flex items-center px-8 pt-8">
        <div className="flex-1 flex justify-center">
          <NeonNav onTabChange={setActiveTab} />
        </div>
        <div className="absolute right-24">
          <SocialButtons />
        </div>
      </div>
      <main className="flex flex-col items-center justify-center min-h-[60vh] relative">
        {tabData.map(tab => (
          <div
            key={tab.id}
            id={tab.id}
            className={`w-full max-w-xl h-64 flex items-center justify-center rounded-2xl mt-8 text-3xl font-bold text-white shadow-lg absolute left-1/2 -translate-x-1/2 transition-all duration-500 ease-in-out ${tab.bg} ${activeTab === tab.id ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-95 z-0 pointer-events-none'}`}
            style={{ zIndex: activeTab === tab.id ? 10 : 0 }}
          >
            {tab.text}
          </div>
        ))}
      </main>
    </div>
  );
}
