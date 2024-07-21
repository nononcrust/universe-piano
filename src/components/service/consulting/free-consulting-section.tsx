"use client";

import footerImage from "@/assets/images/consulting/consulting-footer-image.jpg";
import { SectionTitle } from "@/components/shared/section-title";
import { Aos } from "@/components/ui/aos";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/configs/site";
import Image from "next/image";
import Link from "next/link";

export const FreeConsultingSection = () => {
  return (
    <section className="relative bg-zinc-900 py-32">
      <Image src={footerImage} alt="violin" fill className="object-cover brightness-50" />
      <Aos className="container">
        <SectionTitle className="mt-0 whitespace-pre text-left text-white md:leading-normal">
          더 자세히 알고 싶다면?
        </SectionTitle>
        <Button
          className="mt-8 h-14 rounded-full px-10 text-lg"
          size="large"
          variant="primary"
          asChild
        >
          <Link href={siteConfig.links.kakao}>1회 무료 상담 신청</Link>
        </Button>
      </Aos>
    </section>
  );
};
