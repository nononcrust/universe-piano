import { Icon } from "../icon";

export const CardSection = () => {
  return (
    <section className="container flex flex-col pt-32">
      <h1 className="text-2xl font-semibold">원하는 서비스를 찾아보세요</h1>
      <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
        <CardItem title="입시 상담" description="24시간 언제 어디서나 무료 입시 상담" />
        <CardItem title="오디션 참가" description="단 한번의 시도로 오디션 합격하기" />
        <CardItem title="합격자 후기" description="100% 솔직한 입시 합격자들의 후기" />
      </div>
    </section>
  );
};

interface CardItemProps {
  title: string;
  description: string;
}

export const CardItem = ({ title, description }: CardItemProps) => {
  return (
    <div className="flex cursor-pointer items-center justify-between rounded-lg border p-4 transition hover:-translate-y-0.5 hover:shadow-md md:items-start">
      <div className="flex flex-col">
        <div className="flex items-center justify-between">
          <p className="font-medium">{title}</p>
        </div>
        <p className="mt-2 text-sm text-muted-foreground">{description}</p>
      </div>
      <Icon.ChevronRight size={20} />
    </div>
  );
};
