import { Icon } from "@/components/shared/icon";
import { Button } from "@/components/ui/button";
import { ROUTE } from "@/constants/route";
import Link from "next/link";

type Context = {
  params: {
    id: string;
  };
};

export default function OrderResultPage(context: Context) {
  return (
    <main className="container flex flex-1 flex-col">
      <section className="flex flex-1 flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center">
          <CheckIcon />
          <p className="mt-8 text-center text-lg font-semibold">주문이 성공적으로 완료되었습니다</p>
        </div>
        <div className="mt-4 flex justify-center">
          <Link href={ROUTE.ORDER.DETAIL(context.params.id)}>
            <Button variant="secondary">주문 내역 확인</Button>
          </Link>
        </div>
      </section>
    </main>
  );
}

const CheckIcon = () => {
  return (
    <div className="flex h-24 w-24 items-center justify-center rounded-full bg-green-500">
      <Icon.Check className="h-14 w-14 stroke-[3px] text-white" />
    </div>
  );
};
