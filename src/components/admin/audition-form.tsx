"use client";

import { ROUTE } from "@/constants/route";
import {
  useAuditionDetail,
  useCreateAudition,
  useDeleteAudition,
  useUpdateAudition,
} from "@/features/audition";
import { cn } from "@/lib/utils";
import { contentSchema, imagesSchema, titleSchema } from "@/schemas/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import z from "zod";
import { ImageInput } from "../image-input";
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
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { DeleteConfirmDialog } from "./delete-confirm-dialog";
import { FormLayout } from "./form-layout";

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
      const body = {
        id: auditionId,
        body: data,
      };

      updateAuditionMutation.mutate(body, {
        onSuccess: () => {
          router.push(ROUTE.ADMIN.AUDITION.LIST);
          toast.success("오디션 결과가 수정되었습니다.");
        },
      });
    }
  });
  const onDelete = () => {
    if (mode === "edit" && auditionId && !deleteAuditionMutation.isPending) {
      deleteAuditionMutation.mutate(
        { id: auditionId },
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
        images: data.images.map((image) => image.url),
      });
    }
  }, [data, form, mode]);

  if (mode === "edit" && !data) return null;

  return (
    <Card>
      <CardContent>
        <Form {...form}>
          <FormLayout onSubmit={onSubmit}>
            <FormField
              name="title"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>제목</FormLabel>
                  <FormControl>
                    <Input variant="outline" placeholder="제목" {...field} />
                  </FormControl>
                  <FormDescription>제목을 입력해주세요.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="content"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>내용</FormLabel>
                  <FormControl>
                    <Textarea variant="outline" placeholder="내용" {...field} />
                  </FormControl>
                  <FormDescription>내용을 입력해주세요.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="images"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <ImageInput value={field.value || []} onChange={field.onChange} />
                  </FormControl>
                </FormItem>
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
      </CardContent>
    </Card>
  );
};
