import { Icon } from "../icon";
import { Aos } from "../ui/aos";

export const ServiceSection = () => {
  return (
    <Aos>
      <section className="container flex flex-col pt-32">
        <div className="flex justify-between">
          <h1 className="text-2xl font-bold">2차 오디션 관련 서비스</h1>
        </div>
        <h2 className="mt-2 text-muted-foreground">
          오디션 준비 어려우셨죠? 유니버스 피아노가 도와드릴게요.
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-8 text-left md:grid-cols-2">
          <ServiceItem
            title="유니버스 피아노와 함께하면 너무 쉬운 오디션"
            description="유니버스 피아노와 함께하면 음대 입시가 쉬워집니다."
          />
          <ServiceItem
            title="24시간 무료 상담 신청"
            description="유니버스 피아노와 함께하면 음대 입시가 쉬워집니다."
          />
          <ServiceItem
            title="음대 입시 관련 정보"
            description="유니버스 피아노와 함께하면 음대 입시가 쉬워집니다."
          />
          <ServiceItem
            title="미국 음대 입시 유학 컨설팅"
            description="유니버스 피아노와 함께하면 음대 입시가 쉬워집니다."
          />
        </div>
      </section>
    </Aos>
  );
};

interface ServiceItemProps {
  title: string;
  description: string;
}

const ServiceItem = ({ title, description }: ServiceItemProps) => {
  return (
    <div className="flex flex-col">
      <div className="flex justify-end"></div>
      <div className="aspect-video rounded-lg bg-gray-100" />
      <div className="mt-3 flex items-center justify-between">
        <p className="font-medium">{title}</p>
        <div className="flex items-center">
          <p className="flex cursor-pointer text-sm">바로가기</p>
          <Icon.ChevronRight size={18} />
        </div>
      </div>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
};
