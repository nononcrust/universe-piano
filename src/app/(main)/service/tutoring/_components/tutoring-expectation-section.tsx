import { SectionSubtitle } from "@/components/shared/section-subtitle";
import { SectionTitle } from "@/components/shared/section-title";
import { Aos } from "@/components/ui/aos";
import { cn } from "@/lib/utils";

export const TutoringExpectationSection = () => {
  return (
    <Aos className="my-32">
      <section className="container">
        <SectionTitle>과외 기대 효과</SectionTitle>
        <SectionSubtitle>확실한 비포 애프터를 보장합니다.</SectionSubtitle>
        <div className="mt-12 flex flex-col gap-8 md:flex-row">
          <TutoringExpectationItem
            title="BEFORE"
            items={[
              "궁금할 때 마다 정보 검색",
              "오래 되거나 출처가 불분명한 정보",
              "원서 마감일 전에 급히 준비 시작",
              "어디서 들어 본 학교 랜덤 지원",
            ]}
          />
          <TutoringExpectationItem
            highlight
            title="AFTER"
            items={[
              "최대 6시간 정보 획득 완료",
              "컨설팅 대표가 직접 전하는 정보",
              "내 상황에 적용되는 정보",
              "월 단위 플랜과 함께 체계적으로 준비",
              "장학금 증액 전략에 따른 학교 선정",
              "지원 학교별 입시 정보 파악 완료",
            ]}
          />
        </div>
      </section>
    </Aos>
  );
};

interface TutoringExpectationItemProps {
  title: string;
  items: string[];
  highlight?: boolean;
}

const TutoringExpectationItem = ({ title, items, highlight }: TutoringExpectationItemProps) => {
  return (
    <div
      className={cn(
        "w-full rounded-3xl border-2 border-transparent bg-content p-8",
        highlight && "border-primary bg-white shadow-lg",
      )}
    >
      <p className={cn("text-xl font-bold text-sub md:text-2xl", highlight && "text-primary")}>
        {title}
      </p>
      <div className="mt-4 flex flex-col gap-2">
        {items.map((item, index) => (
          <p
            key={index}
            className={cn(
              "list-item list-inside font-medium text-sub",
              highlight && "text-foreground",
            )}
          >
            {item}
          </p>
        ))}
      </div>
    </div>
  );
};
