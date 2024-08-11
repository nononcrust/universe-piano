import { AboutRecordSection } from "@/app/(main)/about/company/_components/about-record-section";
import { FreeConsultSection } from "@/app/(main)/about/company/_components/free-consult-section";
import { InstagramSection } from "@/app/(main)/about/company/_components/instagram-section";
import { LogoSliderSection } from "@/app/(main)/about/company/_components/logo-slider-section";
import { OurPositioningSection } from "@/app/(main)/about/company/_components/our-positioning-section";
import { ReviewSection } from "@/app/(main)/about/company/_components/review-section";
import { SystemSection } from "@/app/(main)/about/company/_components/system-section";
import { WhatWeDoSection } from "@/app/(main)/about/company/_components/what-we-do-section";
import { WhatsOurNextSection } from "@/app/(main)/about/company/_components/whats-our-next-section";

export default function AboutCompanyPage() {
  return (
    <main className="flex flex-col">
      <WhatWeDoSection />
      <LogoSliderSection />
      <AboutRecordSection />
      <OurPositioningSection />
      <SystemSection />
      <WhatsOurNextSection />
      <InstagramSection />
      <ReviewSection />
      <FreeConsultSection />
    </main>
  );
}
