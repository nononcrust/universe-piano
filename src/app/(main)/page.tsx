import { CommunitySection } from "@/components/main/community-section";
import { ReviewSection } from "@/components/main/review-section";
import { SecondServiceSection } from "@/components/main/second-service-section";
import { ServiceAccordionSection } from "@/components/main/service-accordion-section";

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
