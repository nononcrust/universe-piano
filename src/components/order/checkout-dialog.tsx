"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { CheckoutForm } from "./checkout-form";

interface CheckoutDialogProps {
  productId: string;
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
}

export const CheckoutDialog = (props: CheckoutDialogProps) => {
  return (
    <Dialog open={props.isOpen} onOpenChange={props.onOpenChange}>
      <DialogContent className="h-5/6 overflow-y-auto">
        <DialogHeader>
          <DialogTitle>주문하기</DialogTitle>
        </DialogHeader>
        <Content {...props} />
      </DialogContent>
    </Dialog>
  );
};

interface ContentProps extends CheckoutDialogProps {}

const Content = (props: ContentProps) => {
  return <CheckoutForm productId={props.productId} />;
};
