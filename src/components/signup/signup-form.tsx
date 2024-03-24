"use client";

import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { ROUTE } from "@/constants/route";
import { SocialData, useRegister } from "@/features/auth";
import { formatPhoneNumberInput } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  nickname: z.string().min(2).max(12),
  phone: z.string().min(13).max(13),
  terms: z.boolean().refine((value) => value === true),
});

type FormSchema = z.infer<typeof formSchema>;

interface SignUpFormProps {
  initialData: SocialData;
}

export const SignUpForm = ({ initialData }: SignUpFormProps) => {
  const router = useRouter();

  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nickname: initialData.nickname ?? "",
      phone: "",
      terms: false,
    },
  });

  const registerMutation = useRegister();

  const onSubmit = form.handleSubmit((data) => {
    if (registerMutation.isPending) return;

    const body = {
      name: initialData.name,
      nickname: data.nickname,
      phone: data.phone,
      kakaoId: String(initialData.id),
      profileImage: initialData.profileImage,
      email: initialData.email,
    };

    registerMutation.mutate(
      { body },
      {
        onSuccess: () => {
          router.push(ROUTE.HOME);
        },
      },
    );
  });

  return (
    <main className="container flex max-w-md flex-col items-center pb-16">
      <h1 className="text-foreground mt-16 text-2xl font-medium md:text-3xl">회원가입</h1>
      <h2 className="mt-2 font-medium text-sub">카카오 계정으로 회원가입을 진행합니다.</h2>
      <Avatar className="mt-8 h-20 w-20">
        <Avatar.Image src={initialData.profileImage} alt="프로필 이미지" />
        <Avatar.Fallback />
      </Avatar>
      <Form {...form}>
        <form className="mt-4 flex w-full flex-col gap-8" onSubmit={onSubmit}>
          <Form.Field
            name="nickname"
            control={form.control}
            render={({ field }) => (
              <Form.Item>
                <Form.Label>닉네임</Form.Label>
                <Form.Control>
                  <Input
                    placeholder="닉네임"
                    {...field}
                    maxLength={12}
                    error={!!form.formState.errors.nickname}
                  />
                </Form.Control>
                <Form.Description>
                  닉네임 규정: 영문 이니셜 + 전화번호 끝 4자리 (예시: cms7370)
                </Form.Description>
                <Form.ErrorMessage />
              </Form.Item>
            )}
          />
          <Form.Field
            name="phone"
            control={form.control}
            render={({ field: { onChange, ...field } }) => (
              <Form.Item>
                <Form.Label>연락처</Form.Label>
                <Form.Control>
                  <Input
                    placeholder="000-0000-0000"
                    {...field}
                    onChange={(e) => onChange(formatPhoneNumberInput(e.target.value))}
                    maxLength={13}
                    error={!!form.formState.errors.phone}
                  />
                </Form.Control>
                <Form.Description>연락처를 입력해주세요.</Form.Description>
                <Form.ErrorMessage />
              </Form.Item>
            )}
          />
          <Form.Field
            control={form.control}
            name="terms"
            render={({ field }) => (
              <Form.Item className="flex flex-row items-start space-x-3 space-y-0">
                <Form.Control>
                  <Checkbox
                    checked={field.value}
                    onChange={field.onChange}
                    error={!!form.formState.errors.terms}
                  >
                    서비스 이용약관 및 개인정보 처리방침에 동의합니다.
                  </Checkbox>
                </Form.Control>
              </Form.Item>
            )}
          />
          <Button type="submit" disabled={!form.formState.isValid}>
            회원가입
          </Button>
        </form>
      </Form>
    </main>
  );
};
