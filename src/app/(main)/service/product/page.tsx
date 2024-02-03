"use client";

import { PageTitle } from "@/components/layout/page-title";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { ROUTE } from "@/constants/route";
import { ProductList, useProductList } from "@/features/product";
import Image from "next/image";
import Link from "next/link";

export default function ProductListPage() {
  const { data: products, isPending } = useProductList();

  return (
    <main className="container pb-16">
      <div className="flex items-center">
        <PageTitle title="독학 키트">
          <Badge className="ml-2 rounded-full border border-white/50 bg-gradient-to-r from-indigo-500 to-pink-500 shadow-black drop-shadow">
            신규
          </Badge>
        </PageTitle>
      </div>
      <section className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products?.map((product) => <ProductItem key={product.id} product={product} />)}
        {isPending && <ProductItem.Skeleton />}
      </section>
    </main>
  );
}

interface ProductItemProps {
  product: ProductList[number];
}

export const ProductItem = ({ product }: ProductItemProps) => {
  // const ratingAverage = getRatingAverage(product.productReviews.map((review) => review.rating));

  return (
    <Link
      href={ROUTE.SERVICE.PRODUCT.DETAIL(String(product.id))}
      className="col flex cursor-pointer flex-col gap-2 pb-4"
    >
      <AspectRatio ratio={1} className="rounded-2xl border">
        <Image
          src="/images/logo.svg"
          fill
          alt="상품 이미지"
          className="transition-all hover:scale-100 md:hover:scale-110"
        />
      </AspectRatio>
      <div className="flex flex-col">
        <p className="text-base text-gray-700 md:text-sm">{product.name}</p>
        <div className="flex items-center justify-between">
          <p className="text-lg font-medium md:text-base">{product.price.toLocaleString()}</p>
          {/* <div className="flex gap-2">
            <div className="flex items-center gap-[2px]">
              <Icon.Star size={12} className="fill-primary text-primary" />
              <p className="text-xs font-medium">{ratingAverage}</p>
            </div>
            <p className="text-xs font-medium text-gray-400">
              리뷰 {product._count.productReviews}
            </p>
          </div> */}
        </div>
      </div>
    </Link>
  );
};

const ProductItemSkeleton = () => {
  return (
    <div className="col flex flex-col gap-2 pb-4">
      <AspectRatio ratio={1}>
        <Skeleton className="h-full w-full rounded-2xl" />
      </AspectRatio>
      <div className="flex flex-col gap-2">
        <Skeleton className="h-4 w-1/2" />
        <div className="flex items-center justify-between">
          <Skeleton className="h-4 w-1/4" />
        </div>
      </div>
    </div>
  );
};

ProductItem.Skeleton = ProductItemSkeleton;
