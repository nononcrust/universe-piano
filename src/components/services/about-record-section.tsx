"use client";

import CountUp from "react-countup";
import { SectionTitle } from "../section-title";
import { Aos } from "../ui/aos";

export const AboutRecordSection = () => {
  return (
    <section className="bg-content py-36">
      <Aos className="container">
        <SectionTitle className="whitespace-pre-wrap md:leading-normal">
          <span className="text-primary">2019</span>
          {"년도부터\n미국 음대 유학을 꿈꾸는 분들과\n함께 성장해 왔습니다"}
        </SectionTitle>
        <div className="mt-12 grid grid-cols-2 gap-4 md:mt-24 md:grid-cols-4">
          <AboutRecordItem
            title="합격률"
            value={<CountUp end={100} duration={2} suffix="%" enableScrollSpy useEasing={false} />}
          />
          <AboutRecordItem
            title="장학금 수여"
            value={<CountUp end={65} duration={2} suffix="%" enableScrollSpy useEasing={false} />}
          />
          <AboutRecordItem
            title="연간 장학금 증액"
            value={
              <CountUp end={30000} duration={2} prefix="$" enableScrollSpy useEasing={false} />
            }
          />
          <AboutRecordItem
            title="컨설팅 경력"
            value={<CountUp end={5} duration={2} suffix=" yrs" enableScrollSpy useEasing={false} />}
          />
        </div>
        {/* <div className="flex justify-center">
          <Link href={ROUTE.ABOUT.PORTFOLIO}>
            <Button className="h-12 rounded-full px-6 text-lg">연도별 포트폴리오</Button>
          </Link>
        </div> */}
      </Aos>
    </section>
  );
};

interface AboutRecordItemProps {
  title: string;
  value: React.ReactNode;
}

const AboutRecordItem = ({ title, value }: AboutRecordItemProps) => {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <p className="text-3xl font-bold text-primary md:text-[52px]">{value}</p>
      <p className="font-medium">{title}</p>
    </div>
  );
};
