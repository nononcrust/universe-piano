"use client";

import CountUp from "react-countup";
import { SectionTitle } from "./section-title";
import { Aos } from "./ui/aos";

export const OverwhelmingResultSection = () => {
  return (
    <section className="my-16 bg-content">
      <Aos className="container">
        <SectionTitle>압도적인 결과로 증명합니다.</SectionTitle>
        <div className="mb-24 mt-24 flex flex-col gap-12 md:flex-row">
          <OverwhelmingResultItem
            title="5년 연속 합격률"
            value={<CountUp end={100} duration={3} suffix="%" enableScrollSpy useEasing={false} />}
            description="어떤  케이스든 꾸준히 성공시켜 왔습니다. 상황과 우선순위에 맞는 입시 필승 전략을 안내 드립니다."
          />
          <OverwhelmingResultItem
            title="장학금 비율"
            value={
              <CountUp end={65} prefix="전원 " suffix="% 이상" enableScrollSpy useEasing={false} />
            }
            description="미국 음대 입학, 장학급은 필수입니다. 맞춤형 전략을 통해 경제적인 부담을 덜어드립니다."
          />
          <OverwhelmingResultItem
            title="장학금 증액"
            value={
              <CountUp
                end={30000}
                prefix="연간 최대 $"
                duration={3}
                enableScrollSpy
                useEasing={false}
              />
            }
            description="장학금을 증액 하려면, 증액 요소들이 필요합니다. 유니버스 피아노는 컨설팅 초기 단계부터 장학금 증액 요소를 준비합니다."
          />
        </div>
      </Aos>
    </section>
  );
};

interface OverwhelmingResultItemProps {
  title: string;
  value: React.ReactNode;
  description: string;
}

const OverwhelmingResultItem = ({ title, value, description }: OverwhelmingResultItemProps) => {
  return (
    <div className="flex flex-col gap-8">
      <p className="text-xl font-bold">{title}</p>
      <p className="text-3xl font-bold text-primary">{value}</p>
      <p className="font-medium text-muted-foreground">{description}</p>
    </div>
  );
};
