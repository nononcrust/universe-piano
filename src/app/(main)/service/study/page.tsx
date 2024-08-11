import { CheckPointSection } from "@/app/(main)/service/study/_components/check-point-section";
import { HeroSection } from "@/app/(main)/service/study/_components/hero-section";
import { StudyCompositionSection } from "@/app/(main)/service/study/_components/study-composition-section";
import { StudyExpectationSection } from "@/app/(main)/service/study/_components/study-expectation-section";
import { StudyFaqSection } from "@/app/(main)/service/study/_components/study-faq-section";
import { StudyInfoSection } from "@/app/(main)/service/study/_components/study-info-section";
import { StudyMissionSection } from "@/app/(main)/service/study/_components/study-mission-section";
import { StudyReviewSection } from "@/app/(main)/service/study/_components/study-review-section";
import { WhyUniverseSection } from "@/app/(main)/service/study/_components/why-universe-section";

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
