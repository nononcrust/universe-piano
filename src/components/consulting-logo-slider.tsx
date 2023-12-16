"use client";

import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import Image from "next/image";
import logo1 from "../../public/images/consulting/consulting-1.png";
import logo10 from "../../public/images/consulting/consulting-10.png";
import logo11 from "../../public/images/consulting/consulting-11.png";
import logo12 from "../../public/images/consulting/consulting-12.png";
import logo13 from "../../public/images/consulting/consulting-13.png";
import logo14 from "../../public/images/consulting/consulting-14.png";
import logo15 from "../../public/images/consulting/consulting-15.png";
import logo16 from "../../public/images/consulting/consulting-16.png";
import logo17 from "../../public/images/consulting/consulting-17.png";
import logo18 from "../../public/images/consulting/consulting-18.png";
import logo19 from "../../public/images/consulting/consulting-19.png";
import logo2 from "../../public/images/consulting/consulting-2.png";
import logo20 from "../../public/images/consulting/consulting-20.png";
import logo21 from "../../public/images/consulting/consulting-21.png";
import logo22 from "../../public/images/consulting/consulting-22.png";
import logo3 from "../../public/images/consulting/consulting-3.png";
import logo4 from "../../public/images/consulting/consulting-4.png";
import logo5 from "../../public/images/consulting/consulting-5.png";
import logo6 from "../../public/images/consulting/consulting-6.png";
import logo8 from "../../public/images/consulting/consulting-8.png";
import logo9 from "../../public/images/consulting/consulting-9.png";

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
          <Image src={logo} width={160} height={160} alt="" />
        </div>
      ))}
    </div>
  );
};