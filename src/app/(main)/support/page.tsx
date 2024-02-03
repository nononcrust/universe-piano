"use client";

import { Pagination } from "@/components/common/pagination";
import { PageTitle } from "@/components/layout/page-title";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { data as consultingData } from "@/contents/services/consulting";
import { data as studyData } from "@/contents/services/study";
import { data as tutoringData } from "@/contents/services/tutoring";
import { useState } from "react";

const ROWS_PER_PAGE = 5;

const FAQS = {
  all: [...tutoringData.faq, ...studyData.faq],
  tutoring: tutoringData.faq,
  consulting: consultingData.faq,
  study: studyData.faq,
} as const;

const TAB_LIST = {
  all: "전체",
  consulting: "입시 컨설팅",
  tutoring: "미국 음대 입시 과외",
  study: "스터디",
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
      <div className="container mt-8 flex gap-2 overflow-auto scrollbar-hide">
        {Object.entries(TAB_LIST).map(([value, label], index) => (
          <Button
            key={index}
            className="min-w-fit rounded-full px-4"
            variant={tab === value ? "default" : "outline"}
            onClick={() => onCategoryChange(value)}
          >
            {label}
          </Button>
        ))}
      </div>
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
    <AccordionItem value={value}>
      <AccordionTrigger>
        <div className="flex gap-2">
          <div>
            <Badge variant="secondary">{category}</Badge>
          </div>
          <p className="mr-4 flex-1 text-left">{title}</p>
        </div>
      </AccordionTrigger>
      <AccordionContent className="ml-1 whitespace-pre-wrap">{content}</AccordionContent>
    </AccordionItem>
  );
};
