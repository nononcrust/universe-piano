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
import { ROUTE } from "@/constants/route";
import { useSession, useUpdateProfile } from "@/features/auth";
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
  const { data: session } = useSession();

  const router = useRouter();

  const updateProfileMutation = useUpdateProfile();

  const form = useForm({
    mode: "onChange",
    resolver: zodResolver(formSchema),
    defaultValues: {
      nickname: session?.user.nickname ?? "",
      email: session?.user.email ?? "",
    },
  });

  const onSubmit = form.handleSubmit((data) => {
    if (!session || updateProfileMutation.isPending) return;

    updateProfileMutation.mutate(
      { params: { id: session.user.id }, body: data },
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
                    maxLength={12}
                    placeholder="닉네임을 입력해주세요."
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  닉네임 규정: 영문 이니셜 + 전화번호 끝 4자리 (예시: cms7370)
                </FormDescription>
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
                    disabled
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex justify-end">
            <Button
              className="max-md:h-14 max-md:flex-1 max-md:rounded-2xl max-md:text-base"
              type="submit"
              disabled={!form.formState.isDirty || !form.formState.isValid}
            >
              저장하기
            </Button>
          </div>
        </FormLayout>
      </Form>
      {/* <PageSubtitle className="mt-16" title="알림 설정" />
      <div className="mt-4 flex items-center justify-between rounded-2xl border p-4">
        <div className="flex flex-col gap-1">
          <p className="font-medium">마케팅 알림</p>
          <p className="text-sm text-muted-foreground">
            유용한 소식, 정보 등을 받아볼 수 있습니다.
          </p>
        </div>
        <Switch />
      </div> */}
      <PageSubtitle className="mt-16" title="회원 탈퇴" />
      <Link href={ROUTE.WITHDRAWAL}>
        <Button variant="destructive" className="mt-8">
          탈퇴하기
        </Button>
      </Link>
    </main>
  );
}
