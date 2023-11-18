"use client";

import { ROUTE } from "@/constants/route";
import { auditionRequestSchema } from "@/features/audition";
import {
  useCreateNotice,
  useDeleteNotice,
  useNoticeById,
  useUpdateNotice,
} from "@/features/notice";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import z from "zod";
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

type FormSchema = z.infer<typeof auditionRequestSchema>;

interface NoticeFormProps {
  mode: "create" | "edit";
  noticeId?: number;
}

export const NoticeForm = ({ mode, noticeId }: NoticeFormProps) => {
  const { toast } = useToast();

  const createNoticeMutation = useCreateNotice();
  const updateNoticeMutation = useUpdateNotice();
  const deleteNoticeMutation = useDeleteNotice();

  const router = useRouter();

  const { data } = useNoticeById(noticeId || 0);

  const form = useForm<FormSchema>({
    resolver: zodResolver(auditionRequestSchema),
    defaultValues: {
      title: "",
      content: "",
    },
  });

  const onSubmit = form.handleSubmit((data: FormSchema) => {
    if (mode === "create" && !createNoticeMutation.isPending) {
      createNoticeMutation.mutate(data, {
        onSuccess: () => {
          router.push(ROUTE.ADMIN.NOTICE.LIST);
          toast({
            title: "공지사항 추가 완료",
            description: "공지사항 추가가 완료되었습니다.",
          });
        },
      });
    }

    if (mode === "edit" && noticeId && !updateNoticeMutation.isPending) {
      const body = {
        id: noticeId,
        body: data,
      };

      updateNoticeMutation.mutate(body, {
        onSuccess: () => {
          router.push(ROUTE.ADMIN.NOTICE.LIST);
          toast({
            title: "공지사항 수정 완료",
            description: "공지사항 수정이 완료되었습니다.",
          });
        },
      });
    }
  });

  const onDelete = () => {
    if (mode === "edit" && noticeId && !deleteNoticeMutation.isPending) {
      deleteNoticeMutation.mutate(noticeId, {
        onSuccess: () => {
          router.push(ROUTE.ADMIN.NOTICE.LIST);
          toast({
            title: "공지사항 삭제 완료",
            description: "공지사항 삭제가 완료되었습니다.",
          });
        },
      });
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
