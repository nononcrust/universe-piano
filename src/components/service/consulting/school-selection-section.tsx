import { SectionTitle } from "@/components/common/section-title";
import { Aos } from "@/components/ui/aos";
import { cn } from "@/lib/utils";

export const SchoolSelectionSection = () => {
  return (
    <section className="bg-content py-32">
      <Aos className="container">
        <SectionTitle>어떻게 이렇게 결과가 좋나요?</SectionTitle>
        <div className="mt-12 flex justify-center">
          <div className="flex w-[200px] gap-4">
            <div className="flex justify-center">
              <div className="mt-1 flex flex-col">
                <Indicator number={1} />
                <Line />
                <Indicator number={2} />
                <Line />
                <Indicator number={3} />
                <Line />
                <Indicator number={4} />
                <Line />
                <Indicator number={5} />
              </div>
            </div>
            <div className="flex w-full flex-col gap-10">
              <Text className="text-primary">학교 선정</Text>
              <Text>서류 준비</Text>
              <Text>원서 작성</Text>
              <Text>오디션 투어</Text>
              <Text>장학금 증액</Text>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <p className="text-center font-medium max-md:whitespace-pre-wrap md:text-lg">
            {
              "유니버스 피아노는 미국 음대 입시 첫 단계인\n학교 선정에서부터 지원자분의 장학금을 고려합니다."
            }
          </p>
          <p className="mt-4 text-center text-lg font-semibold max-md:whitespace-pre-wrap md:text-xl">
            {
              "이것이 유니버스 피아노 크루들의\n결과가 좋은 이유이자, 학교 개수별로 비용을\n책정하지 않는 이유입니다."
            }
          </p>
        </div>
      </Aos>
      <Aos className="container pt-36">
        <SectionTitle>학교 선정은 어떻게 진행되나요?</SectionTitle>
        <div className="mt-12 flex justify-center">
          <div className="flex w-[200px] gap-4">
            <div className="flex justify-center">
              <div className="mt-1 flex flex-col">
                <Indicator number={1} />
                <Line />
                <Indicator number={2} />
                <Line />
                <Indicator number={3} />
                <Line />
                <Indicator number={4} />
                <Line />
                <Indicator number={5} />
              </div>
            </div>
            <div className="flex w-full flex-col gap-10">
              <Text>컨설팅 시작</Text>
              <Text>우선 순위 및 성향 파악</Text>
              <Text>장학금 증액 요소 파악</Text>
              <Text>여러 차례 zoom 미팅</Text>
              <Text>학교 선정 완료</Text>
            </div>
          </div>
        </div>
      </Aos>
    </section>
  );
};

interface IndicatorProps {
  number: number;
}

const Indicator = ({ number }: IndicatorProps) => {
  return (
    <div className="relative flex justify-center">
      <div
        className={cn(
          "flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-bold text-white",
        )}
      >
        0{number}
      </div>
    </div>
  );
};

const Line = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="h-[48px] border-l-2 border-primary" />
    </div>
  );
};

interface TextProps extends React.HTMLAttributes<HTMLDivElement> {}

const Text = ({ children, className, ...props }: TextProps) => {
  return (
    <div
      className={cn("flex h-8 w-full items-center text-lg font-semibold leading-none", className)}
      {...props}
    >
      {children}
    </div>
  );
};
