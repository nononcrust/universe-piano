"use client";

import { Icon } from "@/components/common/icon";
import { PageTitle } from "@/components/layout/page-title";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { ORDER_STATUS_LABEL } from "@/constants/enum";
import { ROUTE } from "@/constants/route";
import { useMyOrderList } from "@/features/order";
import { formatDate } from "@/lib/utils";
import { OrderStatus } from "@prisma/client";
import Link from "next/link";

export default function MyOrderListPage() {
  const { data: orders, isPending } = useMyOrderList();

  return (
    <main className="container pb-16">
      <PageTitle title="구매 내역" />
      <section className="mt-8 flex flex-col gap-8">
        {orders?.map((order) => (
          <OrderItem
            key={order.id}
            id={order.id}
            category={order.orderItems[0].product.category.name}
            productName={order.orderItems[0].product.name}
            status={order.status}
            createdAt={order.createdAt}
          />
        ))}
        {isPending &&
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
  createdAt: Date;
}

const OrderItem = ({ id, createdAt, category, productName, status }: OrderItemProps) => {
  return (
    <Link
      href={ROUTE.ORDER.DETAIL(id)}
      className="flex cursor-pointer items-center justify-between transition md:hover:translate-x-2"
    >
      <div className="flex flex-col">
        <p className="text-sm text-muted-foreground">{category}</p>
        <p className="mt-[2px] font-medium">{productName}</p>
        <div className="flex items-center gap-2">
          <p className="text-sm font-medium text-muted-foreground">{formatDate(createdAt)}</p>
          <div className="flex items-center gap-2">
            <Badge variant={status === OrderStatus.PAYMENT_PENDING ? "secondary" : "default"}>
              {ORDER_STATUS_LABEL[status]}
            </Badge>
          </div>
        </div>
      </div>
      <Icon.ChevronRight className="h-5 w-5 text-muted-foreground" />
    </Link>
  );
};

const OrderItemSkeleton = () => {
  return (
    <div className="flex flex-col gap-2">
      <Skeleton className="h-4 w-20" />
      <Skeleton className="h-5 w-80" />
      <Skeleton className="h-4 w-60" />
    </div>
  );
};

OrderItem.Skeleton = OrderItemSkeleton;
