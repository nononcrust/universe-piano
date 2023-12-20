"use client";

import { channel } from "@/lib/channel-io";
import { SectionTitle } from "../section-title";
import { Aos } from "../ui/aos";
import { Button } from "../ui/button";

export const FreeConsultSection = () => {
  return (
    <section className="bg-zinc-900 py-32">
      <Aos className="container">
        <SectionTitle className="mt-0 whitespace-pre text-left text-white md:leading-normal">
          {"미국 음대 입시 관련\n1회 무료 zoom 상담을 제공합니다"}
        </SectionTitle>
        <Button
          className="mt-8 h-14 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 px-10 text-lg"
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
