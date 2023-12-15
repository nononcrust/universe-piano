import { Instagram } from "@/components/instagram";
import { LogoSlider } from "@/components/logo-slider";
import { SectionBadge } from "@/components/section-badge";
import { SectionSubtitle } from "@/components/section-subtitle";
import { SectionTitle } from "@/components/section-title";
import { Aos } from "@/components/ui/aos";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import mobile from "../../../../../public/images/about/about-company-mobile.png";
import tablet from "../../../../../public/images/about/about-company-tablet.png";

export default function AboutCompanyPage() {
  return (
    <main>
      <IntroSection />
      <WhatWeDoSection />
      <LogoSliderSection />
      <WhatsOurNextSection />
      <InstagramSection />
      <FreeConsultSection />
    </main>
  );
}

const IntroSection = () => {
  return (
    <section className="bg-zinc-900 py-32 pb-48">
      <Aos className="container">
        <h1 className="text-3xl font-bold text-white md:text-5xl md:leading-tight">
          Create your Universe: Beyond Talent
        </h1>
        <p className="text-medium mt-8 text-lg leading-normal text-gray-300 md:text-2xl md:leading-normal">
          스스로를 규정하던 모든 프레임에서 벗어나,
          <br />
          무한한 가능성을 탐험하실 분들과 동행합니다.
        </p>
      </Aos>
    </section>
  );
};

const WhatWeDoSection = () => {
  return (
    <section className="bg-content py-16">
      <Aos className="container">
        <p className="text-lg font-semibold text-primary">Universe Piano</p>
        <SectionTitle className="mt-2 whitespace-pre-wrap text-left md:leading-normal">
          {
            "미국 음대 입시의 핵심 요소를 기반으로\n미국 음대 유학의 새로운 패러다임을 만들어 갑니다."
          }
        </SectionTitle>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-4">
          <WhatWeDoItem
            title="미국 음대 입시 컨설팅"
            description="미국 음대 석사 과정 입시생을 위한 1:1 맞춤형 컨설팅을 제공합니다."
          />
          <WhatWeDoItem
            title="미국 음대 입시 과외"
            description="컨설팅 압축 버전! 맞춤형 정보, 장학금 전략, 그리고 학교 선정까지 단기간에 완성합니다."
          />
          <WhatWeDoItem
            title="영어 스터디"
            description="음대생을 위한 영어 스터디, 수준에 맞는 공부 방법으로 목표 점수 달성을 도와드립니다."
          />
          <WhatWeDoItem
            title="독학 키트"
            description="미국 음대 유학을 혼자 준비하시는 분들께 필요한 서비스를 제공합니다."
          />
        </div>
      </Aos>
    </section>
  );
};

interface WhatWeDoItemProps {
  title: string;
  description: string;
}

const WhatWeDoItem = ({ title, description }: WhatWeDoItemProps) => {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-lg md:min-h-[320px]">
      <div className="bg-content h-16 w-16 rounded-2xl" />
      <p className="mt-8 font-semibold md:mt-16">{title}</p>
      <p className="mt-2 font-medium text-muted-foreground">{description}</p>
    </div>
  );
};

const LogoSliderSection = () => {
  return (
    <section>
      <SectionTitle>역대 유니버스 크루</SectionTitle>
      <SectionSubtitle>전국의 음대생들이 유니버스 피아노와 함께 하고 있습니다</SectionSubtitle>
      <div className="mt-12">
        <LogoSlider />
      </div>
    </section>
  );
};

const WhatsOurNextSection = () => {
  return (
    <section className="bg-content relative py-16">
      <Aos className="container">
        <div className="flex justify-center">
          <SectionBadge>{"What's our NEXT?"}</SectionBadge>
        </div>
        <SectionTitle className="mt-4">2024년, 두 개의 국내 최초 서비스가 시작됩니다.</SectionTitle>
        <div className="flex justify-center">
          <div className="relative mt-24 flex flex-col gap-4">
            <div className="to-content absolute h-full w-[1px] translate-x-[5.5px] translate-y-[10px] bg-gradient-to-b from-black from-90%" />
            <WhatsOurNextItem
              year="2023"
              items={[
                "국내 최초 미국 음대 입시 과외 런칭",
                "국내 최초 미국 음대 오디션 룸메이트 매칭 서비스",
                "국내 최초 미국 음대 커뮤니티 형성",
              ]}
            />
            <WhatsOurNextItem
              year="2022"
              items={[
                "국내 최초 음대생을 위한 영어 스터디 런칭",
                "국내 최초 음대 결과 발표 공유 서비스",
              ]}
            />
            <WhatsOurNextItem year="2020" items={["국내 최초 부분 컨설팅 서비스 제작"]} />
          </div>
        </div>
      </Aos>
    </section>
  );
};

interface WhatsOurNextItemProps {
  year: string;
  items: string[];
}

const WhatsOurNextItem = ({ year, items }: WhatsOurNextItemProps) => {
  return (
    <div className="flex">
      <div className="mr-8 mt-1.5 h-3 w-3 rounded-full bg-black" />
      <p className="mr-4 text-lg font-semibold text-muted-foreground">{year}</p>
      <div className="flex flex-col gap-4">
        {items.map((item, index) => (
          <p className="text-lg font-medium" key={index}>
            {item}
          </p>
        ))}
      </div>
    </div>
  );
};

const InstagramSection = () => {
  return (
    <Aos>
      <section className="container my-32">
        <div className="flex flex-col justify-between gap-16 md:flex-row">
          <div className="flex flex-col">
            <SectionTitle className="mt-0 whitespace-pre-wrap text-center md:text-left">
              {"유학 준비도 트렌디 하게,\nMZ 대표의 소통 방식"}
            </SectionTitle>
            <p className="mt-4 whitespace-pre-wrap text-center font-medium text-muted-foreground md:text-left">
              {
                "유니버스 피아노는 인스타그램을 주요 기반으로 성장해왔습니다.\n대표와 크루들의 최신 소식은 인스타그램 계정에서 확인 하실 수 있습니다."
              }
            </p>
            <div className="flex justify-center md:justify-start">
              <Instagram className="mt-2 h-16 w-16 -translate-x-2 cursor-pointer transition hover:scale-110" />
            </div>
          </div>
          <div className="flex items-end justify-center gap-4 md:justify-start">
            <div>
              <Image className="min-w-[80px]" width={80} src={mobile} alt="" />
            </div>
            <div>
              <Image className="min-w-[300px]" width={300} src={tablet} alt="" />
            </div>
          </div>
        </div>
      </section>
    </Aos>
  );
};

const FreeConsultSection = () => {
  return (
    <section className="bg-zinc-900 py-32">
      <Aos className="container">
        <SectionTitle className="mt-0 whitespace-pre text-left text-white md:leading-normal">
          {"미국 음대 입시 관련\n1회 무료 zoom 상담을 제공합니다."}
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
