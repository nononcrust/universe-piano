"use client";

import { PageTitle } from "@/components/layout/page-title";
import { CheckoutDialog } from "@/components/order/checkout-dialog";
import { ProductReviewAddDialog } from "@/components/service/product/product-review-add-dialog";
import { ColoredIcon } from "@/components/shared/colored-icon";
import { EmptyState } from "@/components/shared/empty-state";
import { RatingStar } from "@/components/shared/rating-star";
import { Accordion } from "@/components/ui/accordion";
import { AlertDialog } from "@/components/ui/alert-dialog";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Chip } from "@/components/ui/chip";
import { CATEGORY } from "@/constants/enum";
import { useDialog } from "@/hooks/use-dialog";
import { storage } from "@/lib/supabase";
import { formatDate } from "@/lib/utils";
import { useSession } from "@/services/auth";
import { useMyProductReviewList, usePurchasedProductList } from "@/services/me";
import { useDeleteProductReview, useProductDetail, useProductReviewList } from "@/services/product";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function ProductDetailPage() {
  return (
    <main className="container pb-16">
      <section className="mt-5 flex flex-col gap-12 md:mt-12 md:flex-row">
        <ProductImageSection />
        <ProductOptionSection />
      </section>
      <section className="relative mt-8 flex justify-center">
        <ProductInfoSection />
      </section>
    </main>
  );
}

const ProductImageSection = () => {
  const params = useParams<{ id: string }>();

  const { data: product } = useProductDetail({ id: params.id });

  if (!product) return null;

  return (
    <div className="flex-1">
      <div className="flex aspect-square items-center justify-center rounded-2xl border">
        <Image
          src={storage.getFileUrl(product.images[0].url)}
          alt="썸네일 이미지"
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
  const { data: reviews } = useProductReviewList({ id: params.id });

  const { data: product } = useProductDetail({ id: params.id });

  const hasPurchased = purchasedProducts?.some(
    (purchasedProduct) => purchasedProduct.id === product?.id,
  );

  if (!product) return null;

  return (
    <div className="flex w-full flex-col items-center">
      <div className="flex w-full border-b py-4">
        <PageTitle title="상세 정보" />
      </div>
      <div className="flex w-full max-w-4xl flex-1 flex-col">
        <div className="mt-4 flex max-w-4xl flex-col items-center">
          <Image
            unoptimized
            priority
            width={896}
            height={4000}
            className="h-auto w-full rounded-lg"
            src={storage.getFileUrl(product.images[1].url)}
            alt="상세 정보 이미지"
          />
        </div>
        {product?.faqs.length > 0 && (
          <div>
            <PageTitle title="Q&A" />
            <Accordion className="mt-4" type="single" collapsible>
              {product?.faqs.map((faq, index) => (
                <Accordion.Item key={index} value={String(index)} className="ml-2 md:ml-0">
                  <Accordion.Trigger>
                    <div className="my-1 flex gap-2">
                      <p className="mr-4 flex-1 text-left">
                        {index + 1}. {faq.title}
                      </p>
                    </div>
                  </Accordion.Trigger>
                  <Accordion.Content className="ml-1 whitespace-pre-wrap">
                    {faq.content}
                  </Accordion.Content>
                </Accordion.Item>
              ))}
            </Accordion>
          </div>
        )}
        {/* TODO: 임시 링크 삭제 */}
        {product.category.name === CATEGORY.PARTIAL_CONSULTING && (
          <div className="flex flex-col items-center pb-[120px]">
            <div className="rounded-full bg-content-light p-4">
              <ColoredIcon.Support className="size-8" />
            </div>
            <p className="mt-4 text-xl font-semibold">서류 대행 관련 문의</p>
            <p className="mt-2 text-sub">
              서류 대행 관련 문의사항은 아래 링크를 통해 카카오톡 오픈채팅으로 문의해주세요.
            </p>
            <Link
              className="mt-8 flex items-center gap-4 text-nowrap rounded-full bg-primary px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-primary-dark"
              href="https://open.kakao.com/o/sy3BCAif"
              target="_blank"
            >
              서류 대행 문의하기
            </Link>
          </div>
        )}
        <div className="relative">
          <PageTitle title="리뷰">
            {reviews && <span className="ml-2 text-primary">{reviews.length}</span>}
          </PageTitle>
          {hasPurchased && (
            <Button
              className="absolute bottom-0 right-0"
              variant="outlined"
              onClick={productReviewAddDialog.open}
            >
              리뷰 쓰기
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
    </div>
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

  if (!product || !purchasedProducts) return null;

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
      {reviews.map((review) => (
        <ProductReviewListItem
          key={review.id}
          reviewId={review.id}
          rating={review.rating}
          content={review.content}
          createdAt={formatDate(review.createdAt)}
          username={review.user.nickname}
          userProfileImage={review.user.profileImage}
          reviewImageUrl={storage.getFileUrl(review.images[0]?.url)}
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
  reviewImageUrl?: string;
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
