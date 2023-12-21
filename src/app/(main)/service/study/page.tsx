import studyCompositionImage1 from "@/assets/images/study/study-composition-1.jpg";
import studyCompositionImage2 from "@/assets/images/study/study-composition-2.jpg";
import studyCompositionImage3 from "@/assets/images/study/study-composition-3.jpg";
import hero3dImage from "@/assets/images/study/study-hero-3d.png";
import { FaqSection, FaqSectionItem } from "@/components/faq-section";
import { SectionBadge } from "@/components/section-badge";
import { SectionSubtitle } from "@/components/section-subtitle";
import { SectionTitle } from "@/components/section-title";
import { ServiceFloatingButton } from "@/components/service-floating-button";
import { StudyMissionSection } from "@/components/services/study-mission-section";
import { StudyReviewSection } from "@/components/services/study-review-section";
import { WhyUniverseItem } from "@/components/services/study-why-universe-item";
import { Aos } from "@/components/ui/aos";
import { ScrollShadow } from "@/components/ui/scroll-shadow";
import { data } from "@/contents/services/study";
import Image, { StaticImageData } from "next/image";

export default function StudyPage() {
  return (
    <main className="flex flex-col">
      <HeroSection />
      <section className="container flex justify-center">
        <button className="hover: mt-16 rounded-full bg-black px-10 py-4 text-lg font-bold text-white drop-shadow-lg">
          스터디 신청 및 커리큘럼 확인
        </button>
      </section>
      <CheckPointSection />
      <StudyCompositionSection />
      <WhyUniverseSection />
      <StudyExpectationSection />
      <StudyMissionSection />
      <StudyReviewSection />
      <StudyInfoSection />
      <StudyFaqSection />
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
            <SectionBadge>영어 스터디</SectionBadge>
            <h1 className="text-center text-3xl font-bold leading-tight md:text-5xl">
              음대생을 위한 영어 스터디
            </h1>
          </div>
          <div className="flex justify-center">
            <Image priority src={hero3dImage} alt="" height={300} />
          </div>
        </div>
      </Aos>
    </section>
  );
};

const CheckPointSection = () => {
  return (
    <Aos className="my-32">
      <section className="container">
        <SectionTitle>Check Point</SectionTitle>
        <h2 className="mt-4 whitespace-pre-wrap text-center font-medium text-muted-foreground md:text-lg">
          {"스터디 소개에 앞서 중요한\n몇 가지 주의사항을 먼저 알려드립니다."}
        </h2>
        <div className="mt-12 flex flex-col items-center gap-4">
          <CheckPointItem
            number={1}
            title="스터디는 학원처럼 매일 수업을 듣는 곳이 아닙니다. 학원과 같은 수업 방식을 원하시는 분들은 학원에 다니시는 것을 추천드리겠습니다."
          />
          <CheckPointItem
            number={2}
            title="한두 달 만에 목표 점수 달성은 98%의 음대생들에게는 해당되지 않습니다. 이런 효과를 기대하시는 분들은 기간 내에 목표 점수를 보장해 준다는 곳에서 공부하시는 것을 추천드립니다."
          />
          <CheckPointItem
            number={3}
            title="공부를 위해 할애할 수 있는 시간이 하루 3시간 미만 이신 분들은 스터디 참여를 권유 드리지 않습니다. "
          />
        </div>
      </section>
    </Aos>
  );
};

interface CheckPointItemProps {
  number: number;
  title: string;
}

const CheckPointItem = ({ number, title }: CheckPointItemProps) => {
  return (
    <div className="flex w-full gap-4 rounded-xl bg-content p-4">
      <div>
        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-black font-bold text-white">
          {number}
        </div>
      </div>
      <p className="flex-1 font-medium">{title}</p>
    </div>
  );
};

const StudyCompositionSection = () => {
  return (
    <Aos className="my-32">
      <section className="container">
        <SectionTitle>스터디 구성 요소</SectionTitle>
        <ScrollShadow>
          <div className="mt-12 flex flex-col gap-6 md:flex-row">
            <StudyCompositionItem
              title="zoom 수업 및 자습"
              description="영어 기초 수업, Reading 모의고사, 시중 교재 해석본 Speaking 발음 교정, Writing 첨삭, 브레인 스토밍 등 월별로 필요한 zoom 수업과 자료를 제공합니다."
              image={studyCompositionImage1}
            />
            <StudyCompositionItem
              title="단톡방 공부 및 미션 인증"
              description="가장 빠르게 성장하는 방법은 경쟁력 있는 동료들과 함께 하는 것입니다. 동료들의 단톡방 인증을 함께 지켜보면서 매일 동기부여를 얻을 수 있습니다."
              image={studyCompositionImage2}
            />
            <StudyCompositionItem
              title="단어 시험"
              description="결코 만만하지  않은 스터디! 단어 공부량을 두배로 늘려줄 단어 시험 시스템과 함께 합니다."
              image={studyCompositionImage3}
            />
          </div>
        </ScrollShadow>
      </section>
    </Aos>
  );
};

interface StudyCompositionItemProps {
  image: StaticImageData;
  title: string;
  description: string;
}

const StudyCompositionItem = ({ image, title, description }: StudyCompositionItemProps) => {
  return (
    <div className="flex flex-1 flex-col rounded-2xl">
      <div className="flex h-[200px] w-full items-center justify-center rounded-2xl border bg-[#B8C0F6] shadow-md">
        <Image className="w-[180px] rounded-2xl" alt="" src={image} priority />
      </div>
      <div className="ml-2 mt-2 flex flex-col">
        <p className="text-lg font-semibold">{title}</p>
        <p className="mt-1 font-medium text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};

const WhyUniverseSection = () => {
  return (
    <Aos className="my-32">
      <section className="container">
        <SectionTitle className="whitespace-pre-wrap md:leading-normal">
          {"음대생 영어공부,\n결국 왜 유니버스 피아노일까요?"}
        </SectionTitle>
        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2">
          <WhyUniverseItem
            number={1}
            title={"영어 왕초보였던 음대생이\n직접 스터디 멘토로 참여합니다."}
            description={
              "TOEFL 53점에서 94점까지, 영어 실력 밑바닥에서 상위권으로 올라오는 과정을 직접 경험한 멘토가 가르칩니다. 영어 왕초보가 어떻게 하면 미국 음대 입학에 필요한 점수를 얻을 수 있는지를 누구보다 잘 알고 있습니다.\n\n영어 상위권에서 최상위권에 도달한 사람\n영어 최하위권에서 상위권에 도달한 사람\n\n당신에게 필요한 멘토는 누구입니까?"
            }
          />
          <WhyUniverseItem
            number={2}
            title={"각자에게 최적화된 공부시간과 패턴을\n정확히 인지하게 됩니다."}
            description={
              "현실과 이상의 차이가 클 때에는 간극을 좁혀 나갈 수 있는 현실적인 목표가 필요합니다.\n영어 왕초보 음대생들도 꾸준히 지속 가능한 맞춤형 학습 플랜을 제시합니다."
            }
          />
          <WhyUniverseItem
            number={3}
            title={"할 수 밖에 없는\n환경을 제공합니다."}
            description={
              "공부 시간 인증과 스터디 미션을 통해, 공부를 할 수 밖에 없는 강제성을 부여합니다.\n\n기준 미달 인증 벌금이 부과되며, 모인 벌금은 매달 가장 성실하게 공부하신 분께 전액 수여합니다."
            }
          />
          <WhyUniverseItem
            number={4}
            title={"미국 음대 입시생들의\n작은 커뮤니티가 형성됩니다."}
            description={
              "음대생이라는 공통점을 바탕으로, 다른 스터디에서는 잘 느껴지지 않았던 동질감과 소속감이 자연스럽게 형성됩니다.\n\n경쟁심 NO! 스터디에서 서로 이해하고 공감하며, 함께 성장합니다. 스터디 크루끼리 미국 오디션 기간에 만나서 밥 친구가 되고, 긴급 상황에 서로 도와주고, 룸메이트가 되는 것은 보너스 효과!"
            }
          />
        </div>
      </section>
    </Aos>
  );
};

const StudyExpectationSection = () => {
  return (
    <Aos className="my-32">
      <section className="container">
        <SectionTitle>스터디 기대 효과</SectionTitle>
        <div className="mt-12 flex flex-col gap-8">
          <StudyExpectationItem
            title="음대생 영어 공부의 마지노선"
            subtitle="유니버스 피아노 스터디"
            description="스터디에 참여하시는 분들 90%는 영어 공부를 제대로 해본 적이 없거나, 영어 학원 수업을 들어도 점수가 오르지 않던 분들이었습니다. 영어 점수 때문에 입시를 1년 이상 미루신 분들도 계셨습니다."
          />
          <StudyExpectationItem
            title="스터디 참여 결과"
            subtitle="점수가 오른다!"
            description="스터디 크루분들은 평균 6개월 만에 토플 80점을 달성합니다. 각자의 시작점이 다르기 때문에 얼마나 어떤 방법으로 공부해야 하는지는 특정 짓기 어렵습니다. 다만, 스터디 크루 분들이 만족해하시는 부분은 ‘정말 얻어 가는 게 있고’, ‘실질적으로 영어 점수가 오른다.’라는 것이었습니다."
          />
        </div>
      </section>
    </Aos>
  );
};

interface StudyExpecttationItemProps {
  title: string;
  subtitle: string;
  description: string;
}

const StudyExpectationItem = ({ title, subtitle, description }: StudyExpecttationItemProps) => {
  return (
    <div className="flex flex-col md:flex-row md:gap-16">
      <div className="h-[280px] min-w-[280px] rounded-2xl border bg-content" />
      <div className="flex flex-col">
        <p className="mt-4 text-xl font-semibold md:mt-12 md:text-3xl">{title}</p>
        <p className="mt-4 text-lg font-medium">{subtitle}</p>
        <p className="mt-4 font-medium text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};

const StudyInfoSection = () => {
  return (
    <section className="bg-zinc-900 py-32 text-white">
      <Aos className="container">
        <SectionTitle className="text-left">
          스터디 신청 및 <span className="text-primary">월별 커리큘럼 </span>확인
        </SectionTitle>
        <SectionSubtitle className="text-left text-gray-300">
          {
            "스터디 신청 방법 및 월별 커리큘럼은 홈페이지 우측 하단 채팅 창에서 확인 하실 수 있습니다."
          }
        </SectionSubtitle>
        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="rounded-2xl bg-zinc-800 p-8">
            <p className="text-2xl font-bold">스터디 모집 기간 및 비용</p>
            <ul className="ml-4 list-disc">
              <li className="mt-4 font-medium text-gray-300">모집 기간: 매월 20일 - 29일</li>
              <li className="mt-4 font-medium text-gray-300">월 190,000</li>
              <li className="mt-4 font-medium text-gray-300">
                스터디 비용과 스터디 벌금은 별도입니다.
              </li>
            </ul>
          </div>
          <div className="rounded-2xl bg-zinc-800 p-8">
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

const StudyFaqSection = () => {
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
