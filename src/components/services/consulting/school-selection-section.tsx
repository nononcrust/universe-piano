import { SectionTitle } from "@/components/section-title";
import { Aos } from "@/components/ui/aos";
import { cn } from "@/lib/utils";

export const SchoolSelectionSection = () => {
  return (
    <section className="bg-content py-32">
      <Aos className="container">
        <SectionTitle>어떻게 이렇게 결과가 좋나요?</SectionTitle>
        <div className="mt-12 flex max-md:px-16 md:flex-col">
          <div className="flex justify-center">
            <div className="flex flex-col md:flex-row">
              <Indicator number={1} highlightFill />
              <Line />
              <Indicator number={2} />
              <Line />
              <Indicator number={3} />
              <Line />
              <Indicator number={4} />
              <Line />
              <Indicator number={5} highlightOutline />
            </div>
          </div>
          <div className="flex w-full flex-col justify-center md:flex-row">
            <Text className="text-primary">학교 선정</Text>
            <Text>서류 준비</Text>
            <Text>원서 작성</Text>
            <Text>오디션 투어</Text>
            <Text>장학금 증액</Text>
          </div>
        </div>
        <div className="mt-8">
          <p className="text-center font-medium max-md:whitespace-pre-wrap md:text-lg">
            {
              "유니버스 피아노는 미국 음대 입시 첫 단계인 학교 선정에서 부터\n지원자분의 장학금을고려합니다."
            }
          </p>
          <p className="mt-4 text-center text-lg font-semibold max-md:whitespace-pre-wrap md:text-xl">
            {
              "이것이 유니버스 피아노 크루들의 결과가 좋은 이유이자,\n학교 개수별로 비용을 책정하지 않는 이유입니다."
            }
          </p>
        </div>
      </Aos>
      <Aos className="container pt-36">
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
              <Indicator number={5} highlightOutline />
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
  highlightFill?: boolean;
  highlightOutline?: boolean;
}

const Indicator = ({ number, highlightFill = false, highlightOutline = false }: IndicatorProps) => {
  return (
    <div className="relative flex justify-center">
      <div
        className={cn(
          "flex h-16 w-16 items-center justify-center rounded-full border border-foreground bg-white text-xl font-bold",
          highlightOutline && "border-2 border-primary",
          highlightFill && "border-primary bg-primary text-white",
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

interface TextProps extends React.HTMLAttributes<HTMLDivElement> {}

const Text = ({ children, className, ...props }: TextProps) => {
  return (
    <div
      className={cn(
        "flex w-full justify-center py-4 text-lg font-semibold max-md:h-[200px] md:w-[200px]",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};
