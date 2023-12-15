"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { Icon } from "./icon";
import { SectionTitle } from "./section-title";
import { Aos } from "./ui/aos";

const data = [
  {
    title: "[1회차]",
    description: "상황 진단 및 미국 음대 입시 전반부 안내",
    items: [
      "현대 상황 진단: 우선 순위 및 방향 설정",
      "미국 음대 종류: 학교 선정 팁, 학교 선정이 장학금에 미치는 영향",
      "미국 음대 입시 3요소",
      "미국 음대 입시 준비 타임라인",
      "영어 시험: 영어 시험 종류, 영어 점수가 높으면 좋은 점, 추천하는 영어 시험",
      "미국 주요 음대 영어 점수 안내",
      "영어 레벨 테스트 진행",
      "미국 음대 입시 필수 서류 안내",
      "서류 작성 법: 각 서류에 포함되어야 하는 내용, Essay 작성 팁",
      "공인 성적표 발급 방법",
      "추천서 작성 Tips",
      "CSS Profile",
      "서류 작성이 중요한가요?",
    ],
  },
  {
    title: "[2회차]",
    description: "영어 테스트 결과 안내 및 미국 음대 입시 후반부 안내",
    items: [
      "영어 레벨테스트 결과 안내: 영어 공부법 제시",
      "미국 음대 입시곡: 정보 찾는 방법, 입시곡 선정 팁",
      "1차 시험 연주 영상 관련 사항",
      "미국 음대 오디션에 관한 오해와 진실",
      "미국 음대 오디션 준비 전략",
      "미국 현지 오디션 준비: 오디션 일정 관련 팁",
      "레슨 컨택 관련",
      "미국 음대 장학금 종류",
      "미국 음대 장학금 증액 절차",
    ],
  },
  {
    title: "[3회차]",
    description: "학교 선정 및 입시 준비 플랜 제공",
    items: ["학교 선정", "맞춤형 입시 준비 플랜 제공"],
  },
  {
    title: "After Care",
    description: "여기엔 뭐가 들어가나요",
    items: ["지원 학교별 원서 작성 필요 목록 파일 제공", "입시 관련 Q&A 카톡 상담 제공"],
  },
];

export const TutoringCurriculumSection = () => {
  return (
    <section className="bg-content pb-24">
      <Aos className="container">
        <SectionTitle title="과외 커리큘럼" />
        <Accordion.Root type="multiple" className="mt-12 flex flex-col gap-4">
          {data.map((item, index) => (
            <CurriculumItem
              key={index}
              value={String(index)}
              title={item.title}
              description={item.description}
              items={item.items}
            />
          ))}
        </Accordion.Root>
      </Aos>
    </section>
  );
};

interface CurriculumItemProps {
  value: string;
  title: string;
  description: string;
  items: string[];
}

const CurriculumItem = ({ value, title, description, items }: CurriculumItemProps) => {
  return (
    <Accordion.Item value={value} className="flex flex-col rounded-2xl border bg-white p-6">
      <Accordion.Trigger className="flex flex-col gap-2">
        <p className="text-xl font-bold text-primary">{title}</p>
        <div className="flex w-full items-center justify-between">
          <p className="text-lg font-medium">{description}</p>
          <Icon.ChevronDown className="bg-content h-10 w-10 rounded-full p-2" />
        </div>
      </Accordion.Trigger>
      <Accordion.Content>
        <div className="flex flex-col gap-4 pt-4">
          {items.map((item, index) => (
            <p className="list-item list-inside font-medium text-muted-foreground" key={index}>
              {item}
            </p>
          ))}
        </div>
      </Accordion.Content>
    </Accordion.Item>
  );
};