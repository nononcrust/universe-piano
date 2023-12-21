"use client";

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
import { ROUTE } from "@/constants/route";
import { cn } from "@/lib/utils";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { Icon } from "../icon";
import { Button } from "../ui/button";

export const IntroSection = () => {
  return (
    <section className="container mt-8">
      <div className="flex flex-col justify-between rounded-3xl bg-zinc-800 p-8 pr-12 text-white md:flex-row md:items-center">
        <div className="flex flex-col">
          <div className="mb-2 flex">
            <p className="font-semibold text-primary">Create your universe</p>
          </div>
          <Card.Title className="whitespace-pre-wrap">처음 오신 분들께,</Card.Title>
          <Card.Subtitle>유니버스 피아노를 소개합니다.</Card.Subtitle>
        </div>
        <Link href={ROUTE.ABOUT.COMPANY}>
          <Button className="mt-8 h-12 gap-1 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 px-6 pr-4 transition-all hover:gap-3 md:mt-0">
            유니버스 피아노 소개
            <Icon.ChevronRight className="h-5 w-5" />
          </Button>
        </Link>
      </div>
    </section>
  );
};

interface CardProps extends React.ComponentPropsWithoutRef<"div"> {
  half?: boolean;
}

export const Card = ({ className, half, ...props }: CardProps) => {
  return (
    <div
      className={cn(
        "row-span-2 flex max-h-[300px] min-h-[300px] flex-col rounded-3xl border bg-content-light p-8 transition",
        half && "row-span-1 max-h-[142px] min-h-[142px]",
        className,
      )}
      {...props}
    ></div>
  );
};

interface CardTitleProps extends React.ComponentPropsWithoutRef<"h3"> {}

const CardTitle = ({ className, children, ...props }: CardTitleProps) => {
  return (
    <h3 className={cn("text-xl font-semibold", className)} {...props}>
      {children}
    </h3>
  );
};

interface CardSubtitleProps extends React.ComponentPropsWithoutRef<"p"> {}

const CardSubtitle = ({ className, children, ...props }: CardSubtitleProps) => {
  return (
    <p className={cn("mt-2 text-[15px] font-medium text-gray-400", className)} {...props}>
      {children}
    </p>
  );
};

Card.Title = CardTitle;
Card.Subtitle = CardSubtitle;

const logos1 = [logo2, logo3, logo4, logo5, logo6, logo8];

const logos2 = [logo9, logo10, logo11, logo12, logo13, logo14, logo15, logo16];

export const LogoSliderCard = () => {
  return (
    <Card className="p-0">
      <div className="p-8 pb-4">
        <Card.Title>유니버스 크루</Card.Title>
        <Card.Subtitle>전국의 음대생들이 유니버스 피아노와 함께 하고 있습니다.</Card.Subtitle>
      </div>
      <LogoSlider logos={logos1} direction="left" />
      <LogoSlider logos={logos2} className="mt-2" direction="right" />
    </Card>
  );
};

const animation = {
  duration: 25000,
  easing: (t: number) => t,
};

interface LogoSliderProps extends React.ComponentPropsWithoutRef<"div"> {
  direction?: "left" | "right";
  logos: StaticImageData[];
}

export const LogoSlider = ({ className, direction = "left", logos, ...props }: LogoSliderProps) => {
  const [sliderRef] = useKeenSlider({
    loop: true,
    renderMode: "precision",
    drag: false,
    slides: { perView: "auto" },
    created(s) {
      s.moveToIdx(direction === "left" ? 5 : -5, true, animation);
    },
    updated(s) {
      s.moveToIdx(
        direction === "left" ? s.track.details.abs + 5 : s.track.details.abs - 5,
        true,
        animation,
      );
    },
    animationEnded(s) {
      s.moveToIdx(
        direction === "left" ? s.track.details.abs + 5 : s.track.details.abs - 5,
        true,
        animation,
      );
    },
  });

  return (
    <div ref={sliderRef} className={cn("keen-slider", className)} {...props}>
      {logos.map((item, index) => (
        <div
          key={index}
          className="keen-slider__slide"
          style={{ minWidth: 80, maxWidth: 80, height: 64 }}
        >
          <Image key={index} src={item} alt="" width={74} height={74} />
        </div>
      ))}
    </div>
  );
};
