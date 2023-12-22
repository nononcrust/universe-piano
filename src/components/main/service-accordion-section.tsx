"use client";

import { ROUTE } from "@/constants/route";
import Link from "next/link";
import { Icon } from "../icon";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";
import { Button } from "../ui/button";
import { LandingSectionSubtitle } from "./landing-section-subtitle";
import { LandingSectionTitle } from "./landing-section-title";

export const ServiceAccordionSection = () => {
  return (
    <section className="container pt-24">
      <LandingSectionTitle>서비스 안내</LandingSectionTitle>
      <LandingSectionSubtitle>원하시는 서비스를 찾아보세요.</LandingSectionSubtitle>
      <div className="mt-4">
        <Accordion type="single" collapsible>
          <AccordionItem value="1">
            <AccordionTrigger>
              <div className="my-2 flex gap-2">
                <p className="mr-4 flex-1 text-left">빠르게 맞춤형 정보와 전략이 필요하신가요?</p>
              </div>
            </AccordionTrigger>
            <AccordionContent className="ml-1 whitespace-pre-wrap">
              <p className="text-xl font-semibold">미국 음대 입시 과외</p>
              <p className="mt-2 text-base font-medium text-muted-foreground">
                {
                  "한 달 딱 한분에게만 주어지는 기회!\n맞춤형 정보, 장학금 전략, 학교 선정까지 단기간에 완성합니다."
                }
              </p>
              <div className="flex justify-end">
                <Link href={ROUTE.SERVICE.TUTORING}>
                  <Button className="mt-8" variant="ghost">
                    서비스 바로가기
                    <Icon.ChevronRight className="ml-1 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="2">
            <AccordionTrigger>
              <div className="my-2 flex gap-2">
                <p className="mr-4 flex-1 text-left">입시 전체 과정 케어가 필요하신가요?</p>
              </div>
            </AccordionTrigger>
            <AccordionContent className="ml-1 whitespace-pre-wrap">
              <p className="text-xl font-semibold">미국 음대 입시 컨설팅</p>
              <p className="mt-2 text-base font-medium text-muted-foreground">
                미국 음대 석사 과정 입시생을 위한 1:1 맞춤형 컨설팅을 제공합니다.
              </p>
              <div className="flex justify-end">
                <Link href={ROUTE.SERVICE.CONSULTING}>
                  <Button className="mt-8" variant="ghost">
                    서비스 바로가기
                    <Icon.ChevronRight className="ml-1 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="3">
            <AccordionTrigger>
              <div className="my-2 flex gap-2">
                <p className="mr-4 flex-1 text-left">영어 공부 관련 도움이 필요하신가요?</p>
              </div>
            </AccordionTrigger>
            <AccordionContent className="ml-1 whitespace-pre-wrap">
              <p className="text-xl font-semibold">영어 스터디</p>
              <p className="mt-2 text-base font-medium text-muted-foreground">
                {
                  "음대생을 위한 영어 스터디,\n수준에 맞는 공부 방법으로 목표 점수 달성을 도와드립니다."
                }
              </p>
              <div className="flex justify-end">
                <Link href={ROUTE.SERVICE.STUDY}>
                  <Button className="mt-8" variant="ghost">
                    서비스 바로가기
                    <Icon.ChevronRight className="ml-1 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="4">
            <AccordionTrigger>
              <div className="my-2 flex gap-2">
                <p className="mr-4 flex-1 text-left">
                  혼자 준비하시면서, 부분적인 도움이 필요하신가요?
                </p>
              </div>
            </AccordionTrigger>
            <AccordionContent className="ml-1 whitespace-pre-wrap">
              <p className="text-xl font-semibold">독학 키트</p>
              <p className="mt-2 text-base font-medium text-muted-foreground">
                미국 음대 독학러에게 필요한 서비스를 제공합니다.
              </p>
              <div className="flex justify-end">
                {/* <Link href={ROUTE.SERVICE.PRODUCT.LIST}>
                  <Button className="mt-8" variant="ghost">
                    서비스 바로가기
                    <Icon.ChevronRight className="ml-1 h-5 w-5" />
                  </Button>
                </Link> */}
                <p className="mr-4 mt-8 font-medium text-muted-foreground">준비중</p>
              </div>
              <div className="my-8 border-b" />
              <p className="text-xl font-semibold">미국 음대 입시 과외</p>
              <p className="mt-2 text-base font-medium text-muted-foreground">
                {"혼자 하더라도 제대로 준비하자!\n맞춤형 정보 + 장학금 전략 + 학교 선정"}
              </p>
              <div className="flex justify-end">
                <Link href={ROUTE.SERVICE.TUTORING}>
                  <Button className="mt-8" variant="ghost">
                    서비스 바로가기
                    <Icon.ChevronRight className="ml-1 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};
