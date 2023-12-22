"use client";

import { channel } from "@/lib/channel-io";
import { Aos } from "../ui/aos";

export const StudyCtaSection = () => {
  return (
    <Aos>
      <section className="container flex justify-center">
        <button
          className="hover: mt-16 rounded-full bg-black px-10 py-4 text-lg font-bold text-white drop-shadow-lg"
          onClick={() => channel.openChat()}
        >
          스터디 신청 및 커리큘럼 확인
        </button>
      </section>
    </Aos>
  );
};
