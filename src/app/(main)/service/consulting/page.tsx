import { ConsultingCurriculumSection } from "@/components/services/consulting/consulting-curriculum-section";
import { ConsultingExampleSection } from "@/components/services/consulting/consulting-example-section";
import { ConsultingFaqSection } from "@/components/services/consulting/consulting-faq-section";
import { ConsultingInfoSection } from "@/components/services/consulting/consulting-info-section";
import { ConsultingPackageSection } from "@/components/services/consulting/consulting-package-section";
import { ConsultingReviewSection } from "@/components/services/consulting/consulting-review-section";
import { FreeConsultingSection } from "@/components/services/consulting/free-consulting-section";
import { HeroSection } from "@/components/services/consulting/hero-section";
import { LogoSliderSection } from "@/components/services/consulting/logo-slider-section";
import { OverwhelmingResultSection } from "@/components/services/consulting/overwhelming-result-section";
import { SchoolSelectionSection } from "@/components/services/consulting/school-selection-section";
import { WhyUniverseSection } from "@/components/services/consulting/why-universe-section";

export default function ConsultingPage() {
  return (
    <main className="flex flex-col">
      <HeroSection />
      <OverwhelmingResultSection />
      <LogoSliderSection />
      <ConsultingExampleSection />
      <SchoolSelectionSection />
      <ConsultingReviewSection />
      <WhyUniverseSection />
      <ConsultingCurriculumSection />
      <ConsultingPackageSection />
      <ConsultingInfoSection />
      <ConsultingFaqSection />
      <FreeConsultingSection />
    </main>
  );
}
