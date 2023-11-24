"use client";

import { Icon } from "@/components/icon";
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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { FORM } from "@/constants/form";
import { useUserInfo } from "@/features/auth";
import { formatPhoneNumberInput } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  name: z.string().min(1, { message: FORM.ERROR.REQUIRED }),
  email: z.string().min(1, { message: FORM.ERROR.REQUIRED }).email(FORM.ERROR.INVALID_EMAIL),
  phone: z
    .string()
    .min(1, { message: FORM.ERROR.REQUIRED })
    .length(13, { message: FORM.ERROR.INVALID_PHONE }),
  point: z.number().int(),
});

export default function PaymentPage() {
  const [termsChecked, setTermsChecked] = useState(false);
  const { data: user } = useUserInfo();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      point: 0,
    },
  });

  const onSubmit = form.handleSubmit((data) => {
    console.log("payment", data);
  });

  useEffect(() => {
    if (!user) return;

    form.reset({
      name: user.nickname,
      email: user.email,
      phone: user.phone,
    });
  }, [form, user]);

  return (
    <main className="container pb-16">
      <Form {...form}>
        <form onSubmit={onSubmit}>
          <PageTitle title="주문 및 결제" />
          <section className="mt-8 flex flex-col gap-4">
            <PageSubtitle title="주문자 정보" />
            <FormField
              name="name"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>이름</FormLabel>
                  <FormControl>
                    <Input variant="outline" placeholder="실명을 입력해주세요." {...field} />
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
                    <Input variant="outline" placeholder="이메일을 입력해주세요." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="phone"
              control={form.control}
              render={({ field: { onChange, ...field } }) => (
                <FormItem>
                  <FormLabel>전화번호</FormLabel>
                  <FormControl>
                    <Input
                      variant="outline"
                      placeholder="000-0000-0000"
                      onChange={(e) => onChange(formatPhoneNumberInput(e.target.value))}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </section>
          <section>
            <PageSubtitle title="상품 정보" className="mb-4 mt-16" />
            <Product />
          </section>
          <section>
            <PageSubtitle title="적립금 사용" className="mb-4 mt-16" />
            <FormField
              name="point"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>적립금</FormLabel>
                  <FormControl>
                    <div className="flex gap-2">
                      <Input className="flex-1" placeholder="0" disabled {...field} />
                      <Button variant="secondary" disabled>
                        전액 사용
                      </Button>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <p className="mt-2 text-sm">
              사용 가능한 적립금: <strong className="text-primary">0 P</strong>
            </p>
          </section>
          <section className="mt-12 flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <p className="text-sm text-muted-foreground">상품 금액</p>
              <p className="text-sm font-medium">9,900원</p>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-sm text-muted-foreground">적립금 사용</p>
              <p className="text-sm font-medium">1,200원</p>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-lg font-medium">최종 결제 금액</p>
              <p className="text-xl font-medium">8,700원</p>
            </div>
          </section>
          <section>
            <PageSubtitle title="결제 수단" className="mb-4 mt-16" />
            <RadioGroup defaultValue="card" className="grid grid-cols-3 gap-4">
              {/* <div className="cursor-pointer">
              <RadioGroupItem value="card" id="card" className="peer sr-only" />
              <Label
              htmlFor="card"
              className="flex cursor-pointer flex-col items-center justify-between rounded-md border border-muted bg-popover p-4 transition hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
              >
              <Icon.CreditCard className="mb-3 h-6 w-6" />
              신용카드
              </Label>
            </div> */}
              <div className="cursor-pointer">
                <RadioGroupItem value="deposit" id="deposit" className="peer sr-only" />
                <Label
                  htmlFor="deposit"
                  className="flex cursor-pointer flex-col items-center justify-between rounded-md border border-muted bg-popover p-4 transition hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                >
                  <Icon.CircleDollarSign className="mb-3 h-6 w-6" />
                  무통장 입금
                </Label>
              </div>
            </RadioGroup>
          </section>
          <section>
            <FormItem className="mt-16">
              <div className="flex flex-row items-start space-x-2 space-y-0">
                <FormControl>
                  <Checkbox
                    checked={termsChecked}
                    onCheckedChange={(checked) => setTermsChecked(!!checked)}
                  />
                </FormControl>
                <div className="-translate-y-[1px] space-y-1 leading-none">
                  <FormLabel>서비스 이용약관 및 개인정보 처리방침에 동의합니다.</FormLabel>
                </div>
              </div>
              <FormMessage />
            </FormItem>
          </section>
          <Button size="lg" className="mt-8 w-full" type="submit" disabled={!termsChecked}>
            결제하기
          </Button>
        </form>
      </Form>
    </main>
  );
}

const Product = () => {
  return (
    <div className="flex gap-4">
      <div className="h-20 w-20 rounded-md bg-gray-100" />
      <div className="flex flex-1 flex-col gap-2">
        <p className="text-sm">독학 키트 | 미국 음대 오디션에서 살아남는 방법</p>
        <p className="font-medium">9,900원</p>
      </div>
    </div>
  );
};
