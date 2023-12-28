import { CheckPointSection } from "@/components/service/study/check-point-section";
import { HeroSection } from "@/components/service/study/hero-section";
import { StudyCompositionSection } from "@/components/service/study/study-composition-section";
import { StudyExpectationSection } from "@/components/service/study/study-expectation-section";
import { StudyFaqSection } from "@/components/service/study/study-faq-section";
import { StudyInfoSection } from "@/components/service/study/study-info-section";
import { StudyMissionSection } from "@/components/service/study/study-mission-section";
import { StudyReviewSection } from "@/components/service/study/study-review-section";
import { WhyUniverseSection } from "@/components/service/study/why-universe-section";

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
