"use client";

import { FormLayout } from "@/components/admin/form-layout";
import { PageSubtitle } from "@/components/layout/page-subtitle";
import { PageTitle } from "@/components/layout/page-title";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
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
          <div className="mt-8 flex flex-col gap-4 md:flex-row">
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button
                  className="max-md:h-14 max-md:rounded-2xl max-md:text-base"
                  disabled={!form.getValues("agreed")}
                >
                  탈퇴하기
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>정말로 탈퇴하시겠습니까?</AlertDialogTitle>
                  <AlertDialogDescription>
                    탈퇴한 계정은 복구할 수 없습니다. 신중히 결정해주세요.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>돌아가기</AlertDialogCancel>
                  <AlertDialogAction type="submit">탈퇴하기</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>

            <Button
              className="max-md:h-14 max-md:rounded-2xl max-md:text-base"
              variant="secondary"
              asChild
            >
              <Link href={ROUTE.MYPAGE.ACCOUNT}>돌아가기</Link>
            </Button>
          </div>
        </FormLayout>
      </Form>
    </main>
  );
}
