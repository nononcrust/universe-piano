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
import logo3 from "@/assets/images/consulting/consulting-3.png";
import logo4 from "@/assets/images/consulting/consulting-4.png";
import logo5 from "@/assets/images/consulting/consulting-5.png";
import logo6 from "@/assets/images/consulting/consulting-6.png";
import logo8 from "@/assets/images/consulting/consulting-8.png";
import logo9 from "@/assets/images/consulting/consulting-9.png";
import { SectionSubtitle } from "@/components/common/section-subtitle";
import { SectionTitle } from "@/components/common/section-title";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import Image from "next/image";

export const LogoSliderSection = () => {
  return (
    <section className="my-32">
      <SectionTitle>역대 합격 학교 리스트</SectionTitle>
      <SectionSubtitle className="container md:whitespace-pre-wrap md:leading-normal">
        {
          "유니버스 피아노와 함께 라면, 더 이상 혼자가 되는 걱정은 하지 않으셔도 됩니다.\n미국 각 지역에 있는 유니버스 선배 크루가 여러분들을 기꺼이 도와드릴 거에요."
        }
      </SectionSubtitle>
      <div className="mt-12">
        <ConsultingLogoSlider />
      </div>
    </section>
  );
};

const logos = [
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
  logo17,
  logo18,
  logo19,
  logo20,
  logo21,
  logo22,
];

const animation = {
  duration: 25000,
  easing: (t: number) => t,
};

export const ConsultingLogoSlider = () => {
  const [sliderRef] = useKeenSlider({
    loop: true,
    renderMode: "performance",
    drag: false,
    slides: { perView: "auto" },
    created(s) {
      s.moveToIdx(5, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
  });

  return (
    <div ref={sliderRef} className="keen-slider">
      {logos.map((logo, index) => (
        <div
          key={index}
          className="keen-slider__slide flex items-center justify-center"
          style={{ minWidth: 200, maxWidth: 200, height: 160 }}
        >
          <Image className="w-[160px]" src={logo} alt="" priority />
        </div>
      ))}
    </div>
  );
};
