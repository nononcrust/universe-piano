import { CardSection } from "@/components/main/card-section";
import { CarouselSection } from "@/components/main/carousel-section";
import CategorySection from "@/components/main/category-section";

export default function Home() {
  return (
    <main className="pb-32">
      <CarouselSection />
      <CategorySection />
      {/* <ServiceSection /> */}
      {/* <ReviewSection /> */}
      <CardSection />
    </main>
  );
}
