import { ConsultingCurriculumSection } from "@/app/(main)/service/consulting/_components/consulting-curriculum-section";
import { ConsultingExampleSection } from "@/app/(main)/service/consulting/_components/consulting-example-section";
import { ConsultingFaqSection } from "@/app/(main)/service/consulting/_components/consulting-faq-section";
import { ConsultingInfoSection } from "@/app/(main)/service/consulting/_components/consulting-info-section";
import { ConsultingPackageSection } from "@/app/(main)/service/consulting/_components/consulting-package-section";
import { ConsultingProcedureSection } from "@/app/(main)/service/consulting/_components/consulting-procedure-section";
import { ConsultingReviewSection } from "@/app/(main)/service/consulting/_components/consulting-review-section";
import { FreeConsultingSection } from "@/app/(main)/service/consulting/_components/free-consulting-section";
import { HeroSection } from "@/app/(main)/service/consulting/_components/hero-section";
import { LogoSliderSection } from "@/app/(main)/service/consulting/_components/logo-slider-section";

export default function ConsultingPage() {
  return (
    <main className="flex flex-col">
      <HeroSection />
      <ConsultingExampleSection />
      <LogoSliderSection />
      <ConsultingProcedureSection />
      <ConsultingCurriculumSection />
      <ConsultingPackageSection />
      <ConsultingReviewSection />
      {/* <OverwhelmingResultSection /> */}
      {/* <WhyUniverseSection /> */}
      <ConsultingInfoSection />
      <ConsultingFaqSection />
      <FreeConsultingSection />
    </main>
  );
}
