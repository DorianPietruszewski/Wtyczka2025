"use client"

import Image from "next/image";
import NeonNav from "@/components/neonnav";
import SocialButtons from "@/components/social-buttons";
import SignUpButton from "@/components/signup";
import { useState } from "react";

export default function Home() {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-black via-[#0f172a] to-[#0e7490] text-white">
      <header className="flex flex-col items-center justify-center pt-16 pb-8 gap-6">
        <Image src="/wtyczka.png" alt="Logo Wtyczka 2025" width={320} height={320} className="w-80 h-80 drop-shadow-[0_0_64px_#22d3ee]" />
        <SignUpButton />
      </header>
      <nav className="flex justify-center items-center gap-6 mb-8 mt-16">
        <NeonNav onTabChange={setActiveTab} />
      </nav>
      <div className="flex-1" />
      <footer className="w-full flex justify-center py-6 border-t border-cyan-900/40 bg-black/30">
        <SocialButtons />
      </footer>
    </div>
  );
}
