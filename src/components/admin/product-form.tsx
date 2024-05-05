"use client";

import { FormLayout } from "@/components/admin/form-layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { ROUTE } from "@/constants/route";
import { productRequestSchema, useUpdateProduct } from "@/services/product";
import { zodResolver } from "@hookform/resolvers/zod";
import { Category, Product } from "@prisma/client";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { Textarea } from "../ui/textarea";

type FormSchema = z.infer<typeof productRequestSchema>;

interface ProductFormProps {
  product: Product;
  categories: Category[];
}

export const ProductForm = ({ product, categories }: ProductFormProps) => {
  const updateProductMutation = useUpdateProduct();

  const router = useRouter();

  const form = useForm<FormSchema>({
    resolver: zodResolver(productRequestSchema),
    defaultValues: {
      name: product.name,
      category: product.categoryId,
      price: product.price,
      description: product.description,
    },
  });

  const onSubmit = form.handleSubmit((data: FormSchema) => {
    if (updateProductMutation.isPending) return;

    updateProductMutation.mutate(
      { params: { id: product.id }, body: data },
      {
        onSuccess: () => {
          router.push(ROUTE.ADMIN.PRODUCT.LIST);
          toast.success("상품 정보가 수정되었습니다.");
        },
      },
    );
  });

  return (
    <Card>
      <Card.Content>
        <Form {...form}>
          <FormLayout onSubmit={onSubmit}>
            <Form.Field
              name="name"
              control={form.control}
              render={({ field }) => (
                <Form.Item>
                  <Form.Label>상품명</Form.Label>
                  <Form.Control>
                    <Input placeholder="상품명" {...field} error={!!form.formState.errors.name} />
                  </Form.Control>
                  <Form.Description>상품명을 입력해주세요.</Form.Description>
                  <Form.ErrorMessage />
                </Form.Item>
              )}
            />
            <Form.Field
              name="description"
              control={form.control}
              render={({ field }) => (
                <Form.Item>
                  <Form.Label>설명</Form.Label>
                  <Form.Control>
                    <Textarea
                      placeholder="설명"
                      {...field}
                      error={!!form.formState.errors.description}
                    />
                  </Form.Control>
                  <Form.Description>설명을 입력해주세요.</Form.Description>
                  <Form.ErrorMessage />
                </Form.Item>
              )}
            />
            <Form.Field
              name="category"
              control={form.control}
              render={({ field }) => (
                <Form.Item>
                  <Form.Label>카테고리</Form.Label>
                  <Form.Control>
                    <Select
                      placeholder="카테고리 선택"
                      {...field}
                      error={!!form.formState.errors.category}
                    >
                      {categories.map((category) => (
                        <Select.Item key={category.id} value={category.id}>
                          {category.name}
                        </Select.Item>
                      ))}
                    </Select>
                  </Form.Control>
                  <Form.Description>카테고리를 선택해주세요.</Form.Description>
                  <Form.ErrorMessage />
                </Form.Item>
              )}
            />
            <Form.Field
              name="price"
              control={form.control}
              render={({ field }) => (
                <Form.Item>
                  <Form.Label>가격</Form.Label>
                  <Form.Control>
                    <Input placeholder="가격" {...field} error={!!form.formState.errors.price} />
                  </Form.Control>
                  <Form.Description>크루 전용 상품은 가격을 0으로 설정해주세요.</Form.Description>
                  <Form.ErrorMessage />
                </Form.Item>
              )}
            />
            <div className="flex justify-end">
              <Button
                variant="default"
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
