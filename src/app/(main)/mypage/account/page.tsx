"use client";

import { FormLayout } from "@/components/admin/form-layout";
import { PageSubtitle } from "@/components/layout/page-subtitle";
import { PageTitle } from "@/components/layout/page-title";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useUpdateProfile, useUserInfo } from "@/features/auth";
import { emailSchema, nicknameSchema } from "@/schemas/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const formSchema = z.object({
  nickname: nicknameSchema,
  email: emailSchema,
});

export default function AccountPage() {
  const { data: user } = useUserInfo();

  const router = useRouter();

  const updateProfileMutation = useUpdateProfile();

  const form = useForm({
    mode: "onChange",
    resolver: zodResolver(formSchema),
    defaultValues: {
      nickname: user?.nickname ?? "",
      email: user?.email ?? "",
    },
  });

  const onSubmit = form.handleSubmit((data) => {
    if (!user || updateProfileMutation.isPending) return;

    updateProfileMutation.mutate(
      { id: user.id, body: data },
      {
        onSuccess: () => {
          router.refresh();
          toast.success("프로필이 변경되었습니다.");
          form.reset({
            nickname: data.nickname,
            email: data.email,
          });
        },
      },
    );
  });

  return (
    <main className="container pb-16">
      <PageTitle title="계정 설정" />
      <PageSubtitle className="mt-8" title="프로필 변경" />
      <Form {...form}>
        <FormLayout onSubmit={onSubmit}>
          <FormField
            name="nickname"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>닉네임</FormLabel>
                <FormControl>
                  <Input maxLength={10} placeholder="김원붕" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="email"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>이메일</FormLabel>
                <FormControl>
                  <Input maxLength={50} placeholder="universe@piano.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex justify-end">
            <Button type="submit" disabled={!form.formState.isDirty || !form.formState.isValid}>
              저장
            </Button>
          </div>
        </FormLayout>
      </Form>
      <PageSubtitle className="mt-20" title="회원 탈퇴" />
      <button className="mt-8 text-sm font-medium text-destructive underline">탈퇴하기</button>
    </main>
  );
}
