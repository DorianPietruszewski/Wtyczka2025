"use client"

import Image from "next/image";
import NeonNav from "@/components/neonnav";
import SocialButtons from "@/components/social-buttons";
import SignUpButton from "@/components/signup";
import Countdown from "@/components/countdown";
import { useState } from "react";
import { ArrowRight } from "lucide-react";

export default function Home() {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-black via-[#0f172a] to-[#0e7490] text-white">
      <header className="relative flex flex-col items-center justify-center pt-16 pb-8 gap-4 min-h-[180px]">
        <Image
          src="/wtyczka.png"
          alt="Logo Wtyczka 2025"
          width={320}
          height={320}
          className={`drop-shadow-[0_0_64px_#22d3ee] z-10 absolute
            transition-all duration-700 ease-in-out
            ${
              activeTab === "home"
                ? "w-[23rem] h-[23rem] left-1/2 top-12 -translate-x-1/2 translate-y-0"
                : "w-16 h-16 left-4 top-2 translate-x-0 translate-y-0"
            }
          `}
        />
        {/* Przycisk zapisz się - pozycjonowanie i rozmiar zależne od aktywnej zakładki */}
        <button
          className={`z-10 absolute transition-all duration-700 ease-in-out
            ${
              activeTab === "home"
                ? "left-1/2 top-[440px] -translate-x-1/2 scale-110"
                : "right-[-40px] top-0 translate-x-0 scale-60"
            }
            flex items-center justify-center gap-3 px-20 py-6 rounded-full bg-cyan-700/90 backdrop-blur-lg shadow-lg hover:shadow-[0_0_32px_8px_rgba(14,116,144,0.25)] border-4 border-cyan-400 border-solid transition-all text-white font-bold text-2xl drop-shadow-[0_2px_12px_rgba(14,116,144,0.18)] animate-glow focus:outline-none focus:ring-2 focus:ring-cyan-400/60 cursor-pointer
          `}
        >
          <span className="font-bold text-white drop-shadow-[0_2px_12px_rgba(14,116,144,0.22)]">Zapisz się</span>
          <ArrowRight className="h-6 w-6 transition-transform duration-300 text-white drop-shadow-[0_2px_12px_rgba(14,116,144,0.22)]" />
        </button>
        {/* Gładka animacja przesuwania treści w dół */}
        <div
          className="transition-all duration-700 ease-in-out w-full flex justify-center"
          style={{
            marginTop: activeTab === "home" ? "520px" : "40px",
          }}
        >
          <Countdown />
        </div>
      </header>
      <nav className="flex justify-center items-center gap-1 mb-3 mt-2">
        <NeonNav onTabChange={setActiveTab} />
      </nav>
      {activeTab === "home" && (
        <div className="text-center text-cyan-200 text-xl font-semibold mt-2">Witaj na stronie głównej!</div>
      )}
      {activeTab === "participants" && (
        <div className="text-center text-cyan-200 text-xl font-semibold mt-2">Informacje dla uczestników.</div>
      )}
      {activeTab === "rules" && (
        <div className="text-center text-cyan-200 text-xl font-semibold mt-2">Regulamin wydarzenia.</div>
      )}
      {activeTab === "contact" && (
        <div className="text-center text-cyan-200 text-xl font-semibold mt-2">Kontakt do organizatorów.</div>
      )}
      <div className="flex-1" />
      <footer className="w-full flex justify-center py-6 border-t border-cyan-900/40 bg-black/30">
        <SocialButtons />
      </footer>
    </div>
  );
}
