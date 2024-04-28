"use client";

import { ImageInput } from "@/components/shared/image-input";
import { RatingStarSelect } from "@/components/shared/rating-star-select";
import { Button } from "@/components/ui/button";
import { Dialog } from "@/components/ui/dialog";
import { Form } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { useCreateProductReview } from "@/services/product";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const MAX_FILE_SIZE = 1024 * 1024 * 5;

const formSchema = z.object({
  rating: z.number().int().min(1, "별점을 선택해주세요."),
  content: z.string().min(1, "리뷰 내용을 입력해주세요."),
  images: z
    .array(
      z.instanceof(File).refine((file) => file.size <= MAX_FILE_SIZE, {
        message: "5MB 이하의 이미지 파일을 업로드해주세요.",
      }),
    )
    .optional(),
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
          <Dialog.Title>리뷰 쓰기</Dialog.Title>
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
          rating: String(data.rating),
          content: data.content,
          images: data.images,
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
        <Form.Field
          name="images"
          control={form.control}
          render={({ field }) => (
            <Form.Item className="mt-6">
              <Form.Control>
                <ImageInput onChange={field.onChange} />
              </Form.Control>
              <Form.ErrorMessage>5MB 이하의 이미지 파일을 업로드해주세요.</Form.ErrorMessage>
            </Form.Item>
          )}
        />
        <div className="mt-8 flex justify-end gap-2">
          <Button variant="ghost" type="button" onClick={props.onClose}>
            취소
          </Button>
          <Button type="submit">작성하기</Button>
        </div>
      </form>
    </Form>
  );
};
