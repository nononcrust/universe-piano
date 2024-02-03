"use client";

import { FormLayout } from "@/components/admin/form-layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ORDER_STATUS_LABEL } from "@/constants/enum";
import { OrderDetail, orderUpdateRequestSchema, useUpdateOrder } from "@/features/order";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

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
