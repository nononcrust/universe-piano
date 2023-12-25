import { CarouselSection } from "@/components/main/carousel-section";
import { CommunitySection } from "@/components/main/community-section";
import { IntroSection } from "@/components/main/intro-section";
import { ReviewSection } from "@/components/main/review-section";
import { SecondServiceSection } from "@/components/main/second-service-section";
import { ServiceAccordionSection } from "@/components/main/service-accordion-section";

export default function Home() {
  return (
    <main className="flex flex-col pb-32">
      {/* <HeroSection /> */}
      <CarouselSection />
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
  return <section className="h-[600px] bg-primary"></section>;
};
