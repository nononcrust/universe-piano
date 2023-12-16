import { ConsultingDocumentAgencySection } from "@/components/consulting-document-agency-section";
import { ConsultingLogoSlider } from "@/components/consulting-logo-slider";
import { SectionSubtitle } from "@/components/section-subtitle";
import { SectionTitle } from "@/components/section-title";
import { Aos } from "@/components/ui/aos";
import { Button } from "@/components/ui/button";

export default function ConsultingPage() {
  return (
    <main className="flex flex-col">
      <OverwhelmingResultSection />
      <LogoSliderSection />
      <ConsultingExampleSection />
      <ConsultingDocumentAgencySection />
      <FreeConsultSection />
    </main>
  );
}

const OverwhelmingResultSection = () => {
  return (
    <section className="my-16 bg-content">
      <Aos className="container">
        <SectionTitle>압도적인 결과로 증명합니다.</SectionTitle>
        <div className="mb-24 mt-24 flex flex-col gap-12 md:flex-row">
          <OverwhelmingResultItem
            title="5년 연속 합격률"
            value="100%"
            description="어떤  케이스든 꾸준히 성공시켜 왔습니다. 상황과 우선순위에 맞는 입시 필승 전략을 안내 드립니다."
          />
          <OverwhelmingResultItem
            title="장학금 비율"
            value="전원 65% 이상"
            description="미국 음대 입학, 장학급은 필수입니다. 맞춤형 전략을 통해 경제적인 부담을 덜어드립니다."
          />
          <OverwhelmingResultItem
            title="장학금 증액"
            value="연간 최대 $30000"
            description="장학금을 증액 하려면, 증액 요소들이 필요합니다. 유니버스 피아노는 컨설팅 초기 단계부터 장학금 증액 요소를 준비합니다."
          />
        </div>
      </Aos>
    </section>
  );
};

interface OverwhelmingResultItemProps {
  title: string;
  value: string;
  description: string;
}

const OverwhelmingResultItem = ({ title, value, description }: OverwhelmingResultItemProps) => {
  return (
    <div className="flex flex-col gap-8">
      <p className="text-xl font-bold">{title}</p>
      <p className="text-3xl font-bold text-primary">{value}</p>
      <p className="font-medium text-muted-foreground">{description}</p>
    </div>
  );
};

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

const FreeConsultSection = () => {
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
