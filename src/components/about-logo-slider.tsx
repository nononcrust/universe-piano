"use client";

import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import Image from "next/image";
import logo1 from "../../public/images/about/universe-logo-1.png";
import logo10 from "../../public/images/about/universe-logo-10.png";
import logo11 from "../../public/images/about/universe-logo-11.png";
import logo12 from "../../public/images/about/universe-logo-12.png";
import logo13 from "../../public/images/about/universe-logo-13.png";
import logo14 from "../../public/images/about/universe-logo-14.png";
import logo15 from "../../public/images/about/universe-logo-15.png";
import logo16 from "../../public/images/about/universe-logo-16.png";
import logo2 from "../../public/images/about/universe-logo-2.png";
import logo3 from "../../public/images/about/universe-logo-3.png";
import logo4 from "../../public/images/about/universe-logo-4.png";
import logo5 from "../../public/images/about/universe-logo-5.png";
import logo6 from "../../public/images/about/universe-logo-6.png";
import logo8 from "../../public/images/about/universe-logo-8.png";
import logo9 from "../../public/images/about/universe-logo-9.png";

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
];

const animation = {
  duration: 25000,
  easing: (t: number) => t,
};

export const AboutLogoSlider = () => {
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
          className="keen-slider__slide"
          style={{ minWidth: 180, maxWidth: 180, height: 160 }}
        >
          <Image src={logo} width={160} height={160} alt="" />
        </div>
      ))}
    </div>
  );
};