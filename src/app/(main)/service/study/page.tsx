import { FaqSection, FaqSectionItem } from "@/components/faq-section";
import { Icon } from "@/components/icon";
import { Instagram } from "@/components/instagram";
import { SectionBadge } from "@/components/section-badge";
import { SectionSubtitle } from "@/components/section-subtitle";
import { SectionTitle } from "@/components/section-title";
import { ServiceFloatingButton } from "@/components/service-floating-button";
import { Aos } from "@/components/ui/aos";
import { ScrollShadow } from "@/components/ui/scroll-shadow";
import Image from "next/image";

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
    <section className="bg-slate-50">
      <Aos>
        <div className="container mt-16 flex flex-col items-center gap-8 py-16">
          <div className="flex flex-1 flex-col items-center gap-4">
            <SectionBadge>영어 스터디</SectionBadge>
            <h1 className="text-center text-3xl font-bold leading-tight md:text-5xl">
              음대생을 위한 영어 스터디
            </h1>
          </div>
          {/* <div className="aspect-square w-full rounded-xl bg-gray-200 md:max-w-[260px]" /> */}
          <div className="flex justify-center">
            <div className="h-[300px]" />
            {/* <Image src="/images/3d-star.png" width={300} height={300} alt="별" /> */}
          </div>
        </div>
      </Aos>
    </section>
  );
};

const ReviewItem = () => {
  return (
    <div className="h-[240px] rounded-2xl bg-white p-6 shadow-lg max-md:min-w-[320px]">
      <p className="text-xl font-semibold">
        신상호
        <span className="ml-2 mt-2 text-sm font-normal text-muted-foreground">
          유니버스 피아노 14기
        </span>
      </p>
      <div className="mt-1 flex gap-[2px]">
        <Icon.Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
        <Icon.Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
        <Icon.Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
        <Icon.Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
        <Icon.Star className="h-4 w-4 fill-gray-100 text-gray-100" />
      </div>
      <p className="mt-6 text-muted-foreground">
        토플 초보도 접근하기 정말 쉬운 교육과정과 플랫폼을 가지고 있어요. 하지만 교육이 끝났을 때는
        쉬운 스타트와 확실한 엔딩, 저는 유니버스 피아노를 그렇게 정의할게요.
      </p>
    </div>
  );
};

const CheckPointSection = () => {
  return (
    <Aos className="my-16">
      <section className="container">
        <SectionTitle title="Check Point" />

        <h2 className="mt-4 whitespace-pre-wrap text-center font-semibold text-muted-foreground md:text-lg">
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
    <div className="flex max-w-[600px] gap-4 rounded-xl border bg-slate-100 p-4">
      <div>
        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-black font-bold text-white">
          {number}
        </div>
      </div>
      <p className="flex-1 font-semibold">{title}</p>
    </div>
  );
};

const StudyCompositionSection = () => {
  return (
    <Aos className="my-16">
      <section className="container">
        <SectionTitle title="스터디 구성 요소" />
        <ScrollShadow>
          <div className="mt-12 flex flex-col gap-6 md:flex-row">
            <StudyCompositionItem
              title="zoom 수업 및 자습"
              description="영어 기초 수업, Reading 모의고사, 시중 교재 해석본 Speaking 발음 교정, Writing 첨삭, 브레인 스토밍 등 월별로 필요한 zoom 수업과 자료를 제공합니다."
              imageSrc="/images/study/study-composition-1.jpg"
            />
            <StudyCompositionItem
              title="단톡방 공부 및 미션 인증"
              description="가장 빠르게 성장하는 방법은 경쟁력 있는 동료들과 함께 하는 것입니다. 동료들의 단톡방 인증을 함께 지켜보면서 매일 동기부여를 얻을 수 있습니다."
              imageSrc="/images/study/study-composition-2.jpg"
            />
            <StudyCompositionItem
              title="단어 시험"
              description="결코 만만하지  않은 스터디! 단어 공부량을 두배로 늘려줄 단어 시험 시스템과 함께 합니다."
              imageSrc="/images/study/study-composition-3.jpg"
            />
          </div>
        </ScrollShadow>
      </section>
    </Aos>
  );
};

interface StudyCompositionItemProps {
  imageSrc: string;
  title: string;
  description: string;
}

const StudyCompositionItem = ({ imageSrc, title, description }: StudyCompositionItemProps) => {
  return (
    <div className="flex flex-1 flex-col rounded-2xl">
      <div className="flex h-[200px] w-full items-center justify-center rounded-2xl border bg-[#B8C0F6] shadow-md md:h-[160px]">
        <Image className="rounded-2xl" width={180} height={120} alt="" src={imageSrc} />
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
    <Aos className="my-16">
      <section className="container">
        <SectionTitle title="음대생 영어공부, 결국 왜 유니버스 피아노일까요?" />
        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2">
          <WhyUniverseItem
            number={1}
            title={"영어 왕초보였던 음대생이\n직접 스터디 멘토로 참여합니다."}
          />
          <WhyUniverseItem
            number={2}
            title={"각자에게 최적화된 공부시간과 패턴을\n정확히 인지하게 됩니다."}
          />
          <WhyUniverseItem number={3} title={"할 수 밖에 없는\n환경을 제공합니다."} />
          <WhyUniverseItem number={4} title={"미국 음대 입시생들의\n작은 커뮤니티가 형성됩니다."} />
        </div>
      </section>
    </Aos>
  );
};

interface WhyUniverseItem {
  number: number;
  title: string;
}

const WhyUniverseItem = ({ number, title }: WhyUniverseItem) => {
  return (
    <div className="flex h-[320px] flex-1 flex-col justify-end rounded-2xl border bg-slate-100 p-6 font-bold">
      <p className="text-xl underline underline-offset-4">0{number}</p>
      <p className="mt-2 whitespace-pre text-xl">{title}</p>
    </div>
  );
};

const StudyExpectationSection = () => {
  return (
    <Aos className="my-16">
      <section className="container">
        <SectionTitle title="스터디 기대 효과" />
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
      <div className="h-[280px] min-w-[280px] rounded-2xl border bg-slate-100" />
      <div className="flex flex-col">
        <p className="mt-8 text-2xl font-semibold md:mt-12 md:text-3xl">{title}</p>
        <p className="mt-4 text-lg font-semibold">{subtitle}</p>
        <p className="mt-4 font-medium text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};

const StudyMissionSection = () => {
  return (
    <Aos className="my-16">
      <section className="container">
        <SectionTitle className="text-left" title="변화의 시작은," />
        <SectionTitle className="mt-2 text-left" title="스터디 미션 수행으로부터" />
        <SectionSubtitle
          className="text-left"
          title="모든 변화의 필수 전제 조건은 이전과는 다른 행동을 하는 자기 자신입니다."
        />
        <SectionSubtitle
          className="mt-1 text-left"
          title="스터디 크루분들은 스터디의 다양한 미션 수행을 통해, 영어 점수 향상은 물론, 생각과 생활
          습관에도 긍정적인 변화를 경험하고 있습니다."
        />
        <div className="mt-12 flex gap-4 overflow-auto scrollbar-hide">
          <StudyMissionItem />
          <StudyMissionItem />
          <StudyMissionItem />
          <StudyMissionItem />
          <StudyMissionItem />
        </div>
      </section>
    </Aos>
  );
};

const StudyMissionItem = () => {
  return <div className="h-[400px] min-w-[240px] rounded-2xl border bg-slate-100" />;
};

const StudyReviewSection = () => {
  return (
    <section className="mt-16 bg-slate-100">
      <Aos className="container pb-24">
        <SectionTitle title="스터디 리뷰" />
        <SectionSubtitle title="스터디 크루분들의 솔직한 리뷰를 확인해보세요." />
        <div className="mt-12 flex flex-col gap-6 md:flex-row">
          <ReviewItem />
          <ReviewItem />
          <ReviewItem />
        </div>
        <div className="mt-8 flex flex-col items-center justify-center gap-4">
          <p className="font-medium text-muted-foreground">
            더 많은 스터디 후기는 유니버스 피아노 인스타그램 계정에서 확인 가능합니다.
          </p>
          <Instagram className="h-16 w-16 cursor-pointer transition hover:scale-110" />
        </div>
      </Aos>
    </section>
  );
};

const StudyInfoSection = () => {
  return (
    <section className="bg-zinc-900 pb-24 text-white">
      <Aos className="container">
        <SectionTitle className="text-left" title="스터디 신청 및 월별 커리큘럼 확인" />
        <SectionSubtitle
          className="text-left text-gray-300"
          title="스터디 신청 방법 및  월별 커리큘럼은 홈페이지 우측 하단 채팅 창에서 확인 하실 수 있습니다."
        />
        <div className="mt-20 flex flex-col gap-8 md:flex-row">
          <div className="rounded-2xl border border-zinc-600 bg-zinc-700 p-8">
            <p className="text-2xl font-bold">스터디 모집 기간 및 비용</p>
            <ul className="ml-4 list-disc">
              <li className="mt-4 font-medium text-gray-300">모집 기간: 매월 20일 - 29일</li>
              <li className="mt-4 font-medium text-gray-300">월 190,000</li>
              <li className="mt-4 font-medium text-gray-300">
                스터디 비용과 스터디 벌금은 별도입니다.
              </li>
            </ul>
          </div>
          <div className="rounded-2xl border border-zinc-600 bg-zinc-700 p-8">
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
      <FaqSectionItem
        title="스터디는 어떻게 신청하나요?"
        description="인스타그램 혹은 카카오톡으로 문의해주세요."
        value="item-1"
      />
      <FaqSectionItem
        title="스터디를 신청하고 중간에 환불할 수 있나요?"
        description="네, 환불 금액은 신청 날짜에 따라 계산됩니다."
        value="item-2"
      />
      <FaqSectionItem
        title="스터디는 어떻게 신청하나요?"
        description="인스타그램 혹은 카카오톡으로 문의해주세요."
        value="item-3"
      />
      <FaqSectionItem
        title="스터디를 신청하고 중간에 환불할 수 있나요?"
        description="네, 환불 금액은 신청 날짜에 따라 계산됩니다."
        value="item-4"
      />
    </FaqSection>
  );
};
