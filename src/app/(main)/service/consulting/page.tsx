import { ConsultingCurriculumSection } from "@/components/service/consulting/consulting-curriculum-section";
import { ConsultingExampleSection } from "@/components/service/consulting/consulting-example-section";
import { ConsultingFaqSection } from "@/components/service/consulting/consulting-faq-section";
import { ConsultingInfoSection } from "@/components/service/consulting/consulting-info-section";
import { ConsultingPackageSection } from "@/components/service/consulting/consulting-package-section";
import { ConsultingReviewSection } from "@/components/service/consulting/consulting-review-section";
import { FreeConsultingSection } from "@/components/service/consulting/free-consulting-section";
import { HeroSection } from "@/components/service/consulting/hero-section";
import { LogoSliderSection } from "@/components/service/consulting/logo-slider-section";
import { OverwhelmingResultSection } from "@/components/service/consulting/overwhelming-result-section";
import { SchoolSelectionSection } from "@/components/service/consulting/school-selection-section";
import { WhyUniverseSection } from "@/components/service/consulting/why-universe-section";

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
