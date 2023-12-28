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
import { Icon } from "@/components/common/icon";
import { SectionSubtitle } from "@/components/common/section-subtitle";
import { SectionTitle } from "@/components/common/section-title";
import { Aos } from "@/components/ui/aos";
import { cn } from "@/lib/utils";
import Image from "next/image";
import "swiper/css";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

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
        <div className="relative mt-12">
          <Swiper className="container" slidesPerView="auto" spaceBetween={16} loop>
            {images.map((image, index) => (
              <SwiperSlide style={{ width: 230 }} key={index}>
                <Image
                  className="h-[400px] w-[230px] rounded-2xl border bg-content"
                  src={image}
                  alt=""
                  priority
                />
              </SwiperSlide>
            ))}
            <SwiperNavigationButton />
          </Swiper>
        </div>
      </section>
    </Aos>
  );
};

const SwiperNavigationButton = () => {
  const swiper = useSwiper();

  return (
    <div className="bottom-0 left-1/2 mt-8 flex -translate-y-1/2 justify-center gap-4">
      <button
        className={cn("rounded-full p-1 transition hover:bg-content")}
        onClick={() => swiper.slidePrev()}
      >
        <Icon.ChevronLeft className="h-8 w-8" />
      </button>
      <button
        className={cn("rounded-full p-1 transition hover:bg-content")}
        onClick={() => swiper.slideNext()}
      >
        <Icon.ChevronRight className="h-8 w-8" />
      </button>
    </div>
  );
};
