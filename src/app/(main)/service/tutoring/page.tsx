import { CrewResultSection } from "@/components/services/tutoring/crew-result-section";
import { HeroSection } from "@/components/services/tutoring/hero-section";
import { MustReadSection } from "@/components/services/tutoring/must-read-section";
import { RecommendSection } from "@/components/services/tutoring/recommend-section";
import { TutoringCompositionSection } from "@/components/services/tutoring/tutoring-composition-section";
import { TutoringCurriculumSection } from "@/components/services/tutoring/tutoring-curriculum-section";
import { TutoringExpectationSection } from "@/components/services/tutoring/tutoring-expectation-section";
import { TutoringFaqSection } from "@/components/services/tutoring/tutoring-faq-section";
import { TutoringInfoSection } from "@/components/services/tutoring/tutoring-info-section";

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
