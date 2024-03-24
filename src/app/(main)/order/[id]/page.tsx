"use client";

import { PageSubtitle } from "@/components/layout/page-subtitle";
import { PageTitle } from "@/components/layout/page-title";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { siteConfig } from "@/configs/site";
import { ORDER_STATUS_LABEL } from "@/constants/enum";
import { ROUTE } from "@/constants/route";
import { useDeleteOrder, useOrderDetail } from "@/features/order";
import { useDialog } from "@/hooks/use-dialog";
import { formatDate } from "@/lib/utils";
import { OrderStatus } from "@prisma/client";
import { useParams, useRouter } from "next/navigation";
import { toast } from "sonner";

export default function OrderDetailPage() {
  const orderCancelConfirmDialog = useDialog();

  const params = useParams<{ id: string }>();

  const router = useRouter();

  const { data: order } = useOrderDetail({ id: params.id });
  const deleteOrderMutation = useDeleteOrder();

  const onCancelOrderButtonClick = () => {
    if (!order) return;

    deleteOrderMutation.mutate(
      { params: { id: order.id } },
      {
        onSuccess: () => {
          toast.success("주문이 취소되었습니다.");
          router.push(ROUTE.MYPAGE.ORDER);
        },
      },
    );
  };

  if (!order) return null;

  return (
    <main className="container pb-16">
      <PageTitle title="주문 상세정보" />
      <PageSubtitle className="mt-8" title="상품 정보" />
      <Separator className="mt-4" />
      <div className="mt-4">
        {order.orderItems.map((orderItem) => (
          <div className="flex gap-4" key={orderItem.id}>
            <div className="h-20 w-20 rounded-md bg-content" />
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
          <p className="text-sm font-medium text-sub">주문번호</p>
          <p className="text-sm font-medium">{order.number}</p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-sm font-medium text-sub">주문일시</p>
          <p className="text-sm font-medium">{formatDate(order.createdAt)}</p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-sm font-medium text-sub">주문상태</p>
          <p className="text-sm font-medium">{ORDER_STATUS_LABEL[order.status]}</p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-sm font-medium text-sub">결제금액</p>
          <p className="text-sm font-medium">{"111"}</p>
        </div>
      </div>
      <PageSubtitle className="mt-16" title="결제 정보" />
      <Separator className="mt-4" />
      <div className="mt-4 flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <p className="text-sm font-medium text-sub">결제방법</p>
          <p className="text-sm font-medium">무통장 입금</p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-sm font-medium text-sub">예금주명</p>
          <p className="text-sm font-medium">{siteConfig.depositAccount.holder}</p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-sm font-medium text-sub">입금계좌</p>
          <p className="text-sm font-medium">
            {siteConfig.depositAccount.bank} {siteConfig.depositAccount.number}
          </p>
        </div>
      </div>
      {order.status === OrderStatus.PAYMENT_PENDING && (
        <Button className="mt-16" variant="outlined" onClick={orderCancelConfirmDialog.open}>
          주문 취소
        </Button>
      )}
      <AlertDialog
        open={orderCancelConfirmDialog.isOpen}
        onOpenChange={orderCancelConfirmDialog.onOpenChange}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>주문을 취소할까요?</AlertDialogTitle>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>돌아가기</AlertDialogCancel>
            <AlertDialogAction onClick={onCancelOrderButtonClick}>취소하기</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </main>
  );
}
