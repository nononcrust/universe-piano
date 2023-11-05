import { Aos } from "../ui/aos";
import { Button } from "../ui/button";

export const ReviewSection = () => {
  return (
    <Aos>
      <section className="container flex flex-col pt-32">
        <div className="flex justify-between">
          <h1 className="text-2xl font-bold">합격자들의 생생한 후기</h1>
        </div>
        <h2 className="mt-2 text-muted-foreground">실제 합격자들의 후기를 확인해보세요.</h2>
        <div className="mt-8 grid grid-cols-1 gap-8 text-left md:grid-cols-3">
          <ReviewItem
            author="김원붕"
            description='평소 "피아노를 배우고 싶다"는 생각이 있었지만, 어떻게 시작해야 할지 막막했습니다. 입시 상담부터 유학 준비까지..'
          />
          <ReviewItem
            author="김원붕"
            description='평소 "피아노를 배우고 싶다"는 생각이 있었지만, 어떻게 시작해야 할지 막막했습니다. 입시 상담부터 유학 준비까지..'
          />
          <ReviewItem
            author="김원붕"
            description='평소 "피아노를 배우고 싶다"는 생각이 있었지만, 어떻게 시작해야 할지 막막했습니다. 입시 상담부터 유학 준비까지..'
          />
        </div>
        <div className="mt-20 flex justify-center">
          <Button size="lg">합격자 후기 바로가기</Button>
        </div>
      </section>
    </Aos>
  );
};

interface ReviewItemProps {
  author: string;
  description: string;
}

export const ReviewItem = ({ author, description }: ReviewItemProps) => {
  return (
    <div className="flex flex-row gap-3 md:flex-col">
      <div className="aspect-square min-w-[96px] rounded-lg bg-gray-100 md:aspect-video md:w-full" />
      <div className="flex flex-1 flex-col gap-1">
        <div className="flex items-center justify-between">
          <p className="font-medium">{author}</p>
        </div>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};
