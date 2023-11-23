"use client";

import { FORM } from "@/constants/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Textarea } from "../ui/textarea";
import { FormLayout } from "./form-layout";

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
    console.log(data);
  });

  return (
    <Card>
      <CardContent>
        <Form {...form}>
          <FormLayout onSubmit={onSubmit}>
            <FormField
              name="category"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>카테고리</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="카테고리를 선택해주세요." />
                      </SelectTrigger>
                    </FormControl>
                    <FormDescription>카테고리를 선택해주세요.</FormDescription>
                    <SelectContent>
                      <SelectItem value="common">일반</SelectItem>
                      <SelectItem value="account">계정</SelectItem>
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />
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
