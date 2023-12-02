"use client";

import { PageSubtitle } from "@/components/layout/page-subtitle";
import { PageTitle } from "@/components/layout/page-title";
import { Button } from "@/components/ui/button";
import { ORDER_STATUS_LABEL } from "@/constants/enum";
import { useOrderDetail } from "@/features/order";
import { formatDate } from "@/lib/utils";
import { OrderStatus } from "@prisma/client";
import { useParams } from "next/navigation";

export default function OrderDetailPage() {
  const params = useParams<{ id: string }>();

  const { data: order } = useOrderDetail(params.id);

  console.log(order);

  if (!order) return null;

  return (
    <main className="container">
      <PageTitle title="주문 상세정보" />
      <PageSubtitle className="mt-8" title="주문 정보" />
      <div className="mt-4">
        <div className="flex items-center justify-between">
          <p className="text-sm font-medium text-muted-foreground">주문번호</p>
          <p className="text-sm font-medium">{order.number}</p>
        </div>
        <div className="mt-2 flex items-center justify-between">
          <p className="text-sm font-medium text-muted-foreground">주문일시</p>
          <p className="text-sm font-medium">{formatDate(order.createdAt)}</p>
        </div>
        <div className="mt-2 flex items-center justify-between">
          <p className="text-sm font-medium text-muted-foreground">주문상태</p>
          <p className="text-sm font-medium">{ORDER_STATUS_LABEL[order.status]}</p>
        </div>
        <div className="mt-2 flex items-center justify-between">
          <p className="text-sm font-medium text-muted-foreground">결제금액</p>
          <p className="text-sm font-medium">{"111"}</p>
        </div>
      </div>
      <PageSubtitle className="mt-16" title="결제 정보" />
      {order.status !== OrderStatus.PAYMENT_COMPLETED && (
        <Button variant="secondary">주문 취소</Button>
      )}
    </main>
  );
}
