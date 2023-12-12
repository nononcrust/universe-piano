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
    <Aos className="bg-gray-100 pb-32">
      <section className="container">
        <SectionTitle title="자주 묻는 질문" />
        <SectionSubtitle title="더 자세한 내용은 고객센터에서 확인해주세요." />
        <Accordion.Root type="multiple" className="mt-12 flex flex-col gap-4">
          {children}
        </Accordion.Root>
        <div className="mt-12 flex justify-center">
          <Button className="rounded-full" size="lg">
            더보기
          </Button>
        </div>
      </section>
    </Aos>
  );
};

interface FaqSectionItemProps {
  title: string;
  description: string;
  value: string;
}

export const FaqSectionItem = ({ title, description, value }: FaqSectionItemProps) => {
  return (
    <Accordion.Item value={value} className="flex flex-col rounded-xl bg-white p-4">
      <Accordion.Trigger className="flex items-center justify-between text-lg font-bold">
        <div className="flex items-center gap-4">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 font-bold">
            Q
          </div>
          <p>{title}</p>
        </div>
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100">
          <Icon.ChevronDown className="" />
        </div>
      </Accordion.Trigger>
      <Accordion.Content className="ml-12 mt-4 font-medium text-muted-foreground transition">
        {description}
      </Accordion.Content>
    </Accordion.Item>
  );
};
