"use client";

import { ORDER_STATUS_LABEL } from "@/constants/enum";
import { ROUTE } from "@/constants/route";
import { OrderDetail, orderUpdateRequestSchema, useUpdateOrder } from "@/features/order";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
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
        { id: order.id, body: data },
        {
          onSuccess: () => {
            router.refresh();
            router.push(ROUTE.ADMIN.ORDER.LIST);
            toast.success("주문 정보가 수정되었습니다.");
          },
        },
      );
    }
  });

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
            <div className={cn("flex justify-end")}>
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
