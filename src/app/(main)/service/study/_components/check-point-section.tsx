import { SectionTitle } from "@/components/shared/section-title";
import { Aos } from "@/components/ui/aos";

export const CheckPointSection = () => {
  return (
    <Aos className="my-32">
      <section className="container">
        <SectionTitle>Check Point</SectionTitle>
        <h2 className="mt-4 whitespace-pre-wrap text-center font-medium text-sub md:text-lg">
          {"스터디 소개에 앞서 중요한\n몇 가지 주의사항을 먼저 알려드립니다."}
        </h2>
        <div className="mt-12 flex flex-col items-center gap-4">
          <CheckPointItem
            number={1}
            title="스터디는 학원처럼 매일 수업을 듣는 곳이 아닙니다. 학원 수업 방식을 원하시는 분들은 학원에 다니시는 것을 추천드리겠습니다."
          />
          <CheckPointItem
            number={2}
            title="한두 달 만에 목표 점수 달성은 98%의 음대생들에게는 해당되지 않습니다. 이런 효과를 기대하시는 분들은 기간 내에 목표 점수를 보장해 준다는 곳에서 공부하시는 것을 추천드립니다."
          />
          <CheckPointItem
            number={3}
            title="공부를 위해 할애할 수 있는 시간이 하루 2시간 미만 이신 분들은 스터디 참여를 권유 드리지 않습니다. "
          />
        </div>
      </section>
    </Aos>
  );
};

interface CheckPointItemProps {
  number: number;
  title: string;
}

const CheckPointItem = ({ number, title }: CheckPointItemProps) => {
  return (
    <div className="flex w-full gap-4 rounded-xl bg-content p-4">
      <div>
        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-black font-bold text-white">
          {number}
        </div>
      </div>
      <p className="flex-1 font-medium">{title}</p>
    </div>
  );
};
