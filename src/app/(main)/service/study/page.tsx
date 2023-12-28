import { CheckPointSection } from "@/components/services/study/check-point-section";
import { HeroSection } from "@/components/services/study/hero-section";
import { StudyCompositionSection } from "@/components/services/study/study-composition-section";
import { StudyExpectationSection } from "@/components/services/study/study-expectation-section";
import { StudyFaqSection } from "@/components/services/study/study-faq-section";
import { StudyInfoSection } from "@/components/services/study/study-info-section";
import { StudyMissionSection } from "@/components/services/study/study-mission-section";
import { StudyReviewSection } from "@/components/services/study/study-review-section";
import { WhyUniverseSection } from "@/components/services/study/why-universe-section";

export default function StudyPage() {
  return (
    <main className="flex flex-col">
      <HeroSection />
      <CheckPointSection />
      <StudyCompositionSection />
      <WhyUniverseSection />
      <StudyExpectationSection />
      <StudyMissionSection />
      <StudyReviewSection />
      <StudyInfoSection />
      <StudyFaqSection />
    </main>
  );
}
