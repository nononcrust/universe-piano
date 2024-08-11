import { ColoredIcon } from "@/components/shared/colored-icon";
import { SectionSubtitle } from "@/components/shared/section-subtitle";
import { SectionTitle } from "@/components/shared/section-title";
import { Aos } from "@/components/ui/aos";

export const CrewResultSection = () => {
  return (
    <section className="bg-content py-32">
      <Aos className="container">
        <SectionTitle>유니버스 크루들의 결과를 공개합니다</SectionTitle>
        <SectionSubtitle className="whitespace-pre-wrap">
          {
            "입시를 준비하시는 분들 누구나 좋은 학교에 장학금을 많이 받고 입학하길 원합니다.\n정확한 목표와 방향 설정이 있다면 누구나 도전 할 수 있습니다."
          }
        </SectionSubtitle>
        <div className="mt-12 flex flex-col justify-center gap-4 md:flex-row md:gap-8">
          <CrewResultItem
            title="5연속 합격률"
            description="100%"
            icon={<ColoredIcon.Medal className="h-16 w-16" />}
          />
          <CrewResultItem
            title="장학금 수여"
            description="65% 이상"
            icon={<ColoredIcon.Trophy className="h-16 w-16" />}
          />
          <CrewResultItem
            title="장학금 증액"
            description="연간 최대 $30000"
            icon={<ColoredIcon.Like className="h-16 w-16" />}
          />
        </div>
        <div className="container mt-12">
          <SectionSubtitle className="whitespace-pre-wrap text-center text-sub md:leading-normal">
            {
              "최근 5년간 미국 음대 입시 상담을 100건 넘게 진행해왔습니다.\n똑같은 사연을 가진 분들은 단 한 건도 없었습니다.\n100개의 각기 다른 사연을 하나의 정형화된 틀에 억지로 맞출 수는 없습니다."
            }
          </SectionSubtitle>
          <p className="mt-12 text-center text-2xl font-bold">
            반드시 각자에게 적합한 가이드라인이 필요합니다
          </p>
        </div>
      </Aos>
    </section>
  );
};

interface ScholarshipItemProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const CrewResultItem = ({ title, description, icon }: ScholarshipItemProps) => {
  return (
    <div className="flex w-full flex-col items-center rounded-xl bg-white p-8 md:max-w-[240px]">
      <div className="flex h-24 w-24 items-center justify-center">{icon}</div>
      <p className="mt-4 font-semibold text-sub">{title}</p>
      <p className="mt-2 text-center text-3xl font-bold text-primary">{description}</p>
    </div>
  );
};
