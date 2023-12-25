"use client";

import { TIER_LABEL } from "@/constants/enum";
import { ROUTE } from "@/constants/route";
import { useUpdateUser, userRequestSchema } from "@/features/user";
import { allowNumberOnly, cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { User } from "@prisma/client";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { FormLayout } from "./form-layout";

type FormSchema = z.infer<typeof userRequestSchema>;

interface UserFormProps {
  user: User;
}

export const UserForm = ({ user }: UserFormProps) => {
  const updateUserMutation = useUpdateUser();

  const router = useRouter();

  const form = useForm<FormSchema>({
    resolver: zodResolver(userRequestSchema),
    defaultValues: {
      name: user.name,
      nickname: user.nickname,
      email: user.email,
      role: user.role,
      tier: user.tier,
      point: user.point,
    },
  });

  const onSubmit = form.handleSubmit((data: FormSchema) => {
    if (updateUserMutation.isPending) return;

    updateUserMutation.mutate(
      { params: { id: user.id }, body: data },
      {
        onSuccess: () => {
          router.refresh();
          router.push(ROUTE.ADMIN.USER.LIST);
          toast.success("유저 정보가 수정되었습니다.");
        },
      },
    );
  });

  return (
    <Card>
      <CardContent>
        <div className="mt-12 flex justify-center">
          <Avatar className="h-32 w-32">
            <AvatarImage src={user.profileImage} />
            <AvatarFallback />
          </Avatar>
        </div>
        <Form {...form}>
          <FormLayout onSubmit={onSubmit}>
            <FormField
              name="name"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>이름</FormLabel>
                  <FormControl>
                    <Input placeholder="이름" {...field} />
                  </FormControl>
                  <FormDescription>이름을 입력해주세요.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="nickname"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>닉네임</FormLabel>
                  <FormControl>
                    <Input placeholder="닉네임" {...field} />
                  </FormControl>
                  <FormDescription>닉네임을 입력해주세요.</FormDescription>
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
                    <Input placeholder="이메일" {...field} />
                  </FormControl>
                  <FormDescription>이메일을 입력해주세요.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="tier"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>등급</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="등급 선택" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {Object.entries(TIER_LABEL).map(([value, label]) => (
                        <SelectItem key={value} value={value}>
                          {label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormDescription>등급을 선택해주세요.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="point"
              control={form.control}
              render={({ field: { onChange, ...field } }) => (
                <FormItem>
                  <FormLabel>적립금</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="적립금"
                      onChange={(e) => onChange(Number(allowNumberOnly(e.target.value)))}
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>적립금을 입력해주세요.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className={cn("flex justify-end")}>
              <Button
                className="flex-1 md:flex-initial"
                type="submit"
                disabled={!form.formState.isDirty}
              >
                수정
              </Button>
            </div>
          </FormLayout>
        </Form>
      </CardContent>
    </Card>
  );
};
