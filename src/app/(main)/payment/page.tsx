import { PageTitle } from "@/components/layouts/page-title";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function PaymentPage() {
  return (
    <main className="container pb-16">
      <PageTitle title="주문 및 결제" />
      <h1>주문자 정보</h1>
      <Input />
      <h1>주문상품</h1>
    </main>
  );
}

const Aside = () => {
  return (
    <aside className="border">
      <h1>결제금액</h1>
      <Button>결제하기</Button>
    </aside>
  );
};
