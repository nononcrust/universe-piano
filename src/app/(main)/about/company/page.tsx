import { LogoSlider } from "@/components/logo-slider";
import { SectionSubtitle } from "@/components/section-subtitle";
import { SectionTitle } from "@/components/section-title";
import { Aos } from "@/components/ui/aos";

export default function AboutCompanyPage() {
  return (
    <main>
      <IntroSection />
      <WhatWeDoSection />
      <LogoSliderSection />
    </main>
  );
}

const IntroSection = () => {
  return (
    <section className="py-32 pb-48">
      <Aos className="container">
        <h1 className="text-3xl font-bold md:text-5xl md:leading-tight">
          Create your Universe: Beyond Talent
        </h1>
        <p className="text-medium mt-8 text-lg leading-normal text-muted-foreground md:text-2xl md:leading-normal">
          스스로를 규정하던 모든 프레임에서 벗어나,
          <br />
          무한한 가능성을 탐험하실 분들과 동행합니다.
        </p>
      </Aos>
    </section>
  );
};

const WhatWeDoSection = () => {
  return (
    <section className="bg-content py-16">
      <Aos className="container">
        <p className="text-lg font-semibold text-primary">Universe Piano</p>
        <SectionTitle className="mt-2 whitespace-pre text-left md:leading-normal">
          {
            "미국 음대 입시의 핵심 요소를 기반으로\n미국 음대 유학의 새로운 패러다임을 만들어 갑니다."
          }
        </SectionTitle>

        <div className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-4">
          <WhatWeDoItem
            title="미국 음대 입시 컨설팅"
            description="미국 음대 석사 과정 입시생을 위한 1:1 맞춤형 컨설팅을 제공합니다."
          />
          <WhatWeDoItem
            title="미국 음대 입시 과외"
            description="컨설팅 압축 버전! 맞춤형 정보, 장학금 전략, 그리고 학교 선정까지 단기간에 완성합니다."
          />
          <WhatWeDoItem
            title="영어 스터디"
            description="음대생을 위한 영어 스터디, 수준에 맞는 공부 방법으로 목표 점수 달성을 도와드립니다."
          />
          <WhatWeDoItem
            title="독학 키트"
            description="미국 음대 유학을 혼자 준비하시는 분들께 필요한 서비스를 제공합니다."
          />
        </div>
      </Aos>
    </section>
  );
};

interface WhatWeDoItemProps {
  title: string;
  description: string;
}

const WhatWeDoItem = ({ title, description }: WhatWeDoItemProps) => {
  return (
    <div className="min-h-[320px] rounded-2xl bg-white p-6 shadow-lg">
      <div className="bg-content h-16 w-16 rounded-2xl" />
      <p className="mt-16 font-semibold">{title}</p>
      <p className="mt-2 font-medium text-muted-foreground">{description}</p>
    </div>
  );
};

const LogoSliderSection = () => {
  return (
    <section>
      <SectionTitle>역대 유니버스 크루</SectionTitle>
      <SectionSubtitle>전국의 음대생들이 유니버스 피아노와 함께 하고 있습니다</SectionSubtitle>
      <div className="mt-12">
        <LogoSlider />
      </div>
    </section>
  );
};
