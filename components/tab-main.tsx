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
import Image from "next/image";

export default function MainTab() {
  return (
    <section className="flex flex-col items-center justify-center w-full min-h-[60vh] gap-8">
      <div className="flex flex-col items-center gap-4 mt-8">
        <Image
          src="/wtyczka.png"
          alt="Logo Wtyczka 2025"
          width={240}
          height={240}
          className="w-60 h-60 drop-shadow-[0_0_32px_#22d3ee]"
        />
      </div>
      <div className="w-full max-w-2xl">
        <Carousel>
          <CarouselContent>
            <CarouselItem>
              <Image
                src="/file.svg"
                alt="Zdjęcie 1"
                width={224}
                height={224}
                className="rounded-xl neon-border w-full h-56 object-contain bg-black/40"
              />
            </CarouselItem>
            <CarouselItem>
              <Image
                src="/globe.svg"
                alt="Zdjęcie 2"
                width={224}
                height={224}
                className="rounded-xl neon-border w-full h-56 object-contain bg-black/40"
              />
            </CarouselItem>
            <CarouselItem>
              <Image
                src="/window.svg"
                alt="Zdjęcie 3"
                width={224}
                height={224}
                className="rounded-xl neon-border w-full h-56 object-contain bg-black/40"
              />
            </CarouselItem>
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
