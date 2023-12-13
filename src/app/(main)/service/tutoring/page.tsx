import { SectionSubtitle } from "@/components/section-subtitle";
import { SectionTitle } from "@/components/section-title";
import { Aos } from "@/components/ui/aos";
import Image from "next/image";

export default function TutoringPage() {
  return (
    <main className="flex flex-col">
      <HeroSection />
      <UniversePianoSection />
      <ScholarshipSection />
      <RecommendSection />
      <TutoringCompositionSection />
    </main>
  );
}

const HeroSection = () => {
  return (
    <section className="bg-gray-50">
      <Aos>
        <div className="container mt-16 flex flex-col items-center gap-8 py-16">
          <div className="flex flex-1 flex-col items-center gap-4">
            <div className="rounded-xl bg-black px-3 py-1 text-sm font-semibold text-white">
              입시 과외
            </div>
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

const ScholarshipSection = () => {
  return (
    <section className="mt-12 bg-gray-100 py-16">
      <Aos className="container">
        <SectionTitle title="'좋은 학교에, 장학금 많이'" />
        <SectionSubtitle
          className="whitespace-pre-wrap"
          title={
            "입시를 준비하시는 분들 누구나 좋은 학교에 장학금을 많이 받고 입학하길 원합니다.\n정확한 목표와 방향 설정이 있다면 누구나 도전 할 수 있습니다."
          }
        />
        <div className="mt-12 flex justify-center gap-2 md:gap-8">
          <ScholarshipItem title="5연속 합격률" description="100%" />
          <ScholarshipItem title="장학금 수여" description="65% 이상" />
        </div>
      </Aos>
      <Aos className="container mt-12">
        <SectionSubtitle
          className="whitespace-pre-wrap text-center text-foreground md:leading-normal"
          title={
            "최근 5년간 미국 음대 입시 상담을 100건 넘게 진행해왔습니다.\n상담에 오시는 분들은 각기 다른 상황을 갖고 유니버스 피아노를 방문 해주십니다.\n똑같은 사연을 가진 분들은 단 한 건도 없었습니다.\n100개의 각기 다른 사연을 하나의 정형화된 틀에 억지로 맞출 수는 없습니다."
          }
        />
        <p className="mt-12 text-center text-2xl font-bold">
          반드시 각자에게 적합한 가이드라인이 필요합니다.
        </p>
      </Aos>
    </section>
  );
};

interface ScholarshipItemProps {
  title: string;
  description: string;
}

const ScholarshipItem = ({ title, description }: ScholarshipItemProps) => {
  return (
    <div className="flex w-full max-w-[240px] flex-col items-center rounded-2xl bg-white p-8">
      <div className="h-24 w-24 rounded-full bg-gray-100" />
      <p className="mt-4 font-semibold text-muted-foreground">{title}</p>
      <p className="mt-2 text-3xl font-bold text-primary">{description}</p>
    </div>
  );
};

const RecommendSection = () => {
  return (
    <Aos className="my-16">
      <section className="container">
        <SectionTitle title="국내 최초, 미국 음대 입시 과외" />
        <SectionSubtitle title="이런 분들께 추천드립니다." />
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
    <Aos className="flex w-full max-w-[600px] gap-4 rounded-xl bg-gray-100 p-4">
      <div>
        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-black font-bold text-white">
          {number}
        </div>
      </div>
      <p className="flex-1 font-semibold">{title}</p>
    </Aos>
  );
};

const TutoringCompositionSection = () => {
  return (
    <Aos className="my-16">
      <section className="container">
        <SectionTitle title="과외 구성 요소" />
        <SectionSubtitle title="과외를 통해 나만의 입시 준비 전략을 완성합니다." />
      </section>
    </Aos>
  );
};
