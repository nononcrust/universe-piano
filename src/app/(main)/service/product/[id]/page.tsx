"use client";

import { PageTitle } from "@/components/layout/page-title";
import { CheckoutDialog } from "@/components/order/checkout-dialog";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { Chip } from "@/components/ui/chip";
import { usePurchasedProductList } from "@/features/me";
import { useProductDetail } from "@/features/product";
import { useDialog } from "@/hooks/use-dialog";
import Image from "next/image";
import { useParams } from "next/navigation";

export default function ProductDetailPage() {
  const params = useParams<{ id: string }>();

  const { data: product } = useProductDetail({ id: params.id });

  if (!product) return null;

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
      <PageTitle title="상품 리뷰" />
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
      <Button
        className="max-md:h-14 max-md:rounded-2xl max-md:text-base"
        size="lg"
        onClick={checkoutDialog.open}
        disabled={!!hasAlreadyOrdered}
      >
        {hasAlreadyOrdered ? "이미 구매한 상품입니다." : "구매하기"}
      </Button>
      <CheckoutDialog
        productId={params.id}
        isOpen={checkoutDialog.isOpen}
        onOpenChange={checkoutDialog.onOpenChange}
      />
    </div>
  );
};
