import { AboutRecordSection } from "@/components/about/about-record-section";
import { FreeConsultSection } from "@/components/about/free-consult-section";
import { InstagramSection } from "@/components/about/instagram-section";
import { LogoSliderSection } from "@/components/about/logo-slider-section";
import { OurPositioningSection } from "@/components/about/our-positioning-section";
import { ReviewSection } from "@/components/about/review-section";
import { SystemSection } from "@/components/about/system-section";
import { WhatWeDoSection } from "@/components/about/what-we-do-section";
import { WhatsOurNextSection } from "@/components/about/whats-our-next-section";

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
