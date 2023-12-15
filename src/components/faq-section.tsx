"use client";

import * as Accordion from "@radix-ui/react-accordion";
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
          <Button className="h-12 rounded-full px-12 text-lg" size="lg">
            더보기
          </Button>
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
          <div className="bg-content flex h-8 w-8 items-center justify-center rounded-full font-bold">
            Q
          </div>
          <p className="text-left font-semibold">{title}</p>
        </div>
        <Icon.ChevronDown className="ml-4" />
      </Accordion.Trigger>
      <Accordion.Content className="ml-12 mt-4 font-medium text-muted-foreground transition">
        {description}
      </Accordion.Content>
    </Accordion.Item>
  );
};
