"use client";

import { CheckoutForm } from "@/app/(main)/service/detail/[id]/_components/checkout-form";
import { Dialog } from "@/components/ui/dialog";

interface CheckoutDialogProps {
  productId: string;
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
}

export const CheckoutDialog = (props: CheckoutDialogProps) => {
  return (
    <Dialog open={props.isOpen} onOpenChange={props.onOpenChange}>
      <Dialog.Content className="overflow-y-auto">
        <Dialog.Header>
          <Dialog.Title>주문하기</Dialog.Title>
        </Dialog.Header>
        <Content {...props} />
      </Dialog.Content>
    </Dialog>
  );
};

interface ContentProps extends CheckoutDialogProps {}

const Content = (props: ContentProps) => {
  return <CheckoutForm productId={props.productId} />;
};
