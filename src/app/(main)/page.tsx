import { CommunitySection } from "@/components/main/community-section";
import { IntroSection } from "@/components/main/intro-section";
import { ReviewSection } from "@/components/main/review-section";
import { SecondServiceSection } from "@/components/main/second-service-section";
import { ServiceAccordionSection } from "@/components/main/service-accordion-section";
import { Aos } from "@/components/ui/aos";

export default function Home() {
  return (
    <main className="flex flex-col pb-32">
      <HeroSection />
      {/* <CarouselSection /> */}
      <IntroSection />
      {/* <ServiceSection /> */}
      <SecondServiceSection />
      <CommunitySection />
      {/* <SupportSection /> */}
      <ReviewSection />
      <ServiceAccordionSection />
    </main>
  );
}

const HeroSection = () => {
  return (
    <section className="bg-zinc-900 bg-[url('/images/stars-bg.png')] py-32">
      <Aos className="container">
        <h1 className="text-3xl font-bold text-white max-md:whitespace-pre-wrap md:text-5xl md:leading-tight">
          {"Create your Universe:\nBeyond Talent"}
        </h1>
        <p className="text-medium mt-8 leading-normal text-gray-300 md:text-2xl md:leading-normal">
          스스로를 규정하던 모든 프레임에서 벗어나,
          <br />
          무한한 가능성을 탐험하실 분들과 동행합니다
        </p>
      </Aos>
    </section>
  );
};
