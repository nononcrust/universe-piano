"use client";

import { FormLayout } from "@/components/admin/form-layout";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { TIER_LABEL } from "@/constants/enum";
import { ROUTE } from "@/constants/route";
import { allowNumberOnly } from "@/lib/utils";
import { useUpdateUser, userRequestSchema } from "@/services/user";
import { zodResolver } from "@hookform/resolvers/zod";
import { User } from "@prisma/client";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

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
      <Card.Content>
        <div className="mt-12 flex justify-center">
          <Avatar className="h-32 w-32">
            <Avatar.Image src={user.profileImage} />
            <Avatar.Fallback />
          </Avatar>
        </div>
        <Form {...form}>
          <FormLayout onSubmit={onSubmit}>
            <Form.Field
              name="name"
              control={form.control}
              render={({ field }) => (
                <Form.Item>
                  <Form.Label>이름</Form.Label>
                  <Form.Control>
                    <Input placeholder="이름" {...field} error={!!form.formState.errors.name} />
                  </Form.Control>
                  <Form.Description>이름을 입력해주세요.</Form.Description>
                  <Form.ErrorMessage />
                </Form.Item>
              )}
            />
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
                      error={!!form.formState.errors.nickname}
                    />
                  </Form.Control>
                  <Form.Description>닉네임을 입력해주세요.</Form.Description>
                  <Form.ErrorMessage />
                </Form.Item>
              )}
            />
            <Form.Field
              name="email"
              control={form.control}
              render={({ field }) => (
                <Form.Item>
                  <Form.Label>이메일</Form.Label>
                  <Form.Control>
                    <Input placeholder="이메일" {...field} error={!!form.formState.errors.email} />
                  </Form.Control>
                  <Form.Description>이메일을 입력해주세요.</Form.Description>
                  <Form.ErrorMessage />
                </Form.Item>
              )}
            />
            <Form.Field
              name="tier"
              control={form.control}
              render={({ field }) => (
                <Form.Item>
                  <Form.Label>등급</Form.Label>
                  <Form.Control>
                    <Select placeholder="등급 선택" {...field} error={!!form.formState.errors.tier}>
                      {Object.entries(TIER_LABEL).map(([value, label]) => (
                        <Select.Item key={value} value={value}>
                          {label}
                        </Select.Item>
                      ))}
                    </Select>
                  </Form.Control>
                  <Form.Description>등급을 선택해주세요.</Form.Description>
                  <Form.ErrorMessage />
                </Form.Item>
              )}
            />
            <Form.Field
              name="point"
              control={form.control}
              render={({ field: { onChange, ...field } }) => (
                <Form.Item>
                  <Form.Label>적립금</Form.Label>
                  <Form.Control>
                    <Input
                      placeholder="적립금"
                      onChange={(e) => onChange(Number(allowNumberOnly(e.target.value)))}
                      error={!!form.formState.errors.point}
                      {...field}
                    />
                  </Form.Control>
                  <Form.Description>적립금을 입력해주세요.</Form.Description>
                  <Form.ErrorMessage />
                </Form.Item>
              )}
            />
            <div className="flex justify-between">
              <Button type="button" variant="error">
                탈퇴
              </Button>
              <Button
                variant="default"
                className="flex-1 md:flex-initial"
                type="submit"
                disabled={!form.formState.isDirty}
              >
                수정
              </Button>
            </div>
          </FormLayout>
        </Form>
      </Card.Content>
    </Card>
  );
};
