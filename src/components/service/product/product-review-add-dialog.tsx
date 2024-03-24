"use client";

import { RatingStarSelect } from "@/components/shared/rating-star-select";
import { Button } from "@/components/ui/button";
import { Dialog } from "@/components/ui/dialog";
import { Form } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { useCreateProductReview } from "@/features/product";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const formSchema = z.object({
  rating: z.number().int().min(1, "별점을 선택해주세요."),
  content: z.string().min(1, "리뷰 내용을 입력해주세요."),
});

type FormSchema = z.infer<typeof formSchema>;

interface ProductReviewDialogProps {
  productId: string;
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
  onClose: () => void;
}

export const ProductReviewAddDialog = (props: ProductReviewDialogProps) => {
  return (
    <Dialog open={props.isOpen} onOpenChange={props.onOpenChange}>
      <Dialog.Content>
        <Dialog.Header>
          <Dialog.Title>상품 리뷰 작성</Dialog.Title>
        </Dialog.Header>
        <Content {...props} />
      </Dialog.Content>
    </Dialog>
  );
};

interface ContentProps extends ProductReviewDialogProps {}

const Content = (props: ContentProps) => {
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      rating: 5,
      content: "",
    },
  });

  const createMutation = useCreateProductReview();

  const onSubmit = form.handleSubmit((data) => {
    if (createMutation.isPending) return;

    createMutation.mutate(
      {
        params: { id: props.productId },
        body: {
          rating: data.rating,
          content: data.content,
        },
      },
      {
        onSuccess: () => {
          props.onClose();
          toast.success("리뷰가 작성되었습니다.");
        },
      },
    );
  });

  return (
    <Form {...form}>
      <form onSubmit={onSubmit}>
        <Form.Field
          name="rating"
          control={form.control}
          render={({ field }) => (
            <Form.Item>
              <Form.Control>
                <RatingStarSelect {...field} />
              </Form.Control>
              <Form.ErrorMessage />
            </Form.Item>
          )}
        />
        <Form.Field
          name="content"
          control={form.control}
          render={({ field }) => (
            <Form.Item className="mt-6">
              <Form.Control>
                <Textarea
                  className="h-32"
                  maxLength={1000}
                  placeholder="리뷰를 입력해주세요."
                  {...field}
                  error={!!form.formState.errors.content}
                />
              </Form.Control>
              <Form.ErrorMessage />
            </Form.Item>
          )}
        />
        <div className="mt-8 flex justify-end gap-2">
          <Button variant="ghost" type="button" onClick={props.onClose}>
            취소
          </Button>
          <Button variant="outlined">작성하기</Button>
        </div>
      </form>
    </Form>
  );
};
