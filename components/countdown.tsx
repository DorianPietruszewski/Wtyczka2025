import { useEffect, useState } from "react";

// Data wydarzenia: 15 września 2025, 8:00
const EVENT_DATE = new Date(2025, 8, 15, 8, 0, 0);

function getTimeLeft() {
  const now = new Date();
  const diff = EVENT_DATE.getTime() - now.getTime();
  if (diff <= 0) return { days: 0, hours: 0 };
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  return { days, hours };
}

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 60 * 1000); // aktualizuj co minutę
    return () => clearInterval(timer);
  }, []);

  // Neonowa karta z gradientem, jednolity rozmiar tekstu
  return (
    <div className="relative flex flex-col items-center justify-center px-8 py-5 rounded-2xl border-2 border-cyan-400/60 bg-gradient-to-br from-black/70 via-[#0f172a]/80 to-[#0e7490]/60 shadow-xl max-w-xs">
      <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-cyan-900 rounded-full p-2 shadow-lg border-2 border-cyan-400">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
          <rect
            x="3"
            y="5"
            width="18"
            height="16"
            rx="4"
            fill="#0e7490"
            stroke="#22d3ee"
            strokeWidth="2"
          />
          <rect x="7" y="2" width="2" height="6" rx="1" fill="#22d3ee" />
          <rect x="15" y="2" width="2" height="6" rx="1" fill="#22d3ee" />
        </svg>
      </div>
      <span className="mt-6 text-cyan-200 text-base font-medium tracking-wide drop-shadow animate-glow">
        Do wyjazdu pozostało
      </span>
      <div className="flex items-end gap-4 mt-2 mb-1">
        <span className="text-5xl font-extrabold text-cyan-300 drop-shadow-lg">
          {timeLeft.days}
        </span>
        <span className="text-2xl font-semibold text-cyan-400 tracking-wider">
          dni
        </span>
        <span className="text-5xl font-extrabold text-cyan-300 drop-shadow-lg ml-4">
          {timeLeft.hours}
        </span>
        <span className="text-2xl font-semibold text-cyan-400 tracking-wider">
          godz
        </span>
      </div>
      <style jsx>{`
        @keyframes glow {
          0% {
            text-shadow: 0 0 8px #22d3ee, 0 0 2px #0e7490;
          }
          50% {
            text-shadow: 0 0 32px #22d3ee, 0 0 8px #0e7490;
          }
          100% {
            text-shadow: 0 0 8px #22d3ee, 0 0 2px #0e7490;
          }
        }
        .animate-glow {
          animation: glow 2s infinite alternate;
        }
      `}</style>
    </div>
  );
}
