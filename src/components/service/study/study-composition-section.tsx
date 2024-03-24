import studyCompositionImage1 from "@/assets/images/study/2024-study-1.jpg";
import studyCompositionImage2 from "@/assets/images/study/2024-study-2.jpg";
import studyCompositionImage3 from "@/assets/images/study/2024-study-3.jpg";
import { SectionSubtitle } from "@/components/shared/section-subtitle";
import { SectionTitle } from "@/components/shared/section-title";
import { Aos } from "@/components/ui/aos";
import Image, { StaticImageData } from "next/image";

export const StudyCompositionSection = () => {
  return (
    <Aos className="my-32">
      <section className="container">
        <SectionTitle>2024 스터디</SectionTitle>
        <SectionSubtitle className="whitespace-pre-wrap">
          {
            "2024년도 스터디는 두 달 과정의 영어 기초 트레이닝을 거친 후에, 정규 스터디가 시작 됩니다."
          }
        </SectionSubtitle>
        <div className="mt-12 flex flex-col gap-12 md:flex-row md:gap-6">
          <StudyCompositionItem
            title="zoom 수업 및 자습"
            description="영어 기초 수업, Reading 모의고사, 시중 교재 해석본 Speaking 발음 교정, Writing 첨삭, 브레인 스토밍 등 월별로 필요한 zoom 수업과 자료를 제공합니다."
            image={studyCompositionImage1}
          />
          <StudyCompositionItem
            title="단톡방 공부 및 미션 인증"
            description="가장 빠르게 성장하는 방법은 경쟁력 있는 동료들과 함께 하는 것입니다. 동료들의 단톡방 인증을 함께 지켜보면서 매일 동기부여를 얻을 수 있습니다."
            image={studyCompositionImage2}
          />
          <StudyCompositionItem
            title="단어 시험"
            description="결코 만만하지  않은 스터디! 단어 공부량을 두배로 늘려줄 단어 시험 시스템과 함께 합니다."
            image={studyCompositionImage3}
          />
        </div>
      </section>
    </Aos>
  );
};

interface StudyCompositionItemProps {
  image: StaticImageData;
  title: string;
  description: string;
}

const StudyCompositionItem = ({ image, title, description }: StudyCompositionItemProps) => {
  return (
    <div className="flex flex-1 flex-col rounded-2xl">
      <div className="flex h-[280px] w-full items-center justify-center rounded-2xl border bg-[#C1C4EC]">
        <Image className="w-full rounded-2xl" alt="" src={image} priority />
      </div>
      <div className="ml-2 mt-3 flex flex-col">
        <p className="text-lg font-semibold md:text-xl">{title}</p>
        <p className="mt-2 font-medium text-sub md:text-lg">{description}</p>
      </div>
    </div>
  );
};
