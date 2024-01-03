"use client";

import { Icon } from "@/components/common/icon";
import { LandingSectionSubtitle } from "@/components/main/landing-section-subtitle";
import { LandingSectionTitle } from "@/components/main/landing-section-title";
import { cn } from "@/lib/utils";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const data = [
  {
    name: "LHN",
    label: "서류 대행",
    content:
      "이런 곳이 있었다면 진작 연락을 드려볼  생각이 들어요! 이제 마무리 단계지만 혹여나 제가 1년을 더 해야 하는 상황이 생긴다면 어려울 때 도움을 받을 수 있는 곳이 있다는 생각에 마음이 놓이네요! 힘든 일뿐 아니라 합격과 장학금 선정까지 된다면 기쁜 마음으로 연락드릴게요:) 장학금 뿐 아니라 영어 공부까지 도움 주시고 선뜻 다른 도움이 필요하면 말해달라는 말씀 너무 감사합니다!",
  },
  {
    name: "LSA5931",
    label: "장학금 증액",
    content:
      "저는 너무 크게 도움 받았고 제가 꼭 장학금 컨설팅 뿐만 아니라 질문이 많았는데도 친절히 답해주셔서 너무 감사하고 든든했어요! 도움이 필요하신 분은 꼭 연락 해보시길 바랍니다.",
  },
  {
    name: "GHJ5699",
    label: "전체 컨설팅",
    content:
      "대표님 덕분에 다시 한번 굳건히 마음잡고 갈 수 있는 힘을 얻었어요! 결과는 나와봐야 알 수 있는 부분인데 너무 겁먹었던 것 같아요. 상담 때도 느꼈지만, 수속 과정들이 진행될수록 좋은 분이 함께해 주셔서 참 다행이고 또 감사해요. 대표님과 인연이 된 건 정말 큰 행운이에요:)",
  },
  {
    name: "JSJ5124",
    label: "포트폴리오 컨설팅",
    content:
      "입시철에 젤 막막할 때 넘 감사했어요 ㅎㅎ 덕분에 일사천리로 딱딱 되었던 것 같아요 ㅎㅎ",
  },
  {
    name: "KHS5576",
    label: "영어 스터디",
    content: "유니버스 피아노 알게 된 건 정말 행운이에요오오",
  },
  {
    name: "LSY7747",
    label: "학교 선정 | 서류 대행 | 영어 스터디",
    content:
      "정말 긴 여정이었습니다… 제가 혼자 하려고 했다면 정말 해내지 못했을 거에요. 중간에 정말 포기 하고  싶었는데, 할 수 있다고 응원해주시고 진심으로 조언과 걱정을 해주시는 게 느껴져서 힘을 낼 수 있었어요. 대표님의 따뜻한 마음과 열정이 느껴져서 믿고 할 수 있었던 것 같아요. 정말 감사드려요.",
  },
  {
    name: "OHE6507",
    label: "영어 스터디",
    content:
      "줌 스터디 덕분에…. 토플도 졸업하고 원서 제출도 거의 끝나가고 넘 감사했습니다!!!! 체감상 거의,,,, 쿼터 컨설팅 받은 사람이었어요!",
  },
];

export const ReviewSection = () => {
  return (
    <section className="relative flex flex-col pt-24">
      <div className="container flex flex-col">
        <LandingSectionTitle>조작 없는 후기</LandingSectionTitle>
        <LandingSectionSubtitle>유니버스 크루들의 후기를 확인 해보세요.</LandingSectionSubtitle>
      </div>
      <div className="mt-8">
        <Swiper
          modules={[Autoplay]}
          className="container pl-4"
          slidesPerView="auto"
          loop
          autoplay={{
            delay: 5000,
          }}
        >
          {data.map((item, index) => (
            <SwiperSlide className="w-[400px]" key={index}>
              <ReviewItem key={index} {...item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
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
    <div className="mr-6">
      <div className={cn("h-[360px] rounded-2xl bg-content-light p-6")}>
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
    </div>
  );
};
