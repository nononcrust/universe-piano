import { Aos } from "@/components/ui/aos";

export default function AboutCompanyPage() {
  return (
    <main>
      <Aos>
        <section className="container py-32">
          <h1 className="text-3xl font-bold md:text-4xl md:leading-tight">
            미국 음대 입시를 위한 모든 것<br />
            유니버스 피아노에서 찾아보세요
          </h1>
          <p className="text-medium mt-8 text-xl text-muted-foreground">
            음악은 마음을 표현하고 세상을 감동으로 가득 채울 수 있는 강력한 언어입니다.
            <br />
            미국 음대로의 여정은 그 언어를 깊이 있게 이해하고 무한한 가능성을 탐구하는 시작입니다.
            <br />
            우리 미국 음대 입시 컨설팅 팀은 여러분의 음악적 열정을 미국 음대의 문으로 안내하고자
            합니다.
          </p>
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
            <h1 className="text-2xl font-extrabold text-white md:text-4xl">
              <p>미국 음대 입시를 위한 모든 것,</p>
              <p className="mt-1 md:mt-2">유니버스 피아노에서 찾아보세요</p>
            </h1>
          </div>
        </Aos>
      </section>
    </main>
  );
}
