"use client";

import logo1 from "@/assets/images/about/universe-logo-1.png";
import logo10 from "@/assets/images/about/universe-logo-10.png";
import logo11 from "@/assets/images/about/universe-logo-11.png";
import logo12 from "@/assets/images/about/universe-logo-12.png";
import logo13 from "@/assets/images/about/universe-logo-13.png";
import logo14 from "@/assets/images/about/universe-logo-14.png";
import logo15 from "@/assets/images/about/universe-logo-15.png";
import logo16 from "@/assets/images/about/universe-logo-16.png";
import logo2 from "@/assets/images/about/universe-logo-2.png";
import logo3 from "@/assets/images/about/universe-logo-3.png";
import logo4 from "@/assets/images/about/universe-logo-4.png";
import logo5 from "@/assets/images/about/universe-logo-5.png";
import logo6 from "@/assets/images/about/universe-logo-6.png";
import logo8 from "@/assets/images/about/universe-logo-8.png";
import logo9 from "@/assets/images/about/universe-logo-9.png";
import { SectionSubtitle } from "@/components/shared/section-subtitle";
import { SectionTitle } from "@/components/shared/section-title";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";
import { Aos } from "../../../../../components/ui/aos";

export const LogoSliderSection = () => {
  return (
    <Aos className="mb-24 mt-36">
      <section className="container">
        <SectionTitle>역대 유니버스 크루</SectionTitle>
        <SectionSubtitle>전국의 음대생들이 유니버스 피아노와 함께 하고 있습니다.</SectionSubtitle>
        <div className="mt-12 flex justify-center">
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
  logo9,
  logo10,
  logo11,
  logo12,
  logo13,
  logo14,
  logo15,
  logo16,
];

const LogoGroup = () => {
  return (
    <div className="grid grid-cols-3 md:grid-cols-5">
      {LOGO_GROUP.map((logo, index) => (
        <div key={index} className="flex items-center justify-center">
          <Image unoptimized src={logo} alt="유니버스 크루 로고" width={160} height={160} />
        </div>
      ))}
    </div>
  );
};
