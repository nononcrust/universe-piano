import curriculumImage from "@/assets/images/consulting/consulting-curriculum.jpg";
import hero3dImage from "@/assets/images/consulting/consulting-hero-3d.png";
import { ConsultingLogoSlider } from "@/components/consulting-logo-slider";
import { FaqSection, FaqSectionItem } from "@/components/faq-section";
import { SectionSubtitle } from "@/components/section-subtitle";
import { SectionTitle } from "@/components/section-title";
import { FreeConsultingSection } from "@/components/services/\bconsulting-free-consulting-section";
import { OverwhelmingResultSection } from "@/components/services/consulting-overwhelming-result-section";
import { ConsultingReviewSection } from "@/components/services/consulting-review-section";
import { ConsultingPackageSection } from "@/components/services/consulting/consulting-package-section";
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
      <SchoolSelectionSection />
      <ConsultingReviewSection />
      <WhyUniverseSection />
      <ConsultingCurriculumSection />
      <ConsultingPackageSection />
      <ConsultingInfoSection />
      <ConsultingFaqSection />
      <FreeConsultingSection />
      {/* <ServiceFloatingButton /> */}
    </main>
  );
}

const HeroSection = () => {
  return (
    <section className="overflow-hidden bg-content py-24">
      <Aos>
        <div className="container flex flex-col items-center gap-8">
          <div className="flex flex-1 flex-col items-center gap-4">
            <Badge className="rounded-xl px-3 text-base font-semibold" variant="primary">
              입시 컨설팅
            </Badge>
            <h1 className="text-center text-3xl font-bold leading-tight md:text-5xl">
              미국 음대 입시 컨설팅
            </h1>
          </div>
          <Image className="w-[200px]" priority src={hero3dImage} alt="" fetchPriority="high" />
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
        "flex w-full gap-4 rounded-full bg-content p-4",
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

const WhyUniverseSection = () => {
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

const ConsultingCurriculumSection = () => {
  return (
    <section className="py-32">
      <Aos className="container">
        <SectionTitle>컨설팅 커리큘럼</SectionTitle>
        <SectionSubtitle>목표 설정부터 합격 후 과정까지</SectionSubtitle>
        <div className="mt-12 flex justify-center">
          <Image src={curriculumImage} alt="" />
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
          {"더 자세한 내용은 채널톡으로 문의해주세요."}
        </SectionSubtitle>
        <div className="mt-12 flex flex-col gap-8 md:flex-row">
          <div className="w-full rounded-2xl bg-zinc-800 p-8">
            <p className="text-lg font-bold md:text-2xl">컨설팅 신청 절차</p>
            <ul className="ml-4 list-disc">
              <li className="mt-4 font-medium text-gray-300">
                {"컨설팅 신청 -> 대표와 1:1 상담 -> 계약서 작성 및 계약금 입금 -> 컨설팅 시작"}
              </li>
            </ul>
          </div>
          <div className="w-full rounded-2xl bg-zinc-800 p-8">
            <p className="text-lg font-bold md:text-2xl">컨설팅 비용</p>
            <ul className="ml-4 list-disc">
              <li className="mt-4 font-medium text-gray-300">
                홈페이지 채널톡 또는 카톡 오픈채팅 유니버스 피아노로 연락 주시면, 비용 안내 파일
                보내드리겠습니다.
              </li>
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
