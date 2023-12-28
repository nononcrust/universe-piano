import curriculumImage from "@/assets/images/consulting/consulting-curriculum.jpg";
import { SectionSubtitle } from "@/components/section-subtitle";
import { SectionTitle } from "@/components/section-title";
import { Aos } from "@/components/ui/aos";
import Image from "next/image";

export const ConsultingCurriculumSection = () => {
  return (
    <section className="py-32">
      <Aos className="container">
        <SectionTitle>컨설팅 커리큘럼</SectionTitle>
        <SectionSubtitle>목표 설정부터 합격 후 과정까지</SectionSubtitle>
        <div className="mt-12 flex justify-center">
          <Image src={curriculumImage} alt="" />
        </div>
      </Aos>
    </section>
  );
};
