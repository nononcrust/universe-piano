import { Aos } from "@/components/ui/aos";

export default function AboutCompanyPage() {
  return (
    <main>
      <Aos>
        <section className="container py-32">
          <h1 className="text-3xl font-bold md:text-4xl md:leading-tight">
            미국 음대 입시를 위한 모든 것<br />
            유니버스 피아노가 함께합니다.
          </h1>
          <p className="text-medium mt-8 text-lg leading-normal text-muted-foreground">
            음악은 마음을 표현하고 세상을 바꾸는 강력한 언어입니다.
            <br />
            미국 음대로의 여정은 그 언어를 깊이 있게 이해하는 시작입니다.
            <br />
            우리 미국 음대 입시 컨설팅 팀은 여러분을 미국 음대의 문으로 안내하고자 합니다.
          </p>
        </section>
      </Aos>
      {/* <section className="bg-black text-white">
        <Aos>
          <div className="container py-32">
            <h1 className="text-3xl font-bold md:text-4xl md:leading-tight">
              유니버스 피아노는 왜 미국 음대 입시를 지원하나요?
            </h1>
            <p className="mt-8">
              음악은 마음을 표현하고 세상을 감동으로 가득 채울 수 있는 강력한 언어입니다.
            </p>
            <p className="mt-8">
              음악은 마음을 표현하고 세상을 감동으로 가득 채울 수 있는 강력한 언어입니다.
            </p>
            <p className="mt-8">
              음악은 마음을 표현하고 세상을 감동으로 가득 채울 수 있는 강력한 언어입니다.
            </p>
          </div>
        </Aos>
      </section> */}
      <Aos>
        <section className="container py-32">
          <h1 className="text-3xl font-bold md:text-4xl md:leading-tight">
            미국 음대 입시를 위한 모든 것
          </h1>
          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="h-[240px] rounded-2xl bg-gray-100"></div>
            <div className="h-[240px] rounded-2xl bg-gray-100"></div>
            <div className="h-[240px] rounded-2xl bg-gray-100"></div>
          </div>
        </section>
      </Aos>
      <section
        className="flex h-[320px] flex-1 justify-center bg-gray-100 bg-cover bg-center bg-no-repeat md:justify-start"
        style={{
          backgroundImage: "url(/images/hero.webp)",
        }}
      >
        <Aos className="flex-1">
          <div className="container flex h-full flex-1 items-center">
            <h1 className="text-2xl font-semibold text-white md:text-4xl">
              <p>미국 음대 입시를 위한 모든 것,</p>
              <p className="mt-1 md:mt-2">유니버스 피아노에서 찾아보세요</p>
            </h1>
          </div>
        </Aos>
      </section>
    </main>
  );
}
