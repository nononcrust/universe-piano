"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { Icon } from "../icon";
import { SectionSubtitle } from "../section-subtitle";
import { SectionTitle } from "../section-title";
import { Aos } from "../ui/aos";

const data = [
  {
    title: "[1]",
    description: "음악 이력서 & Repertoire List",
    items: ["[기간]: 2주 소요", "전공별 서류 양식 제공", "완성본 PDF 파일 제공"],
  },
  {
    title: "[2]",
    description: "Essays",
    items: [
      "[기간]: 최소 4주 소요",
      "지원 학교별 주제 및 작성 가이드라인 제공",
      "피드백 2회 제공",
      "영문 번역",
      "학교별 완성본 PDF 파일 제공",
    ],
  },
  {
    title: "[3]",
    description: "포트폴리오 컨설팅",
    items: ["[기간]: 최소 6주 소요", "음악 이력서, Repertoire List, Essays 완성 패키지"],
  },
  {
    title: "[4]",
    description: "추천서",
    items: ["[기간]: 상황별 상이", "추천서 관련 문제 해결 및 상담 제공"],
  },
  {
    title: "[5]",
    description: "공인 성적표 (Official Transcripts)",
    items: ["[기간]: 24시간 이내 완료", "공인 성적표 발급 대행"],
  },
  {
    title: "[6]",
    description: "CSS Profile 작성 대행",
    items: ["[기간]: 1주 소요", "CSS Profile 서류 작성 대행"],
  },
];

export const ConsultingDocumentAgencySection = () => {
  return (
    <section className="bg-content py-32">
      <Aos className="container">
        <SectionTitle>서류 대행 서비스 안내</SectionTitle>
        <SectionSubtitle>대행 비용은 채널톡으로 문의 해주세요.</SectionSubtitle>
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
    <Accordion.Item value={value} className="flex flex-col rounded-2xl bg-white p-6">
      <Accordion.Trigger className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <p className="font-bold text-primary md:text-xl">{title}</p>
          <p className="text-left font-semibold md:text-lg">{description}</p>
        </div>
        <Icon.ChevronDown className="ml-4 h-10 w-10 rounded-full bg-content p-2" />
      </Accordion.Trigger>
      <Accordion.Content>
        <div className="flex flex-col gap-4 pt-4">
          {items.map((item, index) => (
            <p
              className="ml-5 list-item list-outside text-[15px] font-medium text-muted-foreground md:text-base"
              key={index}
            >
              {item}
            </p>
          ))}
        </div>
      </Accordion.Content>
    </Accordion.Item>
  );
};
