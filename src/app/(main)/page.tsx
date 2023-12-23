import { CommunitySection } from "@/components/main/community-section";
import { IntroSection } from "@/components/main/intro-section";
import { ReviewSection } from "@/components/main/review-section";
import { SecondServiceSection } from "@/components/main/second-service-section";
import { ServiceAccordionSection } from "@/components/main/service-accordion-section";
import { SupportSection } from "@/components/main/support-section";

export default function Home() {
  return (
    <main className="flex flex-col bg-content pb-32">
      {/* <CarouselSection /> */}
      <IntroSection />
      {/* <ServiceSection /> */}
      <SecondServiceSection />
      <CommunitySection />
      <SupportSection />
      <ReviewSection />
      <ServiceAccordionSection />
    </main>
  );
}
