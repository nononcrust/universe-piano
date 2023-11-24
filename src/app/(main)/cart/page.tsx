import { CartItem } from "@/components/cart/cart-item";
import { PageTitle } from "@/components/layout/page-title";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { ROUTE } from "@/constants/route";
import Link from "next/link";

const DUMMY_CART_ITEM_LIST = Array(10).fill(0);

export default function CartPage() {
  return (
    <main className="container pb-16">
      <PageTitle title="장바구니" />
      <div className="mt-8 flex items-center gap-2">
        <Checkbox />
        <p>모두선택</p>
      </div>
      <section className="mt-4 flex flex-col gap-4 md:flex-row">
        <div className="flex flex-col">
          <div className="flex flex-1 flex-col gap-4">
            {DUMMY_CART_ITEM_LIST.map((_, index) => (
              <CartItem key={index} />
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <PriceSection />
          <Button size="lg" className="font-medium" asChild>
            <Link href={ROUTE.PAYMENT}>구매하기</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}

const PriceSection = () => {
  return (
    <div className="flex min-w-[280px] flex-col gap-2 rounded-lg border p-4">
      <div className="flex justify-between">
        <p className="text-sm text-gray-500">총 상품금액</p>
        <p className="font-medium">54,300원</p>
      </div>
      <div className="flex justify-between">
        <p className="text-sm text-gray-500">적립금 사용</p>
        <p className="font-medium">-3,200원</p>
      </div>
      <div className="mt-4 flex justify-between">
        <p className="text-lg font-medium">결제금액</p>
        <p className="text-2xl font-medium">51,100원</p>
      </div>
    </div>
  );
};
