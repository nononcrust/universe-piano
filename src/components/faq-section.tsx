"use client";

import { ROUTE } from "@/constants/route";
import * as Accordion from "@radix-ui/react-accordion";
import Link from "next/link";
import { Icon } from "./icon";
import { SectionSubtitle } from "./section-subtitle";
import { SectionTitle } from "./section-title";
import { Aos } from "./ui/aos";
import { Button } from "./ui/button";

interface FaqSectionProps {
  children: React.ReactNode;
}

export const FaqSection = ({ children }: FaqSectionProps) => {
  return (
    <section className="bg-content pb-32">
      <Aos className="container">
        <SectionTitle>자주 묻는 질문</SectionTitle>
        <SectionSubtitle>더 자세한 내용은 고객센터에서 확인해주세요.</SectionSubtitle>
        <Accordion.Root type="multiple" className="mt-12 flex flex-col gap-4">
          {children}
        </Accordion.Root>
        <div className="mt-12 flex justify-center">
          <Link href={ROUTE.SUPPORT}>
            <Button variant="outline" className="h-12 rounded-full pl-10 pr-8 text-lg" size="lg">
              더보기
              <Icon.ChevronRight className="ml-1" />
            </Button>
          </Link>
        </div>
      </Aos>
    </section>
  );
};

interface FaqSectionItemProps {
  title: string;
  description: string;
  value: string;
}

export const FaqSectionItem = ({ title, description, value }: FaqSectionItemProps) => {
  return (
    <Accordion.Item value={value} className="flex flex-col rounded-xl border bg-white p-4">
      <Accordion.Trigger className="flex items-center justify-between text-lg font-semibold">
        <div className="flex items-center gap-4">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-content font-bold">
            Q
          </div>
          <p className="text-left text-[15px] font-semibold md:text-base">{title}</p>
        </div>
        <Icon.ChevronDown className="ml-4" />
      </Accordion.Trigger>
      <Accordion.Content className="ml-12 mr-4 mt-4 whitespace-pre-wrap text-[15px] font-medium text-muted-foreground transition">
        {description}
      </Accordion.Content>
    </Accordion.Item>
  );
};
