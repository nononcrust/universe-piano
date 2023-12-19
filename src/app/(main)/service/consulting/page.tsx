import hero3dImage from "@/assets/images/consulting/consulting-hero-3d.png";
import roadmapImage from "@/assets/images/consulting/consulting-roadmap.jpg";
import { ConsultingLogoSlider } from "@/components/consulting-logo-slider";
import { FaqSection, FaqSectionItem } from "@/components/faq-section";
import { SectionBadge } from "@/components/section-badge";
import { SectionSubtitle } from "@/components/section-subtitle";
import { SectionTitle } from "@/components/section-title";
import { ConsultingDocumentAgencySection } from "@/components/services/consulting-document-agency-section";
import { OverwhelmingResultSection } from "@/components/services/consulting-overwhelming-result-section";
import { ConsultingReviewSection } from "@/components/services/consulting-review-section";
import { Aos } from "@/components/ui/aos";
import { Button } from "@/components/ui/button";
import { data } from "@/contents/services/consulting";
import Image from "next/image";

export default function ConsultingPage() {
  return (
    <main className="flex flex-col">
      <HeroSection />
      <OverwhelmingResultSection />
      <LogoSliderSection />
      <ConsultingExampleSection />
      <RoadmapSection />
      <ConsultingDocumentAgencySection />
      <ConsultingReviewSection />
      <ConsultingInfoSection />
      <ConsultingFaqSection />
      <FreeConsultingSection />
    </main>
  );
}

const HeroSection = () => {
  return (
    <section className="bg-content-light">
      <Aos>
        <div className="container mt-16 flex flex-col items-center gap-8 py-16">
          <div className="flex flex-1 flex-col items-center gap-4">
            <SectionBadge>입시 컨설팅</SectionBadge>
            <h1 className="text-center text-3xl font-bold leading-tight md:text-5xl">
              미국 음대 입시 컨설팅
            </h1>
          </div>
          <div className="flex justify-center">
            <Image priority width={300} height={300} src={hero3dImage} alt="" />
          </div>
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
        <div className="mt-12 flex flex-col items-center gap-4">
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
      </section>
    </Aos>
  );
};

interface ConsultingExampleItemProps {
  number: number;
  title: string;
}

const ConsultingExampleItem = ({ number, title }: ConsultingExampleItemProps) => {
  return (
    <div className="flex w-full max-w-[600px] gap-4 rounded-xl border bg-content p-4">
      <div>
        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary font-bold text-white">
          {number}
        </div>
      </div>
      <p className="flex-1 font-semibold">{title}</p>
    </div>
  );
};

const RoadmapSection = () => {
  return (
    <section className="my-32">
      <Aos className="container">
        <SectionTitle>미국 음대 입시 로드맵</SectionTitle>
        <SectionSubtitle>미국 음대 입시 과정은 세 단계로 진행됩니다.</SectionSubtitle>
        <Image priority className="mt-12" src={roadmapImage} alt="로드맵" />
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
          <div className="w-full rounded-2xl border border-zinc-700 bg-zinc-800 p-8">
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

const FreeConsultingSection = () => {
  return (
    <section className="bg-zinc-900 py-32">
      <Aos className="container">
        <SectionTitle className="mt-0 whitespace-pre text-left text-white md:leading-normal">
          더 자세히 알고 싶다면?
        </SectionTitle>
        <Button
          className="mt-8 h-14 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 px-10 text-lg"
          size="lg"
          variant="primary"
        >
          1회 무료 상담 신청
        </Button>
      </Aos>
    </section>
  );
};
