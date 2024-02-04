"use client";

import { FormLayout } from "@/components/admin/form-layout";
import { RatingStarSelect } from "@/components/common/rating-star-select";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
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
      <DialogContent>
        <DialogHeader>
          <DialogTitle>상품 리뷰 작성</DialogTitle>
        </DialogHeader>
        <Content {...props} />
      </DialogContent>
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
      <FormLayout onSubmit={onSubmit}>
        <FormField
          name="rating"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <RatingStarSelect {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="content"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea maxLength={1000} placeholder="리뷰를 입력해주세요." {...field} />
              </FormControl>
              <FormDescription>리뷰 내용은 최소 10자 이상 입력해주세요.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-end gap-2">
          <Button variant="link" type="button" onClick={props.onClose}>
            취소
          </Button>
          <Button variant="outline">작성하기</Button>
        </div>
      </FormLayout>
    </Form>
  );
};
