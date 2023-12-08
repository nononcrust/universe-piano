import { ROUTE } from "@/constants/route";
import { ProductList } from "@/features/product";
import Image from "next/image";
import Link from "next/link";
import { AspectRatio } from "./ui/aspect-ratio";
import { Skeleton } from "./ui/skeleton";

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
