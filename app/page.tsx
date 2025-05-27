"use client"

import Image from "next/image";
import NeonNav from "@/components/neonnav";
import SocialButtons from "@/components/social-buttons";
import Countdown from "@/components/countdown";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Toaster, toast } from "sonner";
import { useLayoutEffect, useRef, useEffect } from "react";
import RegistrationForm from "@/components/registration-form"; // Importujemy komponent na górze pliku
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [activeTab, setActiveTab] = useState("home");
  const [contactMessage, setContactMessage] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [navDropdownOpen, setNavDropdownOpen] = useState(false);

  // Dodaj stan do animacji wysuwanego top-bara
  const [showTopBar, setShowTopBar] = useState(false);
  const [topBarVisible, setTopBarVisible] = useState(false);

  // Otwieranie/zamykanie top-bara z animacją
  useEffect(() => {
    if (showTopBar) setTopBarVisible(true);
  }, [showTopBar]);

  // Zamykaj top-bar przy zmianie zakładki lub zamknięciu dropdowna
  useEffect(() => {
    if (!navDropdownOpen && activeTab !== "home") {
      setTopBarVisible(false);
      setTimeout(() => setShowTopBar(false), 350);
    }
  }, [navDropdownOpen, activeTab]);

  // Funkcja do obsługi kliknięcia hamburgera
  const handleDropdownClick = () => {
    if (activeTab === "home") {
      setNavDropdownOpen((v) => !v);
    } else {
      if (showTopBar && topBarVisible) {
        setTopBarVisible(false);
        setTimeout(() => setShowTopBar(false), 350);
      } else if (!showTopBar) {
        setShowTopBar(true);
        setTimeout(() => setTopBarVisible(true), 10);
      }
    }
  };

  return (
    <div
      className="min-h-screen flex flex-col bg-gradient-to-br from-black via-[#0f172a] to-[#0e7490] text-white"
      style={
        showTopBar && activeTab !== "home"
          ? { paddingTop: `calc(var(--top-bar-height, 0px))` }
          : undefined
      }
    >
      {showTopBar && activeTab !== "home" && (
        <TopBar
          visible={topBarVisible}
          setActiveTab={(tab) => {
            setTopBarVisible(false);
            setTimeout(() => {
              setShowTopBar(false);
              setActiveTab(tab);
              setNavDropdownOpen(false);
            }, 350);
          }}
        />
      )}
      <header className="relative flex flex-col items-center justify-center pt-16 pb-8 gap-4 min-h-[180px]">
        <Link href="/" className="block">
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
        </Link>
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
          onClick={() => setActiveTab("signup")}
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
            {/* Hamburger tylko na home pokazuje stare dropdown, poza home wysuwa top-bar */}
            <div className={`block ${activeTab === "home" ? "md:hidden" : "xl:hidden"} relative`}>
              <button
                className={`relative flex items-center gap-2 bg-transparent shadow-none px-2 py-2 outline-none border-none focus:ring-0
                  ${activeTab === "home" ? "scale-200 mt-0 mb-4" : "scale-100 mt-8 mb-8"}
                `}
                onClick={handleDropdownClick}
                aria-label="Otwórz menu"
                style={{ background: "none", border: "none" }}
                tabIndex={0}
                onMouseDown={e => e.preventDefault()}
              >
                {/* Ikona hamburgera */}
                <span className="flex flex-col justify-center items-center w-7 h-7 relative z-10
                  hover:cursor-pointer active:cursor-pointer
                ">
                  <span className={`block h-1 w-7 bg-cyan-400 rounded transition-all duration-300 ${navDropdownOpen || (showTopBar && topBarVisible) ? "rotate-45 translate-y-2" : ""}`}></span>
                  <span className={`block h-1 w-7 bg-cyan-400 rounded my-1 transition-all duration-300 ${(navDropdownOpen || (showTopBar && topBarVisible)) ? "opacity-0" : ""}`}></span>
                  <span className={`block h-1 w-7 bg-cyan-400 rounded transition-all duration-300 ${navDropdownOpen || (showTopBar && topBarVisible) ? "-rotate-45 -translate-y-2" : ""}`}></span>
                </span>
              </button>
              {/* Dropdown menu tylko na home */}
              {activeTab === "home" && navDropdownOpen && (
                <div className="absolute left-1/2 -translate-x-1/2 mt-2 bg-black/90 border border-cyan-400 rounded-xl shadow-lg z-50 flex flex-col items-stretch w-max min-w-[180px] animate-fade-in">
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
                  <style jsx global>{`
                    .animate-fade-in {
                      animation: fadeInDropdown 0.3s cubic-bezier(0.4,0,0.2,1);
                    }
                    @keyframes fadeInDropdown {
                      0% { opacity: 0; transform: translateY(-16px);}
                      100% { opacity: 1; transform: translateY(0);}
                    }
                  `}</style>
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
        <div className="text-center text-cyan-200 text-xl font-semibold mt-2">
          Informacje dla uczestników.
        </div>
      )}
      {activeTab === "signup" && (
        <div className="flex flex-col items-center justify-center mt-2 w-full">
          <h2 className="text-2xl font-bold text-cyan-200 mb-4 neon-text">Formularz zapisu:</h2>
          <div className="flex flex-col items-center w-full max-w-md gap-4 bg-black/60 neon-border rounded-xl p-6">
            <RegistrationForm />
          </div>
        </div>
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
            <Button
              type="submit"
              className="mt-2 bg-cyan-400 text-black font-bold hover:bg-cyan-300 neon-border rounded-md px-6 py-2 transition-colors"
            >
              Wyślij
            </Button>
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

// Animowany TopBar
function TopBar({
  setActiveTab,
  visible = true,
}: {
  setActiveTab: (tab: string) => void;
  visible?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (ref.current) {
      document.documentElement.style.setProperty(
        "--top-bar-height",
        ref.current.offsetHeight + "px"
      );
    }
    return () => {
      document.documentElement.style.removeProperty("--top-bar-height");
    };
  }, []);

  // Funkcja zamykająca z animacją
  const handleTab = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div
      ref={ref}
      className={`w-full h-auto py-2 bg-black fixed top-0 left-0 z-50 border-b-2 border-cyan-400 shadow-[0_2px_16px_0_#22d3ee99] flex flex-col items-center justify-center gap-1
        ${visible ? "animate-slide-down" : "animate-slide-up"}`}
      style={{
        animation: `${visible ? "slideDown" : "slideUp"} 0.35s cubic-bezier(0.4,0,0.2,1)`,
        pointerEvents: visible ? "auto" : "none"
      }}
    >
      <button
        className="py-2 px-6 text-cyan-300 hover:bg-cyan-900/40 transition-colors font-bold text-base text-center rounded w-full max-w-xs"
        onClick={() => handleTab("home")}
      >
        Strona główna
      </button>
      <button
        className="py-2 px-6 text-cyan-300 hover:bg-cyan-900/40 transition-colors font-bold text-base text-center rounded w-full max-w-xs"
        onClick={() => handleTab("participants")}
      >
        Uczestnicy
      </button>
      <button
        className="py-2 px-6 text-cyan-300 hover:bg-cyan-900/40 transition-colors font-bold text-base text-center rounded w-full max-w-xs"
        onClick={() => handleTab("rules")}
      >
        Regulamin
      </button>
      <button
        className="py-2 px-6 text-cyan-300 hover:bg-cyan-900/40 transition-colors font-bold text-base text-center rounded w-full max-w-xs"
        onClick={() => handleTab("contact")}
      >
        Kontakt
      </button>
      <style jsx global>{`
        @keyframes slideDown {
          0% {
            transform: translateY(-100%);
            opacity: 0;
          }
          100% {
            transform: translateY(0%);
            opacity: 1;
          }
        }
        @keyframes slideUp {
          0% {
            transform: translateY(0%);
            opacity: 1;
          }
          100% {
            transform: translateY(-100%);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
