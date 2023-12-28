import tutoringHero3dImage from "@/assets/images/tutoring/tutoring-hero-3d.png";
import { Aos } from "@/components/ui/aos";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export const HeroSection = () => {
  return (
    <section className="bg-content">
      <Aos>
        <div className="container flex flex-col items-center gap-8 py-24">
          <div className="flex flex-1 flex-col items-center gap-4">
            <Badge className="rounded-xl px-3 text-base font-semibold" variant="primary">
              입시 과외
            </Badge>
            <h1 className="whitespace-pre-line text-center text-2xl font-bold md:text-5xl md:leading-tight">
              국내 최초 미국 음대 입시 과외
            </h1>
          </div>
          <div className="flex justify-center">
            <Image className="mt-12 w-[200px]" priority src={tutoringHero3dImage} alt="별" />
          </div>
        </div>
      </Aos>
    </section>
  );
};
