import Countdown from "@/components/countdown";
import SignUpButton from "@/components/signup";
import SocialButtons from "@/components/social-buttons";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

export default function MainTab() {
  return (
    <section className="flex flex-col items-center justify-center w-full min-h-[60vh] gap-8">
      <div className="flex flex-col items-center gap-4 mt-8">
        <img src="/ikona.ico" alt="Logo Wtyczka 2025" className="w-40 h-40 neon-border drop-shadow-[0_0_32px_#22d3ee]" />
        <h1 className="text-4xl md:text-5xl font-extrabold text-cyan-200 neon-text text-center drop-shadow-[0_0_32px_#22d3ee]">Wtyczka 2025</h1>
      </div>
      <div className="w-full max-w-2xl">
        <Carousel>
          <CarouselContent>
            <CarouselItem><img src="/file.svg" alt="Zdjęcie 1" className="rounded-xl neon-border w-full h-56 object-contain bg-black/40" /></CarouselItem>
            <CarouselItem><img src="/globe.svg" alt="Zdjęcie 2" className="rounded-xl neon-border w-full h-56 object-contain bg-black/40" /></CarouselItem>
            <CarouselItem><img src="/window.svg" alt="Zdjęcie 3" className="rounded-xl neon-border w-full h-56 object-contain bg-black/40" /></CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
      <Countdown />
      <SignUpButton />
      <SocialButtons />
    </section>
  );
}
