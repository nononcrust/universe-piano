"use client";

import { PageTitle } from "@/components/layout/page-title";
import { Pagination } from "@/components/shared/pagination";
import { Accordion } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { data as consultingData } from "@/contents/services/consulting";
import { data as kitData } from "@/contents/services/kit";
import { data as studyData } from "@/contents/services/study";
import { data as tutoringData } from "@/contents/services/tutoring";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { useState } from "react";

const ROWS_PER_PAGE = 5;

const FAQS = {
  all: [...tutoringData.faq, ...consultingData.faq, ...studyData.faq, ...kitData.faq],
  tutoring: tutoringData.faq,
  consulting: consultingData.faq,
  study: studyData.faq,
  kit: kitData.faq,
} as const;

const TAB_LIST = {
  all: "전체",
  consulting: "입시 컨설팅",
  tutoring: "미국 음대 입시 과외",
  study: "스터디",
  kit: "독학 키트",
} as const;

type Tab = keyof typeof TAB_LIST;

export default function SupportPage() {
  const [tab, setTab] = useState<Tab>("all");
  const [page, setPage] = useState(1);

  const totalPage = Math.ceil(FAQS[tab].length / ROWS_PER_PAGE);

  const currentFaqs = FAQS[tab].slice((page - 1) * ROWS_PER_PAGE, page * ROWS_PER_PAGE);

  const onCategoryChange = (value: string) => {
    setPage(1);
    setTab(value as keyof typeof TAB_LIST);
  };

  return (
    <main className="pb-16">
      <PageTitle className="container" title="자주 묻는 질문" />
      <Tabs value={tab} onValueChange={onCategoryChange}>
        <Tabs.List className="container mt-8 flex gap-2 overflow-auto py-1 scrollbar-hide">
          {Object.entries(TAB_LIST).map(([value, label], index) => (
            <Tabs.Trigger key={index} value={value} asChild>
              <Button
                className="min-w-fit rounded-full px-4"
                variant={tab === value ? "default" : "outlined"}
              >
                {label}
              </Button>
            </Tabs.Trigger>
          ))}
        </Tabs.List>
        <div className="container mt-8">
          <Accordion type="single" collapsible key={tab}>
            {currentFaqs.map((item, index) => (
              <SupportListItem
                key={item.title}
                title={item.title}
                content={item.description}
                value={String(index)}
                category={item.category}
              />
            ))}
          </Accordion>
        </div>
      </Tabs>
      <Pagination
        className="container mt-8"
        currentPage={page}
        totalPage={totalPage}
        onChange={setPage}
      />
    </main>
  );
}

interface SupportListItemProps {
  value: string;
  title: string;
  content: string;
  category: string;
}

const SupportListItem = ({ value, title, content, category }: SupportListItemProps) => {
  return (
    <Accordion.Item value={value}>
      <Accordion.Trigger>
        <div className="flex gap-2">
          <div>
            <Badge variant="secondary">{category}</Badge>
          </div>
          <p className="mr-4 flex-1 text-left">{title}</p>
        </div>
      </Accordion.Trigger>
      <Accordion.Content className="ml-1 whitespace-pre-wrap">{content}</Accordion.Content>
    </Accordion.Item>
  );
};

const Tabs = ({ children, ...props }: React.ComponentProps<typeof TabsPrimitive.Root>) => (
  <TabsPrimitive.Root {...props}>{children}</TabsPrimitive.Root>
);

Tabs.Trigger = TabsPrimitive.Trigger;
Tabs.List = TabsPrimitive.List;
Tabs.Item = TabsPrimitive;
