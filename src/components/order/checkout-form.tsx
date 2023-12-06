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
import { ROUTE } from "@/constants/route";
import { useSession } from "@/features/auth";
import { useOrderDetail, useUpdateOrder } from "@/features/order";
import { allowNumberOnly, defaultZero, limitMaxNumber, trimLeadingZeros } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { OrderStatus } from "@prisma/client";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  point: z.string(),
});

export const CheckoutForm = () => {
  const [termsChecked, setTermsChecked] = useState(false);

  const { data: session } = useSession();

  const params = useParams<{ id: string }>();

  const router = useRouter();

  const { data: order } = useOrderDetail({ id: params.id });

  const updateOrderMutation = useUpdateOrder();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      point: "0",
    },
  });

  const onAllPointClick: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    if (!session || !order) return;
    event.preventDefault();

    form.setValue("point", String(Math.min(session.user.point, order.orderItems[0].product.price)));
  };

  const onSubmit = form.handleSubmit((data) => {
    if (updateOrderMutation.isPending) return;

    updateOrderMutation.mutate(
      {
        id: params.id,
        body: {
          status: OrderStatus.PAYMENT_PENDING,
          point: Number(data.point),
        },
      },
      {
        onSuccess: () => {
          router.push(ROUTE.ORDER.RESULT(params.id));
        },
      },
    );
  });

  if (!session || !order) return null;

  const user = session.user;
  const productsPrice = order.orderItems.reduce((acc, cur) => acc + cur.product.price, 0);
  const point = form.watch("point");
  const totalPrice = productsPrice - Number(point);

  return (
    <main className="container pb-16">
      <Form {...form}>
        <form onSubmit={onSubmit}>
          <PageTitle title="주문 및 결제" />
          <section className="mt-8 flex flex-col gap-4">
            <PageSubtitle title="주문자 정보" />
            {/* <FormField
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
            /> */}
          </section>
          <section>
            <PageSubtitle title="상품 정보" className="mb-4 mt-16" />
            {order.orderItems.map((orderItem) => (
              <div className="flex gap-4" key={orderItem.id}>
                <div className="h-20 w-20 rounded-md bg-gray-100" />
                <div className="flex flex-1 flex-col gap-2">
                  <p className="text-sm">
                    {orderItem.product.category.name} | {orderItem.product.name}
                  </p>
                  <p className="font-medium">{orderItem.product.price}원</p>
                </div>
              </div>
            ))}
          </section>
          <section>
            <PageSubtitle title="적립금 사용" className="mb-4 mt-16" />
            <FormField
              name="point"
              control={form.control}
              render={({ field: { onChange, ...field } }) => (
                <FormItem>
                  <FormLabel>적립금</FormLabel>
                  <FormControl>
                    <div className="flex gap-2">
                      <Input
                        className="flex-1"
                        placeholder="적립금을 입력해주세요."
                        disabled={user.point === 0}
                        {...field}
                        onChange={(e) =>
                          onChange(
                            limitMaxNumber(
                              defaultZero(trimLeadingZeros(allowNumberOnly(e.target.value))),
                              Math.min(user.point, productsPrice),
                            ),
                          )
                        }
                      />
                      <Button
                        variant="secondary"
                        disabled={user.point === 0}
                        onClick={onAllPointClick}
                      >
                        전액 사용
                      </Button>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <p className="mt-2 text-sm font-medium">
              사용 가능한 적립금: <strong className="text-primary">{user.point} P</strong>
            </p>
          </section>
          <section className="mt-12 flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <p className="text-sm text-muted-foreground">상품 금액</p>
              <p className="text-sm font-medium">{productsPrice?.toLocaleString()}원</p>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-sm text-muted-foreground">적립금 사용</p>
              <p className="text-sm font-medium">{point.toLocaleString()}원</p>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-lg font-medium">최종 결제 금액</p>
              <p className="text-xl font-medium">{totalPrice.toLocaleString()}원</p>
            </div>
          </section>
          <section>
            <PageSubtitle title="결제 수단" className="mb-4 mt-16" />
            <RadioGroup defaultValue="deposit" className="grid grid-cols-3 gap-4">
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
          <Button
            size="lg"
            className="mt-8 w-full max-md:h-14 max-md:rounded-2xl max-md:text-base"
            type="submit"
            disabled={!termsChecked}
          >
            결제하기
          </Button>
        </form>
      </Form>
    </main>
  );
};
