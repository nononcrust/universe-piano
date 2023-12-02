"use client";

import { PageTitle } from "@/components/layout/page-title";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { ORDER_STATUS_LABEL } from "@/constants/enum";
import { ROUTE } from "@/constants/route";
import { useMyOrderList } from "@/features/order";
import { OrderStatus } from "@prisma/client";
import Link from "next/link";

export default function MyOrderListPage() {
  const { data: orders, isLoading } = useMyOrderList();

  return (
    <main className="container pb-16">
      <PageTitle title="구매 내역" />
      <section className="mt-8 flex flex-col gap-6">
        {orders?.map((order) => (
          <OrderItem
            key={order.id}
            id={order.id}
            category={order.orderItems[0].product.category.name}
            productName={order.orderItems[0].product.name}
            status={order.status}
          />
        ))}
        {isLoading &&
          Array(5)
            .fill(0)
            .map((_, index) => <OrderItem.Skeleton key={index} />)}
      </section>
    </main>
  );
}

interface OrderItemProps {
  id: string;
  category: string;
  productName: string;
  status: OrderStatus;
}

const OrderItem = ({ id, category, productName, status }: OrderItemProps) => {
  return (
    <Link href={ROUTE.ORDER.DETAIL(id)} className="flex cursor-pointer flex-col">
      <p className="text-sm font-medium text-muted-foreground">{category}</p>
      <div className="flex items-center gap-2">
        <p className="font-medium">{productName}</p>
        <Badge variant={status === OrderStatus.PAYMENT_PENDING ? "secondary" : "default"}>
          {ORDER_STATUS_LABEL[status]}
        </Badge>
      </div>
    </Link>
  );
};

const OrderItemSkeleton = () => {
  return (
    <div className="flex flex-col gap-2">
      <Skeleton className="h-4 w-20" />
      <Skeleton className="h-5 w-80" />
    </div>
  );
};

OrderItem.Skeleton = OrderItemSkeleton;
