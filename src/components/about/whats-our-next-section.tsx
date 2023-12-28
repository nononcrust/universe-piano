import { SectionBadge } from "@/components/common/section-badge";
import { SectionSubtitle } from "@/components/common/section-subtitle";
import { SectionTitle } from "@/components/common/section-title";
import { Aos } from "@/components/ui/aos";

export const WhatsOurNextSection = () => {
  return (
    <section className="relative bg-content py-24">
      <Aos className="container">
        <div className="flex justify-center">
          <SectionBadge>{"What's our NEXT?"}</SectionBadge>
        </div>
        <SectionTitle className="mt-4">2024년, 두 개의 국내 최초 서비스가 시작됩니다</SectionTitle>
        <SectionSubtitle className="md:whitespace-pre-wrap md:leading-normal">
          {
            "유니버스 피아노는 미국 음대 유학에 필요한 서비스들을 국내 최초로 제공하며,\n미국 음대 입시생 및 재학생들을 위한 커뮤니티를 구축하고 있습니다."
          }
        </SectionSubtitle>
        <div className="flex justify-center">
          <div className="relative mt-24 flex flex-col gap-4">
            <div className="absolute h-full w-[1px] translate-x-[5px] translate-y-[10px] bg-gradient-to-b from-black from-90% to-content" />
            <WhatsOurNextItem
              year="2023"
              items={[
                "국내 최초 미국 음대 입시 과외 런칭",
                "국내 최초 미국 음대 오디션 룸메이트 매칭 서비스 런칭",
                "국내 최초 미국 음대 커뮤니티 형성",
              ]}
            />
            <WhatsOurNextItem
              year="2022"
              items={[
                "국내 최초 음대생을 위한 영어 스터디 런칭",
                "국내 최초 음대 결과 발표 공유 서비스 런칭",
              ]}
            />
            <WhatsOurNextItem year="2019" items={["국내 최초 부분 컨설팅 서비스 제작"]} />
          </div>
        </div>
      </Aos>
    </section>
  );
};

interface WhatsOurNextItemProps {
  year: string;
  items: string[];
}

const WhatsOurNextItem = ({ year, items }: WhatsOurNextItemProps) => {
  return (
    <div className="flex">
      <div className="mr-8 mt-1.5 h-3 w-3 rounded-full bg-black" />
      <p className="mr-4 text-lg font-semibold text-muted-foreground">{year}</p>
      <div className="flex flex-1 flex-col gap-4">
        {items.map((item, index) => (
          <p className="text-lg font-medium" key={index}>
            {item}
          </p>
        ))}
      </div>
    </div>
  );
};
