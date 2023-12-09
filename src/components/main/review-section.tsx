import { Icon } from "../icon";
import { ScrollShadow } from "../ui/scroll-shadow";

export const ReviewSection = () => {
  return (
    <section className="container flex flex-col pt-32">
      <div className="flex flex-col">
        {/* <h1 className="whitespace-pre-wrap text-center text-2xl font-bold md:text-3xl">
          {"솔직하고 담백한\n고객님들의 진심 어린 후기"}
        </h1>
        <h2 className="text-medium mt-4 text-center text-muted-foreground">
          새롭게 올라온 이용후기를 직접 읽어보고 판단해보세요.
        </h2> */}
        <h1 className="text-2xl font-semibold">솔직하고 담백한 후기</h1>
        <h2 className="mt-2 text-muted-foreground">
          새롭게 올라온 이용후기를 직접 읽어보고 판단해보세요.
        </h2>
      </div>
      <ScrollShadow>
        <div className="mt-8 flex gap-4 overflow-x-auto scrollbar-hide">
          <ReviewItem />
          <ReviewItem />
          <ReviewItem />
        </div>
      </ScrollShadow>
    </section>
  );
};

const ReviewItem = () => {
  return (
    <div className="h-[240px] rounded-2xl bg-gray-50 p-6 max-md:min-w-[320px]">
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
