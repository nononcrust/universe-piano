import { Button } from "@/components/ui/button";

export default function OrderResultPage() {
  return (
    <main className="container pb-16">
      <section className="flex flex-col">
        <h1 className="mt-56 text-center text-lg font-semibold">
          주문이 성공적으로 완료되었습니다.
        </h1>
        <div className="mt-4 flex justify-center">
          <Button variant="secondary">주문 내역 확인</Button>
        </div>
      </section>
    </main>
  );
}
