"use client";

import { LandingSectionSubtitle } from "@/components/main/landing-section-subtitle";
import { LandingSectionTitle } from "@/components/main/landing-section-title";
import { Icon } from "@/components/shared/icon";
import { Accordion } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { ROUTE } from "@/constants/route";
import Link from "next/link";

export const ServiceAccordionSection = () => {
  return (
    <section className="container pt-24">
      <LandingSectionTitle>서비스 추천</LandingSectionTitle>
      <LandingSectionSubtitle>상황에 맞는 서비스를 추천해 드려요.</LandingSectionSubtitle>
      <div className="mt-4">
        <Accordion type="single" collapsible>
          <Accordion.Item value="1" className="ml-2 md:ml-0">
            <Accordion.Trigger>
              <div className="my-2 flex gap-2">
                <p className="mr-4 flex-1 text-left">빠르게 맞춤형 정보와 전략이 필요하신가요?</p>
              </div>
            </Accordion.Trigger>
            <Accordion.Content className="ml-1 whitespace-pre-wrap">
              <div className="flex items-center">
                <Icon.Sparkles className="h-6 w-6 fill-primary text-primary" />
                <p className="ml-2 text-xl font-semibold">미국 음대 입시 과외</p>
              </div>
              <p className="mt-2 text-base font-medium text-sub">
                {
                  "한 달 딱 한분에게만 주어지는 기회!\n맞춤형 정보, 장학금 전략, 학교 선정까지 단기간에 완성합니다."
                }
              </p>
              <div className="flex justify-end">
                <Button className="mr-1 mt-8" variant="ghost" asChild>
                  <Link href={ROUTE.SERVICE.TUTORING}>
                    서비스 바로가기
                    <Icon.ChevronRight className="ml-1 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </Accordion.Content>
          </Accordion.Item>
          <Accordion.Item value="2" className="ml-2 md:ml-0">
            <Accordion.Trigger>
              <div className="my-2 flex gap-2">
                <p className="mr-4 flex-1 text-left">입시 전체 과정 케어가 필요하신가요?</p>
              </div>
            </Accordion.Trigger>
            <Accordion.Content className="ml-1 whitespace-pre-wrap">
              <div className="flex items-center">
                <Icon.Sparkles className="h-6 w-6 fill-primary text-primary" />
                <p className="ml-2 text-xl font-semibold">미국 음대 입시 컨설팅</p>
              </div>
              <p className="mt-2 text-base font-medium text-sub">
                미국 음대 석사 과정 입시생을 위한 1:1 맞춤형 컨설팅을 제공합니다.
              </p>
              <div className="flex justify-end">
                <Button className="mr-1 mt-8" variant="ghost" asChild>
                  <Link href={ROUTE.SERVICE.CONSULTING}>
                    서비스 바로가기
                    <Icon.ChevronRight className="ml-1 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </Accordion.Content>
          </Accordion.Item>
          <Accordion.Item value="3" className="ml-2 md:ml-0">
            <Accordion.Trigger>
              <div className="my-2 flex gap-2">
                <p className="mr-4 flex-1 text-left">영어 공부 관련 도움이 필요하신가요?</p>
              </div>
            </Accordion.Trigger>
            <Accordion.Content className="ml-1 whitespace-pre-wrap">
              <div className="flex items-center">
                <Icon.Sparkles className="h-6 w-6 fill-primary text-primary" />
                <p className="ml-2 text-xl font-semibold">영어 스터디</p>
              </div>
              <p className="mt-2 text-base font-medium text-sub">
                {
                  "음대생을 위한 영어 스터디,\n수준에 맞는 공부 방법으로 목표 점수 달성을 도와드립니다."
                }
              </p>
              <div className="flex justify-end">
                <Button className="mr-1 mt-8" variant="ghost" asChild>
                  <Link href={ROUTE.SERVICE.STUDY}>
                    서비스 바로가기
                    <Icon.ChevronRight className="ml-1 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </Accordion.Content>
          </Accordion.Item>
          <Accordion.Item value="4" className="ml-2 md:ml-0">
            <Accordion.Trigger>
              <div className="my-2 flex gap-2">
                <p className="mr-4 flex-1 text-left">
                  혼자 준비하시면서, 부분적인 도움이 필요하신가요?
                </p>
              </div>
            </Accordion.Trigger>
            <Accordion.Content className="ml-1 whitespace-pre-wrap">
              <div className="flex items-center">
                <Icon.Sparkles className="h-6 w-6 fill-primary text-primary" />
                <p className="ml-2 text-xl font-semibold">독학 키트</p>
              </div>
              <p className="mt-2 text-base font-medium text-sub">
                미국 음대 독학러에게 필요한 서비스를 제공합니다.
              </p>
              <div className="flex justify-end">
                <Button className="mr-1 mt-8" variant="ghost" asChild>
                  <Link href={ROUTE.SERVICE.KIT.LIST}>
                    서비스 바로가기
                    <Icon.ChevronRight className="ml-1 h-5 w-5" />
                  </Link>
                </Button>
              </div>
              <div className="my-8 border-b" />
              <div className="flex items-center">
                <Icon.Sparkles className="h-6 w-6 fill-primary text-primary" />
                <p className="ml-2 text-xl font-semibold">미국 음대 입시 과외</p>
              </div>
              <p className="mt-2 text-base font-medium text-sub">
                {"혼자 하더라도 제대로 준비하자!\n맞춤형 정보 + 장학금 전략 + 학교 선정"}
              </p>
              <div className="flex justify-end">
                <Button className="mr-1 mt-8" variant="ghost" asChild>
                  <Link href={ROUTE.SERVICE.TUTORING}>
                    서비스 바로가기
                    <Icon.ChevronRight className="ml-1 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </Accordion.Content>
          </Accordion.Item>
        </Accordion>
      </div>
    </section>
  );
};
