"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";
import { LandingSectionSubtitle } from "./landing-section-subtitle";
import { LandingSectionTitle } from "./landing-section-title";

export const ServiceAccordionSection = () => {
  return (
    <section className="container pt-24">
      <LandingSectionTitle>서비스 안내</LandingSectionTitle>
      <LandingSectionSubtitle>원하시는 서비스를 찾아보세요.</LandingSectionSubtitle>
      <div>
        <Accordion type="single" collapsible>
          <AccordionItem value="1">
            <AccordionTrigger>
              <div className="flex gap-2">
                <p className="mr-4 flex-1 text-left">빠르게 UI 디자인만 필요하신가요?</p>
              </div>
            </AccordionTrigger>
            <AccordionContent className="ml-1 whitespace-pre-wrap"></AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};

interface SupportListItemProps {
  value: string;
  title: string;
  content: string;
  category: string;
}

const SupportListItem = ({ value, title, content, category }: SupportListItemProps) => {
  return <div></div>;
};
