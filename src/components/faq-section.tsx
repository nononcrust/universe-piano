"use client";

import { Icon } from "@/components/icon";
import { SectionSubtitle } from "@/components/section-subtitle";
import { SectionTitle } from "@/components/section-title";
import { Aos } from "@/components/ui/aos";
import { Button } from "@/components/ui/button";
import { ROUTE } from "@/constants/route";
import * as Accordion from "@radix-ui/react-accordion";
import Link from "next/link";

interface FaqSectionProps {
  children: React.ReactNode;
}

export const FaqSection = ({ children }: FaqSectionProps) => {
  return (
    <section className="bg-content py-32">
      <Aos className="container">
        <SectionTitle>자주 묻는 질문</SectionTitle>
        <SectionSubtitle>더 자세한 내용은 고객센터에서 확인해주세요.</SectionSubtitle>
        <Accordion.Root type="multiple" className="mt-12 flex flex-col gap-4">
          {children}
        </Accordion.Root>
        <div className="mt-12 flex items-center justify-center">
          <Link href={ROUTE.SUPPORT}>
            <Button variant="outline" className="h-12 rounded-full pl-10 pr-8 text-base" size="lg">
              더보기
              <Icon.ChevronRight className="ml-1 h-5 w-5" />
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
    <Accordion.Item value={value} className="flex flex-col rounded-xl bg-white">
      <Accordion.Trigger className="flex items-center justify-between p-4 font-semibold transition-all [&[data-state=open]>svg]:rotate-180">
        <div className="flex items-center gap-4">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-content font-bold">
            Q
          </div>
          <p className="text-left text-base font-semibold md:text-base">{title}</p>
        </div>
        <Icon.ChevronDown className="ml-4 transition-transform ease-out" />
      </Accordion.Trigger>
      <Accordion.Content className="overflow-hidden transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
        <div className="ml-12 mr-4 whitespace-pre-wrap p-4 pt-0 text-[15px] font-medium text-muted-foreground">
          {description}
        </div>
      </Accordion.Content>
    </Accordion.Item>
  );
};
