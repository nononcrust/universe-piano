import { SecondServiceSection } from "@/components/landing/second-service-section";
import { ServiceSection } from "@/components/landing/service-section";
import { IntroSection } from "@/components/main/intro-section";
import { ReviewSection } from "@/components/main/review-section";

export default function Home() {
  return (
    <main className="flex flex-col pb-32">
      <IntroSection />
      <ServiceSection />
      <SecondServiceSection />
      <ReviewSection />
    </main>
  );
}
