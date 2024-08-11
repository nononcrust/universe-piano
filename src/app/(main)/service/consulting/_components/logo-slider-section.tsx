"use client";

import logo1 from "@/assets/images/consulting/consulting-1.png";
import logo10 from "@/assets/images/consulting/consulting-10.png";
import logo11 from "@/assets/images/consulting/consulting-11.png";
import logo12 from "@/assets/images/consulting/consulting-12.png";
import logo13 from "@/assets/images/consulting/consulting-13.png";
import logo14 from "@/assets/images/consulting/consulting-14.png";
import logo15 from "@/assets/images/consulting/consulting-15.png";
import logo16 from "@/assets/images/consulting/consulting-16.png";
import logo17 from "@/assets/images/consulting/consulting-17.png";
import logo18 from "@/assets/images/consulting/consulting-18.png";
import logo19 from "@/assets/images/consulting/consulting-19.png";
import logo2 from "@/assets/images/consulting/consulting-2.png";
import logo20 from "@/assets/images/consulting/consulting-20.png";
import logo21 from "@/assets/images/consulting/consulting-21.png";
import logo22 from "@/assets/images/consulting/consulting-22.png";
import logo23 from "@/assets/images/consulting/consulting-23.png";
import logo24 from "@/assets/images/consulting/consulting-24.png";
import logo3 from "@/assets/images/consulting/consulting-3.png";
import logo4 from "@/assets/images/consulting/consulting-4.png";
import logo5 from "@/assets/images/consulting/consulting-5.png";
import logo6 from "@/assets/images/consulting/consulting-6.png";
import logo8 from "@/assets/images/consulting/consulting-8.png";
import logo9 from "@/assets/images/consulting/consulting-9.png";
import { SectionTitle } from "@/components/shared/section-title";
import { Aos } from "@/components/ui/aos";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";

export const LogoSliderSection = () => {
  return (
    <Aos className="my-32">
      <section className="container">
        <SectionTitle>역대 합격 학교 리스트</SectionTitle>
        <div className="mt-12">
          <LogoGroup />
        </div>
      </section>
    </Aos>
  );
};

const LOGO_GROUP = [
  logo1,
  logo2,
  logo3,
  logo4,
  logo5,
  logo6,
  logo8,
  logo23,
  logo24,
  logo9,
  logo10,
  logo11,
  logo12,
  logo13,
  logo14,
  logo15,
  logo16,
  logo17,
  logo18,
  logo19,
  logo20,
  logo21,
  logo22,
];

const LogoGroup = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-6">
      {LOGO_GROUP.map((logo, index) => (
        <div key={index} className="flex min-h-[100px] items-center justify-center">
          <Image unoptimized src={logo} alt="유니버스 크루 로고" width={160} height={160} />
        </div>
      ))}
    </div>
  );
};
