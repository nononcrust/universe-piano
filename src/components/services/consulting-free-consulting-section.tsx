"use client";

import { channel } from "@/lib/channel-io";
import { SectionTitle } from "../section-title";
import { Aos } from "../ui/aos";
import { Button } from "../ui/button";

export const FreeConsultingSection = () => {
  return (
    <section className="bg-zinc-900 py-32">
      <Aos className="container">
        <SectionTitle className="mt-0 whitespace-pre text-left text-white md:leading-normal">
          더 자세히 알고 싶다면?
        </SectionTitle>
        <Button
          className="mt-8 h-14 rounded-full px-10 text-lg"
          size="lg"
          variant="primary"
          onClick={() => channel.openChat()}
        >
          1회 무료 상담 신청
        </Button>
      </Aos>
    </section>
  );
};
