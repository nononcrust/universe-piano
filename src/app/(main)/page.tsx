import { CardSection } from "@/components/main/card-section";
import { CarouselSection } from "@/components/main/carousel-section";
import { ReviewSection } from "@/components/main/review-section";

export default function Home() {
  return (
    <main className="pb-32">
      <CarouselSection />
      {/* <CategorySection /> */}
      {/* <ServiceSection /> */}
      <CardSection />
      <ReviewSection />
    </main>
  );
}
