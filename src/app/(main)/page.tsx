import { CardSection } from "@/components/landing/card-section";
import { LandingImageSection } from "@/components/landing/landing-image-section";
import { ReviewSection } from "@/components/landing/review-section";
import { ServiceSection } from "@/components/landing/service-section";

export default function Home() {
  return (
    <main className="pb-32">
      <LandingImageSection />
      <ServiceSection />
      <ReviewSection />
      <CardSection />
    </main>
  );
}
