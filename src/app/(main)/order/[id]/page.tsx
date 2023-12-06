"use client";

import { PageSubtitle } from "@/components/layout/page-subtitle";
import { PageTitle } from "@/components/layout/page-title";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { siteConfig } from "@/configs/site";
import { ORDER_STATUS_LABEL } from "@/constants/enum";
import { useOrderDetail } from "@/features/order";
import { formatDate } from "@/lib/utils";
import { OrderStatus } from "@prisma/client";
import { useParams } from "next/navigation";

export default function OrderDetailPage() {
  const params = useParams<{ id: string }>();

  const { data: order } = useOrderDetail({ id: params.id });

  console.log(order);

  if (!order) return null;

  return (
    <main className="container">
      <PageTitle title="주문 상세정보" />
      <PageSubtitle className="mt-8" title="상품 정보" />
      <Separator className="mt-4" />
      <div className="mt-4">
        {order.orderItems.map((orderItem) => (
          <div className="flex gap-4" key={orderItem.id}>
            <div className="h-20 w-20 rounded-md bg-gray-100" />
            <div className="flex flex-1 flex-col gap-2">
              <p className="text-sm">
                {orderItem.product.category.name} | {orderItem.product.name}
              </p>
              <p className="font-medium">{orderItem.product.price}원</p>
            </div>
          </div>
        ))}
      </div>
      <PageSubtitle className="mt-16" title="주문 정보" />
      <Separator className="mt-4" />
      <div className="mt-4 flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <p className="text-sm font-medium text-muted-foreground">주문번호</p>
          <p className="text-sm font-medium">{order.number}</p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-sm font-medium text-muted-foreground">주문일시</p>
          <p className="text-sm font-medium">{formatDate(order.createdAt)}</p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-sm font-medium text-muted-foreground">주문상태</p>
          <p className="text-sm font-medium">{ORDER_STATUS_LABEL[order.status]}</p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-sm font-medium text-muted-foreground">결제금액</p>
          <p className="text-sm font-medium">{"111"}</p>
        </div>
      </div>
      <PageSubtitle className="mt-16" title="결제 정보" />
      <Separator className="mt-4" />
      <div className="mt-4 flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <p className="text-sm font-medium text-muted-foreground">결제방법</p>
          <p className="text-sm font-medium">무통장 입금</p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-sm font-medium text-muted-foreground">예금주명</p>
          <p className="text-sm font-medium">{siteConfig.depositAccount.holder}</p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-sm font-medium text-muted-foreground">입금계좌</p>
          <p className="text-sm font-medium">
            {siteConfig.depositAccount.bank} {siteConfig.depositAccount.number}
          </p>
        </div>
      </div>
      {order.status !== OrderStatus.PAYMENT_COMPLETED && (
        <Button className="mt-16" variant="secondary">
          주문 취소
        </Button>
      )}
    </main>
  );
}
