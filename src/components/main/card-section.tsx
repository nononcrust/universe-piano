import { Button } from "@/components/ui/button";

const data = [
  {
    title: "오디션 결과 발표",
    description:
      "미국 음대 오디션 투어 꿀팁, 상황별 영어 표현, 오디션 투어 체크리스트까지 모두 담았습니다.",
  },
  {
    title: "오디션 119 키트",
    description:
      "미국 음대 오디션 투어 꿀팁, 상황별 영어 표현, 오디션 투어 체크리스트까지 모두 담았습니다.",
  },
  {
    title: "장학금 증액 컨설팅",
    description:
      "광고 없음. 조작 없음. 결과로 증명합니다. 최초 장학금 $0에서 $30000까지 증액 성공!",
  },
];

export const CardSection = () => {
  return (
    <section className="flex flex-col pt-24">
      <div className="container flex flex-col">
        <h1 className="text-xl font-bold md:text-2xl">2차 오디션 관련 서비스</h1>
        <h2 className="mt-2 font-medium text-sub">
          2024년 가을 학기 입시생들을 위한 서비스입니다.
        </h2>
      </div>
      <div className="container mt-8 flex gap-4 overflow-x-auto scrollbar-hide">
        {data.map((item, index) => (
          <CardItem key={index} title={item.title} description={item.description} />
        ))}
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
    <div className="flex flex-col items-start justify-between rounded-2xl bg-content-light p-6 transition max-md:min-w-[320px]">
      <div className="flex flex-col justify-between">
        <div className="flex items-center">
          <p className="text-lg font-semibold">{title}</p>
        </div>
        <p className="mt-2 text-sm text-sub">{description}</p>
      </div>
      <div className="mt-8">
        <Button variant="outlined">자세히 보기</Button>
      </div>
    </div>
  );
};
