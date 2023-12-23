import hero3dImage from "@/assets/images/consulting/consulting-hero-3d.png";
import roadmapImage from "@/assets/images/consulting/consulting-roadmap.jpg";
import { ConsultingLogoSlider } from "@/components/consulting-logo-slider";
import { FaqSection, FaqSectionItem } from "@/components/faq-section";
import { SectionSubtitle } from "@/components/section-subtitle";
import { SectionTitle } from "@/components/section-title";
import { FreeConsultingSection } from "@/components/services/\bconsulting-free-consulting-section";
import { OverwhelmingResultSection } from "@/components/services/consulting-overwhelming-result-section";
import { ConsultingReviewSection } from "@/components/services/consulting-review-section";
import { SchoolSelectionSection } from "@/components/services/consulting/school-selection-section";
import { Aos } from "@/components/ui/aos";
import { Badge } from "@/components/ui/badge";
import { data } from "@/contents/services/consulting";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function ConsultingPage() {
  return (
    <main className="flex flex-col">
      <HeroSection />
      <OverwhelmingResultSection />
      <LogoSliderSection />
      <ConsultingExampleSection />
      <BrandPhilosophySection />
      <SchoolSelectionSection />
      <ConsultingReviewSection />
      <RoadmapSection />
      <ConsultingInfoSection />
      <ConsultingFaqSection />
      <FreeConsultingSection />
    </main>
  );
}

const HeroSection = () => {
  return (
    <section className="h-[500px] overflow-hidden bg-zinc-800 md:h-[700px]">
      <Aos>
        <div className="container flex flex-col items-center gap-8 pt-16 md:mt-16">
          <div className="flex flex-1 flex-col items-center gap-4">
            <Badge className="rounded-xl px-4 text-lg font-semibold" variant="primary">
              입시 컨설팅
            </Badge>
            <h1 className="text-center text-3xl font-bold leading-tight text-white md:text-6xl">
              미국 음대 입시 컨설팅
            </h1>
          </div>
          <Image
            className="w-[200px] md:w-[300px] md:translate-y-8"
            priority
            src={hero3dImage}
            alt=""
          />
        </div>
      </Aos>
    </section>
  );
};

const LogoSliderSection = () => {
  return (
    <section className="my-32">
      <SectionTitle>역대 합격 학교 리스트</SectionTitle>
      <SectionSubtitle className="container md:whitespace-pre-wrap md:leading-normal">
        {
          "유니버스 피아노와 함께 라면, 더 이상 혼자가 되는 걱정은 하지 않으셔도 됩니다.\n미국 각 지역에 있는 유니버스 선배 크루가 여러분들을 기꺼이 도와드릴 거에요."
        }
      </SectionSubtitle>
      <div className="mt-12">
        <ConsultingLogoSlider />
      </div>
    </section>
  );
};

const ConsultingExampleSection = () => {
  return (
    <Aos className="my-32">
      <section className="container">
        <SectionTitle>컨설팅 진행 사례</SectionTitle>
        <SectionSubtitle>유니버스 피아노에서는 어떤 케이스든 합격 가능했습니다.</SectionSubtitle>
        <div className="mt-12 flex justify-center">
          <div className="flex w-full max-w-[600px] flex-col gap-4">
            <ConsultingExampleItem
              number={1}
              title="“작년에 다른 유학원이랑 준비했는데 결과가 맘에 안 들어요.”"
            />
            <ConsultingExampleItem number={2} title="“혼자 준비하다가 재수하게 되었어요.”" />
            <ConsultingExampleItem number={3} title="“작년에 전부 불합격 했어요.”" />
            <ConsultingExampleItem number={4} title="“대학 성적이 3.0 미만이에요.”" />
            <ConsultingExampleItem
              number={5}
              title="“미국과 독일 음대 입시를 동시에 준비해야 해요.”"
            />
          </div>
        </div>
      </section>
    </Aos>
  );
};

interface ConsultingExampleItemProps {
  number: number;
  title: string;
  direction?: "left" | "right";
}

const ConsultingExampleItem = ({
  number,
  title,
  direction = "left",
}: ConsultingExampleItemProps) => {
  return (
    <div
      className={cn(
        "flex w-full gap-4 rounded-3xl bg-content p-4",
        direction === "left" && "rounded-tl-none",
        direction === "right" && "rounded-tr-none",
      )}
    >
      <div>
        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary font-bold text-white">
          {number}
        </div>
      </div>
      <p className="flex-1 font-semibold">{title}</p>
    </div>
  );
};

const BrandPhilosophySection = () => {
  return (
    <section className="my-32">
      <Aos className="container flex flex-col">
        <SectionTitle>Brand Philosophy</SectionTitle>
        <SectionSubtitle>어떻게 이렇게 결과가 좋나요?</SectionSubtitle>
        <p className="mt-12 text-center text-xl font-bold md:text-4xl">
          &quot;<span className="text-primary">첫 음부터 다르니까!</span>&quot;
        </p>
        <p className="mt-4 text-center text-lg font-semibold md:text-2xl">
          미국 음대 입시의 첫 음, 학교 선정
        </p>
        <div className="flex justify-center">
          <p className="mt-6 w-full whitespace-pre-wrap text-center font-medium md:text-lg">
            {
              "유니버스 피아노는 미국 음대 입시의 첫 단계, 학교 선정에 많은 시간을 할애합니다.\n학교 선정은 합격과 장학금에 실질적인 영향을 미치는 부분이지만, 혼자 준비하시는 분들 뿐만 아니라 여러 업체들이 이 부분을 간과합니다.\n\n유니버스 피아노는 지원자 분의 최종 장학금을 고려한 학교 선정을 진행합니다. 이것이 유니버스 피아노가 학교 개수별로 비용을 책정하지 않는 이유입니다."
            }
          </p>
        </div>
      </Aos>
    </section>
  );
};

const RoadmapSection = () => {
  return (
    <section className="bg-content py-32">
      <Aos className="container">
        <SectionTitle>미국 음대 입시 로드맵</SectionTitle>
        <SectionSubtitle>미국 음대 입시 과정은 세 단계로 진행됩니다.</SectionSubtitle>
        <div className="mt-12 flex justify-center rounded-[32px] bg-white p-24">
          <Image priority src={roadmapImage} alt="로드맵" />
        </div>
      </Aos>
    </section>
  );
};

const ConsultingInfoSection = () => {
  return (
    <section className="bg-zinc-900 py-32 text-white">
      <Aos className="container">
        <SectionTitle className="text-left">컨설팅 상세정보</SectionTitle>
        <SectionSubtitle className="text-left text-gray-300">
          {"더 자세한 내용은 채팅으로 문의해주세요."}
        </SectionSubtitle>
        <div className="mt-12 flex flex-col gap-8 md:flex-row">
          <div className="w-full rounded-2xl bg-zinc-800 p-8">
            <p className="text-lg font-bold md:text-2xl">컨설팅 진행 조건</p>
            <ul className="ml-4 list-disc">
              <li className="mt-4 font-medium text-gray-300">미국 음대 석사 과정 입시생</li>
              <li className="mt-4 font-medium text-gray-300">전공 무관</li>
            </ul>
          </div>
        </div>
      </Aos>
    </section>
  );
};

const ConsultingFaqSection = () => {
  return (
    <FaqSection>
      {data.faq.map((item, index) => (
        <FaqSectionItem
          key={index}
          title={item.title}
          description={item.description}
          value={String(index)}
        />
      ))}
    </FaqSection>
  );
};
