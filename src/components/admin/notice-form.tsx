"use client";

import { FORM } from "@/constants/form";
import { ROUTE } from "@/constants/route";
import { useCreateNotice, useDeleteNotice, useUpdateNotice } from "@/features/notice";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
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
import { DeleteButton } from "./delete-button";
import { FormLayout } from "./form-layout";

const formSchema = z.object({
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

interface NoticeFormProps {
  mode: "create" | "edit";
  initialData?: FormSchema;
  noticeId?: number;
}

export const NoticeForm = ({ mode, initialData, noticeId }: NoticeFormProps) => {
  const { toast } = useToast();

  const createNoticeMutation = useCreateNotice();
  const updateNoticeMutation = useUpdateNotice();
  const deleteNoticeMutation = useDeleteNotice();

  const router = useRouter();

  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: initialData || { title: "", content: "" },
  });

  const onSubmit = form.handleSubmit((data: FormSchema) => {
    if (mode === "create" && !createNoticeMutation.isPending) {
      createNoticeMutation.mutate(data, {
        onSuccess: () => router.push(ROUTE.ADMIN.NOTICE.LIST),
      });
    }

    if (mode === "edit" && noticeId && !updateNoticeMutation.isPending) {
      const body = {
        noticeId: noticeId,
        body: data,
      };

      updateNoticeMutation.mutate(body, {
        onSuccess: () => router.push(ROUTE.ADMIN.NOTICE.LIST),
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
              {mode === "edit" && <DeleteButton onDelete={onDelete} />}
              <Button className="flex-1 md:flex-initial" type="submit">
                {mode === "create" ? "추가" : "수정"}
              </Button>
            </div>
          </FormLayout>
        </Form>
      </CardContent>
    </Card>
  );
};
