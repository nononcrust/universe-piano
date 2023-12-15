import { FaqSection, FaqSectionItem } from "@/components/faq-section";
import { SectionBadge } from "@/components/section-badge";
import { SectionSubtitle } from "@/components/section-subtitle";
import { SectionTitle } from "@/components/section-title";
import { ServiceFloatingButton } from "@/components/service-floating-button";
import { TutoringCurriculumSection } from "@/components/tutoring-curriculum-section";
import { Aos } from "@/components/ui/aos";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export default function TutoringPage() {
  return (
    <main className="flex flex-col">
      <HeroSection />
      <UniversePianoSection />
      <CrewResultSection />
      <RecommendSection />
      <TutoringCompositionSection />
      <TutoringExpectationSection />
      <TutoringCurriculumSection />
      <TutoringInfoSection />
      <TutoringFaqSection />
      <ServiceFloatingButton />
    </main>
  );
}

const HeroSection = () => {
  return (
    <section className="bg-content-light">
      <Aos>
        <div className="container mt-16 flex flex-col items-center gap-8 py-16">
          <div className="flex flex-1 flex-col items-center gap-4">
            <SectionBadge>입시 과외</SectionBadge>
            <h1 className="whitespace-pre-line text-center text-2xl font-bold md:text-4xl md:leading-tight">
              {"국내 최초 미국 음대 입시 과외,\n유니버스 피아노에서만 가능합니다."}
            </h1>
          </div>
          <div className="flex justify-center">
            <Image src="/images/3d-star.png" width={300} height={300} alt="별" />
          </div>
        </div>
      </Aos>
    </section>
  );
};

const UniversePianoSection = () => {
  return (
    <section className="container my-16">
      <Aos className="mt-12">
        <div className="flex flex-col items-center gap-4 md:flex-row md:gap-24">
          <Image
            className="rounded-2xl border"
            src="/images/tutoring/tutoring-1.png"
            alt=""
            width={320}
            height={320}
          />
          <p className="text-2xl font-bold md:text-3xl">이런 곳이 있는 줄 알았더라면</p>
        </div>
      </Aos>
      <Aos className="mt-24">
        <div className="flex flex-col items-center gap-4 md:flex-row-reverse md:gap-24">
          <Image
            className="rounded-2xl border"
            src="/images/tutoring/tutoring-2.png"
            alt=""
            width={320}
            height={320}
          />
          <p className="text-2xl font-bold md:text-3xl">진작 연락 드릴 껄 그랬어요.</p>
        </div>
      </Aos>
      <Aos className="mt-36">
        <p className="whitespace-pre text-center text-2xl font-bold md:text-3xl md:leading-normal">
          {"미국 음대 입시생들이 필요했던 ‘그런 곳’,\n유니버스 피아노입니다."}
        </p>
      </Aos>
    </section>
  );
};

const CrewResultSection = () => {
  return (
    <section className="bg-content mt-12 py-16">
      <Aos className="container">
        <SectionTitle>유니버스 크루들의 결과를 공개합니다.</SectionTitle>
        <SectionSubtitle className="whitespace-pre-wrap">
          {
            "입시를 준비하시는 분들 누구나 좋은 학교에 장학금을 많이 받고 입학하길 원합니다.\n정확한 목표와 방향 설정이 있다면 누구나 도전 할 수 있습니다."
          }
        </SectionSubtitle>
        <div className="mt-12 flex flex-col justify-center gap-4 md:flex-row md:gap-8">
          <CrewResultItem title="5연속 합격률" description="100%" />
          <CrewResultItem title="장학금 수여" description="65% 이상" />
          <CrewResultItem title="장학금 증액" description="연간 최대 $30000" />
        </div>
        <div className="container mt-12">
          <SectionSubtitle className="whitespace-pre-wrap text-center text-muted-foreground md:leading-normal">
            {
              "최근 5년간 미국 음대 입시 상담을 100건 넘게 진행해왔습니다.\n똑같은 사연을 가진 분들은 단 한 건도 없었습니다.\n100개의 각기 다른 사연을 하나의 정형화된 틀에 억지로 맞출 수는 없습니다."
            }
          </SectionSubtitle>
          <p className="mt-12 text-center text-2xl font-bold">
            반드시 각자에게 적합한 가이드라인이 필요합니다.
          </p>
        </div>
      </Aos>
    </section>
  );
};

interface ScholarshipItemProps {
  title: string;
  description: string;
}

const CrewResultItem = ({ title, description }: ScholarshipItemProps) => {
  return (
    <div className="flex w-full flex-col items-center rounded-2xl bg-white p-8 shadow-xl md:max-w-[240px]">
      <div className="bg-content h-24 w-24 rounded-full" />
      <p className="mt-4 font-semibold text-muted-foreground">{title}</p>
      <p className="mt-2 text-center text-3xl font-bold text-primary">{description}</p>
    </div>
  );
};

const RecommendSection = () => {
  return (
    <Aos className="my-16">
      <section className="container">
        <SectionTitle>국내 최초, 미국 음대 입시 과외</SectionTitle>
        <SectionSubtitle>이런 분들께 추천드립니다.</SectionSubtitle>
        <div className="mt-12 flex flex-col items-center gap-4">
          <RecommendItem number={1} title='"제가 뭘 모르는지 모르겠어요."' />
          <RecommendItem number={2} title='"주변에 미국 음대 입시에 대해 아는 사람이 없어요."' />
          <RecommendItem number={3} title='"컨설팅 비용은 조금 부담스러워요."' />
          <RecommendItem number={4} title='"장학금 없이는 미국 음대 입학이 어려운 상황이에요."' />
          <RecommendItem
            number={5}
            title='"입시 준비 혼자 해보고 싶은데 정확한 정보와 방법이 알고 싶어요."'
          />
        </div>
      </section>
    </Aos>
  );
};

interface RecommendItemProps {
  number: number;
  title: string;
}

const RecommendItem = ({ number, title }: RecommendItemProps) => {
  return (
    <div className="bg-content flex w-full max-w-[600px] gap-4 rounded-xl border p-4">
      <div>
        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-black font-bold text-white">
          {number}
        </div>
      </div>
      <p className="flex-1 font-semibold">{title}</p>
    </div>
  );
};

const TutoringCompositionSection = () => {
  return (
    <Aos className="my-16">
      <section className="container">
        <SectionTitle>과외 구성 요소</SectionTitle>
        <SectionSubtitle>과외를 통해 나만의 입시 준비 전략을 완성합니다.</SectionSubtitle>
        <div className="mt-12 grid grid-cols-1 items-center gap-4 md:grid-cols-3">
          <TutoringCompositionItem
            title="zoom 수업 3회"
            description="한 달 이내에 3회의 수업이 진행됩니다. 맞춤형 정보, 장학금 전략, 그리고 학교 선정까지 단기간 완성!"
          />
          <TutoringCompositionItem
            title="제작 교재 제공"
            description="한 달에 딱 한 권! 오직 한 분 만을 위한 입시 필승 비법서를 맞춤 제작 합니다."
          />
          <TutoringCompositionItem
            title="애프터 케어"
            description="과외가 끝나도 유니버스 피아노의 케어는 계속됩니다. 카톡 Q&A 서비스를 통해 유니버스 피아노와 함께 하실 수 있습니다."
          />
        </div>
      </section>
    </Aos>
  );
};

interface TutoringCompositionItemProps {
  title: string;
  description: string;
}

const TutoringCompositionItem = ({ title, description }: TutoringCompositionItemProps) => {
  return (
    <div className="bg-content-light flex flex-col items-center rounded-2xl border p-8 md:h-[200px]">
      <Badge variant="primary">{title}</Badge>
      <p className="mt-4 text-center font-medium">{description}</p>
    </div>
  );
};

const TutoringExpectationSection = () => {
  return (
    <Aos className="my-16">
      <section className="container">
        <SectionTitle>과외 기대 효과</SectionTitle>
        <div className="mt-12 flex flex-col gap-8 md:flex-row">
          <TutoringExpectationItem title="BEFORE">
            <strong className="text-foreground">과외를 신청하시는 분들 99%는, </strong>
            도움이 필요하지만 컨설팅 비용이 부담되거나, 너무 많은 정보들 중에 어떤 것이 정확한
            정보인지 가려내기 힘들거나, 혹은 온라인상에서 나에게 딱 맞는 정보를 찾을 수 없었다고
            말씀하셨습니다
          </TutoringExpectationItem>
          <TutoringExpectationItem title="AFTER">
            <strong className="text-foreground">하지만, 입시 과외를 마치신 후에는, </strong>내
            상황에 필요한 정보를 얻게 되고, 지원할 학교가 정해지며, 입시 준비에 대한 정확한 목표와
            계획이 생겼다고 하십니다
          </TutoringExpectationItem>
        </div>
      </section>
    </Aos>
  );
};

interface TutoringExpectationItemProps {
  title: string;
  children: React.ReactNode;
}

const TutoringExpectationItem = ({ title, children }: TutoringExpectationItemProps) => {
  return (
    <div className="bg-content w-full rounded-2xl border p-8">
      <p className="text-2xl font-bold text-primary">{title}</p>
      <p className="mt-4 text-lg font-medium text-muted-foreground">{children}</p>
    </div>
  );
};

const TutoringInfoSection = () => {
  return (
    <section className="bg-zinc-900 pb-24 text-white">
      <Aos className="container">
        <SectionTitle className="text-left">스터디 신청 및 월별 커리큘럼 확인</SectionTitle>
        <SectionSubtitle className="text-left text-gray-300">
          스터디 신청 방법 및 월별 커리큘럼은 홈페이지 우측 하단 채팅 창에서 확인 하실 수 있습니다.
        </SectionSubtitle>
        <div className="mt-20 flex flex-col gap-8">
          <div className="rounded-2xl border border-zinc-700 bg-zinc-800 p-8">
            <p className="text-2xl font-bold">과외 비용</p>
            <ul className="ml-4 list-disc">
              <li className="mt-4 font-medium text-gray-300">690,000</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-zinc-700 bg-zinc-800 p-8">
            <p className="text-2xl font-bold">스터디 벌금</p>
            <ul className="ml-4 list-disc">
              <li className="mt-4 font-medium text-gray-300">인증 기준 미달 시, 벌금 부과</li>
              <li className="mt-4 font-medium text-gray-300">
                모여진 벌금은 월말에 가장 성실하게 공부하신 분께 전액 수여합니다.
              </li>
              <li className="mt-4 font-medium text-gray-300">
                벌금 기준은 홈페이지 우측 하단 채팅 창에서 확인 하실 수 있습니다.
              </li>
            </ul>
          </div>
        </div>
      </Aos>
    </section>
  );
};

const TutoringFaqSection = () => {
  return (
    <FaqSection>
      <FaqSectionItem
        title="수업 3회로 미국 음대 입시 준비가 가능할까요?"
        description="멘토의 설명과 개별 맞춤형 자료가 있다면 수업 3회로고 충분히 가능합니다. 필요한 경우에는 추가 수업을 제공합니다."
        value="item-1"
      />
      <FaqSectionItem
        title="과외가 끝났는데 궁금한 점이 생기면 어떡하나요?"
        description="과외가 끝나도 유니버스 피아노의 케어는 계속됩니다. 궁금하신 부분들 카톡으로 남겨주시면 멘토가 직접 답변 드리겠습니다."
        value="item-2"
      />
      <FaqSectionItem
        title="과외를 이미 했는데 컨설팅으로 바꾸고 싶어요."
        description="컨설팅 진행 가능한 공석이 남아 있다면, 컨설팅 진행 비용에서 과외 비용 전액 차감 후에 진행 도와드리겠습니다. 단, 전체 과정을 함께하는 컨설팅 (유니버스 컨설팅/전체 컨설팅) 을 진행하시는 경우에만 해당됩니다."
        value="item-3"
      />
    </FaqSection>
  );
};
