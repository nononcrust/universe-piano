"use client";

import { FormLayout } from "@/components/admin/form-layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Form } from "@/components/ui/form";
import { Select } from "@/components/ui/select";
import { ORDER_STATUS_LABEL } from "@/constants/enum";
import { ROUTE } from "@/constants/route";
import {
  OrderDetail,
  orderUpdateRequestSchema,
  useDeleteOrder,
  useUpdateOrder,
} from "@/services/order";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { DeleteConfirmDialog } from "./delete-confirm-dialog";

type FormSchema = z.infer<typeof orderUpdateRequestSchema>;

interface OrderFormProps {
  order: NonNullable<OrderDetail>;
}

export const OrderForm = ({ order }: OrderFormProps) => {
  const updateOrderMutation = useUpdateOrder();
  const deleteOrderMutation = useDeleteOrder();

  const router = useRouter();

  const form = useForm<FormSchema>({
    resolver: zodResolver(orderUpdateRequestSchema),
    defaultValues: {
      status: order.status ?? "",
    },
  });

  const onSubmit = form.handleSubmit((data: FormSchema) => {
    if (updateOrderMutation.isPending) return;

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
  });

  const onDelete = () => {
    if (deleteOrderMutation.isPending) return;

    deleteOrderMutation.mutate(
      { params: { id: order.id } },
      {
        onSuccess: () => {
          router.push(ROUTE.ADMIN.ORDER.LIST);
          toast.success("주문 정보가 삭제되었습니다.");
        },
      },
    );
  };

  return (
    <Card>
      <Card.Content>
        <Form {...form}>
          <FormLayout onSubmit={onSubmit}>
            <Form.Field
              name="status"
              control={form.control}
              render={({ field }) => (
                <Form.Item>
                  <Form.Label>주문 상태</Form.Label>
                  <Form.Control>
                    <Select
                      onChange={field.onChange}
                      value={String(field.value)}
                      placeholder="주문 상태 선택"
                      error={!!form.formState.errors.status}
                    >
                      {Object.entries(ORDER_STATUS_LABEL).map(([value, label]) => (
                        <Select.Item key={value} value={value}>
                          {label}
                        </Select.Item>
                      ))}
                    </Select>
                  </Form.Control>
                  <Form.Description>주문 상태를 선택해주세요.</Form.Description>
                  <Form.ErrorMessage />
                </Form.Item>
              )}
            />
            <div className="flex justify-between">
              <DeleteConfirmDialog onDelete={onDelete} />
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
      </Card.Content>
    </Card>
  );
};
