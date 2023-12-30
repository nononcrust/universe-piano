import { SectionTitle } from "@/components/common/section-title";
import { Aos } from "@/components/ui/aos";

export const MustReadSection = () => {
  return (
    <Aos className="my-32">
      <section className="container">
        <SectionTitle className="text-left">필독 사항</SectionTitle>
        <div className="mt-12 max-w-[400px] rounded-full rounded-tl-none bg-primary p-4 pl-8 text-xl font-semibold text-white">
          {'"너 이러다 망하는거 아니야?"'}
        </div>
        <div className="mt-8">
          <p className="text-lg font-medium">
            이렇게 다 알려주면 망하는 거 아니냐며, 주변에서는 미국 음대 입시 과외를 말렸습니다.
          </p>
          <p className="mt-2 font-medium md:text-lg">
            하지만, 간절한 마음으로 유니버스 피아노를 찾아주신 분들께 도움의 진입 장벽을 낮추고자
            입시 과외를 시작했습니다.
          </p>
        </div>
        <div className="mt-16">
          <p className="mt-2 text-xl font-semibold md:whitespace-pre-wrap md:text-3xl md:leading-normal">
            {
              "과외에서는 컨설팅에 준하는 정보와 전략을 제공 합니다.\n그래서, 신청 절차가 까다로우며, "
            }
            <span className="text-primary">한 달에 한 분</span>만 선정합니다.
          </p>
        </div>
        <div className="mt-12">
          <p className="text-muted-foreground md:whitespace-pre-wrap md:leading-normal">
            {
              "과외 커리큘럼, 상세 정보, Q&A 확인 후 신청서 작성해 주세요.\n성의 없는 신청서 작성은 과외 진행이 불가할 수 있습니다."
            }
          </p>
        </div>
      </section>
    </Aos>
  );
};
