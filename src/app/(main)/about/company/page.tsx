import mobileImage from "@/assets/images/about/about-company-mobile.png";
import tabletImage from "@/assets/images/about/about-company-tablet.png";
import { AboutLogoSlider } from "@/components/about-logo-slider";
import { WhatWeDoSection } from "@/components/about/what-we-do-section";
import { Icon } from "@/components/icon";
import { Instagram } from "@/components/instagram";
import { SectionBadge } from "@/components/section-badge";
import { SectionSubtitle } from "@/components/section-subtitle";
import { SectionTitle } from "@/components/section-title";
import { AboutRecordSection } from "@/components/services/about-record-section";
import { Aos } from "@/components/ui/aos";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/configs/site";
import Image from "next/image";
import Link from "next/link";

export default function AboutCompanyPage() {
  return (
    <main>
      <IntroSection />
      <WhatWeDoSection />
      <LogoSliderSection />
      <AboutRecordSection />
      <OurPositioningSection />
      <SystemSection />
      <WhatsOurNextSection />
      <InstagramSection />
      <ReviewSection />
      <FreeConsultSection />
    </main>
  );
}

const IntroSection = () => {
  return (
    <section className="bg-zinc-900 bg-[url('/images/stars-bg.png')] py-32">
      <Aos className="container">
        <h1 className="text-2xl font-bold text-white md:text-5xl md:leading-tight">
          Create your Universe: Beyond Talent
        </h1>
        <p className="text-medium mt-8 leading-normal text-gray-300 md:text-2xl md:leading-normal">
          스스로를 규정하던 모든 프레임에서 벗어나,
          <br />
          무한한 가능성을 탐험하실 분들과 동행합니다
        </p>
      </Aos>
    </section>
  );
};

const LogoSliderSection = () => {
  return (
    <section className="mb-24 mt-36">
      <SectionTitle>역대 유니버스 크루</SectionTitle>
      <SectionSubtitle>전국의 음대생들이 유니버스 피아노와 함께 하고 있습니다.</SectionSubtitle>
      <div className="mt-12">
        <AboutLogoSlider />
      </div>
    </section>
  );
};

const OurPositioningSection = () => {
  return (
    <section className="my-32">
      <Aos className="container">
        <SectionTitle className="max-md:whitespace-pre">
          {"미국 음대 입시,\n어떻게 준비할 지 고민되시죠?"}
        </SectionTitle>
        <SectionSubtitle className="whitespace-pre-wrap md:leading-normal">
          {"비용만 따지기엔 중요한 문제고,\n유학원에 맡겨도 도움이 안된다 그러고!"}
        </SectionSubtitle>
        <div className="mt-12 flex flex-col gap-4 md:flex-row md:items-center md:justify-center">
          <OurPositioningItem
            title={"Individual\n개인 컨설팅"}
            items={["저렴한 비용", "체계성 부족", "개인 경험 의존", "영어 실력, 점수 미검증"]}
          />
          <div className="flex justify-between rounded-2xl border-2 border-primary p-8 font-medium shadow-xl md:h-[400px] md:max-w-[400px] md:flex-col md:justify-start">
            <p className="whitespace-pre text-xl font-bold text-primary">
              {"Universe Piano\n"}
              <span className="text-foreground">유니버스 피아노</span>
            </p>
            <div className="flex flex-col gap-2 text-end font-semibold md:mt-24 md:text-left">
              {[
                "고정 비용",
                "1:1 맞춤형 솔루션",
                "최근 5년간의 자료 보유",
                "영어 강사 경력 미국 음대 출신",
              ].map((item, index) => (
                <p key={index}>{item}</p>
              ))}
            </div>
          </div>
          <OurPositioningItem
            title={"Major Agency\n대형 유학원"}
            items={[
              "갯수 당 추가 비용",
              "일률적 솔루션",
              "다량의 정보 보유",
              "음악 비 전공자, 미국 조기 유학생",
            ]}
          />
        </div>
      </Aos>
    </section>
  );
};

interface OurPositioningItemProps {
  title: string;
  items: string[];
}

const OurPositioningItem = ({ title, items }: OurPositioningItemProps) => {
  return (
    <div className="flex justify-between rounded-2xl border p-8 md:h-[320px] md:max-w-[220px] md:flex-col md:justify-start">
      <p className="whitespace-pre text-xl font-semibold">{title}</p>
      <div className="flex flex-col gap-2 text-end text-muted-foreground md:mt-14 md:text-left">
        {items.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
    </div>
  );
};

const SystemSection = () => {
  return (
    <section className="my-48">
      <Aos className="container">
        <SectionTitle>독보적인 시스템</SectionTitle>
        <SectionSubtitle>오직 유니버스 피아노에서만 가능합니다.</SectionSubtitle>
        <div className="mt-12 flex flex-col gap-16 md:flex-row">
          <SystemItem
            number={1}
            title="크루 커뮤니티"
            description={
              "유니버스 피아노 크루들과 함께 오디션 동행은 물론,\n미국 전역에 있는 선배 크루들이 기꺼이 도움을 줄 거에요."
            }
          />
          <SystemItem
            number={2}
            title="음대생 영어 스터디"
            description={"영어 공부도 함께 합니다!\n영어 왕초보 음대생들만 모여있습니다."}
          />
          <SystemItem
            number={3}
            title="1:1 맞춤형 솔루션"
            description={
              "우선순위와 성향에 맞는 학교와 교수님 추천 부터,\n상황에 맞는 1:1 솔루션을 제공합니다."
            }
          />
        </div>
      </Aos>
    </section>
  );
};

interface SystemItemProps {
  number: number;
  title: string;
  description: string;
}

const SystemItem = ({ number, title, description }: SystemItemProps) => {
  return (
    <div className="flex flex-1 flex-col text-center md:text-left">
      <p className="text-lg font-bold text-primary">0{number}</p>
      <p className="text-xl font-semibold md:text-2xl">{title}</p>
      <p className="mt-2 whitespace-pre-wrap text-muted-foreground md:whitespace-normal">
        {description}
      </p>
    </div>
  );
};

const WhatsOurNextSection = () => {
  return (
    <section className="relative bg-content py-24">
      <Aos className="container">
        <div className="flex justify-center">
          <SectionBadge>{"What's our NEXT?"}</SectionBadge>
        </div>
        <SectionTitle className="mt-4">2024년, 두 개의 국내 최초 서비스가 시작됩니다</SectionTitle>
        <SectionSubtitle className="md:whitespace-pre-wrap md:leading-normal">
          {
            "유니버스 피아노는 미국 음대 유학에 필요한 서비스들을 국내 최초로 제공하며,\n미국 음대 입시생 및 재학생들을 위한 커뮤니티를 구축하고 있습니다."
          }
        </SectionSubtitle>
        <div className="flex justify-center">
          <div className="relative mt-24 flex flex-col gap-4">
            <div className="absolute h-full w-[1px] translate-x-[5.5px] translate-y-[10px] bg-gradient-to-b from-black from-90% to-content" />
            <WhatsOurNextItem
              year="2023"
              items={[
                "국내 최초 미국 음대 입시 과외 런칭",
                "국내 최초 미국 음대 오디션 룸메이트 매칭 서비스 런칭",
                "국내 최초 미국 음대 커뮤니티 형성",
              ]}
            />
            <WhatsOurNextItem
              year="2022"
              items={[
                "국내 최초 음대생을 위한 영어 스터디 런칭",
                "국내 최초 음대 결과 발표 공유 서비스 런칭",
              ]}
            />
            <WhatsOurNextItem year="2019" items={["국내 최초 부분 컨설팅 서비스 제작"]} />
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
      <section className="container my-40">
        <div className="flex flex-col justify-between gap-16 md:flex-row">
          <div className="flex flex-col">
            <SectionTitle className="mt-0 whitespace-pre-wrap text-center md:text-left md:leading-normal">
              {"유학 준비도 트렌디 하게,\nMZ 대표의 소통 방식"}
            </SectionTitle>
            <p className="mt-4 whitespace-pre-wrap text-center font-medium text-muted-foreground md:text-left">
              {
                "유니버스 피아노는 인스타그램을 주요 기반으로 성장해왔습니다.\n대표와 크루들의 최신 소식은 인스타그램 계정에서 확인 하실 수 있습니다."
              }
            </p>
            <div className="flex justify-center md:justify-start">
              <Link href={siteConfig.links.instagram}>
                <Instagram className="mt-2 h-16 w-16 -translate-x-2 cursor-pointer transition hover:scale-110" />
              </Link>
            </div>
          </div>
          <div className="flex items-end justify-center gap-4 md:justify-start">
            <div>
              <Image priority className="min-w-[80px]" width={80} src={mobileImage} alt="" />
            </div>
            <div>
              <Image priority className="min-w-[300px]" width={300} src={tabletImage} alt="" />
            </div>
          </div>
        </div>
      </section>
    </Aos>
  );
};

const ReviewSection = () => {
  return (
    <section className="bg-content py-32">
      <Aos>
        <div className="container">
          <SectionTitle className="mt-0">유니버스 피아노 크루들의 솔직한 리뷰</SectionTitle>
          <SectionSubtitle>유니버스 피아노 크루들의 솔직한 리뷰를 확인해보세요.</SectionSubtitle>
        </div>
        <div className="container mt-8 flex gap-6 overflow-auto py-4 scrollbar-hide">
          <ReviewItem />
          <ReviewItem />
          <ReviewItem />
        </div>
        <div className="container mt-4 flex flex-col items-center justify-center gap-4">
          <p className="font-medium text-muted-foreground">
            더 많은 후기는 유니버스 피아노 인스타그램 계정에서 확인 가능합니다.
          </p>
          <Link href={siteConfig.links.instagram}>
            <Instagram className="h-16 w-16 cursor-pointer transition hover:scale-110" />
          </Link>
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

const FreeConsultSection = () => {
  return (
    <section className="bg-zinc-900 py-32">
      <Aos className="container">
        <SectionTitle className="mt-0 whitespace-pre text-left text-white md:leading-normal">
          {"미국 음대 입시 관련\n1회 무료 zoom 상담을 제공합니다"}
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
