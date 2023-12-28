import { SectionSubtitle } from "@/components/common/section-subtitle";
import { SectionTitle } from "@/components/common/section-title";
import { Aos } from "@/components/ui/aos";

export const SystemSection = () => {
  return (
    <section className="py-48" id="company-system-section">
      <Aos className="container">
        <SectionTitle className="text-primary">독보적인 시스템</SectionTitle>
        <SectionSubtitle>오직 유니버스 피아노에서만 가능합니다.</SectionSubtitle>
        <div className="mt-12 flex flex-col gap-4 md:flex-row">
          <SystemItem
            number={1}
            title="크루 네트워크"
            description={
              "유니버스 피아노 크루들과 함께 오디션 동행은 물론,\n미국 전역에 있는 선배 크루들이 기꺼이 도움을 줄 거에요."
            }
          />
          <SystemItem
            number={2}
            title="음대생 영어 스터디"
            description={
              "영어 공부도 함께 합니다!\n각자의 수준에 맞는 학습 플랜과 함께 목표 점수 달성을 도와드립니다. "
            }
          />
          <SystemItem
            number={3}
            title="실시간 공유 시스템"
            description={"모든 진행 과정을 실시간으로 확인 할 수 있는 시스템을 갖추고 있습니다."}
          />
        </div>
      </Aos>
    </section>
  );
};

interface SystemItemProps {
  number: number;
  title: string;
  description: string;
}

const SystemItem = ({ number, title, description }: SystemItemProps) => {
  return (
    <div className="flex flex-1 flex-col rounded-xl bg-content-light p-8 text-center md:text-left">
      <p className="text-lg font-bold text-primary">0{number}</p>
      <p className="text-xl font-semibold md:text-2xl">{title}</p>
      <p className="mt-2 whitespace-pre-wrap text-muted-foreground md:whitespace-normal">
        {description}
      </p>
    </div>
  );
};
