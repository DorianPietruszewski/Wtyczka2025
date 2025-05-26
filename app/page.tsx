"use client"

import Image from "next/image";
import NeonNav from "@/components/neonnav";
import SocialButtons from "@/components/social-buttons";
import SignUpButton from "@/components/signup";
import MainTab from "@/components/tab-main";
import ParticipantsTab from "@/components/tab-participants";
import RulesTab from "@/components/tab-rules";
import ContactTab from "@/components/tab-contact";
import FormTab from "@/components/tab-form";
import { useState } from "react";

export default function Home() {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-[#0f172a] to-[#0e7490] text-white relative">
      <div className="flex items-center justify-between px-8 pt-8">
        <div className="flex items-center gap-4">
          <Image src="/wtyczka.png" alt="Logo Wtyczka 2025" width={96} height={96} className="w-24 h-24 drop-shadow-[0_0_32px_#22d3ee] bg-black/80 p-1 rounded-full" />
        </div>
        <div className="flex-1 flex justify-center">
          <NeonNav onTabChange={setActiveTab} />
        </div>
        <div className="flex items-center gap-4">
          <SocialButtons />
          <SignUpButton />
        </div>
      </div>
      <main className="flex flex-col items-center justify-center min-h-[60vh] relative w-full">
        {activeTab === "home" && <MainTab />}
        {activeTab === "participants" && <ParticipantsTab />}
        {activeTab === "rules" && <RulesTab />}
        {activeTab === "contact" && <ContactTab />}
        {activeTab === "form" && <FormTab />}
      </main>
    </div>
  );
}
