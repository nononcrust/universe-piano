import { Button } from "../ui/button";

export const CardSection = () => {
  return (
    <section className="container flex flex-col pt-32">
      <h1 className="text-2xl font-semibold">원하는 서비스를 찾아보세요</h1>
      <h2 className="mt-2 text-muted-foreground">
        입시 상담부터 합격자 후기까지 다양한 서비스를 제공하고 있습니다.
      </h2>
      <div className="mt-8 flex gap-4 overflow-x-auto scrollbar-hide">
        <CardItem
          title="입시 컨설팅"
          description="24시간 언제 어디서나 무료 입시 상담! 나의 지식을 나눠 사람들에게 배움의 기회를 주고, 의미있는 대가를 가져가세요."
        />
        <CardItem
          title="미국 음대 입시 과외"
          description="단 한번의 시도로 오디션 합격하기 나의 지식을 나눠 사람들에게 배움의 기회를 주고, 의미있는 대가를 가져가세요."
        />
        <CardItem
          title="스터디"
          description="100% 솔직한 입시 합격자들의 후기 나의 지식을 나눠 사람들에게 배움의 기회를 주고, 의미있는 대가를 가져가세요."
        />
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
    <div className="flex flex-col items-start justify-between rounded-2xl bg-gray-50 p-6 transition max-md:min-w-[320px]">
      <div className="flex flex-col justify-between">
        <div className="flex items-center">
          <p className="text-lg font-semibold">{title}</p>
        </div>
        <p className="mt-2 text-sm text-muted-foreground">{description}</p>
      </div>
      <div className="mt-8">
        <Button variant="outline">자세히 보기</Button>
      </div>
    </div>
  );
};
