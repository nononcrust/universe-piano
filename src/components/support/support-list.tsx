"use client";

import { Accordion } from "../ui/accordion";
import { SupportListItem } from "./support-list-item";

interface SupportListProps {
  initialData: { title: string; content: string }[];
}

export const SupportList = ({ initialData }: SupportListProps) => {
  return (
    <Accordion type="single" collapsible>
      {initialData.map((item, index) => (
        <SupportListItem
          key={index}
          title={item.title}
          content={item.content}
          value={String(index)}
        />
      ))}
    </Accordion>
  );
};
