"use client";

import { PageTitle } from "@/components/layout/page-title";
import { EmptyState } from "@/components/shared/empty-state";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { Chip } from "@/components/ui/chip";
import { Skeleton } from "@/components/ui/skeleton";
import { ROUTE } from "@/constants/route";
import { storage } from "@/lib/supabase";
import { useCrewOnlyKitList, useMyKitList } from "@/services/me";
import Image from "next/image";
import Link from "next/link";

export default function MyKitListPage() {
  const { data: products, isPending: isMyKitListPending } = useMyKitList();
  const { data: crewOnlyKits, isPending: isCrewOnlyKitListPending } = useCrewOnlyKitList();

  const contentProducts = products?.filter((product) => product.contentUrl !== null);

  const isPending = isMyKitListPending || isCrewOnlyKitListPending;

  const isEmpty =
    contentProducts && contentProducts.length === 0 && crewOnlyKits && crewOnlyKits.length === 0;

  return (
    <main className="container pb-16">
      <PageTitle title="나의 독학 키트" />
      {isPending && (
        <section className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <PurchasedProductItem.Skeleton />
        </section>
      )}
      {contentProducts && crewOnlyKits && (
        <section className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {crewOnlyKits.map((product) => (
            <PurchasedProductItem
              key={product.id}
              contentUrl={product.contentUrl || ""}
              imageSrc={storage.getFileUrl(product.thumbnailUrl)}
              name={product.name}
              isCrewOnly
            />
          ))}
          {contentProducts.map((product) => (
            <PurchasedProductItem
              key={product.id}
              contentUrl={product.contentUrl || ""}
              imageSrc={storage.getFileUrl(product.thumbnailUrl)}
              name={product.name}
            />
          ))}
        </section>
      )}
      {isEmpty && (
        <EmptyState
          message="보유한 독학 키트가 없어요."
          className="mt-8"
          action={
            <Link href={ROUTE.SERVICE.KIT}>
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
  isCrewOnly?: boolean;
}

const PurchasedProductItem = ({
  contentUrl,
  name,
  imageSrc,
  isCrewOnly,
}: PurchasedProductItemProps) => {
  return (
    <Link href={contentUrl} className="col flex cursor-pointer flex-col gap-2 pb-4">
      <AspectRatio ratio={1} className="overflow-hidden rounded-2xl border">
        <Image
          src={imageSrc}
          fill
          alt="상품 이미지"
          className="transition-all hover:scale-100 md:hover:scale-105"
        />
      </AspectRatio>
      <div className="flex items-center gap-2">
        {isCrewOnly && <Chip>크루 컨텐츠</Chip>}
        <p className="text-lg text-gray-700">{name}</p>
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
