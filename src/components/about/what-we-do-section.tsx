"use client";

import consultingIcon from "@/assets/icons/002-chat.svg";
import tutoringIcon from "@/assets/icons/010-idea.svg";
import studyIcon from "@/assets/icons/034-flag.svg";
import kitIcon from "@/assets/icons/045-storage.svg";
import { ROUTE } from "@/constants/route";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { SectionTitle } from "../section-title";
import { Aos } from "../ui/aos";

export const WhatWeDoSection = () => {
  return (
    <section className="bg-content py-32">
      <Aos className="container">
        <p className="text-lg font-semibold text-primary">Universe Piano</p>
        <SectionTitle className="mt-2 whitespace-pre-wrap text-left md:leading-normal">
          {
            "미국 음대 입시의 핵심 요소를 기반으로\n미국 음대 유학의 새로운 패러다임을 만들어 갑니다"
          }
        </SectionTitle>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-4">
          <WhatWeDoItem
            title="미국 음대 입시 컨설팅"
            description="미국 음대 석사 과정 입시생을 위한 1:1 맞춤형 컨설팅을 제공합니다."
            href={ROUTE.SERVICE.CONSULTING}
            image={consultingIcon}
          />
          <WhatWeDoItem
            title="미국 음대 입시 과외"
            description="컨설팅 압축 버전! 맞춤형 정보, 장학금 전략, 그리고 학교 선정까지 단기간에 완성합니다."
            href={ROUTE.SERVICE.TUTORING}
            image={tutoringIcon}
          />
          <WhatWeDoItem
            title="영어 스터디"
            description="음대생을 위한 영어 스터디, 수준에 맞는 공부 방법으로 목표 점수 달성을 도와드립니다."
            href={ROUTE.SERVICE.STUDY}
            image={studyIcon}
          />
          <div className="rounded-2xl bg-white p-6 shadow-lg md:min-h-[320px]">
            <Image width={48} height={48} src={kitIcon} alt="" priority />
            <div className="mt-8 flex gap-2 md:mt-16">
              <p className="font-semibold">독학 키트</p>
              <p className="text-medium rounded-lg bg-zinc-400 px-2 py-1 text-xs text-white">
                준비중
              </p>
            </div>
            <p className="mt-2 text-sm font-medium text-muted-foreground md:text-base">
              미국 음대 유학을 혼자 준비하시는 분들께 필요한 서비스를 제공합니다.
            </p>
          </div>
        </div>
      </Aos>
    </section>
  );
};

interface WhatWeDoItemProps {
  title: string;
  description: string;
  href: string;
  image: StaticImageData;
}

const WhatWeDoItem = ({ title, description, href, image }: WhatWeDoItemProps) => {
  return (
    <Link className="group relative transition" href={href}>
      <div className="flex cursor-pointer flex-col rounded-2xl bg-white p-6 shadow-lg brightness-100 group-hover:brightness-50 md:min-h-[320px]">
        <Image width={48} height={48} src={image} alt="" priority />
        <p className="mt-8 font-semibold md:mt-16">{title}</p>
        <p className="mt-2 text-sm font-medium text-muted-foreground md:text-base">{description}</p>
      </div>
      <div className="absolute right-1/2 top-1/2 -translate-y-1/2 translate-x-1/2 cursor-pointer rounded-full bg-black/75 px-3 py-1 text-xs text-white opacity-0 group-hover:opacity-100">
        바로가기
      </div>
    </Link>
  );
};
