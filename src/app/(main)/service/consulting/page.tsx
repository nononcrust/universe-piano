import { Button } from "@/components/ui/button";

export default function ConsultingListPage() {
  return (
    <main className="flex flex-col">
      <section className="bg-gray-100">
        <div className="container my-24 flex flex-col gap-8 md:flex-row md:items-center">
          <div className="flex flex-1 flex-col gap-4">
            <p className="font-medium">입시 컨설팅</p>
            <h1 className="text-3xl font-bold">
              1:1 입시 컨설팅으로
              <br />
              미국 음대 입시 준비를 시작하세요
            </h1>
            <h2 className="text-lg font-medium text-muted-foreground">
              음대 입시 어떻게 시작할지 막막하시죠?
              <br />
              실제 입시 경험자가 직접 도와드릴게요
            </h2>
          </div>
          <div className="aspect-square w-full rounded-xl bg-gray-200 md:max-w-[260px]" />
        </div>
      </section>
      <section>
        <div className="container mb-24">
          <h1 className="mt-24 text-center text-3xl font-bold">
            미국 음대 입시 3요소 영역별 젼략 제공
          </h1>
          <h2 className="mt-4 text-center text-lg font-semibold text-muted-foreground">
            컨설팅을 통해 미국 음대 입시에 필요한 요소를 어쩌구
          </h2>
        </div>
      </section>
      <section className="container my-24 flex justify-center">
        <Button variant="secondary">컨설팅 신청하기</Button>
      </section>
    </main>
  );
}
