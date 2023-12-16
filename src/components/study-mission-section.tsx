"use client";

import Image, { StaticImageData } from "next/image";
import image1 from "../../public/images/study/study-mission-1.png";
import image10 from "../../public/images/study/study-mission-10.png";
import image11 from "../../public/images/study/study-mission-11.png";
import image12 from "../../public/images/study/study-mission-12.png";
import image13 from "../../public/images/study/study-mission-13.png";
import image14 from "../../public/images/study/study-mission-14.png";
import image15 from "../../public/images/study/study-mission-15.png";
import image16 from "../../public/images/study/study-mission-16.png";
import image2 from "../../public/images/study/study-mission-2.png";
import image3 from "../../public/images/study/study-mission-3.png";
import image4 from "../../public/images/study/study-mission-4.png";
import image5 from "../../public/images/study/study-mission-5.png";
import image6 from "../../public/images/study/study-mission-6.png";
import image7 from "../../public/images/study/study-mission-7.png";
import image8 from "../../public/images/study/study-mission-8.png";
import image9 from "../../public/images/study/study-mission-9.png";
import { SectionSubtitle } from "./section-subtitle";
import { SectionTitle } from "./section-title";
import { Aos } from "./ui/aos";

const images = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
  image11,
  image12,
  image13,
  image14,
  image15,
  image16,
];

export const StudyMissionSection = () => {
  return (
    <Aos className="my-16">
      <section>
        <div className="container">
          <SectionTitle className="text-left">변화의 시작은,</SectionTitle>
          <SectionTitle className="mt-2 text-left">스터디 미션 수행으로부터</SectionTitle>
          <SectionSubtitle className="text-left">
            모든 변화의 필수 전제 조건은 이전과는 다른 행동을 하는 자기 자신입니다.
          </SectionSubtitle>
          <SectionSubtitle className="mt-1 text-left">
            스터디 크루분들은 스터디의 다양한 미션 수행을 통해, 영어 점수 향상은 물론, 생각과 생활
            습관에도 긍정적인 변화를 경험하고 있습니다.
          </SectionSubtitle>
        </div>
        <div className="container mt-12 flex gap-4 overflow-auto scrollbar-hide">
          {images.map((image, index) => (
            <StudyMissionItem key={index} image={image} />
          ))}
        </div>
      </section>
    </Aos>
  );
};

interface StudyMissionItemProps {
  image: StaticImageData;
}

const StudyMissionItem = ({ image }: StudyMissionItemProps) => {
  return (
    <Image className="h-[400px] min-w-[240px] rounded-2xl border bg-content" src={image} alt="" />
  );
};
