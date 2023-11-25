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
import { Switch } from "@/components/ui/switch";
import { ROUTE } from "@/constants/route";
import { useUpdateProfile, useUserInfo } from "@/features/auth";
import { emailSchema, nicknameSchema } from "@/schemas/form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
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
          toast.success("프로필이 수정되었습니다.");
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
      <PageSubtitle className="mt-8" title="프로필 수정" />
      <Form {...form}>
        <FormLayout onSubmit={onSubmit}>
          <FormField
            name="nickname"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>닉네임</FormLabel>
                <FormControl>
                  <Input
                    variant="underline"
                    maxLength={10}
                    placeholder="닉네임을 입력해주세요."
                    {...field}
                  />
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
                  <Input
                    variant="underline"
                    maxLength={50}
                    placeholder="universe@piano.com"
                    {...field}
                  />
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
      <PageSubtitle className="mt-16" title="알림 설정" />
      <div className="mt-4 flex items-center justify-between rounded-lg border p-4">
        <div className="flex flex-col gap-1">
          <p className="font-medium">마케팅 알림</p>
          <p className="text-sm text-muted-foreground">유용한 소식, 정보 등을 받을 수 있습니다.</p>
        </div>
        <Switch />
      </div>
      <PageSubtitle className="mt-16" title="회원 탈퇴" />
      <Link href={ROUTE.WITHDRAWAL}>
        <button className="mt-8 text-sm font-medium text-destructive underline">탈퇴하기</button>
      </Link>
    </main>
  );
}
