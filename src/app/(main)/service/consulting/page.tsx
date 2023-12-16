import { ConsultingDocumentAgencySection } from "@/components/consulting-document-agency-section";
import { ConsultingLogoSlider } from "@/components/consulting-logo-slider";
import { OverwhelmingResultSection } from "@/components/consulting-overwhelming-result-section";
import { FaqSection, FaqSectionItem } from "@/components/faq-section";
import { Instagram } from "@/components/instagram";
import { SectionSubtitle } from "@/components/section-subtitle";
import { SectionTitle } from "@/components/section-title";
import { Aos } from "@/components/ui/aos";
import { Button } from "@/components/ui/button";
import { data } from "@/contents/services/consulting";

export default function ConsultingPage() {
  return (
    <main className="flex flex-col">
      <OverwhelmingResultSection />
      <LogoSliderSection />
      <ConsultingExampleSection />
      <ConsultingDocumentAgencySection />
      <ConsultingReviewSection />
      <ConsultingFaqSection />
      <FreeConsultingSection />
    </main>
  );
}

const LogoSliderSection = () => {
  return (
    <section className="my-36">
      <SectionTitle className="mt-0">역대 합격 학교 리스트</SectionTitle>
      <SectionSubtitle className="whitespace-pre-wrap md:leading-normal">
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
    <Aos className="my-16">
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

const ConsultingReviewSection = () => {
  return (
    <section className="py-16">
      <Aos className="container">
        <SectionTitle>조작 없는 후기 시리즈</SectionTitle>
        <SectionSubtitle>유니버스 크루들이 직접 작성한 후기입니다.</SectionSubtitle>
        <div className="mt-12 flex flex-col gap-12 md:flex-row">
          {data.reviews.map((review, index) => (
            <ConsultingReviewItem
              key={index}
              label={review.label}
              title={review.title}
              description={review.description}
            />
          ))}
        </div>
        <div className="mt-12 flex flex-col items-center">
          <p className="font-semibold">
            더 많은 후기와 크루들의 근황은 유니버스 피아노 네이버 블로그와 인스타그램에서 확인 하실
            수 있습니다.
          </p>
          <div className="mt-4 flex gap-4">
            <Instagram className="h-16 w-16 cursor-pointer transition hover:scale-110" />
          </div>
        </div>
      </Aos>
    </section>
  );
};

interface ConsultingReviewItemProps {
  label: string;
  title: string;
  description: string;
}

const ConsultingReviewItem = ({ label, title, description }: ConsultingReviewItemProps) => {
  return (
    <div className="flex flex-col overflow-hidden rounded-2xl border">
      <div className="flex justify-center">
        <div className="h-32 w-full bg-gradient-to-b from-gray-200 to-white" />
      </div>
      <div className="mt-8 flex flex-col gap-2 px-4">
        <div className="flex">
          <div className="rounded-full bg-primary px-3 py-1 text-sm font-semibold text-white">
            {label}
          </div>
        </div>
        <p className="text-lg font-semibold">{title}</p>
      </div>
      <div className="mt-4 h-[240px] overflow-y-auto whitespace-pre-wrap px-4 pb-4 font-medium leading-loose text-muted-foreground">
        {description}
      </div>
    </div>
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
