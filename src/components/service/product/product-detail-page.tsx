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
import { siteConfig } from "@/configs/site";
import { CATEGORY } from "@/constants/enum";
import { useSession } from "@/features/auth/use-session";
import { useDialog } from "@/hooks/use-dialog";
import { createContextFactory } from "@/lib/context";
import { storage } from "@/lib/supabase";
import { formatDate } from "@/lib/utils";
import { useMyProductReviewList, usePurchasedProductList } from "@/services/me";
import { useDeleteProductReview, useProductDetail, useProductReviewList } from "@/services/product";
import { Role } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

export const ProductDetailPage = () => {
  return (
    <PageContextProvider>
      <main className="container pb-16">
        <section className="mt-5 flex flex-col gap-12 md:mt-12 md:flex-row">
          <ProductImageSection />
          <ProductOptionSection />
        </section>
        <section className="relative mt-8 flex justify-center">
          <ProductInfoSection />
        </section>
      </main>
    </PageContextProvider>
  );
};

const ProductImageSection = () => {
  const { product } = usePageContext();

  return (
    <div className="flex-1">
      <div className="relative flex aspect-square items-center justify-center overflow-hidden rounded-2xl border">
        <Image
          fill
          src={storage.getFileUrl(product.thumbnailUrl)}
          alt="썸네일 이미지"
          className="aspect-square"
        />
      </div>
    </div>
  );
};

const ProductOptionSection = () => {
  const { product } = usePageContext();

  const isCrewOnly = product.price === 0;

  return (
    <div className="flex flex-1 flex-col">
      <div className="flex gap-2">
        <Chip>{product.category.name}</Chip>
        {isCrewOnly && <Chip color="red">크루 전용</Chip>}
      </div>
      <h1 className="mt-2 text-2xl font-medium">{product.name}</h1>
      <p className="mt-4 whitespace-pre-wrap">{product.description}</p>
      <ProductAction />
    </div>
  );
};

const ProductInfoSection = () => {
  const productReviewAddDialog = useDialog();

  const { session } = useSession();

  const { product, reviews } = usePageContext();

  return (
    <div className="flex w-full flex-col items-center">
      <div className="flex w-full border-b py-4">
        <PageTitle title="상세 정보" />
      </div>
      <div className="flex w-full max-w-4xl flex-1 flex-col">
        <div className="mt-4 flex max-w-4xl flex-col items-center">
          {product.detailImageUrls.map((detailImageUrl) => (
            <Image
              key={detailImageUrl}
              unoptimized
              priority
              width={896}
              height={4000}
              className="h-auto w-full rounded-lg"
              src={storage.getFileUrl(detailImageUrl)}
              alt="상세 정보 이미지"
            />
          ))}
        </div>
        {product.faqs.length > 0 && (
          <div>
            <PageTitle title="Q&A" />
            <Accordion className="mt-4" type="single" collapsible>
              {product.faqs.map((faq, index) => (
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
        {/* TODO: 임시 링크 삭제  */}
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
              href={siteConfig.links.kakao}
              target="_blank"
            >
              서류 대행 문의하기
            </Link>
          </div>
        )}
        {/* TODO: 하드코딩 수정  */}
        {product.price === 0 && (
          <div className="mt-16 flex flex-col items-center justify-center">
            <p className="mt-2 text-sub">
              크루 가입 문의는 아래 링크를 통해 카카오톡 오픈채팅으로 문의해주세요.
            </p>
            <Link
              className="mt-8 flex items-center gap-4 text-nowrap rounded-full bg-primary px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-primary-dark"
              href={siteConfig.links.kakao}
            >
              크루 가입 문의
            </Link>
          </div>
        )}
        <div className="relative">
          <PageTitle title="리뷰">
            {reviews && <span className="ml-2 text-primary">{reviews.length}</span>}
          </PageTitle>
          {session && (
            <Button
              className="absolute bottom-0 right-0"
              variant="outlined"
              onClick={productReviewAddDialog.open}
            >
              리뷰 쓰기
            </Button>
          )}
          <ProductReviewAddDialog
            productId={product.id}
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
  const { product, purchasedProducts } = usePageContext();

  const checkoutDialog = useDialog();

  const { session } = useSession();

  const hasAlreadyOrdered = purchasedProducts.some(
    (purchasedProducts) => purchasedProducts.id === product.id,
  );

  const isCrewOnly = product.price === 0;
  const shouldHidePrice = product.isPriceHidden && !session;

  if (isCrewOnly) {
    return (
      <div className="mt-8 flex flex-col gap-4">
        {session?.user.role !== Role.CREW && (
          <>
            <div className="mt-8 flex items-center justify-between">
              <p className="font-medium">크루 가입 후 평생 소장하세요 🙌</p>
            </div>
            <Button className="max-md:h-14 max-md:text-base" variant="default" size="large" asChild>
              <Link href={siteConfig.links.kakao}>유니버스 피아노 크루 가입하기</Link>
            </Button>
          </>
        )}
      </div>
    );
  }

  return (
    <div className="mt-8 flex flex-col gap-4">
      {!shouldHidePrice && (
        <div className="mt-8 flex items-center justify-between">
          <p className="font-medium">주문 금액</p>
          <p className="text-lg font-medium">{product.price.toLocaleString()}원</p>
        </div>
      )}
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

const PageContextProvider = ({ children }: { children: React.ReactNode }) => {
  const params = useParams<{ id: string }>();

  const { data: product } = useProductDetail({ id: params.id });
  const { data: reviews } = useProductReviewList({ id: params.id });
  const { data: purchasedProducts } = usePurchasedProductList();
  const { data: myProductReviews } = useMyProductReviewList();

  if (!product || !reviews || !purchasedProducts || !myProductReviews) return null;

  const value = {
    product,
    reviews,
    purchasedProducts,
    myProductReviews,
  };

  return <PageContext.Provider value={value}>{children}</PageContext.Provider>;
};

type PageContextValue = {
  product: NonNullable<ReturnType<typeof useProductDetail>["data"]>;
  reviews: NonNullable<ReturnType<typeof useProductReviewList>["data"]>;
  purchasedProducts: NonNullable<ReturnType<typeof usePurchasedProductList>["data"]>;
  myProductReviews: NonNullable<ReturnType<typeof useMyProductReviewList>["data"]>;
};

const [PageContext, usePageContext] = createContextFactory<PageContextValue>("Page");
