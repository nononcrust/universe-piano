"use client";

import { Button } from "@/components/ui/button";
import { Form, FormField } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { useCreateAuditionComment } from "@/features/audition";
import { cn } from "@/lib/utils";
import { contentSchema } from "@/schemas/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  content: contentSchema,
});

interface CommentInputProps {
  className?: string;
  auditionId: string;
}

export const CommentInput = ({ className, auditionId }: CommentInputProps) => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      content: "",
    },
  });

  const createAuditionCommentMutation = useCreateAuditionComment();

  const onSubmit = form.handleSubmit((data) => {
    if (createAuditionCommentMutation.isPending) return;

    createAuditionCommentMutation.mutate(
      {
        params: { id: auditionId },
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
            <Button
              className="mt-4"
              variant="outline"
              type="submit"
              disabled={!form.formState.isValid}
            >
              댓글 달기
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};
