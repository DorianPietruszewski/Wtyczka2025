"use client"

import Image from "next/image";
import NeonNav from "@/components/neonnav";
import SocialButtons from "@/components/social-buttons";
import SignUpButton from "@/components/signup";
import Countdown from "@/components/countdown";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Toaster, toast } from "sonner";

export default function Home() {
  const [activeTab, setActiveTab] = useState("home");
  const [contactMessage, setContactMessage] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [navDropdownOpen, setNavDropdownOpen] = useState(false);

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
          className={`z-10 absolute transition-all duration-700 ease-in-out whitespace-nowrap
            ${
              activeTab === "home"
                ? "left-1/2 top-[440px] -translate-x-1/2 scale-110"
                : "right-[-40px] top-0 translate-x-0 scale-60"
            }
            flex items-center justify-center gap-3 px-20 py-6 rounded-full bg-cyan-700/90 backdrop-blur-lg shadow-lg hover:shadow-[0_0_32px_8px_rgba(14,116,144,0.25)] border-4 border-cyan-400 border-solid transition-all text-white font-bold text-2xl drop-shadow-[0_2px_12px_rgba(14,116,144,0.18)] animate-glow focus:outline-none focus:ring-2 focus:ring-cyan-400/60 cursor-pointer
          `}
        >
          <span className="font-bold text-white drop-shadow-[0_2px_12px_rgba(14,116,144,0.22)] whitespace-nowrap">Zapisz się</span>
          <ArrowRight className="h-6 w-6 transition-transform duration-300 text-white drop-shadow-[0_2px_12px_rgba(14,116,144,0.22)]" />
        </button>
        {/* Usunięto licznik czasu z headera */}
      </header>
      <nav
        className="flex justify-center items-center gap-1 mb-3 transition-all duration-700 ease-in-out whitespace-nowrap"
        style={{
          marginTop: activeTab === "home" ? "400px" : "-191px",
        }}
      >
        {/* Responsive NeonNav: wrap in fixed-width container */}
        <div className="w-full flex justify-center">
          <div
            className={`relative flex justify-center items-center`}
            style={{
              width: activeTab === "home" ? "100%" : "1200px",
              maxWidth: "100%",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            {/* Show dropdown only if not enough space for 1200px (simulate with media query) */}
            <div className={`block ${activeTab === "home" ? "md:hidden" : "xl:hidden"} relative`}>
              <button
                className={`relative flex items-center gap-2 bg-transparent shadow-none px-2 py-2 outline-none border-none focus:ring-0
                  ${activeTab === "home" ? "scale-200 mt-0 mb-4" : "scale-100 mt-8 mb-8"}
                `}
                onClick={() => setNavDropdownOpen((v) => !v)}
                aria-label="Otwórz menu"
                style={{ background: "none", border: "none" }}
                tabIndex={0}
                onMouseDown={e => e.preventDefault()}
              >
                {/* Ikona hamburgera */}
                <span className="flex flex-col justify-center items-center w-7 h-7 relative z-10
                  hover:cursor-pointer active:cursor-pointer
                ">
                  <span className={`block h-1 w-7 bg-cyan-400 rounded transition-all duration-300 ${navDropdownOpen ? "rotate-45 translate-y-2" : ""}`}></span>
                  <span className={`block h-1 w-7 bg-cyan-400 rounded my-1 transition-all duration-300 ${navDropdownOpen ? "opacity-0" : ""}`}></span>
                  <span className={`block h-1 w-7 bg-cyan-400 rounded transition-all duration-300 ${navDropdownOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
                </span>
              </button>
              {navDropdownOpen && (
                <div className="absolute left-1/2 -translate-x-1/2 mt-2 bg-black/90 border border-cyan-400 rounded-xl shadow-lg z-50 flex flex-col items-stretch w-max min-w-[180px]">
                  {/* Zamiast <NeonNav /> własne przyciski */}
                  <button
                    className={`${
                      activeTab === "home" ? "py-4 px-10 text-xl" : "py-3 px-6 text-lg"
                    } text-cyan-300 hover:bg-cyan-900/40 border-b border-cyan-800 last:border-b-0 transition-colors font-bold text-center`}
                    onClick={() => { setActiveTab("home"); setNavDropdownOpen(false); }}
                  >
                    Strona główna
                  </button>
                  <button
                    className={`${
                      activeTab === "home" ? "py-4 px-10 text-xl" : "py-3 px-6 text-lg"
                    } text-cyan-300 hover:bg-cyan-900/40 border-b border-cyan-800 last:border-b-0 transition-colors font-bold text-center`}
                    onClick={() => { setActiveTab("participants"); setNavDropdownOpen(false); }}
                  >
                    Uczestnicy
                  </button>
                  <button
                    className={`${
                      activeTab === "home" ? "py-4 px-10 text-xl" : "py-3 px-6 text-lg"
                    } text-cyan-300 hover:bg-cyan-900/40 border-b border-cyan-800 last:border-b-0 transition-colors font-bold text-center`}
                    onClick={() => { setActiveTab("rules"); setNavDropdownOpen(false); }}
                  >
                    Regulamin
                  </button>
                  <button
                    className={`${
                      activeTab === "home" ? "py-4 px-10 text-xl" : "py-3 px-6 text-lg"
                    } text-cyan-300 hover:bg-cyan-900/40 transition-colors font-bold text-center`}
                    onClick={() => { setActiveTab("contact"); setNavDropdownOpen(false); }}
                  >
                    Kontakt
                  </button>
                </div>
              )}
            </div>
            <div
              className={`hidden ${activeTab === "home" ? "md:flex" : "xl:flex"} whitespace-nowrap w-full justify-center`}
            >
              <NeonNav onTabChange={setActiveTab} />
            </div>
          </div>
        </div>
      </nav>
      {activeTab === "home" && (
        <>
          <div
            className="flex justify-center w-full transition-all duration-700 ease-in-out"
            style={{
              marginTop: "80px",
            }}
          >
            <Countdown />
          </div>
          <div
            className="transition-all duration-700 ease-in-out"
            style={{
              marginTop: "40px",
            }}
          >
            <div className="text-center text-cyan-200 text-xl font-semibold mt-2">
              Witaj na stronie głównej!
            </div>
          </div>
        </>
      )}
      {activeTab === "participants" && (
        <div className="text-center text-cyan-200 text-xl font-semibold mt-2">Informacje dla uczestników.</div>
      )}
      {activeTab === "rules" && (
        <div className="text-center text-cyan-200 text-xl font-semibold mt-2">Regulamin wydarzenia.</div>
      )}
      {activeTab === "contact" && (
        <div className="flex flex-col items-center justify-center mt-2 w-full">
          <h2 className="text-2xl font-bold text-cyan-200 mb-4 neon-text">Formularz kontaktowy:</h2>
          <form
            className="flex flex-col items-center w-full max-w-md gap-4 bg-black/60 neon-border rounded-xl p-6"
            onSubmit={e => {
              e.preventDefault();
              alert("Wiadomość została wysłana! (prototyp)");
            }}
          >
            <input
              type="email"
              name="email"
              required
              value={contactEmail}
              onChange={e => setContactEmail(e.target.value)}
              className="w-full rounded-md border border-cyan-400 bg-black/60 text-cyan-200 p-2"
              placeholder="Twój e-mail"
            />
            <textarea
              name="message"
              required
              rows={5}
              maxLength={10}
              value={contactMessage}
              onChange={e => {
                if (e.target.value.length === 10 && contactMessage.length < 10) {
                  toast.warning("Osiągnięto limit znaków");
                }
                setContactMessage(e.target.value);
              }}
              className="w-full rounded-md border border-cyan-400 bg-black/60 text-cyan-200 p-2 resize-none"
              placeholder="Napisz swoją wiadomość... (max 10 znaków)"
            />
            <button
              type="submit"
              className="mt-2 bg-cyan-400 text-black font-bold hover:bg-cyan-300 neon-border rounded-md px-6 py-2 transition-colors"
            >
              Wyślij
            </button>
          </form>
          <div className="mt-6 text-cyan-100 text-center space-y-1">
            <div>
              <b>Mail:</b> wtyczka2025@email.com
            </div>
            <div>
              <b>Telefon:</b> 123 456 789
            </div>
            <div>
              <b>Adres:</b> Politechnika, ul. Przykładowa 1, 00-000 Miasto
            </div>
          </div>
        </div>
      )}
      <div className="flex-1" />
      <div className="mb-8" />
      <footer className="w-full flex justify-center py-6 border-t border-cyan-900/40 bg-black/30">
        <SocialButtons />
      </footer>
      <Toaster
        position="bottom-right"
        theme="dark"
        toastOptions={{
          style: {
            background: "#7f1d1d",
            color: "#fff",
            border: "2px solid #dc2626",
            boxShadow: "0 0 16px 2px #dc2626cc",
          },
          className: "font-bold",
        }}
      />
    </div>
  );
}
