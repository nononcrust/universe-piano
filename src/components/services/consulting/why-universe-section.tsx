import { SectionSubtitle } from "@/components/section-subtitle";
import { SectionTitle } from "@/components/section-title";
import { Aos } from "@/components/ui/aos";

export const WhyUniverseSection = () => {
  return (
    <section className="py-32">
      <Aos className="container">
        <SectionTitle>WHY Universe</SectionTitle>
        <SectionSubtitle>실제 유니버스 크루분들의 후기로 증명합니다.</SectionSubtitle>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-16">
          <WhyUniverseItem
            number={1}
            title="다르다"
            description="지원자의 우선순위와 성향에 맞는 학교와 교수님 추천 부터, 상황에 맞는 1:1 솔루션을 제공합니다."
          />
          <WhyUniverseItem
            number={2}
            title="빠르다"
            description="모든 질문은 담당자를 기다릴 필요 없이 대표가 직접 답변 드립니다. 미국 현지에서 발생하는 돌발 상황들도 빠르게 해결합니다."
          />
          <WhyUniverseItem
            number={3}
            title="투명하다"
            description="메일 계정 공유를 통해, 학교 및 교수님과의 연락, 합격 결과, 컨설팅 진행 과정을 실시간으로 확인 하실 수 있습니다."
          />
          <WhyUniverseItem
            number={4}
            title="관리한다"
            description="미국 현지 오디션 일정 조율, 레슨 컨택, 연습실 및 숙소 정보 공유, 선배 크루와의 연결 등 미국 오디션 기간 전체 과정을 밀착 관리 합니다."
          />
        </div>
      </Aos>
    </section>
  );
};

interface WhyUniverseItemProps {
  number: number;
  title: string;
  description: string;
}

const WhyUniverseItem = ({ number, title, description }: WhyUniverseItemProps) => {
  return (
    <div className="flex gap-4">
      <div className="flex items-start">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-lg font-bold text-white">
          {number}
        </div>
      </div>
      <div className="flex flex-1 flex-col">
        <p className="text-2xl font-semibold">{title}</p>
        <p className="mt-2 font-medium text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};
