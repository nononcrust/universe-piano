"use client";

import { FormLayout } from "@/components/admin/form-layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { FORM } from "@/constants/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  category: z.string(),
  title: z
    .string()
    .max(100, { message: FORM.ERROR.MAX_LENGTH(100) })
    .nonempty(FORM.ERROR.REQUIRED),
  content: z
    .string()
    .max(1000, { message: FORM.ERROR.MAX_LENGTH(1000) })
    .nonempty(FORM.ERROR.REQUIRED),
});

type FormSchema = z.infer<typeof formSchema>;

interface SupportFormProps {
  mode: "create" | "update";
}

export const SupportForm = ({ mode }: SupportFormProps) => {
  const router = useRouter();

  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      content: "",
    },
  });

  const onSubmit = form.handleSubmit((data: FormSchema) => {
    // createNoticeMutation.mutate(data, {
    //   onSuccess: () => router.push(ROUTE.ADMIN.NOTICE.LIST),
    // });
  });

  return (
    <Card>
      <CardContent>
        <Form {...form}>
          <FormLayout onSubmit={onSubmit}>
            <Form.Field
              name="category"
              control={form.control}
              render={({ field }) => (
                <Form.Item>
                  <Form.Label>카테고리</Form.Label>
                  <Form.Control>
                    <Select
                      placeholder="카테고리를 선택해주세요."
                      {...field}
                      error={!!form.formState.errors.category}
                    >
                      <Select.Item value="common">일반</Select.Item>
                      <Select.Item value="account">계정</Select.Item>
                    </Select>
                  </Form.Control>
                  <Form.Description>카테고리를 선택해주세요.</Form.Description>
                </Form.Item>
              )}
            />
            <Form.Field
              name="title"
              control={form.control}
              render={({ field }) => (
                <Form.Item>
                  <Form.Label>제목</Form.Label>
                  <Form.Control>
                    <Input placeholder="제목" {...field} error={!!form.formState.errors.title} />
                  </Form.Control>
                  <Form.Description>제목을 입력해주세요.</Form.Description>
                  <Form.ErrorMessage />
                </Form.Item>
              )}
            />
            <Form.Field
              name="content"
              control={form.control}
              render={({ field }) => (
                <Form.Item>
                  <Form.Label>내용</Form.Label>
                  <Form.Control>
                    <Textarea
                      placeholder="내용"
                      {...field}
                      error={!!form.formState.errors.content}
                    />
                  </Form.Control>
                  <Form.Description>내용을 입력해주세요.</Form.Description>
                  <Form.ErrorMessage />
                </Form.Item>
              )}
            />
            <div className="flex justify-end">
              <Button className="flex-1 md:flex-initial" type="submit">
                추가
              </Button>
            </div>
          </FormLayout>
        </Form>
      </CardContent>
    </Card>
  );
};
