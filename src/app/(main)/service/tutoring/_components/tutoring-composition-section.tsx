import tutoringCompositionImage1 from "@/assets/images/tutoring/tutoring-composition-1.jpg";
import tutoringCompositionImage2 from "@/assets/images/tutoring/tutoring-composition-2.jpg";
import tutoringCompositionImage3 from "@/assets/images/tutoring/tutoring-composition-3.jpg";
import { SectionSubtitle } from "@/components/shared/section-subtitle";
import { SectionTitle } from "@/components/shared/section-title";
import { Aos } from "@/components/ui/aos";
import Image, { StaticImageData } from "next/image";

export const TutoringCompositionSection = () => {
  return (
    <Aos className="my-32">
      <section className="container">
        <SectionTitle>과외 구성 요소</SectionTitle>
        <SectionSubtitle>과외를 통해 나만의 입시 준비 전략을 완성합니다.</SectionSubtitle>
        <div className="mt-12 grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-6">
          <TutoringCompositionItem
            title="zoom 수업 3회"
            description="한 달 이내에 3회의 수업이 진행됩니다. 맞춤형 정보, 장학금 전략, 그리고 학교 선정까지 단기간 완성!"
            image={tutoringCompositionImage1}
          />
          <TutoringCompositionItem
            title="제작 교재 제공"
            description="한 달에 딱 한 권! 오직 한 분 만을 위한 입시 필승 비법서를 맞춤 제작 합니다."
            image={tutoringCompositionImage2}
          />
          <TutoringCompositionItem
            title="애프터 케어"
            description="과외가 끝나도 유니버스 피아노의 케어는 계속됩니다. 카톡 Q&A 서비스를 통해 유니버스 피아노와 함께 하실 수 있습니다."
            image={tutoringCompositionImage3}
          />
        </div>
      </section>
    </Aos>
  );
};

interface TutoringCompositionItemProps {
  image: StaticImageData;
  title: string;
  description: string;
}

const TutoringCompositionItem = ({ image, title, description }: TutoringCompositionItemProps) => {
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
