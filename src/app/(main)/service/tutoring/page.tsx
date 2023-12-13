import { Aos } from "@/components/ui/aos";
import Image from "next/image";

export default function TutoringListPage() {
  return (
    <main className="flex flex-col">
      <HeroSection />
    </main>
  );
}

const HeroSection = () => {
  return (
    <section className="bg-gray-50">
      <Aos>
        <div className="container mt-16 flex flex-col items-center gap-8 py-16">
          <div className="flex flex-1 flex-col items-center gap-4">
            <div className="rounded-xl bg-black px-3 py-1 text-sm font-semibold text-white">
              입시 과외
            </div>
            <h1 className="whitespace-pre-line text-center text-2xl font-bold md:text-4xl md:leading-tight">
              {"국내 최초 미국 음대 입시 과외,\n유니버스 피아노에서만 가능합니다."}
            </h1>
          </div>
          <div className="flex justify-center">
            <Image src="/images/3d-star.png" width={300} height={300} alt="별" />
          </div>
        </div>
      </Aos>
    </section>
  );
};

const UniversePianoSection = () => {
  return (
    <Aos className="my-16">
      <section className="container">
        <div className=""></div>
      </section>
    </Aos>
  );
};
