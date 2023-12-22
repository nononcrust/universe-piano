"use client";

import { ROUTE } from "@/constants/route";
import Link from "next/link";
import { ColoredIcon } from "../colored-icon";
import { Icon } from "../icon";
import { Badge } from "../ui/badge";
import { Card } from "./intro-section";
import { LandingSectionSubtitle } from "./landing-section-subtitle";
import { LandingSectionTitle } from "./landing-section-title";

export const SecondServiceSection = () => {
  return (
    <section className="container pt-16">
      <LandingSectionTitle>2차 오디션 관련 서비스</LandingSectionTitle>
      <LandingSectionSubtitle>
        2024년 가을 학기 입시생들을 위한 서비스입니다.
      </LandingSectionSubtitle>
      <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
        <AuditionResultCard />
        <ScholarshipCard />
        <AuditionKitCard />
      </div>
    </section>
  );
};

const AuditionResultCard = () => {
  return (
    <Link href={ROUTE.NEWS.AUDITION.LIST} className="row-span-2">
      <Card className="group relative cursor-pointer overflow-hidden hover:border-gray-400">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Card.Title>오디션 결과 발표</Card.Title>
          </div>
          <Icon.ArrowRight className="h-6 w-6 rounded-full bg-gray-200 p-1 transition group-hover:translate-x-1" />
        </div>
        <Card.Subtitle>로그인 후에 미국 음대 오디션 결과를 확인 하실 수 있습니다.</Card.Subtitle>
        <ColoredIcon.Notice className="absolute -bottom-8 left-1/2 h-52 w-52 -translate-x-1/2" />
      </Card>
    </Link>
  );
};

const ScholarshipCard = () => {
  return (
    <Card half>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          {/* <Icon.BookOpen className="h-5 w-5 fill-primary text-primary" /> */}
          <Card.Title>장학금 증액 컨설팅</Card.Title>
          <Badge className="bg-white" variant="outline">
            준비중
          </Badge>
        </div>
        {/* <Icon.ArrowRight className="h-6 w-6 rounded-full bg-gray-200 p-1" /> */}
      </div>
      <Card.Subtitle className="text-gray-400">
        광고, 조작 없음. 결과로 증명합니다. 최초 장학금 $30000까지 증액 성공!
      </Card.Subtitle>
    </Card>
  );
};

const AuditionKitCard = () => {
  return (
    <Card half>
      <div className="flex items-center gap-2">
        {/* <Icon.Leaf className="h-5 w-5 fill-primary text-primary" /> */}
        <Card.Title>오디션 119 키트</Card.Title>
        <Badge className="bg-white" variant="outline">
          준비중
        </Badge>
      </div>
      <Card.Subtitle>미국 음대 오디션 투어 꿀팁, 상황별 영어 표현, 체크리스트까지!</Card.Subtitle>
    </Card>
  );
};
