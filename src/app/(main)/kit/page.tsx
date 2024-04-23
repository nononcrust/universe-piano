"use client";

import { PageTitle } from "@/components/layout/page-title";
import { EmptyState } from "@/components/shared/empty-state";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { ROUTE } from "@/constants/route";
import { usePurchasedProductList } from "@/services/me";
import Image from "next/image";
import Link from "next/link";

export default function KitListPage() {
  const { data: products, isPending } = usePurchasedProductList();

  return (
    <main className="container pb-16">
      <PageTitle title="나의 독학 키트" />
      {isPending && (
        <section className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <PurchasedProductItem.Skeleton />
        </section>
      )}
      {products && products.length > 0 && (
        <section className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => (
            <PurchasedProductItem
              key={product.id}
              contentUrl={product.contentUrl}
              imageSrc="/images/logo.svg"
              name={product.name}
            />
          ))}
        </section>
      )}
      {products && products.length === 0 && (
        <EmptyState
          message="보유한 독학 키트가 없어요."
          className="mt-8"
          action={
            <Link href={ROUTE.SERVICE.KIT.LIST}>
              <Button variant="secondary">독학 키트 둘러보기</Button>
            </Link>
          }
        />
      )}
    </main>
  );
}

interface PurchasedProductItemProps {
  contentUrl: string;
  name: string;
  imageSrc: string;
}

const PurchasedProductItem = ({ contentUrl, name, imageSrc }: PurchasedProductItemProps) => {
  return (
    <Link href={contentUrl} className="col flex cursor-pointer flex-col gap-2 pb-4">
      <AspectRatio ratio={1} className="rounded-2xl border">
        <Image
          src={imageSrc}
          fill
          alt="상품 이미지"
          className="transition-all hover:scale-100 md:hover:scale-110"
        />
      </AspectRatio>
      <div className="flex flex-col">
        <p className="text-lg text-gray-700">{name}</p>
        <div className="flex items-center justify-between"></div>
      </div>
    </Link>
  );
};

const PurchasedProductItemSkeleton = () => {
  return (
    <div className="col flex flex-col gap-2 pb-4">
      <AspectRatio ratio={1}>
        <Skeleton className="h-full w-full rounded-2xl" />
      </AspectRatio>
      <div className="flex flex-col gap-2">
        <Skeleton className="h-4 w-1/2" />
      </div>
    </div>
  );
};

PurchasedProductItem.Skeleton = PurchasedProductItemSkeleton;
