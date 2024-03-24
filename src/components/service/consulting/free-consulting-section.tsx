"use client";

import footerImage from "@/assets/images/consulting/consulting-footer-image.jpg";
import { SectionTitle } from "@/components/shared/section-title";
import { Aos } from "@/components/ui/aos";
import { Button } from "@/components/ui/button";
import { channel } from "@/lib/channel-io";
import Image from "next/image";

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
          onClick={() => channel.openChat()}
        >
          1회 무료 상담 신청
        </Button>
      </Aos>
    </section>
  );
};
