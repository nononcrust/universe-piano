import { Aos } from "../ui/aos";
import { Button } from "../ui/button";

export const LandingImageSection = () => {
  return (
    <section className="h-[700px] flex-1 justify-center bg-gray-100 md:justify-start">
      <Aos>
        <div className="container">
          <h1 className="whitespace-pre pt-60 text-2xl font-bold leading-relaxed">
            {"미국 음대 입시를 위한 모든 것,\n유니버스 피아노에서 찾아보세요"}
          </h1>
          <h2 className="mt-2 text-muted-foreground">
            입시 상담부터 유학 준비까지 유니버스 피아노가 함께합니다.
          </h2>
          <div className="mt-4 flex gap-4">
            <Button>무료 강의 & 전자책 받기</Button>
            <Button variant="outline">상담 문의</Button>
          </div>
        </div>
      </Aos>
    </section>
  );
};
