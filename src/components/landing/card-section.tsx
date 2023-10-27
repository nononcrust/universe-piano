import { Icon } from "../icon";
import { Aos } from "../ui/aos";

export const CardSection = () => {
  return (
    <Aos>
      <section className="container flex flex-col pt-32">
        <h1 className="text-2xl">
          <strong>원하는 서비스</strong>를 찾아보세요
        </h1>
        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <CardItem title="입시 상담" description="24시간 언제 어디서나 무료 입시 상담" />
          <CardItem title="오디션 참가" description="단 한번의 시도로 오디션 합격하기" />
          <CardItem title="합격자 후기" description="100% 솔직한 입시 합격자들의 후기" />
        </div>
      </section>
    </Aos>
  );
};

interface CardItemProps {
  title: string;
  description: string;
}

export const CardItem = ({ title, description }: CardItemProps) => {
  return (
    <div className="flex cursor-pointer flex-col rounded-lg border p-4 transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="flex items-center justify-between">
        <p className="font-medium">{title}</p>
        <Icon.ChevronRight size={20} />
      </div>
      <p className="mt-2 text-sm text-muted-foreground">{description}</p>
    </div>
  );
};
