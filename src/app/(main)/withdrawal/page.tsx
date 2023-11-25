"use client";

import { FormLayout } from "@/components/admin/form-layout";
import { PageSubtitle } from "@/components/layout/page-subtitle";
import { PageTitle } from "@/components/layout/page-title";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { ROUTE } from "@/constants/route";
import { useAuth } from "@/hooks/use-auth";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  agreed: z.boolean().refine(() => true),
});

export default function WithdrawalPage() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      agreed: false,
    },
  });

  const auth = useAuth();

  const router = useRouter();

  const onSubmit = form.handleSubmit(() => {
    if (!form.getValues("agreed")) return;

    auth.withdrawal();
    router.push(ROUTE.HOME);
  });

  return (
    <main className="container pb-16">
      <PageTitle title="회원탈퇴" />
      <PageSubtitle className="mt-16" title="탈퇴하기 전에 반드시 확인해주세요." />
      <Form {...form}>
        <FormLayout onSubmit={onSubmit}>
          <FormField
            name="agreed"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <div className="flex flex-row items-center space-x-2 space-y-0">
                  <FormControl>
                    <Checkbox
                      className="h-5 w-5 rounded-md"
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <FormLabel className="text-base">해당 내용을 모두 읽었습니다.</FormLabel>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="mt-8 flex gap-4">
            <Button type="submit" disabled={!form.getValues("agreed")}>
              탈퇴하기
            </Button>
            <Button variant="secondary" asChild>
              <Link href={ROUTE.MYPAGE.ACCOUNT}>돌아가기</Link>
            </Button>
          </div>
        </FormLayout>
      </Form>
    </main>
  );
}
