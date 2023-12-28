import { CrewResultSection } from "@/components/service/tutoring/crew-result-section";
import { HeroSection } from "@/components/service/tutoring/hero-section";
import { MustReadSection } from "@/components/service/tutoring/must-read-section";
import { RecommendSection } from "@/components/service/tutoring/recommend-section";
import { TutoringCompositionSection } from "@/components/service/tutoring/tutoring-composition-section";
import { TutoringCurriculumSection } from "@/components/service/tutoring/tutoring-curriculum-section";
import { TutoringExpectationSection } from "@/components/service/tutoring/tutoring-expectation-section";
import { TutoringFaqSection } from "@/components/service/tutoring/tutoring-faq-section";
import { TutoringInfoSection } from "@/components/service/tutoring/tutoring-info-section";

export default function TutoringPage() {
  return (
    <main className="flex flex-col">
      <HeroSection />
      <RecommendSection />
      <CrewResultSection />
      <TutoringCompositionSection />
      <TutoringExpectationSection />
      <MustReadSection />
      <TutoringCurriculumSection />
      <TutoringInfoSection />
      <TutoringFaqSection />
    </main>
  );
}
