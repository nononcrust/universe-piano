import { CardSection } from "@/components/main/card-section";
import { CarouselSection } from "@/components/main/carousel-section";
import { ReviewSection } from "@/components/main/review-section";
import { ServiceSection } from "@/components/main/service-section";

export default function Home() {
  return (
    <main className="pb-32">
      <CarouselSection />
      {/* <CategorySection /> */}
      <ServiceSection />
      <ReviewSection />
      <CardSection />
    </main>
  );
}
