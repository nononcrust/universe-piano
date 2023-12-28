"use client";

import studyWhyUniverseImage1 from "@/assets/images/study/study-why-universe-1.jpg";
import studyWhyUniverseImage2 from "@/assets/images/study/study-why-universe-2.jpg";
import studyWhyUniverseImage3 from "@/assets/images/study/study-why-universe-3.jpg";
import studyWhyUniverseImage4 from "@/assets/images/study/study-why-universe-4.jpg";
import { Icon } from "@/components/common/icon";
import { SectionTitle } from "@/components/common/section-title";
import { Aos } from "@/components/ui/aos";
import { cn } from "@/lib/utils";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";

export const WhyUniverseSection = () => {
  return (
    <Aos className="bg-content py-32">
      <section className="container">
        <SectionTitle className="whitespace-pre-wrap">
          {"음대생 영어공부,\n결국 왜 유니버스 피아노일까요?"}
        </SectionTitle>
        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2">
          <WhyUniverseItem
            number={1}
            title={"영어 왕초보였던 음대생이\n직접 스터디 멘토로 참여합니다."}
            description={
              "TOEFL 53점에서 94점까지, 영어 실력 밑바닥에서 상위권으로 올라오는 과정을 직접 경험한 멘토가 가르칩니다.\n\n영어 왕초보가 어떻게 하면 미국 음대 입학에 필요한 점수를 얻을 수 있는지를 누구보다 잘 알고 있습니다.\n\n영어 상위권에서 최상위권에 도달한 사람\n영어 최하위권에서 상위권에 도달한 사람\n\n당신에게 필요한 멘토는 누구입니까?"
            }
            image={studyWhyUniverseImage1}
          />
          <WhyUniverseItem
            number={2}
            title={"각자에게 최적화된 공부시간과 패턴을\n정확히 인지하게 됩니다."}
            description={
              "현실과 이상의 차이가 클 때에는 간극을 좁혀 나갈 수 있는 현실적인 목표가 필요합니다.\n\n영어 왕초보 음대생들도 꾸준히 지속 가능한 맞춤형 학습 플랜을 제시합니다."
            }
            image={studyWhyUniverseImage2}
          />
          <WhyUniverseItem
            number={3}
            title={"할 수 밖에 없는\n환경을 제공합니다."}
            description={
              "공부 시간 인증과 스터디 미션을 통해, 공부를 할 수 밖에 없는 환경을 제공합니다.\n\n기준 미달 인증 시 벌금이 부과되며, 모인 벌금은 매달 가장 성실하게 공부하신 분께 전액 수여합니다."
            }
            image={studyWhyUniverseImage3}
          />
          <WhyUniverseItem
            number={4}
            title={"미국 음대 입시생들의\n작은 커뮤니티가 형성됩니다."}
            description={
              "같은 목표를 위해 고군분투하면서, 서로를 위로하고 공감하며 성장합니다.\n\n스터디 크루끼리 미국 오디션 기간에 만나서 밥 친구가 되고, 긴급 상황에 서로 도와주고, 룸메이트가 되는 것은 보너스 효과!"
            }
            image={studyWhyUniverseImage4}
          />
        </div>
      </section>
    </Aos>
  );
};

interface WhyUniverseItemProps {
  number: number;
  title: string;
  description: string;
  image: StaticImageData;
}

export const WhyUniverseItem = ({ number, title, description, image }: WhyUniverseItemProps) => {
  const [showDescription, setShowDescription] = useState(false);

  return (
    <div
      className="group relative flex h-[320px] flex-1 cursor-pointer flex-col justify-between overflow-hidden rounded-2xl bg-white font-bold"
      onClick={() => setShowDescription(!showDescription)}
    >
      <Image
        className="object-cover brightness-[0.3]"
        priority
        fill
        src={image}
        alt=""
        sizes="320px"
      />
      <div
        className={cn(
          "z-10 flex justify-end",
          "whitespace-pre-wrap",
          showDescription && "hidden",
          !showDescription && "animate-fade-in",
        )}
      >
        <div className="m-6 rounded-full border-2 border-white p-1">
          <Icon.Plus className="text-white" />
        </div>
      </div>
      <div
        className={cn(
          "z-10 flex-1 bg-zinc-900 p-6 text-white",
          !showDescription && "hidden",
          showDescription && "animate-fade-in",
        )}
      >
        <p className={cn("mt-2 whitespace-pre-wrap")}>{description}</p>
      </div>
      <div
        className={cn(
          "z-10 p-6",
          showDescription && "hidden",
          !showDescription && "animate-fade-in",
        )}
      >
        <p className="text-xl text-white underline underline-offset-4">0{number}</p>
        <p className="mt-2 whitespace-pre text-2xl text-white">{title}</p>
      </div>
    </div>
  );
};
