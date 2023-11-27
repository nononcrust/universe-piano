import { CardSection } from "@/components/main/card-section";
import CategorySection from "@/components/main/category-section";
import { ReviewSection } from "@/components/main/review-section";
import { ServiceSection } from "@/components/main/service-section";

export default function Home() {
  return (
    <main className="pb-32">
      {/* <CarouselSection /> */}
      <CategorySection />
      <ServiceSection />
      <ReviewSection />
      <CardSection />
    </main>
  );
}
