"use client";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Skeleton } from "@/components/ui/skeleton";
import { storage } from "@/lib/supabase";
import { ProductList } from "@/services/product";
import Image from "next/image";
import Link from "next/link";

interface ProductItemProps {
  href: string;
  product: ProductList[number];
}

export const ProductItem = ({ href, product }: ProductItemProps) => {
  return (
    <Link href={href} className="flex cursor-pointer flex-col gap-2 pb-4">
      <AspectRatio ratio={1} className="overflow-hidden rounded-2xl border p-4">
        <Image
          src={storage.getFileUrl(product.images[0].url)}
          width={640}
          height={640}
          alt="상품 이미지"
          className="transition-all hover:scale-100 md:hover:scale-105"
        />
      </AspectRatio>
      <div className="flex flex-col">
        <p className="text-base text-gray-700 md:text-sm">{product.name}</p>
        <div className="flex items-center justify-between">
          <p className="text-lg font-medium md:text-base">{product.price.toLocaleString()}</p>
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
