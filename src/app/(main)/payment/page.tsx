"use client";

import { PageSubtitle } from "@/components/layouts/page-subtitle";
import { PageTitle } from "@/components/layouts/page-title";
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
import { formatPhoneNumberInput } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  phone: z.string(),
  address: z.string(),
  addressDetail: z.string(),
  zipCode: z.string(),
});

export default function PaymentPage() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    },
  });

  return (
    <main className="container pb-16">
      <PageTitle title="주문 및 결제" />
      <section className="mt-8 flex flex-col gap-4">
        <PageSubtitle title="주문자 정보" />
        <Form {...form}>
          <FormField
            control={form.control}
            name="name"
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
            control={form.control}
            name="email"
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
            control={form.control}
            name="phone"
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
        </Form>
      </section>
      <section>
        <PageSubtitle title="상품 정보" className="mt-16" />
      </section>
    </main>
  );
}

const Aside = () => {
  return (
    <aside className="border">
      <h1>결제금액</h1>
      <Button>결제하기</Button>
    </aside>
  );
};
