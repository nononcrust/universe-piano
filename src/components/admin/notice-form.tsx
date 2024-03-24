"use client";

import { DeleteConfirmDialog } from "@/components/admin/delete-confirm-dialog";
import { FormLayout } from "@/components/admin/form-layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ROUTE } from "@/constants/route";
import { auditionRequestSchema } from "@/features/audition";
import { useCreateNotice, useDeleteNotice, useUpdateNotice } from "@/features/notice";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { Notice } from "@prisma/client";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import z from "zod";

type FormSchema = z.infer<typeof auditionRequestSchema>;

interface NoticeFormProps {
  mode: "create" | "edit";
  notice?: Notice;
}

export const NoticeForm = ({ mode, notice }: NoticeFormProps) => {
  const createNoticeMutation = useCreateNotice();
  const updateNoticeMutation = useUpdateNotice();
  const deleteNoticeMutation = useDeleteNotice();

  const router = useRouter();

  const form = useForm<FormSchema>({
    resolver: zodResolver(auditionRequestSchema),
    defaultValues: {
      title: notice?.title ?? "",
      content: notice?.content ?? "",
    },
  });

  const onSubmit = form.handleSubmit((data: FormSchema) => {
    if (mode === "create" && !createNoticeMutation.isPending) {
      createNoticeMutation.mutate(
        { body: data },
        {
          onSuccess: () => {
            router.refresh();
            router.push(ROUTE.ADMIN.NOTICE.LIST);
            toast.success("공지사항이 추가되었습니다.");
          },
        },
      );
    }

    if (mode === "edit" && notice?.id && !updateNoticeMutation.isPending) {
      updateNoticeMutation.mutate(
        { params: { id: notice.id }, body: data },
        {
          onSuccess: () => {
            router.refresh();
            router.push(ROUTE.ADMIN.NOTICE.LIST);
            toast.success("공지사항이 수정되었습니다.");
          },
        },
      );
    }
  });

  const onDelete = () => {
    if (mode === "edit" && notice?.id && !deleteNoticeMutation.isPending) {
      deleteNoticeMutation.mutate(
        { params: { id: notice.id } },
        {
          onSuccess: () => {
            router.refresh();
            router.push(ROUTE.ADMIN.NOTICE.LIST);
            toast.success("공지사항이 삭제되었습니다.");
          },
        },
      );
    }
  };

  return (
    <Card>
      <Card.Content>
        <Form {...form}>
          <FormLayout onSubmit={onSubmit}>
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
            <div className={cn("flex gap-4", mode === "edit" ? "justify-between" : "justify-end")}>
              {mode === "edit" && <DeleteConfirmDialog onDelete={onDelete} />}
              <Button
                className="flex-1 md:flex-initial"
                type="submit"
                disabled={mode === "edit" && !form.formState.isDirty}
              >
                {mode === "create" ? "추가" : "수정"}
              </Button>
            </div>
          </FormLayout>
        </Form>
      </Card.Content>
    </Card>
  );
};
