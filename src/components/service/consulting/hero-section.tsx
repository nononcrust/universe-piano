import hero3dImage from "@/assets/images/consulting/consulting-hero-3d.png";
import { Aos } from "@/components/ui/aos";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export const HeroSection = () => {
  return (
    <section className="overflow-hidden bg-content py-24">
      <Aos>
        <div className="container flex flex-col items-center gap-8">
          <div className="flex flex-1 flex-col items-center gap-4">
            <Badge className="rounded-xl px-3 text-base font-semibold" variant="primary">
              입시 컨설팅
            </Badge>
            <h1 className="text-center text-3xl font-bold leading-tight md:text-5xl">
              미국 음대 입시 컨설팅
            </h1>
          </div>
          <Image className="w-[200px]" priority src={hero3dImage} alt="" fetchPriority="high" />
        </div>
      </Aos>
    </section>
  );
};
