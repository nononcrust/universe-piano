import { PageTitle } from "@/components/layout/page-title";
import { Badge } from "@/components/ui/badge";
import { ORDER_STATUS_LABEL } from "@/constants/enum";
import { OrderStatus } from "@prisma/client";

const DUMMY_ORDER_LIST = [
  {
    id: 1,
    status: OrderStatus.PAYMENT_COMPLETED,
  },
  {
    id: 2,
    status: OrderStatus.PAYMENT_PENDING,
  },
];

export default function MyOrderListPage() {
  return (
    <main className="container pb-16">
      <PageTitle title="구매 내역" />
      <section className="mt-8 flex flex-col gap-6">
        {DUMMY_ORDER_LIST.map((order) => (
          <OrderItem key={order.id} status={order.status} />
        ))}
      </section>
    </main>
  );
}

interface OrderItemProps {
  status: OrderStatus;
}

const OrderItem = ({ status }: OrderItemProps) => {
  return (
    <div className="flex cursor-pointer flex-col">
      <p className="text-sm font-medium text-muted-foreground">독학 키트</p>
      <div className="flex items-center gap-2">
        <p className="font-medium">미국 음대 오디션에서 살아남기</p>
        <Badge variant={status === OrderStatus.PAYMENT_PENDING ? "secondary" : "default"}>
          {ORDER_STATUS_LABEL[status]}
        </Badge>
      </div>
    </div>
  );
};
