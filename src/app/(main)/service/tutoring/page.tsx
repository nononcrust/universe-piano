import { HeroSection } from "@/app/(main)/service/tutoring/_components/hero-section";
import { MustReadSection } from "@/app/(main)/service/tutoring/_components/must-read-section";
import { RecommendSection } from "@/app/(main)/service/tutoring/_components/recommend-section";
import { TutoringCompositionSection } from "@/app/(main)/service/tutoring/_components/tutoring-composition-section";
import { TutoringCurriculumSection } from "@/app/(main)/service/tutoring/_components/tutoring-curriculum-section";
import { TutoringExpectationSection } from "@/app/(main)/service/tutoring/_components/tutoring-expectation-section";
import { TutoringFaqSection } from "@/app/(main)/service/tutoring/_components/tutoring-faq-section";
import { TutoringInfoSection } from "@/app/(main)/service/tutoring/_components/tutoring-info-section";

export default function TutoringPage() {
  return (
    <main className="flex flex-col">
      <HeroSection />
      <RecommendSection />
      {/* <CrewResultSection /> */}
      <TutoringCompositionSection />
      <TutoringExpectationSection />
      <MustReadSection />
      <TutoringCurriculumSection />
      <TutoringInfoSection />
      <TutoringFaqSection />
    </main>
  );
}
