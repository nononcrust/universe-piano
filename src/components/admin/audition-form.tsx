"use client";

import { DeleteConfirmDialog } from "@/components/admin/delete-confirm-dialog";
import { FormLayout } from "@/components/admin/form-layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ROUTE } from "@/constants/route";
import { cn } from "@/lib/utils";
import { contentSchema, imagesSchema, titleSchema } from "@/schemas/form";
import {
  useAuditionDetail,
  useCreateAudition,
  useDeleteAudition,
  useUpdateAudition,
} from "@/services/audition";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import z from "zod";
import { ImageInput } from "../shared/image-input";

const formSchema = z.object({
  title: titleSchema,
  content: contentSchema,
  images: imagesSchema,
});

type FormSchema = z.infer<typeof formSchema>;

interface AuditionFormProps {
  mode: "create" | "edit";
  auditionId?: string;
}

export const AuditionForm = ({ mode, auditionId }: AuditionFormProps) => {
  const createAuditionMutation = useCreateAudition();
  const updateAuditionMutation = useUpdateAudition();
  const deleteAuditionMutation = useDeleteAudition();

  const router = useRouter();

  const { data } = useAuditionDetail({ id: auditionId ?? "" });

  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      content: "",
      images: [],
    },
  });

  const onSubmit = form.handleSubmit((data: FormSchema) => {
    if (mode === "create" && !createAuditionMutation.isPending) {
      createAuditionMutation.mutate(
        { body: data },
        {
          onSuccess: () => {
            router.push(ROUTE.ADMIN.AUDITION.LIST);
            toast.success("오디션 결과가 추가되었습니다.");
          },
        },
      );
    }

    if (mode === "edit" && auditionId && !updateAuditionMutation.isPending) {
      updateAuditionMutation.mutate(
        { params: { id: auditionId }, body: data },
        {
          onSuccess: () => {
            router.push(ROUTE.ADMIN.AUDITION.LIST);
            toast.success("오디션 결과가 수정되었습니다.");
          },
        },
      );
    }
  });
  const onDelete = () => {
    if (mode === "edit" && auditionId && !deleteAuditionMutation.isPending) {
      deleteAuditionMutation.mutate(
        { params: { id: auditionId } },
        {
          onSuccess: () => {
            router.push(ROUTE.ADMIN.AUDITION.LIST);
            toast.success("오디션 결과가 삭제되었습니다.");
          },
        },
      );
    }
  };

  useEffect(() => {
    if (mode === "edit" && data) {
      form.reset({
        title: data.title,
        content: data.content,
      });
    }
  }, [data, form, mode]);

  if (mode === "edit" && !data) return null;

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
                    <Input placeholder="제목" {...field} error={!!form.formState.errors} />
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
                      className="min-h-[360px]"
                      placeholder="내용"
                      error={!!form.formState.errors.content}
                      {...field}
                    />
                  </Form.Control>
                  <Form.Description>내용을 입력해주세요.</Form.Description>
                  <Form.ErrorMessage />
                </Form.Item>
              )}
            />
            {mode === "create" && (
              <Form.Field
                name="images"
                control={form.control}
                render={({ field }) => (
                  <Form.Item>
                    <Form.Control>
                      <ImageInput onChange={field.onChange} />
                    </Form.Control>
                  </Form.Item>
                )}
              />
            )}
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
