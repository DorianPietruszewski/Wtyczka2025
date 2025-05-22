import { useEffect, useState } from "react";

// Ustaw datę wyjazdu tutaj (rok, miesiąc-1, dzień, godzina, minuta)
const EVENT_DATE = new Date(2025, 8, 15, 8, 0, 0); // 15 września 2025, 8:00

function getTimeLeft() {
  const now = new Date();
  const diff = EVENT_DATE.getTime() - now.getTime();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);
  return { days, hours, minutes, seconds };
}

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center p-4 rounded-xl neon-border bg-black/60 shadow-lg">
      <span className="text-cyan-300 text-lg font-semibold mb-1">Do wyjazdu zostało:</span>
      <div className="flex gap-4 text-3xl font-bold text-cyan-200">
        <div><span>{timeLeft.days}</span><span className="text-xs ml-1">dni</span></div>
        <div><span>{timeLeft.hours}</span><span className="text-xs ml-1">h</span></div>
        <div><span>{timeLeft.minutes}</span><span className="text-xs ml-1">min</span></div>
        <div><span>{timeLeft.seconds}</span><span className="text-xs ml-1">sek</span></div>
      </div>
    </div>
  );
}

// Dodaj do tailwind.config.ts klasę 'neon-border' z neonowym obramowaniem!
