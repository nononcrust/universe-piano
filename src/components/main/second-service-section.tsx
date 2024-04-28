"use client";

import { Card } from "@/components/main/card";
import { LandingSectionSubtitle } from "@/components/main/landing-section-subtitle";
import { LandingSectionTitle } from "@/components/main/landing-section-title";
import { ColoredIcon } from "@/components/shared/colored-icon";
import { Icon } from "@/components/shared/icon";
import { ROUTE } from "@/constants/route";
import Link from "next/link";
import { Badge } from "../ui/badge";

export const SecondServiceSection = () => {
  return (
    <section className="container pt-16">
      <LandingSectionTitle>2차 오디션 관련 서비스</LandingSectionTitle>
      <LandingSectionSubtitle>
        2024년 가을 학기 입시생들을 위한 서비스입니다.
      </LandingSectionSubtitle>
      <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
        <AuditionResultCard />
        <AuditionKitCard />
        <ScholarshipCard />
      </div>
    </section>
  );
};

const AuditionResultCard = () => {
  return (
    <Link href={ROUTE.NEWS.AUDITION.LIST} className="rounded-xl">
      <Card className="max-h-[160px] min-h-[160px] transition md:hover:shadow-lg">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Card.Title className="flex items-center">
              <ColoredIcon.Notice className="h-6 w-6" />
              <p className="ml-2">오디션 결과 발표</p>
            </Card.Title>
          </div>
          <Icon.ArrowRight className="h-6 w-6 rounded-full bg-gray-200 p-1" />
        </div>
        <Card.Subtitle>로그인 후에 미국 음대 오디션 결과를 확인 하실 수 있습니다.</Card.Subtitle>
      </Card>
    </Link>
  );
};

const AuditionKitCard = () => {
  return (
    <Link href={ROUTE.SERVICE.KIT} target="_blank" className="rounded-xl">
      <Card className="max-h-[160px] min-h-[160px] transition md:hover:shadow-lg">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Card.Title className="flex items-center">
              <ColoredIcon.Storage className="h-6 w-6" />
              <p className="ml-2">오디션 119 키트</p>
            </Card.Title>
          </div>
          <Icon.ArrowRight className="h-6 w-6 rounded-full bg-gray-200 p-1" />
        </div>
        <Card.Subtitle className="text-gray-400">
          미국 음대 오디션 투어 꿀팁, 상황별 영어 표현, 체크리스트까지!
        </Card.Subtitle>
      </Card>
    </Link>
  );
};

const ScholarshipCard = () => {
  return (
    // <Link href={siteConfig.links.scholarships} target="_blank" className="rounded-xl">
    <Card className="max-h-[160px] min-h-[160px] transition md:hover:shadow-lg">
      {/* <div className="flex items-center justify-between"> */}
      <div className="flex items-center gap-2">
        <Card.Title className="flex items-center">
          <ColoredIcon.Trophy className="h-6 w-6" />
          <p className="ml-2">장학금 증액 컨설팅</p>
        </Card.Title>
        <Badge className="bg-white" variant="outlined">
          준비중
        </Badge>
      </div>
      {/* <Icon.ArrowRight className="h-6 w-6 rounded-full bg-gray-200 p-1" /> */}
      {/* </div> */}
      <Card.Subtitle className="text-gray-400">
        광고, 조작 없음. 결과로 증명합니다. 최초 장학금 $30000까지 증액 성공!
      </Card.Subtitle>
    </Card>
    // </Link>
  );
};
