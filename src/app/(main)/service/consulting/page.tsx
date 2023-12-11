import { Icon } from "@/components/icon";
import { Aos } from "@/components/ui/aos";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollShadow } from "@/components/ui/scroll-shadow";
import Image from "next/image";

export default function ConsultingListPage() {
  return (
    <main className="flex flex-col">
      <section className="bg-gray-50">
        <Aos>
          <div className="container mt-16 flex flex-col items-center gap-8 py-16">
            <div className="flex flex-1 flex-col items-center gap-4">
              <Badge>입시 컨설팅</Badge>
              <h1 className="text-center text-2xl font-bold leading-tight md:text-4xl">
                1:1 입시 컨설팅으로
                <br />
                미국 음대 입시 준비를 시작하세요
              </h1>
            </div>
            {/* <div className="aspect-square w-full rounded-xl bg-gray-200 md:max-w-[260px]" /> */}
            <div className="flex justify-center">
              <Image src="/images/3d-star.png" width={300} height={300} alt="별" />
            </div>
          </div>
        </Aos>
      </section>
      <section>
        <Aos>
          <div className="container mb-24 py-16">
            <h1 className="mt-32 text-center text-2xl font-bold md:text-3xl">
              미국 음대 입시 3요소 영역별 젼략 제공
            </h1>
            <h2 className="text-md mt-4 text-center font-medium text-muted-foreground md:text-lg">
              컨설팅을 통해 미국 음대 입시에 필요한 요소를 어쩌구
            </h2>
            <div className="container mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
              <div className="flex flex-col items-center rounded-2xl bg-gray-50 p-8">
                <Badge>학업성취도</Badge>
                <p className="mt-4 text-center font-medium">
                  미국 음대 입시에 필요한 3요소 중 학업성취도 영역의 상세 내용이 들어갈 공간입니다.
                </p>
              </div>
              <div className="flex flex-col items-center rounded-2xl bg-gray-50 p-8">
                <Badge>실력증명</Badge>
                <p className="mt-4 text-center font-medium">
                  미국 음대 입시에 필요한 3요소 중 학업성취도 영역의 상세 내용이 들어갈 공간입니다.
                </p>
              </div>
              <div className="flex flex-col items-center rounded-2xl bg-gray-50 p-8">
                <Badge>성장가능성</Badge>
                <p className="mt-4 text-center font-medium">
                  미국 음대 입시에 필요한 3요소 중 학업성취도 영역의 상세 내용이 들어갈 공간입니다.
                </p>
              </div>
            </div>
          </div>
        </Aos>
      </section>
      <Aos>
        <section className="mt-16 bg-gray-50 py-32">
          <div className="container flex flex-col">
            <h1 className="whitespace-pre-wrap text-center text-2xl font-bold md:text-3xl">
              {"솔직하고 담백한\n고객님들의 진심 어린 후기"}
            </h1>
            <h2 className="text-medium mt-4 text-center text-muted-foreground">
              새롭게 올라온 이용후기를 직접 읽어보고 판단해보세요.
            </h2>
          </div>
          <ScrollShadow>
            <div className="container mt-8 flex gap-4 overflow-x-auto scrollbar-hide">
              <ReviewItem />
              <ReviewItem />
              <ReviewItem />
            </div>
          </ScrollShadow>
        </section>
      </Aos>
      <Aos>
        <section className="mt-16 py-32">
          <h1 className="text-center text-2xl font-bold md:text-3xl">
            탄탄하게 구성된 32주 커리큘럼
          </h1>
        </section>
      </Aos>
      <section className="container my-24 flex justify-center">
        <Button className="h-14 w-full rounded-2xl text-base md:w-40 md:rounded-xl">
          컨설팅 신청하기
        </Button>
      </section>
    </main>
  );
}

const ReviewItem = () => {
  return (
    <div className="h-[240px] rounded-2xl bg-white p-6 max-md:min-w-[320px]">
      <p className="text-xl font-semibold">
        신상호
        <span className="ml-2 mt-2 text-sm font-normal text-muted-foreground">
          유니버스 피아노 14기
        </span>
      </p>
      <div className="mt-1 flex gap-[2px]">
        <Icon.Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
        <Icon.Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
        <Icon.Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
        <Icon.Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
        <Icon.Star className="h-4 w-4 fill-gray-100 text-gray-100" />
      </div>
      <p className="mt-6 text-muted-foreground">
        토플 초보도 접근하기 정말 쉬운 교육과정과 플랫폼을 가지고 있어요. 하지만 교육이 끝났을 때는
        쉬운 스타트와 확실한 엔딩, 저는 유니버스 피아노를 그렇게 정의할게요.
      </p>
    </div>
  );
};
