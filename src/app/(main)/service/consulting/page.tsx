import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function ConsultingListPage() {
  return (
    <main className="flex flex-col">
      <section className="bg-gray-100">
        <div className="container mt-16 flex flex-col items-center gap-8">
          <div className="flex flex-1 flex-col items-center gap-4">
            <Badge>입시 컨설팅</Badge>
            <h1 className="text-center text-3xl font-bold leading-tight md:text-4xl">
              1:1 입시 컨설팅으로
              <br />
              미국 음대 입시 준비를 시작하세요
            </h1>
          </div>
          {/* <div className="aspect-square w-full rounded-xl bg-gray-200 md:max-w-[260px]" /> */}
        </div>
        <div className="flex justify-center">
          <Image src="/images/3d-star.png" width={300} height={300} alt="star" />
        </div>
      </section>
      <section>
        <div className="container mb-24">
          <h1 className="mt-24 text-center text-3xl font-bold">
            미국 음대 입시 3요소 영역별 젼략 제공
          </h1>
          <h2 className="mt-4 text-center text-lg font-medium text-muted-foreground">
            컨설팅을 통해 미국 음대 입시에 필요한 요소를 어쩌구
          </h2>
          <div className="container mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
            <div className="flex flex-col items-center rounded-2xl bg-gray-100 p-8">
              <Badge>학업성취도</Badge>
              <p className="mt-4 text-center font-medium">
                미국 음대 입시에 필요한 3요소 중 학업성취도 영역의 상세 내용이 들어갈 공간입니다.
              </p>
            </div>
            <div className="flex flex-col items-center rounded-2xl bg-gray-100 p-8">
              <Badge>실력증명</Badge>
              <p className="mt-4 text-center font-medium">
                미국 음대 입시에 필요한 3요소 중 학업성취도 영역의 상세 내용이 들어갈 공간입니다.
              </p>
            </div>
            <div className="flex flex-col items-center rounded-2xl bg-gray-100 p-8">
              <Badge>성장가능성</Badge>
              <p className="mt-4 text-center font-medium">
                미국 음대 입시에 필요한 3요소 중 학업성취도 영역의 상세 내용이 들어갈 공간입니다.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container mt-16 flex flex-col items-center">
          <h1 className="text-center text-3xl font-bold">수강생들의 생생한 후기</h1>
        </div>
      </section>
      <section className="container my-24 flex justify-center">
        <Button className="h-12 w-40 rounded-xl text-base">컨설팅 신청하기</Button>
      </section>
    </main>
  );
}
