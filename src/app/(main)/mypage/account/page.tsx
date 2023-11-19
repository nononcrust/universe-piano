"use client";

import { FormLayout } from "@/components/admin/form-layout";
import { PageSubtitle } from "@/components/layout/page-subtitle";
import { PageTitle } from "@/components/layout/page-title";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { emailSchema, nicknameSchema } from "@/schemas/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  nickname: nicknameSchema,
  email: emailSchema,
});

export default function AccountPage() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nickname: "",
      email: "",
    },
  });

  const onSubmit = form.handleSubmit((data) => {
    console.log("user profile update data", data);
  });

  return (
    <main className="container pb-16">
      <PageTitle title="계정 설정" />
      <PageSubtitle className="mt-8" title="회원 정보 수정" />
      <Form {...form}>
        <FormLayout onSubmit={onSubmit}>
          <FormField
            name="nickname"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>닉네임</FormLabel>
                <FormControl>
                  <Input placeholder="김원붕" {...field} />
                </FormControl>
                <FormDescription>변경할 닉네임을 입력해주세요.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="nickname"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>이메일</FormLabel>
                <FormControl>
                  <Input placeholder="universe@piano.com" {...field} />
                </FormControl>
                <FormDescription>변경할 이메일을 입력해주세요.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex justify-end">
            <Button type="submit">저장</Button>
          </div>
        </FormLayout>
      </Form>
      <PageSubtitle className="mt-20" title="회원 탈퇴" />
      <button className="mt-8 text-sm font-medium text-destructive underline">탈퇴하기</button>
    </main>
  );
}
