"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
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
      <h1 className="mt-16 text-2xl font-medium text-foreground md:text-3xl">회원가입</h1>
      <h2 className="mt-2 font-medium text-muted-foreground">
        카카오 계정으로 회원가입을 진행합니다.
      </h2>
      <Avatar className="mt-8 h-20 w-20">
        <AvatarImage src={initialData.profileImage} alt="프로필 이미지" />
        <AvatarFallback />
      </Avatar>
      <Form {...form}>
        <form className="mt-4 flex w-full flex-col gap-8" onSubmit={onSubmit}>
          <FormField
            name="nickname"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>닉네임</FormLabel>
                <FormControl>
                  <Input placeholder="닉네임" {...field} maxLength={12} />
                </FormControl>
                <FormDescription>
                  닉네임 규정: 영문 이니셜 + 전화번호 끝 4자리 (예시: cms7370)
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="phone"
            control={form.control}
            render={({ field: { onChange, ...field } }) => (
              <FormItem>
                <FormLabel>연락처</FormLabel>
                <FormControl>
                  <Input
                    placeholder="000-0000-0000"
                    {...field}
                    onChange={(e) => onChange(formatPhoneNumberInput(e.target.value))}
                    maxLength={13}
                  />
                </FormControl>
                <FormDescription>연락처를 입력해주세요.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="terms"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                <FormControl>
                  <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel>서비스 이용약관 및 개인정보 처리방침에 동의합니다.</FormLabel>
                </div>
              </FormItem>
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
