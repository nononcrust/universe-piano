import { SecondServiceSection } from "@/components/landing/second-service-section";
import { ServiceAccordionSection } from "@/components/landing/service-accordion-section";
import { CommunitySection } from "@/components/main/community-section";
import { ReviewSection } from "@/components/main/review-section";

export default function Home() {
  return (
    <main className="flex flex-col pb-32">
      {/* <IntroSection /> */}
      {/* <ServiceSection /> */}
      <SecondServiceSection />
      <CommunitySection />
      <ReviewSection />
      <ServiceAccordionSection />
    </main>
  );
}
