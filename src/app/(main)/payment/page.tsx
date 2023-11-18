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
import { formatPhoneNumberInput } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  name: z.string().min(2).max(20),
  email: z.string().email(),
  phone: z.string(),
  point: z.number().int(),
  terms: z.boolean(),
});

export default function PaymentPage() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      point: 0,
      terms: false,
    },
  });

  return (
    <main className="container pb-16">
      <Form {...form}>
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
                  <Input placeholder="실명을 입력해주세요." {...field} />
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
                  <Input placeholder="이메일을 입력해주세요." {...field} />
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
        <section>
          <PageSubtitle title="결제 수단" className="mb-4 mt-16" />
          <RadioGroup defaultValue="card" className="grid grid-cols-3 gap-4">
            <div className="cursor-pointer">
              <RadioGroupItem value="card" id="card" className="peer sr-only" />
              <Label
                htmlFor="card"
                className="flex cursor-pointer flex-col items-center justify-between rounded-md border border-muted bg-popover p-4 transition hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
              >
                <Icon.CreditCard className="mb-3 h-6 w-6" />
                신용카드
              </Label>
            </div>
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
          <FormField
            name="terms"
            control={form.control}
            render={({ field }) => (
              <FormItem className="mt-16 flex flex-row items-start space-x-2 space-y-0">
                <FormControl>
                  <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel>서비스 이용약관 및 개인정보 처리방침에 동의합니다.</FormLabel>
                </div>
              </FormItem>
            )}
          />
        </section>
        <Button size="lg" className="mt-8 w-full" type="submit">
          결제하기
        </Button>
      </Form>
    </main>
  );
}

const Product = () => {
  return (
    <div className="flex gap-4">
      <div className="h-20 w-20 rounded-md bg-gray-100" />
      <div className="flex flex-1 flex-col gap-2">
        <p className="text-sm">
          [주말특가][맞춤/5%추가인하]내츄럴 콤비블라인드 롤스크린 암막 못없이 설치 19color
        </p>
        <p className="font-semibold">19,800원</p>
      </div>
    </div>
  );
};
