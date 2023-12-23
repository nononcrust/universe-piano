import { SectionTitle } from "@/components/section-title";
import { Aos } from "@/components/ui/aos";
import { cn } from "@/lib/utils";

export const SchoolSelectionSection = () => {
  return (
    <section className="bg-content py-32">
      <Aos className="container">
        <SectionTitle>학교 선정은 어떻게 진행되나요?</SectionTitle>
        <div className="mt-12 flex max-md:px-16 md:flex-col">
          <div className="flex justify-center">
            <div className="flex flex-col md:flex-row">
              <Indicator number={1} />
              <Line />
              <Indicator number={2} />
              <Line />
              <Indicator number={3} />
              <Line />
              <Indicator number={4} />
              <Line />
              <Indicator number={5} highlight />
            </div>
          </div>
          <div className="flex w-full flex-col justify-center md:flex-row">
            <Text>컨설팅 시작</Text>
            <Text>우선 순위 및 성향 파악</Text>
            <Text>장학금 증액 요소 파악</Text>
            <Text>여러 차례 zoom 미팅</Text>
            <Text>학교 선정 완료</Text>
          </div>
        </div>
      </Aos>
    </section>
  );
};

interface IndicatorProps {
  number: number;
  highlight?: boolean;
}

const Indicator = ({ number, highlight = false }: IndicatorProps) => {
  return (
    <div className="relative flex justify-center">
      <div
        className={cn(
          "flex h-16 w-16 items-center justify-center rounded-full border border-foreground bg-white text-xl font-bold",
          highlight && "border-2 border-primary",
        )}
      >
        {number}
      </div>
    </div>
  );
};

const Line = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="border-foreground max-md:h-[136px] max-md:border-l md:w-[136px] md:border-b" />
    </div>
  );
};

interface TextProps {
  children: React.ReactNode;
}

const Text = ({ children }: TextProps) => {
  return (
    <div className="flex w-full justify-center py-4 text-lg font-semibold max-md:h-[200px] md:w-[200px]">
      {children}
    </div>
  );
};
