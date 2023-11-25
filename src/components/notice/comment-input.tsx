"use client";

import { useCreateAuditionComment } from "@/features/audition";
import { cn } from "@/lib/utils";
import { contentSchema } from "@/schemas/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "../ui/button";
import { Form, FormField } from "../ui/form";
import { Textarea } from "../ui/textarea";

const formSchema = z.object({
  content: contentSchema,
});

interface CommentInputProps {
  className?: string;
  auditionId: number;
}

export const CommentInput = ({ className, auditionId }: CommentInputProps) => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      content: "",
    },
  });
  console.log(form);

  const { mutate, isPending } = useCreateAuditionComment();

  const onSubmit = form.handleSubmit((data) => {
    if (isPending) return;

    mutate(
      {
        id: auditionId,
        body: {
          content: data.content,
        },
      },
      {
        onSuccess: () => {
          form.reset();
        },
      },
    );
  });

  return (
    <div className={cn("flex flex-col", className)}>
      <Form {...form}>
        <form onSubmit={onSubmit}>
          <FormField
            name="content"
            control={form.control}
            render={({ field }) => (
              <Textarea
                className="focus-visible:ring-0"
                placeholder="댓글로 내 생각을 알려주세요."
                maxLength={200}
                {...field}
              />
            )}
          />
          <div className="flex justify-end">
            <Button className="mt-4" type="submit" disabled={!form.formState.isValid}>
              댓글 달기
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};
