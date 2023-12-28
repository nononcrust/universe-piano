"use client";

import { Icon } from "@/components/icon";
import { SectionSubtitle } from "@/components/section-subtitle";
import { SectionTitle } from "@/components/section-title";
import { Aos } from "@/components/ui/aos";

export const OurPositioningSection = () => {
  return (
    <section className="my-32">
      <Aos className="container">
        <SectionTitle className="max-md:whitespace-pre">
          {"미국 음대 입시,\n어떻게 준비할지 고민되시죠?"}
        </SectionTitle>
        <SectionSubtitle className="max-md:whitespace-pre-wrap md:leading-normal">
          {"비용만 따지기엔 중요한 문제고,\n유학원에 맡겨도 도움이 안된다 그러고!"}
        </SectionSubtitle>
        <div className="mt-12 flex flex-col gap-4 md:flex-row md:items-center md:justify-center">
          <OurPositioningItem
            title={"Individual\n개인 컨설팅"}
            items={["저렴한 비용", "체계성 부족", "개인 경험 의존", "영어 실력/점수 미검증"]}
          />
          <div className="flex justify-between rounded-2xl border-2 border-primary p-8 font-medium shadow-xl md:h-[400px] md:max-w-[400px] md:flex-col md:justify-start">
            <p className="whitespace-pre text-xl font-bold text-primary">
              {"Universe Piano\n"}
              <span className="text-foreground">유니버스 피아노</span>
            </p>
            <div className="flex flex-col gap-2 text-end font-semibold md:mt-24 md:text-left">
              {[
                "고정 비용",
                "1:1 맞춤형 솔루션",
                "최근 5년간의 현지 정보",
                "미국 음대 출신 대표",
                "대표와 1:1 소통",
              ].map((item, index) => (
                <p key={index}>{item}</p>
              ))}
            </div>
          </div>
          <OurPositioningItem
            title={"Major Agency\n대형 유학원"}
            items={[
              "갯수 당 추가 비용",
              "일률적 솔루션",
              "일률적인 정보",
              "음악 비 전공자",
              "각 파트 담당자와 연락",
            ]}
          />
        </div>
        <div className="mt-16 flex justify-center">
          <div className="rounded-full bg-primary p-4">
            <Icon.ChevronDown className="text-white" />
          </div>
        </div>
      </Aos>
    </section>
  );
};

interface OurPositioningItemProps {
  title: string;
  items: string[];
}

const OurPositioningItem = ({ title, items }: OurPositioningItemProps) => {
  return (
    <div className="flex justify-between rounded-2xl border p-8 md:h-[320px] md:max-w-[220px] md:flex-col md:justify-start">
      <p className="whitespace-pre text-xl font-semibold">{title}</p>
      <div className="flex flex-col gap-2 text-end text-muted-foreground md:mt-14 md:text-left">
        {items.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
    </div>
  );
};
