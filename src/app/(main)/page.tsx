import { BentoSection } from "@/components/main/bento-section";
import { ReviewSection } from "@/components/main/review-section";

export default function Home() {
  return (
    <main className="flex flex-col pb-32">
      <BentoSection />
      <ReviewSection />
    </main>
  );
}
