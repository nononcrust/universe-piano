"use client";

import { channel } from "@/lib/channel-io";
import { SectionTitle } from "../section-title";
import { Aos } from "../ui/aos";
import { Button } from "../ui/button";

export const FreeConsultSection = () => {
  return (
    <section className="relative overflow-hidden bg-zinc-900 py-24 md:py-32">
      {/* <Image
        src={image}
        alt=""
        className="max-md:min-w-auto absolute brightness-[0.3] max-md:h-full md:top-0 md:object-cover"
      /> */}
      <Aos className="container">
        <SectionTitle className="whitespace-pre text-left text-white md:leading-normal">
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
