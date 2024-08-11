import studyExpectationImage1 from "@/assets/images/study/study-expectation-1.jpg";
import studyExpectationImage2 from "@/assets/images/study/study-expectation-2.jpg";
import { SectionTitle } from "@/components/shared/section-title";
import { Aos } from "@/components/ui/aos";
import { cn } from "@/lib/utils";
import Image, { StaticImageData } from "next/image";

export const StudyExpectationSection = () => {
  return (
    <Aos className="my-32">
      <section className="container">
        <div className="mt-12 flex flex-col gap-8 md:gap-32">
          <StudyExpectationItem
            title="음대생 영어 공부의 마지노선"
            subtitle="유니버스 피아노 스터디"
            description="스터디에 참여하시는 분들 90%는 영어 공부를 제대로 해본 적이 없거나, 영어 학원 수업을 들어도 점수가 오르지 않던 분들이었습니다. 영어 점수 때문에 입시를 1년 이상 미루신 분들도 계셨습니다."
            image={studyExpectationImage1}
          />
          <StudyExpectationItem
            reverse
            title="스터디 참여 결과"
            subtitle="점수가 오른다!"
            description="스터디 크루분들은 평균 6개월 만에 토플 80점을 달성합니다. 각자의 시작점이 다르기 때문에 얼마나 어떤 방법으로 공부해야 하는지는 특정 짓기 어렵습니다. 다만, 스터디 크루 분들이 만족해하시는 부분은 ‘정말 얻어 가는 게 있고’, ‘실질적으로 영어 점수가 오른다.’라는 것이었습니다."
            image={studyExpectationImage2}
          />
        </div>
      </section>
    </Aos>
  );
};

interface StudyExpecttationItemProps {
  title: string;
  subtitle: string;
  description: string;
  image: StaticImageData;
  reverse?: boolean;
}

const StudyExpectationItem = ({
  title,
  subtitle,
  description,
  image,
  reverse,
}: StudyExpecttationItemProps) => {
  return (
    <div className={cn("flex flex-col md:flex-row md:gap-16", reverse && "md:flex-row-reverse")}>
      <Image className="rounded-3xl md:min-w-[450px] md:flex-1" src={image} alt="" />
      <div className="flex flex-1 flex-col">
        <SectionTitle className="mt-4 text-left md:mt-12">{title}</SectionTitle>
        <p className="mt-4 text-lg font-semibold md:text-2xl">{subtitle}</p>
        <p className="mt-4 font-medium text-sub md:text-xl">{description}</p>
      </div>
    </div>
  );
};
