import { CommunitySection } from "@/app/(main)/(home)/_components/community-section";
import { HeroSection } from "@/app/(main)/(home)/_components/hero-section";
import { IntroSection } from "@/app/(main)/(home)/_components/intro-section";
import { ReviewSection } from "@/app/(main)/(home)/_components/review-section";
import { SecondServiceSection } from "@/app/(main)/(home)/_components/second-service-section";
import { ServiceAccordionSection } from "@/app/(main)/(home)/_components/service-accordion-section";

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
