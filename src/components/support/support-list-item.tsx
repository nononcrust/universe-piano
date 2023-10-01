"use client";

import { AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

interface SupportListItemProps {
  value: string;
  title: string;
  content: string;
}

export const SupportListItem = ({ value, title, content }: SupportListItemProps) => {
  return (
    <AccordionItem value={value}>
      <AccordionTrigger>Q. {title}</AccordionTrigger>
      <AccordionContent className="whitespace-pre">{content}</AccordionContent>
    </AccordionItem>
  );
};
