import { SectionSubtitle } from "@/components/section-subtitle";
import { SectionTitle } from "@/components/section-title";
import { Aos } from "@/components/ui/aos";
import { cn } from "@/lib/utils";

export const ConsultingExampleSection = () => {
  return (
    <Aos className="my-32">
      <section className="container">
        <SectionTitle>컨설팅 진행 사례</SectionTitle>
        <SectionSubtitle>유니버스 피아노에서는 어떤 케이스든 합격 가능했습니다.</SectionSubtitle>
        <div className="mt-12 flex justify-center">
          <div className="flex w-full max-w-[600px] flex-col gap-4">
            <ConsultingExampleItem
              number={1}
              title="“작년에 다른 유학원이랑 준비했는데 결과가 맘에 안 들어요.”"
            />
            <ConsultingExampleItem number={2} title="“혼자 준비하다가 재수하게 되었어요.”" />
            <ConsultingExampleItem number={3} title="“작년에 전부 불합격 했어요.”" />
            <ConsultingExampleItem number={4} title="“대학 성적이 3.0 미만이에요.”" />
            <ConsultingExampleItem
              number={5}
              title="“미국과 독일 음대 입시를 동시에 준비해야 해요.”"
            />
          </div>
        </div>
      </section>
    </Aos>
  );
};

interface ConsultingExampleItemProps {
  number: number;
  title: string;
  direction?: "left" | "right";
}

const ConsultingExampleItem = ({
  number,
  title,
  direction = "left",
}: ConsultingExampleItemProps) => {
  return (
    <div
      className={cn(
        "flex w-full gap-4 rounded-full bg-content p-4",
        direction === "left" && "rounded-tl-none",
        direction === "right" && "rounded-tr-none",
      )}
    >
      <div>
        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary font-bold text-white">
          {number}
        </div>
      </div>
      <p className="flex-1 font-semibold">{title}</p>
    </div>
  );
};
