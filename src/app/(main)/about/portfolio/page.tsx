"use client";

import { SectionTitle } from "@/components/shared/section-title";
import { Aos } from "@/components/ui/aos";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function AboutPortfolioPage() {
  return (
    <main>
      <ConsultingResultSection />
    </main>
  );
}

const YEARS = ["2023", "2022", "2021", "2020", "2019"];

const ConsultingResultSection = () => {
  const [selectedYear, setSelectedYear] = useState(YEARS[0]);

  return (
    <Aos className="my-16">
      <section className="container">
        <p className="text-lg font-semibold text-primary">Portfolio</p>
        <SectionTitle className="mt-2 text-left">컨설팅 결과를 투명하게 공개합니다.</SectionTitle>
        <div className="mt-8 flex gap-2 overflow-x-auto scrollbar-hide">
          {YEARS.map((year, index) => (
            <Button
              className="rounded-full"
              variant={year === selectedYear ? "primary" : "secondary"}
              key={index}
              onClick={() => setSelectedYear(year)}
            >
              {year}
            </Button>
          ))}
        </div>
      </section>
    </Aos>
  );
};
