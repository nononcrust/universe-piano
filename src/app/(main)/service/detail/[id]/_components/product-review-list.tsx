import { EmptyState } from "@/components/shared/empty-state";
import { RatingStar } from "@/components/shared/rating-star";
import { AlertDialog } from "@/components/ui/alert-dialog";
import { Avatar } from "@/components/ui/avatar";
import { useDialog } from "@/hooks/use-dialog";
import { storage } from "@/lib/supabase";
import { formatDate } from "@/lib/utils";
import { useDeleteProductReview } from "@/services/product";
import Image from "next/image";
import { usePageContext } from "../_context";

export const ProductReviewList = () => {
  const { reviews } = usePageContext();

  return (
    <div className="mt-8 flex flex-col gap-4 divide-y">
      {reviews.map((review) => (
        <ProductReviewListItem
          key={review.id}
          reviewId={review.id}
          rating={review.rating}
          content={review.content}
          createdAt={formatDate(review.createdAt)}
          username={review.user.nickname}
          userProfileImage={review.user.profileImage}
          reviewImageUrl={review.imageUrls[0] ? storage.getFileUrl(review.imageUrls[0]) : null}
        />
      ))}
      {reviews.length === 0 && <EmptyState message="작성된 리뷰가 없습니다." />}
    </div>
  );
};

interface ProductReviewListItemProps {
  reviewId: string;
  rating: number;
  content: string;
  createdAt: string;
  username: string;
  userProfileImage: string;
  reviewImageUrl: string | null;
}

const ProductReviewListItem = ({
  reviewId,
  rating,
  content,
  createdAt,
  username,
  userProfileImage,
  reviewImageUrl,
}: ProductReviewListItemProps) => {
  const { myProductReviews } = usePageContext();

  const deleteConfirmDialog = useDialog();

  const deleteMutation = useDeleteProductReview();

  const isMyReview = myProductReviews.some((myProductReview) => myProductReview.id === reviewId);

  const onDelete = () => {
    if (deleteMutation.isPending) return;

    deleteMutation.mutate({ params: { id: reviewId } });
  };

  return (
    <div className="flex flex-col pt-8">
      <div className="flex justify-between">
        <div className="flex items-center">
          <Avatar className="mr-2 h-10 w-10">
            <Avatar.Image src={userProfileImage} alt={username} />
            <Avatar.Fallback />
          </Avatar>
          <div className="flex flex-col">
            <p className="text-sm font-medium">{username}</p>
            <p className="text-xs text-sub">{formatDate(createdAt)}</p>
          </div>
        </div>
        {isMyReview && (
          <button className="text-sm text-sub hover:underline" onClick={deleteConfirmDialog.open}>
            삭제
          </button>
        )}
        <AlertDialog
          open={deleteConfirmDialog.isOpen}
          onOpenChange={deleteConfirmDialog.onOpenChange}
        >
          <AlertDialog.Content>
            <AlertDialog.Header>
              <AlertDialog.Title>리뷰를 삭제할까요?</AlertDialog.Title>
            </AlertDialog.Header>
            <AlertDialog.Footer>
              <AlertDialog.Cancel>돌아가기</AlertDialog.Cancel>
              <AlertDialog.Action onClick={onDelete}>삭제하기</AlertDialog.Action>
            </AlertDialog.Footer>
          </AlertDialog.Content>
        </AlertDialog>
      </div>
      <RatingStar className="mt-2" rating={rating} />
      {reviewImageUrl && (
        <Image
          className="mt-4 rounded-xl border"
          src={reviewImageUrl}
          alt="리뷰 이미지"
          width={300}
          height={300}
        />
      )}
      <p className="mt-3 whitespace-pre-wrap text-[15px] text-sub">{content}</p>
    </div>
  );
};
