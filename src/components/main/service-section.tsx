"use client";

import { ColoredIcon } from "@/components/colored-icon";
import { Icon } from "@/components/icon";
import { Card } from "@/components/main/card";
import { IconHeader } from "@/components/main/icon-header";
import { LandingSectionSubtitle } from "@/components/main/landing-section-subtitle";
import { LandingSectionTitle } from "@/components/main/landing-section-title";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ROUTE } from "@/constants/route";
import Link from "next/link";

export const ServiceSection = () => {
  return (
    <section className="container pt-24">
      <LandingSectionTitle>서비스 안내</LandingSectionTitle>
      <LandingSectionSubtitle>
        미국 음대 입시를 위한 다양한 서비스를 제공합니다.
      </LandingSectionSubtitle>
      <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
        <Card>
          <div className="mb-4 flex">
            <IconHeader>
              <ColoredIcon.Chat className="h-6 w-6" />
            </IconHeader>
          </div>
          <Card.Title>미국 음대 입시 과외</Card.Title>
          <Card.Subtitle>
            한 달 딱 한 분에게만 주어지는 기회! 맞춤형 정보, 장학금 전략, 학교 선정까지 단기간에
            완성합니다.
          </Card.Subtitle>
          <div className="flex flex-1 items-end">
            <Link href={ROUTE.SERVICE.TUTORING}>
              <Button className="pr-2" variant="outline">
                바로가기
                <Icon.ChevronRight className="ml-1 h-[18px] w-[18px]" />
              </Button>
            </Link>
          </div>
        </Card>
        <Card>
          <div className="mb-4 flex">
            <IconHeader>
              <ColoredIcon.Idea className="h-6 w-6" />
            </IconHeader>
          </div>
          <Card.Title>미국 음대 입시 컨설팅</Card.Title>
          <Card.Subtitle>
            입시 전체 과정 케어가 필요하신가요? 미국 음대 석사 과정 입시생을 위한 1:1 맞춤형
            컨설팅을 제공합니다.
          </Card.Subtitle>
          <div className="flex flex-1 items-end">
            <Link href={ROUTE.SERVICE.CONSULTING}>
              <Button className="pr-2" variant="outline">
                바로가기
                <Icon.ChevronRight className="ml-1 h-[18px] w-[18px]" />
              </Button>
            </Link>
          </div>
        </Card>
        <Card>
          <div className="mb-4 flex">
            <IconHeader>
              <ColoredIcon.Pencil className="h-6 w-6" />
            </IconHeader>
          </div>
          <Card.Title>영어 스터디</Card.Title>
          <Card.Subtitle>
            음대생을 위한 영어 스터디, 수준에 맞는 공부 방법으로 목표 점수 달성을 도와드립니다.
          </Card.Subtitle>
          <div className="flex flex-1 items-end">
            <Link href={ROUTE.SERVICE.STUDY}>
              <Button className="pr-2" variant="outline">
                바로가기
                <Icon.ChevronRight className="ml-1 h-[18px] w-[18px]" />
              </Button>
            </Link>
          </div>
        </Card>
        <Card>
          <div className="mb-4 flex">
            <IconHeader>
              <ColoredIcon.Storage className="h-6 w-6" />
            </IconHeader>
          </div>
          <Card.Title>독학 키트</Card.Title>
          <Card.Subtitle>
            혼자 준비하시면서, 부분적인 도움이 필요하신가요? 미국 음대 독학러에게 필요한 서비스를
            제공합니다.
          </Card.Subtitle>
          {/* <div className="flex flex-1 items-end">
            <Button variant="outline">자세히 보기</Button>
          </div> */}
          <div className="flex flex-1 items-end">
            <p className="font-medium text-muted-foreground">1월 초 오픈 예정</p>
          </div>
        </Card>
        <Card className="group cursor-pointer hover:border-gray-400" half>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ColoredIcon.Question className="h-6 w-6" />
              <Card.Title>자주 묻는 질문</Card.Title>
            </div>
            <Icon.ArrowRight className="h-6 w-6 rounded-full bg-gray-200 p-1 transition group-hover:translate-x-1" />
          </div>
          <Card.Subtitle>
            궁금하신 부분이 있으신가요? 자주 묻는 질문을 통해 답변을 확인하세요.
          </Card.Subtitle>
        </Card>
        <Card half>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon.Zap className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              <Card.Title>오프라인 모임</Card.Title>
              <Badge className="bg-white" variant="outline">
                준비중
              </Badge>
            </div>
            {/* <Icon.ArrowRight className="h-6 w-6 rounded-full bg-gray-200 p-1" /> */}
          </div>
          <Card.Subtitle>오프라인 모임을 통해 다양한 정보룰 공유하세요.</Card.Subtitle>
        </Card>
      </div>
    </section>
  );
};
