import { Icon } from "../icon";

export const ServiceSection = () => {
  return (
    <>
      <section className="flex flex-col pt-32">
        <div className="container">
          <p>Tutoring</p>
          <h1 className="mt-2 whitespace-pre-wrap text-2xl font-semibold">
            {"미국 음대 오디션\n입시 컨설팅"}
          </h1>
          <p className="mt-6 whitespace-pre-wrap break-words text-muted-foreground">
            {
              "유니버스 피아노에서는 미국 음대 오디션 관련 입시 컨설팅을 진행하고 있습니다.\n미국 음대 오디션을 위한 첫걸음을 유니버스 피아노에서 내딛어보세요."
            }
          </p>
          <div className="mt-16 flex items-center gap-2">
            <p className="font-medium leading-normal">컨설팅 서비스 자세히 보기</p>
            <Icon.ChevronRight className="h-5 w-5 text-muted-foreground" />
          </div>
        </div>
      </section>
      <section className="flex flex-col pt-32">
        <div className="container flex flex-col items-end text-right">
          <p>Tutoring</p>
          <h1 className="mt-2 whitespace-pre-wrap text-2xl font-semibold">
            {"미국 음대 오디션\n입시 컨설팅"}
          </h1>
          <p className="mt-6 whitespace-pre-wrap break-words text-muted-foreground">
            {
              "유니버스 피아노에서는 미국 음대 오디션 관련 입시 컨설팅을 진행하고 있습니다.\n미국 음대 오디션을 위한 첫걸음을 유니버스 피아노에서 내딛어보세요."
            }
          </p>
          <div className="mt-16 flex items-center gap-2">
            <p className="font-medium leading-normal">컨설팅 서비스 자세히 보기</p>
            <Icon.ChevronRight className="h-5 w-5 text-muted-foreground" />
          </div>
        </div>
      </section>
      <section className="flex flex-col pt-32">
        <div className="container">
          <p>Tutoring</p>
          <h1 className="mt-2 whitespace-pre-wrap text-2xl font-semibold">
            {"미국 음대 오디션\n입시 컨설팅"}
          </h1>
          <p className="mt-6 whitespace-pre-wrap break-words text-muted-foreground">
            {
              "유니버스 피아노에서는 미국 음대 오디션 관련 입시 컨설팅을 진행하고 있습니다.\n미국 음대 오디션을 위한 첫걸음을 유니버스 피아노에서 내딛어보세요."
            }
          </p>
          <div className="mt-16 flex items-center gap-2">
            <p className="font-medium leading-normal">컨설팅 서비스 자세히 보기</p>
            <Icon.ChevronRight className="h-5 w-5 text-muted-foreground" />
          </div>
        </div>
      </section>
      {/* <section className="flex flex-col pt-32">
        <div className="container flex flex-col">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-semibold">2차 오디션 관련 서비스</h1>
            <Link
              href={ROUTE.SERVICE.CONSULTING}
              className="text-sm font-medium text-muted-foreground transition hover:font-semibold hover:text-accent-foreground"
            >
              전체보기
            </Link>
          </div>
          <h2 className="hidden text-muted-foreground md:flex">
            미국 음대 입시의 모든것, 유니버스 피아노
          </h2>
        </div>
        <div className="container mt-8 flex gap-8 overflow-x-auto text-left md:grid md:grid-cols-3">
          <ServiceItem title="유니버스 피아노" description="미국 음대 입시의 모든 것." />
          <ServiceItem title="유니버스 피아노" description="미국 음대 입시의 모든 것." />
          <ServiceItem title="유니버스 피아노" description="미국 음대 입시의 모든 것." />
        </div>
      </section> */}
    </>
  );
};

interface ServiceItemProps {
  title: string;
  description: string;
}

const ServiceItem = ({ title, description }: ServiceItemProps) => {
  return (
    <div className="flex min-w-[320px] flex-col md:min-w-full">
      <div className="aspect-video rounded-xl bg-slate-100" />
      <div className="mt-3 flex flex-col pl-2">
        <p className="font-medium">{title}</p>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};
