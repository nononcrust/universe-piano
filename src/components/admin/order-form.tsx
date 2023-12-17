"use client";

import { ORDER_STATUS_LABEL } from "@/constants/enum";
import { OrderDetail, orderUpdateRequestSchema, useUpdateOrder } from "@/features/order";
import { useCreateSubscription, useUpdateSubscription } from "@/features/subscription";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { FormLayout } from "./form-layout";

type FormSchema = z.infer<typeof orderUpdateRequestSchema>;

interface OrderFormProps {
  order: NonNullable<OrderDetail>;
}

export const OrderForm = ({ order }: OrderFormProps) => {
  const updateOrderMutation = useUpdateOrder();
  const createSubscriptionMutation = useCreateSubscription();
  const updateSubscriptionMutation = useUpdateSubscription();

  const router = useRouter();

  const form = useForm<FormSchema>({
    resolver: zodResolver(orderUpdateRequestSchema),
    defaultValues: {
      status: order.status,
    },
  });

  const onSubmit = form.handleSubmit((data: FormSchema) => {
    if (!updateOrderMutation.isPending) {
      updateOrderMutation.mutate(
        { params: { id: order.id }, body: data },
        {
          onSuccess: () => {
            router.refresh();
            toast.success("주문 정보가 수정되었습니다.");
            form.reset();
          },
        },
      );
    }
  });

  const existingSubscription = order.user.subscriptions.find(
    (subscription) => subscription.productId === order.orderItems[0].productId,
  );

  const isSubscribedBefore =
    order.user.subscriptions.some(
      (subscription) => subscription.productId === order.orderItems[0].productId,
    ) && existingSubscription;

  const isSubscribing = !!existingSubscription && existingSubscription.endDate > new Date();

  const onStartSubscription: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault();
    if (createSubscriptionMutation.isPending || updateSubscriptionMutation.isPending) return;

    const body = {
      userId: order.user.id,
      productId: order.orderItems[0].productId,
      startDate: new Date().toISOString(),
      endDate: new Date(Date.now() + 1000 * 60 * 60 * 24 * 30 * 6).toISOString(),
    };

    if (isSubscribedBefore) {
      updateSubscriptionMutation.mutate(
        { params: { id: existingSubscription.id }, body },
        {
          onSuccess: () => {
            router.refresh();
            toast.success("구독이 시작되었습니다.");
          },
        },
      );
    }

    if (!isSubscribedBefore) {
      createSubscriptionMutation.mutate(
        { body },
        {
          onSuccess: () => {
            router.refresh();
            toast.success("구독이 시작되었습니다.");
          },
        },
      );
    }
  };

  return (
    <Card>
      <CardContent>
        <Form {...form}>
          <FormLayout onSubmit={onSubmit}>
            <FormField
              name="status"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>주문 상태</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="주문 상태 선택" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {Object.entries(ORDER_STATUS_LABEL).map(([value, label]) => (
                        <SelectItem key={value} value={value}>
                          {label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormDescription>주문 상태를 선택해주세요.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex justify-between">
              <Button onClick={onStartSubscription} disabled={isSubscribing}>
                해당 상품으로 구독 시작
              </Button>
              <Button
                className="flex-1 md:flex-initial"
                type="submit"
                disabled={!form.formState.isDirty}
              >
                수정
              </Button>
            </div>
          </FormLayout>
        </Form>
      </CardContent>
    </Card>
  );
};
