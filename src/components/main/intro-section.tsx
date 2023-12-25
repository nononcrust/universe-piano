"use client";

import { ROUTE } from "@/constants/route";
import "keen-slider/keen-slider.min.css";
import Link from "next/link";
import { Icon } from "../icon";
import { Button } from "../ui/button";
import { Card } from "./card";

export const IntroSection = () => {
  return (
    <section className="bg-zinc-800">
      <div className="container flex flex-col justify-between p-8 pr-12 text-white md:flex-row md:items-center">
        <div className="flex flex-col">
          <Card.Title className="whitespace-pre-wrap">처음 오신 분들께,</Card.Title>
          <Card.Subtitle>유니버스 피아노를 소개합니다.</Card.Subtitle>
        </div>
        <Link href={ROUTE.ABOUT.COMPANY}>
          <Button variant="primary" className="mt-8 h-12 gap-1 rounded-full px-6 pr-4 md:mt-0">
            유니버스 피아노 소개
            <Icon.ChevronRight className="h-5 w-5" />
          </Button>
        </Link>
      </div>
    </section>
  );
};
