import { SectionSubtitle } from "@/components/shared/section-subtitle";
import { SectionTitle } from "@/components/shared/section-title";
import { Aos } from "@/components/ui/aos";

export const RecommendSection = () => {
  return (
    <Aos className="my-32">
      <section className="container">
        <SectionTitle>국내 최초 미국 음대 입시 과외</SectionTitle>
        <SectionSubtitle>이런 분들께 추천드립니다.</SectionSubtitle>
        <div className="mt-12 flex flex-col items-center gap-4">
          <RecommendItem number={1} title='"제가 뭘 모르는지 모르겠어요."' />
          <RecommendItem number={2} title='"주변에 미국 음대 입시에 대해 아는 사람이 없어요."' />
          <RecommendItem number={3} title='"컨설팅 비용은 조금 부담스러워요."' />
          <RecommendItem number={4} title='"장학금 없이는 미국 음대 입학이 어려운 상황이에요."' />
          <RecommendItem
            number={5}
            title='"입시 준비 혼자 해보고 싶은데 정확한 정보와 방법이 알고 싶어요."'
          />
        </div>
      </section>
    </Aos>
  );
};

interface RecommendItemProps {
  number: number;
  title: string;
}

const RecommendItem = ({ number, title }: RecommendItemProps) => {
  return (
    <div className="flex w-full max-w-[600px] gap-4 rounded-full rounded-tl-none bg-content p-4">
      <div>
        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary font-bold text-white">
          {number}
        </div>
      </div>
      <p className="flex-1 font-semibold">{title}</p>
    </div>
  );
};
