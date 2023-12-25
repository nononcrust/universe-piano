import instagramIcon from "@/assets/icons/instagram.png";
import naverBlogIcon from "@/assets/icons/naver-blog.png";
import mobileImage from "@/assets/images/about/about-company-mobile.png";
import { AboutLogoSlider } from "@/components/about-logo-slider";
import { FreeConsultSection } from "@/components/about/free-consult-section";
import { OurPositioningSection } from "@/components/about/our-positioning-section";
import { WhatWeDoSection } from "@/components/about/what-we-do-section";
import { Icon } from "@/components/icon";
import { Instagram } from "@/components/instagram";
import { SectionBadge } from "@/components/section-badge";
import { SectionSubtitle } from "@/components/section-subtitle";
import { SectionTitle } from "@/components/section-title";
import { AboutRecordSection } from "@/components/services/about-record-section";
import { Aos } from "@/components/ui/aos";
import { siteConfig } from "@/configs/site";
import Image from "next/image";
import Link from "next/link";

export default function AboutCompanyPage() {
  return (
    <main>
      {/* <IntroSection /> */}
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

const SystemSection = () => {
  return (
    <section className="py-48" id="company-system-section">
      <Aos className="container">
        <SectionTitle className="text-primary">독보적인 시스템</SectionTitle>
        <SectionSubtitle>오직 유니버스 피아노에서만 가능합니다.</SectionSubtitle>
        <div className="mt-12 flex flex-col gap-4 md:flex-row">
          <SystemItem
            number={1}
            title="크루 네트워크"
            description={
              "유니버스 피아노 크루들과 함께 오디션 동행은 물론,\n미국 전역에 있는 선배 크루들이 기꺼이 도움을 줄 거에요."
            }
          />
          <SystemItem
            number={2}
            title="음대생 영어 스터디"
            description={
              "영어 공부도 함께 합니다!\n각자의 수준에 맞는 학습 플랜과 함께 목표 점수 달성을 도와드립니다. "
            }
          />
          <SystemItem
            number={3}
            title="실시간 공유 시스템"
            description={"모든 진행 과정을 실시간으로 확인 할 수 있는 시스템을 갖추고 있습니다."}
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
    <div className="flex flex-1 flex-col rounded-xl bg-content-light p-8 text-center md:text-left">
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
            <div className="absolute h-full w-[1px] translate-x-[5px] translate-y-[10px] bg-gradient-to-b from-black from-90% to-content" />
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
      <div className="flex flex-1 flex-col gap-4">
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
    <Aos className="my-32">
      <section className="container flex flex-col items-center gap-8 overflow-hidden md:flex-row md:gap-32">
        <div className="flex flex-col justify-between gap-16 md:flex-row">
          <div className="flex items-center justify-center">
            <div className="flex flex-col">
              <SectionTitle className="mt-16 whitespace-pre-wrap text-center md:mt-0 md:text-left md:leading-normal">
                {"유학 준비도 트렌디 하게,\nMZ 대표의 소통 방식"}
              </SectionTitle>
              <p className="mt-4 whitespace-pre-wrap text-center font-medium text-muted-foreground md:text-left">
                {
                  "유니버스 피아노는 인스타그램을 주요 기반으로 성장해왔습니다.\n대표와 크루들의 최신 소식은 인스타그램 계정에서 확인 하실 수 있습니다."
                }
              </p>
              <div className="flex flex-1 justify-center md:justify-start">
                <Link className="mt-2" href={siteConfig.links.instagram}>
                  <Instagram className="h-16 w-16 cursor-pointer transition hover:scale-110 md:-translate-x-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="flex h-[400px] w-full flex-1 items-end justify-center gap-4 overflow-hidden rounded-[40px] bg-content">
          <Image
            priority
            className="min-w-[200px] translate-y-16 md:min-w-[240px] md:translate-y-32"
            width={200}
            src={mobileImage}
            alt=""
          />
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
          <ReviewItem
            name="LSA5931"
            label="영어 스터디"
            content="저는 너무 크게 도움 받았고 제가 꼭 장학금 컨설팅 뿐만 아니라 질문이 많았는데도 친절히 답해주셔서 너무 감사하고 든든했어요! 도움이 필요하신 분은 꼭 연락 해보시길 바랍니다."
          />
          <ReviewItem
            name="GHJ5699"
            label="전체 컨설팅"
            content="대표님 덕분에 다시 한번 굳건히 마음잡고 갈 수 있는 힘을 얻었어요! 결과는 나와봐야 알 수 있는 부분인데 너무 겁먹었던 것 같아요. 상담 때도 느꼈지만, 수속 과정들이 진행될수록 좋은 분이 함께해 주셔서 참 다행이고 또 감사해요. 대표님과 인연이 된 건 정말 큰 행운이에요:)"
          />
          <ReviewItem
            name="LSY7747"
            label="학교 선정 | 서류 대행 | 영어 스터디"
            content="정말 긴 여정이었습니다… 제가 혼자 하려고 했다면 정말 해내지 못했을 거에요. 중간에 정말 포기 하고 싶었는데, 할 수 있다고 응원해주시고 진심으로 조언과 걱정을 해주시는 게 느껴져서 힘을 낼 수 있었어요. 대표님의 따뜻한 마음과 열정이 느껴져서 믿고 할 수 있었던 것 같아요. 정말 감사드려요."
          />
        </div>
        <div className="container mt-4 flex flex-col items-center justify-center">
          <p className="font-medium text-muted-foreground">
            더 많은 후기는 유니버스 피아노 네이버 블로그와 인스타그램 계정에서 확인 가능합니다.
          </p>
          <div className="mt-4 flex gap-4">
            <Link href={siteConfig.links.blog}>
              <Image
                src={naverBlogIcon}
                className="h-12 w-12 cursor-pointer rounded-[10px] transition md:hover:scale-110"
                alt="네이버 블로그"
              />
            </Link>
            <Link href={siteConfig.links.instagram}>
              <Image
                src={instagramIcon}
                className="h-12 w-12 cursor-pointer rounded-[10px] transition md:hover:scale-110"
                alt="인스타그램"
              />
            </Link>
          </div>
        </div>
      </Aos>
    </section>
  );
};

interface ReviewItemProps {
  name: string;
  label: string;
  content: string;
}

const ReviewItem = ({ name, label, content }: ReviewItemProps) => {
  return (
    <div className="h-[280px] flex-1 rounded-2xl bg-white p-6 max-md:min-w-[320px]">
      <p className="text-xl font-semibold">
        {name}
        <span className="ml-2 mt-2 text-sm font-normal text-muted-foreground">{label}</span>
      </p>
      <div className="mt-1 flex gap-[2px]">
        <Icon.Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
        <Icon.Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
        <Icon.Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
        <Icon.Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
        <Icon.Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
      </div>
      <p className="mt-6 text-muted-foreground">{content}</p>
    </div>
  );
};
