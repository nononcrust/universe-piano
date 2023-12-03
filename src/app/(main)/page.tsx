import { CarouselSection } from "@/components/main/carousel-section";
import { ServiceSection } from "@/components/main/service-section";

export default function Home() {
  return (
    <main className="pb-32">
      <CarouselSection />
      {/* <CategorySection /> */}
      <ServiceSection />
      {/* <ReviewSection /> */}
      {/* <CardSection /> */}
    </main>
  );
}
