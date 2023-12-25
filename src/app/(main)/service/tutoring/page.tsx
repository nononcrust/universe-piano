"use client";

import tutoringCompositionImage1 from "@/assets/images/tutoring/tutoring-composition-1.jpg";
import tutoringCompositionImage2 from "@/assets/images/tutoring/tutoring-composition-2.jpg";
import tutoringCompositionImage3 from "@/assets/images/tutoring/tutoring-composition-3.jpg";
import tutoringHero3dImage from "@/assets/images/tutoring/tutoring-hero-3d.png";
import { ColoredIcon } from "@/components/colored-icon";
import { FaqSection, FaqSectionItem } from "@/components/faq-section";
import { SectionSubtitle } from "@/components/section-subtitle";
import { SectionTitle } from "@/components/section-title";
import { TutoringCurriculumSection } from "@/components/services/tutoring-curriculum-section";
import { Aos } from "@/components/ui/aos";
import { Badge } from "@/components/ui/badge";
import { data } from "@/contents/services/tutoring";
import { cn } from "@/lib/utils";
import Image, { StaticImageData } from "next/image";

export default function TutoringPage() {
  return (
    <main className="flex flex-col">
      <HeroSection />
      {/* <UniversePianoSection /> */}
      <RecommendSection />
      <CrewResultSection />
      <TutoringCompositionSection />
      <TutoringExpectationSection />
      <MustReadSection />
      <TutoringCurriculumSection />
      <TutoringInfoSection />
      <TutoringFaqSection />
    </main>
  );
}

const HeroSection = () => {
  return (
    <section className="bg-content">
      <Aos>
        <div className="container flex flex-col items-center gap-8 py-24">
          <div className="flex flex-1 flex-col items-center gap-4">
            <Badge className="rounded-xl px-3 text-base font-semibold" variant="primary">
              입시 과외
            </Badge>
            <h1 className="whitespace-pre-line text-center text-2xl font-bold md:text-5xl md:leading-tight">
              국내 최초 미국 음대 입시 과외
            </h1>
          </div>
          <div className="flex justify-center">
            <Image className="mt-12 w-[200px]" priority src={tutoringHero3dImage} alt="별" />
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
            priority
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
            priority
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
    <section className="bg-content py-32">
      <Aos className="container">
        <SectionTitle>유니버스 크루들의 결과를 공개합니다</SectionTitle>
        <SectionSubtitle className="whitespace-pre-wrap">
          {
            "입시를 준비하시는 분들 누구나 좋은 학교에 장학금을 많이 받고 입학하길 원합니다.\n정확한 목표와 방향 설정이 있다면 누구나 도전 할 수 있습니다."
          }
        </SectionSubtitle>
        <div className="mt-12 flex flex-col justify-center gap-4 md:flex-row md:gap-8">
          <CrewResultItem
            title="5연속 합격률"
            description="100%"
            icon={<ColoredIcon.Medal className="h-16 w-16" />}
          />
          <CrewResultItem
            title="장학금 수여"
            description="65% 이상"
            icon={<ColoredIcon.Trophy className="h-16 w-16" />}
          />
          <CrewResultItem
            title="장학금 증액"
            description="연간 최대 $30000"
            icon={<ColoredIcon.Like className="h-16 w-16" />}
          />
        </div>
        <div className="container mt-12">
          <SectionSubtitle className="whitespace-pre-wrap text-center text-muted-foreground md:leading-normal">
            {
              "최근 5년간 미국 음대 입시 상담을 100건 넘게 진행해왔습니다.\n똑같은 사연을 가진 분들은 단 한 건도 없었습니다.\n100개의 각기 다른 사연을 하나의 정형화된 틀에 억지로 맞출 수는 없습니다."
            }
          </SectionSubtitle>
          <p className="mt-12 text-center text-2xl font-bold">
            반드시 각자에게 적합한 가이드라인이 필요합니다
          </p>
        </div>
      </Aos>
    </section>
  );
};

interface ScholarshipItemProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const CrewResultItem = ({ title, description, icon }: ScholarshipItemProps) => {
  return (
    <div className="flex w-full flex-col items-center rounded-xl bg-white p-8 md:max-w-[240px]">
      <div className="flex h-24 w-24 items-center justify-center">{icon}</div>
      <p className="mt-4 font-semibold text-muted-foreground">{title}</p>
      <p className="mt-2 text-center text-3xl font-bold text-primary">{description}</p>
    </div>
  );
};

const RecommendSection = () => {
  return (
    <Aos className="my-32">
      <section className="container">
        <SectionTitle>국내 최초 미국 음대 입시 과외</SectionTitle>
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
    <div className="flex w-full max-w-[600px] gap-4 rounded-full rounded-tl-none bg-content p-4">
      <div>
        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary font-bold text-white">
          {number}
        </div>
      </div>
      <p className="flex-1 font-semibold">{title}</p>
    </div>
  );
};

const TutoringCompositionSection = () => {
  return (
    <Aos className="my-32">
      <section className="container">
        <SectionTitle>과외 구성 요소</SectionTitle>
        <SectionSubtitle>과외를 통해 나만의 입시 준비 전략을 완성합니다.</SectionSubtitle>
        <div className="mt-12 grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-6">
          <TutoringCompositionItem
            title="zoom 수업 3회"
            description="한 달 이내에 3회의 수업이 진행됩니다. 맞춤형 정보, 장학금 전략, 그리고 학교 선정까지 단기간 완성!"
            image={tutoringCompositionImage1}
          />
          <TutoringCompositionItem
            title="제작 교재 제공"
            description="한 달에 딱 한 권! 오직 한 분 만을 위한 입시 필승 비법서를 맞춤 제작 합니다."
            image={tutoringCompositionImage2}
          />
          <TutoringCompositionItem
            title="애프터 케어"
            description="과외가 끝나도 유니버스 피아노의 케어는 계속됩니다. 카톡 Q&A 서비스를 통해 유니버스 피아노와 함께 하실 수 있습니다."
            image={tutoringCompositionImage3}
          />
        </div>
      </section>
    </Aos>
  );
};

interface TutoringCompositionItemProps {
  image: StaticImageData;
  title: string;
  description: string;
}

const TutoringCompositionItem = ({ image, title, description }: TutoringCompositionItemProps) => {
  return (
    <div className="flex flex-1 flex-col rounded-2xl">
      <div className="flex h-[280px] w-full items-center justify-center rounded-2xl border bg-[#C1C4EC]">
        <Image className="w-full rounded-2xl" alt="" src={image} priority />
      </div>
      <div className="ml-2 mt-3 flex flex-col">
        <p className="text-lg font-semibold md:text-xl">{title}</p>
        <p className="mt-2 font-medium text-muted-foreground md:text-lg">{description}</p>
      </div>
    </div>
  );
};

const TutoringExpectationSection = () => {
  return (
    <Aos className="my-32">
      <section className="container">
        <SectionTitle>과외 기대 효과</SectionTitle>
        <SectionSubtitle>확실한 비포 애프터를 보장합니다.</SectionSubtitle>
        <div className="mt-12 flex flex-col gap-8 md:flex-row">
          <TutoringExpectationItem
            title="BEFORE"
            items={[
              "궁금할 때 마다 정보 검색",
              "오래 되거나 출처가 불분명한 정보",
              "'글쓴이'의 상황에 맞는 정보",
              "원서 마감일 전에 급히 준비 시작",
              "어디서 들어 본 학교 랜덤 지원",
            ]}
          />
          <TutoringExpectationItem
            highlight
            title="AFTER"
            items={[
              "최대 6시간 정보 획득 완료",
              "컨설팅 대표가 직접 전하는 정보",
              "내 상황에 적용되는 정보",
              "월 단위 플랜과 함께 체계적으로 준비",
              "장학금 증액 전략에 따른 학교 선정",
              "지원 학교별 입시 정보 파악 완료",
            ]}
          />
        </div>
      </section>
    </Aos>
  );
};

interface TutoringExpectationItemProps {
  title: string;
  items: string[];
  highlight?: boolean;
}

const TutoringExpectationItem = ({ title, items, highlight }: TutoringExpectationItemProps) => {
  return (
    <div
      className={cn(
        "w-full rounded-3xl border-2 border-transparent bg-content p-8",
        highlight && "border-primary bg-white shadow-lg",
      )}
    >
      <p
        className={cn(
          "text-xl font-bold text-muted-foreground md:text-2xl",
          highlight && "text-primary",
        )}
      >
        {title}
      </p>
      <div className="mt-4 flex flex-col gap-2">
        {items.map((item, index) => (
          <p
            key={index}
            className={cn(
              "list-item list-inside font-medium text-muted-foreground",
              highlight && "text-foreground",
            )}
          >
            {item}
          </p>
        ))}
      </div>
    </div>
  );
};

const MustReadSection = () => {
  return (
    <Aos className="my-32">
      <section className="container">
        <SectionTitle className="text-left">필독 사항</SectionTitle>
        <div className="mt-12 max-w-[400px] rounded-full rounded-tl-none bg-primary p-4 pl-8 text-xl font-semibold text-white">
          {'"너 이러다 망하는거 아니야?"'}
        </div>
        <div className="mt-8">
          <p className="text-lg font-medium">
            이렇게 다 알려주면 망하는 거 아니냐며, 주변에서는 미국 음대 입시 과외를 말렸습니다.
          </p>
          <p className="mt-2 font-medium md:text-lg">
            하지만, 간절한 마음으로 유니버스 피아노를 찾아주신 분들께 도움의 진입 장벽을 낮추고자
            입시 과외를 시작했습니다.
          </p>
        </div>
        <div className="mt-16">
          <p className="whitespace-pre-wrap text-xl font-semibold md:text-3xl">
            과외에서는 컨설팅에 준하는 정보와 전략을 제공 합니다.
          </p>
          <p className="mt-2 whitespace-pre-wrap text-xl font-semibold md:text-3xl">
            그래서, 신청 절차가 까다로우며, <span className="text-primary">한 달에 한 분</span>만
            선정합니다.
          </p>
        </div>
        <div className="mt-12">
          <p className="text-muted-foreground">
            과외 커리큘럼, 상세 정보, Q&A 확인 후 신청서 작성해 주세요.
          </p>
          <p className="mt-1 text-muted-foreground">
            성의 없는 신청서 작성은 과외 진행이 불가할 수 있습니다.
          </p>
        </div>
      </section>
    </Aos>
  );
};

const TutoringInfoSection = () => {
  return (
    <section className="bg-zinc-900 py-32 text-white">
      <Aos className="container">
        <SectionTitle className="text-left">과외 상세정보</SectionTitle>
        <SectionSubtitle className="text-left text-gray-300">
          자세한 정보는 홈페이지 우측 하단 채팅 창에서 확인 하실 수 있습니다.
        </SectionSubtitle>
        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
          <div className="row-span-2 rounded-2xl bg-zinc-800 p-8">
            <p className="text-lg font-bold md:text-2xl">과외 절차</p>
            <ul className="ml-4 list-decimal">
              <li className="mt-4 font-medium text-gray-300">과외 신청서 작성</li>
              <li className="mt-4 font-medium text-gray-300">멘토와 1:1 미팅</li>
              <li className="mt-4 font-medium text-gray-300">과외 진행 여부 확정</li>
              <li className="mt-4 font-medium text-gray-300">과외 일정 조율 & 계약서 작성</li>
              <li className="mt-4 font-medium text-gray-300">과외 시작</li>
            </ul>
          </div>
          <div className="rounded-2xl bg-zinc-800 p-8">
            <p className="text-lg font-bold md:text-2xl">과외 비용</p>
            <ul className="ml-4 list-disc">
              <li className="mt-4 font-medium text-gray-300">690,000</li>
            </ul>
          </div>
          <div className="rounded-2xl bg-zinc-800 p-8">
            <p className="text-lg font-bold md:text-2xl">과외 신청서 작성 방법</p>
            <ul className="ml-4 list-disc">
              <li className="mt-4 font-medium text-gray-300">
                채널톡에서 과외 신청서 링크 확인하실 수 있습니다.
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
