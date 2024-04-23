"use client";

import { ColoredIcon } from "@/components/shared/colored-icon";
import { SectionTitle } from "@/components/shared/section-title";
import { Aos } from "@/components/ui/aos";
import { ROUTE } from "@/constants/route";
import Link from "next/link";

export const WhatWeDoSection = () => {
  return (
    <section className="bg-content py-32">
      <Aos className="container">
        <p className="text-lg font-semibold text-primary md:text-2xl">Universe Piano</p>
        <SectionTitle className="mt-2 whitespace-pre-wrap text-left">
          {
            "미국 음대 입시의 핵심 요소를 기반으로\n미국 음대 유학의 새로운 패러다임을 만들어 갑니다"
          }
        </SectionTitle>
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-4">
          <WhatWeDoItem
            title="미국 음대 입시 컨설팅"
            description="미국 음대 석사 과정 입시생을 위한 1:1 맞춤형 컨설팅을 제공합니다."
            href={ROUTE.SERVICE.CONSULTING}
            icon={<ColoredIcon.Idea className="h-10 w-10" />}
          />
          <WhatWeDoItem
            title="미국 음대 입시 과외"
            description="한 달에 딱 한 분에게만 주어지는 기회! 맞춤형 정보, 장학금 전략, 그리고 학교 선정까지 단기간에 완성합니다."
            href={ROUTE.SERVICE.TUTORING}
            icon={<ColoredIcon.Chat className="h-10 w-10" />}
          />
          <WhatWeDoItem
            title="영어 스터디"
            description="음대생을 위한 영어 스터디, 수준에 맞는 공부 방법으로 목표 점수 달성을 도와드립니다."
            href={ROUTE.SERVICE.STUDY}
            icon={<ColoredIcon.Pencil className="h-10 w-10" />}
          />
          <WhatWeDoItem
            title="독학 키트"
            description="미국 음대 유학을 혼자 준비하시는 분들께 필요한 서비스를 제공합니다."
            href={ROUTE.SERVICE.KIT.LIST}
            icon={<ColoredIcon.Storage className="h-10 w-10" />}
          />
        </div>
      </Aos>
    </section>
  );
};

interface WhatWeDoItemProps {
  title: string;
  description: string;
  href: string;
  icon: React.ReactNode;
}

const WhatWeDoItem = ({ title, description, href, icon }: WhatWeDoItemProps) => {
  return (
    <Link className="group relative rounded-2xl" href={href}>
      <div className="flex cursor-pointer flex-col rounded-xl bg-white p-6 brightness-100 md:min-h-[360px] md:group-hover:brightness-50">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-content">
          {icon}
        </div>
        <p className="mt-8 text-xl font-semibold md:mt-20">{title}</p>
        <p className="mt-2 font-medium text-sub">{description}</p>
      </div>
      <div className="absolute right-1/2 top-1/2 -translate-y-1/2 translate-x-1/2 cursor-pointer rounded-full bg-black/75 px-3 py-1 text-xs text-white opacity-0 md:group-hover:opacity-100">
        바로가기
      </div>
    </Link>
  );
};
