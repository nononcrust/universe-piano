"use client";

import { PageTitle } from "@/components/layout/page-title";
import { CheckoutDialog } from "@/components/order/checkout-dialog";
import { ProductReviewAddDialog } from "@/components/service/product/product-review-add-dialog";
import { RatingStar } from "@/components/shared/rating-star";
import { AlertDialog } from "@/components/ui/alert-dialog";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Chip } from "@/components/ui/chip";
import { useSession } from "@/features/auth";
import { useMyProductReviewList, usePurchasedProductList } from "@/features/me";
import { useDeleteProductReview, useProductDetail, useProductReviewList } from "@/features/product";
import { useDialog } from "@/hooks/use-dialog";
import { formatDate } from "@/lib/utils";
import Image from "next/image";
import { useParams } from "next/navigation";

export default function ProductDetailPage() {
  const params = useParams<{ id: string }>();

  const session = useSession();

  const { isPending: isProductDetailPending } = useProductDetail({ id: params.id });
  const { isPending: isPurchasedProductsPending } = usePurchasedProductList();

  if (isProductDetailPending) return null;

  if (session.data && isPurchasedProductsPending) return null;

  return (
    <main className="container pb-16">
      <section className="mt-5 flex flex-col gap-12 md:mt-12 md:flex-row">
        <ProductImageSection />
        <ProductOptionSection />
      </section>

      <section className="relative mt-8 flex flex-col gap-12 md:flex-row">
        <ProductInfoSection />
        <ProductAside />
      </section>
    </main>
  );
}

const ProductImageSection = () => {
  return (
    <div className="flex-1">
      <div className="flex aspect-square items-center justify-center rounded-2xl border">
        <Image
          src="/images/logo.svg"
          alt="상품 이미지"
          className="aspect-square"
          width={400}
          height={400}
        />
      </div>
    </div>
  );
};

const ProductOptionSection = () => {
  const params = useParams<{ id: string }>();

  const { data: product } = useProductDetail({ id: params.id });

  if (!product) return null;

  return (
    <div className="flex flex-1 flex-col">
      <div className="flex">
        <Chip>{product.category.name}</Chip>
      </div>
      <h1 className="mt-2 text-2xl font-medium">{product.name}</h1>
      <p className="mt-4">{product.description}</p>
      <ProductAction />
    </div>
  );
};

const ProductInfoSection = () => {
  const params = useParams<{ id: string }>();

  const productReviewAddDialog = useDialog();

  const { data: purchasedProducts } = usePurchasedProductList();

  const { data: product } = useProductDetail({ id: params.id });

  const hasPurchased = purchasedProducts?.some(
    (purchasedProduct) => purchasedProduct.id === product?.id,
  );

  return (
    <div className="flex flex-1 flex-col">
      <PageTitle title="상품 정보" />
      <div className="mt-4 basis-2/3 flex-col">
        <div className="flex flex-col gap-8">
          {Array(10)
            .fill(0)
            .map((_, index) => (
              <AspectRatio key={index} className="rounded-lg border">
                <Image src="/images/logo.svg" alt="상품 설명 이미지" fill />
              </AspectRatio>
            ))}
        </div>
      </div>
      <div className="relative">
        <PageTitle title="상품 리뷰" />
        {hasPurchased && (
          <Button
            className="absolute bottom-0 right-0"
            variant="outlined"
            onClick={productReviewAddDialog.open}
          >
            리뷰 작성하기
          </Button>
        )}
        <ProductReviewAddDialog
          productId={params.id}
          isOpen={productReviewAddDialog.isOpen}
          onOpenChange={productReviewAddDialog.onOpenChange}
          onClose={productReviewAddDialog.close}
        />
      </div>
      <ProductReviewList />
    </div>
  );
};

const ProductAside = () => {
  return (
    <aside className="basis-1/3">
      <div className="sticky top-24 flex flex-col">
        <ProductAction />
      </div>
    </aside>
  );
};

const ProductAction = () => {
  const params = useParams<{ id: string }>();

  const checkoutDialog = useDialog();

  const { data: session } = useSession();
  const { data: product } = useProductDetail({ id: params.id });
  const { data: purchasedProducts } = usePurchasedProductList();

  const hasAlreadyOrdered = purchasedProducts?.some(
    (purchasedProducts) => purchasedProducts.id === product?.id,
  );

  if (!product) return null;

  return (
    <div className="mt-8 flex flex-col gap-4">
      <div className="mt-8 flex items-center justify-between">
        <p className="font-medium">주문 금액</p>
        <p className="text-lg font-medium">{product.price.toLocaleString()}원</p>
      </div>
      {session && (
        <Button
          className="max-md:h-14 max-md:text-base"
          variant="default"
          size="large"
          onClick={checkoutDialog.open}
          disabled={!!hasAlreadyOrdered}
        >
          {hasAlreadyOrdered ? "이미 구매한 상품입니다." : "구매하기"}
        </Button>
      )}
      {!session && (
        <Button className="max-md:h-14 max-md:text-base" size="large" disabled>
          로그인 후에 구매할 수 있습니다.
        </Button>
      )}
      <CheckoutDialog
        productId={params.id}
        isOpen={checkoutDialog.isOpen}
        onOpenChange={checkoutDialog.onOpenChange}
      />
    </div>
  );
};

const ProductReviewList = () => {
  const params = useParams<{ id: string }>();
  const { data: reviews } = useProductReviewList({ id: params.id });

  if (!reviews) return null;

  return (
    <div className="mt-8 flex flex-col gap-4 divide-y">
      {reviews.map((review, index) => (
        <ProductReviewListItem
          key={index}
          reviewId={review.id}
          rating={review.rating}
          content={review.content}
          createdAt={formatDate(review.createdAt)}
          username={review.user.nickname}
          userProfileImage={review.user.profileImage}
        />
      ))}
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
}

const ProductReviewListItem = ({
  reviewId,
  rating,
  content,
  createdAt,
  username,
  userProfileImage,
}: ProductReviewListItemProps) => {
  const { data: myProductReviews } = useMyProductReviewList();

  const deleteConfirmDialog = useDialog();

  const deleteMutation = useDeleteProductReview();

  const isMyReview = myProductReviews?.some((myProductReview) => myProductReview.id === reviewId);

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
      <p className="mt-3 whitespace-pre-wrap text-[15px] text-sub">{content}</p>
    </div>
  );
};
