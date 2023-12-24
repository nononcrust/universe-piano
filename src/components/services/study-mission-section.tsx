"use client";

import image1 from "@/assets/images/study/study-mission-1.png";
import image10 from "@/assets/images/study/study-mission-10.png";
import image2 from "@/assets/images/study/study-mission-2.png";
import image3 from "@/assets/images/study/study-mission-3.png";
import image4 from "@/assets/images/study/study-mission-4.png";
import image5 from "@/assets/images/study/study-mission-5.png";
import image6 from "@/assets/images/study/study-mission-6.png";
import image7 from "@/assets/images/study/study-mission-7.png";
import image8 from "@/assets/images/study/study-mission-8.png";
import image9 from "@/assets/images/study/study-mission-9.png";
import Image, { StaticImageData } from "next/image";
import { SectionSubtitle } from "../section-subtitle";
import { SectionTitle } from "../section-title";
import { Aos } from "../ui/aos";

const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10];

export const StudyMissionSection = () => {
  return (
    <Aos className="my-32">
      <section>
        <div className="container">
          <SectionTitle className="whitespace-pre-wrap text-left">
            {"변화의 시작은,\n스터디 미션 수행으로부터"}
          </SectionTitle>
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
    <Image
      className="h-[400px] min-w-[230px] rounded-2xl border bg-content"
      src={image}
      alt=""
      priority
    />
  );
};
