"use client";

import { ROUTE } from "@/constants/route";
import { useCreateAudition } from "@/features/audition";
import { useDeleteNotice, useNoticeById, useUpdateNotice } from "@/features/notice";
import { cn } from "@/lib/utils";
import { contentSchema, titleSchema } from "@/schemas/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
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
import { useToast } from "../ui/use-toast";
import { DeleteConfirmDialog } from "./delete-confirm-dialog";
import { FormLayout } from "./form-layout";

const formSchema = z.object({
  title: titleSchema,
  content: contentSchema,
});

type FormSchema = z.infer<typeof formSchema>;

interface AuditionFormProps {
  mode: "create" | "edit";
  auditionId?: number;
}

export const AuditionForm = ({ mode, auditionId }: AuditionFormProps) => {
  const [images, setImages] = useState<string[]>([]);

  const { toast } = useToast();

  const createAuditionMutation = useCreateAudition();
  const updateNoticeMutation = useUpdateNotice();
  const deleteNoticeMutation = useDeleteNotice();

  const router = useRouter();

  const { data } = useNoticeById(auditionId || 0);

  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      content: "",
    },
  });

  const onSubmit = form.handleSubmit((data: FormSchema) => {
    if (mode === "create" && !createAuditionMutation.isPending) {
      console.log("form data", data);
      createAuditionMutation.mutate(data, {
        onSuccess: () => {
          router.push(ROUTE.ADMIN.NOTICE.LIST);
          toast({
            title: "오디션 결과 추가 완료",
            description: "오디션 결과 추가가 완료되었습니다.",
          });
        },
      });
    }

    if (mode === "edit" && auditionId && !updateNoticeMutation.isPending) {
      const body = {
        noticeId: auditionId,
        body: data,
      };

      //   updateNoticeMutation.mutate(body, {
      //     onSuccess: () => {
      //       router.push(ROUTE.ADMIN.NOTICE.LIST);
      //       toast({
      //         title: "오디션 결과 수정 완료",
      //         description: "오디션 결과 수정이 완료되었습니다.",
      //       });
      //     },
      //   });
    }
  });
  const onDelete = () => {
    if (mode === "edit" && auditionId && !deleteNoticeMutation.isPending) {
      deleteNoticeMutation.mutate(auditionId, {
        onSuccess: () => {
          router.push(ROUTE.ADMIN.NOTICE.LIST);
          toast({
            title: "오디션 결과 삭제 완료",
            description: "오디션 결과 삭제가 완료되었습니다.",
          });
        },
      });
    }
  };

  // useEffect(() => {
  //   if (mode === "edit" && data) {
  //     form.reset({
  //       title: data.title,
  //       content: data.content,
  //     });
  //   }
  // }, [data, form, mode]);

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
                    <Input placeholder="제목" {...field} />
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
                    <Textarea placeholder="내용" {...field} />
                  </FormControl>
                  <FormDescription>내용을 입력해주세요.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <ImageInput />
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
