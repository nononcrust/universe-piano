"use client";

import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";

const animation = {
  duration: 25000,
  easing: (t: number) => t,
};

export const LogoSlider = () => {
  const [sliderRef] = useKeenSlider({
    loop: true,
    renderMode: "performance",
    drag: false,
    slides: { perView: "auto", spacing: 48 },
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
      <div className="keen-slider__slide" style={{ minWidth: 100, maxWidth: 100, height: 100 }}>
        <div className="min-w-16 max-w-16 bg-content h-16 rounded-full" />
      </div>
      <div className="keen-slider__slide" style={{ minWidth: 100, maxWidth: 100, height: 100 }}>
        <div className="min-w-16 max-w-16 bg-content h-16 rounded-full" />
      </div>
      <div className="keen-slider__slide" style={{ minWidth: 100, maxWidth: 100, height: 100 }}>
        <div className="min-w-16 max-w-16 bg-content h-16 rounded-full" />
      </div>
      <div className="keen-slider__slide" style={{ minWidth: 100, maxWidth: 100, height: 100 }}>
        <div className="min-w-16 max-w-16 bg-content h-16 rounded-full" />
      </div>
      <div className="keen-slider__slide" style={{ minWidth: 100, maxWidth: 100, height: 100 }}>
        <div className="min-w-16 max-w-16 bg-content h-16 rounded-full" />
      </div>
      <div className="keen-slider__slide" style={{ minWidth: 100, maxWidth: 100, height: 100 }}>
        <div className="min-w-16 max-w-16 bg-content h-16 rounded-full" />
      </div>
      <div className="keen-slider__slide" style={{ minWidth: 100, maxWidth: 100, height: 100 }}>
        <div className="min-w-16 max-w-16 bg-content h-16 rounded-full" />
      </div>
      <div className="keen-slider__slide" style={{ minWidth: 100, maxWidth: 100, height: 100 }}>
        <div className="min-w-16 max-w-16 bg-content h-16 rounded-full" />
      </div>
      <div className="keen-slider__slide" style={{ minWidth: 100, maxWidth: 100, height: 100 }}>
        <div className="min-w-16 max-w-16 bg-content h-16 rounded-full" />
      </div>
      <div className="keen-slider__slide" style={{ minWidth: 100, maxWidth: 100, height: 100 }}>
        <div className="min-w-16 max-w-16 bg-content h-16 rounded-full" />
      </div>
      <div className="keen-slider__slide" style={{ minWidth: 100, maxWidth: 100, height: 100 }}>
        <div className="min-w-16 max-w-16 bg-content h-16 rounded-full" />
      </div>
      <div className="keen-slider__slide" style={{ minWidth: 100, maxWidth: 100, height: 100 }}>
        <div className="min-w-16 max-w-16 bg-content h-16 rounded-full" />
      </div>
      <div className="keen-slider__slide" style={{ minWidth: 100, maxWidth: 100, height: 100 }}>
        <div className="min-w-16 max-w-16 bg-content h-16 rounded-full" />
      </div>
      <div className="keen-slider__slide" style={{ minWidth: 100, maxWidth: 100, height: 100 }}>
        <div className="min-w-16 max-w-16 bg-content h-16 rounded-full" />
      </div>
      <div className="keen-slider__slide" style={{ minWidth: 100, maxWidth: 100, height: 100 }}>
        <div className="min-w-16 max-w-16 bg-content h-16 rounded-full" />
      </div>
    </div>
  );
};
