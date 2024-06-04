"use client";

import { PageTitle } from "@/components/layout/page-title";
import { EmptyState } from "@/components/shared/empty-state";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { Chip } from "@/components/ui/chip";
import { Skeleton } from "@/components/ui/skeleton";
import { ROUTE } from "@/constants/route";
import { useSession } from "@/features/auth/use-session";
import { storage } from "@/lib/supabase";
import { useCrewOnlyKitList, useMyKitList } from "@/services/me";
import { Role } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

export default function MyKitListPage() {
  const { data: products, isPending: isMyKitListPending } = useMyKitList();
  const { data: crewOnlyKits, isPending: isCrewOnlyKitListPending } = useCrewOnlyKitList();
  const { session } = useSession();

  const contentProducts = products?.filter((product) => product.contentUrl !== null);

  const isPending =
    isMyKitListPending || (session && session.user.role === Role.CREW && isCrewOnlyKitListPending);

  const isEmpty =
    contentProducts && contentProducts.length === 0 && crewOnlyKits && crewOnlyKits.length === 0;

  return (
    <main className="container pb-16">
      <PageTitle title="나의 독학 키트" />
      {isPending && (
        <section className="mt-8 grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">
          {Array(8)
            .fill(0)
            .map((_, index) => (
              <PurchasedProductItem.Skeleton key={index} />
            ))}
        </section>
      )}
      <section className="mt-8 grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">
        {contentProducts?.map((product) => (
          <PurchasedProductItem
            key={product.id}
            contentUrl={product.contentUrl || ""}
            imageSrc={storage.getFileUrl(product.thumbnailUrl)}
            name={product.name}
          />
        ))}
        {crewOnlyKits?.map((product) => (
          <PurchasedProductItem
            key={product.id}
            contentUrl={product.contentUrl || ""}
            imageSrc={storage.getFileUrl(product.thumbnailUrl)}
            name={product.name}
            isCrewOnly
          />
        ))}
      </section>
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
      <div className="ml-2 flex flex-col items-start gap-2">
        <p className="font-semibold text-main">{name}</p>
        {isCrewOnly && <Chip>크루 컨텐츠</Chip>}
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
