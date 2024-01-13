import { CommunitySection } from "@/components/main/community-section";
import { HeroSection } from "@/components/main/hero-section";
import { IntroSection } from "@/components/main/intro-section";
import { ReviewSection } from "@/components/main/review-section";
import { SecondServiceSection } from "@/components/main/second-service-section";
import { ServiceAccordionSection } from "@/components/main/service-accordion-section";

export default function Home() {
  return (
    <main className="flex flex-col pb-32">
      <HeroSection />
      <IntroSection />
      <SecondServiceSection />
      <CommunitySection />
      <ReviewSection />
      <ServiceAccordionSection />
    </main>
  );
}
