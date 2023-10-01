"use client";

import { noticeApi } from "@/api/notice";
import { FORM } from "@/lib/constants/form";
import { ROUTE } from "@/lib/constants/route";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
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
  mode: "create" | "update";
}

export const NoticeForm = ({ mode }: NoticeFormProps) => {
  const queryClient = useQueryClient();

  const createNoticeMutation = useMutation({
    mutationFn: noticeApi.createNotice,
    onSuccess: () => queryClient.invalidateQueries(["notice"]),
  });

  const router = useRouter();

  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      content: "",
    },
  });

  const onSubmit = form.handleSubmit((data: FormSchema) => {
    createNoticeMutation.mutate(data, {
      onSuccess: () => router.push(ROUTE.ADMIN.NOTICE.LIST),
    });
  });

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
