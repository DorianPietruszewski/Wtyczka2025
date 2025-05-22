import { useState } from "react";
import SubTabs from "@/components/sub-tabs";
import Countdown from "@/components/countdown";
import SocialButtons from "@/components/social-buttons";
import SignUpButton from "@/components/signup";
import RegistrationForm from "@/components/registration-form";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

export default function HomeTab() {
  const [subTab, setSubTab] = useState("rejestracja");

  return (
    <div className="w-full flex flex-col items-center gap-6 mt-6">
      {/* Logo i carousel */}
      <div className="flex flex-col md:flex-row items-center gap-8 w-full max-w-5xl justify-center">
        <img src="/ikona.ico" alt="Logo Wtyczka 2025" className="w-32 h-32 neon-border" />
        <div className="w-full max-w-md relative">
          <Carousel>
            <CarouselContent>
              <CarouselItem><img src="/file.svg" alt="Zdjęcie 1" className="rounded-xl neon-border w-full h-48 object-contain bg-black/40" /></CarouselItem>
              <CarouselItem><img src="/globe.svg" alt="Zdjęcie 2" className="rounded-xl neon-border w-full h-48 object-contain bg-black/40" /></CarouselItem>
              <CarouselItem><img src="/window.svg" alt="Zdjęcie 3" className="rounded-xl neon-border w-full h-48 object-contain bg-black/40" /></CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
      {/* Licznik i przycisk do zapisów */}
      <div className="flex flex-col md:flex-row items-center gap-6 w-full max-w-3xl justify-center">
        <Countdown />
        <SignUpButton />
      </div>
      {/* Social media */}
      <div className="mt-2">
        <SocialButtons />
      </div>
      {/* SubTabs */}
      <div className="w-full max-w-3xl mt-8">
        <SubTabs value={subTab} onChange={setSubTab} />
        <div className="mt-4 rounded-xl bg-black/60 neon-border p-6 min-h-[200px]">
          {subTab === "rejestracja" && <RegistrationForm />}
          {subTab === "co-zabrac" && (
            <ul className="list-disc pl-6 text-cyan-200 space-y-1">
              <li>Dowód osobisty lub paszport</li>
              <li>Bilet na wyjazd (jeśli dotyczy)</li>
              <li>Ubrania na każdą pogodę</li>
              <li>Ręcznik, kosmetyki, klapki</li>
              <li>Ładowarka do telefonu</li>
              <li>Lekarstwa (jeśli przyjmujesz)</li>
              <li>Dobry humor!</li>
            </ul>
          )}
          {subTab === "info" && (
            <div className="text-cyan-200 space-y-2">
              <p><b>Data wyjazdu:</b> 15 września 2025, godz. 8:00</p>
              <p><b>Miejsce zbiórki:</b> Parking przy Politechnice</p>
              <p><b>Planowane atrakcje:</b> integracja, ognisko, gry terenowe, warsztaty, konkursy</p>
              <p><b>Kontakt:</b> wtyczka2025@email.com</p>
            </div>
          )}
          {subTab === "aktualnosci" && (
            <ul className="text-cyan-200 space-y-2">
              <li><b>23.05.2025:</b> Ruszyły zapisy na Wtyczkę 2025!</li>
              <li><b>01.06.2025:</b> Ogłoszenie programu wyjazdu już wkrótce!</li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
