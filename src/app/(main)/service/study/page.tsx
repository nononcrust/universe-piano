import { Icon } from "@/components/icon";
import { SectionTitle } from "@/components/section-title";
import { Aos } from "@/components/ui/aos";
import { ScrollShadow } from "@/components/ui/scroll-shadow";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function StudyPage() {
  return (
    <main className="flex flex-col">
      <section className="bg-gray-50">
        <Aos>
          <div className="container mt-16 flex flex-col items-center gap-8 py-16">
            <div className="flex flex-1 flex-col items-center gap-4">
              <div className="rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 px-3 py-1 text-sm font-semibold text-white">
                영어 스터디
              </div>
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
      <section className="container flex justify-center">
        <button className="hover: mt-16 rounded-full bg-black px-10 py-4 text-lg font-bold text-white drop-shadow-lg">
          스터디 신청 및 커리큘럼 확인
        </button>
      </section>
      <CheckPointSection />
      <StudyCompositionSection />
      <WhyUniverseSection />
      <StudyInfoSection />
    </main>
  );
}

const ReviewItem = () => {
  return (
    <div className="h-[240px] rounded-2xl bg-white p-6 max-md:min-w-[320px]">
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
    <div className="flex max-w-[600px] gap-4 rounded-xl bg-gray-100 p-4">
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
      <div className="flex h-[200px] w-full items-center justify-center rounded-2xl bg-[#B8C0F6] md:h-[160px]">
        <Image className="rounded-2xl" width={180} height={120} alt="" src={imageSrc} />
      </div>
      <p className="mt-2 text-lg font-semibold">{title}</p>
      <p className="mt-1 font-medium text-muted-foreground">{description}</p>
    </div>
  );
};

const StudyInfoSection = () => {
  return (
    <Aos className="my-16">
      <section className="container">
        <SectionTitle title="스터디 정보" />
      </section>
    </Aos>
  );
};

const WhyUniverseSection = () => {
  return (
    <Aos className="my-16">
      <section className="container">
        <SectionTitle title="음대생 영어공부, 결국 왜 유니버스 피아노일까요?" />
        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2">
          <BentoItem
            number={1}
            span
            title={"영어 왕초보였던 음대생이\n직접 스터디 멘토로 참여합니다."}
          />
          <BentoItem
            number={2}
            title={"각자에게 최적화된 공부시간과 패턴을\n정확히 인지하게 됩니다."}
          />
          <BentoItem number={3} title={"할 수 밖에 없는\n환경을 제공합니다."} />
          <BentoItem number={4} title={"미국 음대 입시생들의\n작은 커뮤니티가 형성됩니다."} />
        </div>
      </section>
    </Aos>
  );
};

interface BentoItemProps {
  number: number;
  span?: boolean;
  title: string;
}

const BentoItem = ({ span, number, title }: BentoItemProps) => {
  return (
    <div
      className={cn(
        "flex h-[240px] flex-1 flex-col justify-end rounded-xl bg-gray-900 p-6 font-bold text-white",
        span && "col-span-2",
      )}
    >
      <p className="text-xl underline underline-offset-4">0{number}</p>
      <p className="mt-2">{title}</p>
    </div>
  );
};
