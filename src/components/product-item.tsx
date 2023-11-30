import { ROUTE } from "@/constants/route";
import { ProductList } from "@/features/product";
import { getRatingAverage } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "./icon";
import { AspectRatio } from "./ui/aspect-ratio";

interface ProductItemProps {
  product: ProductList[number];
}

export const ProductItem = ({ product }: ProductItemProps) => {
  const ratingAverage = getRatingAverage(product.productReviews.map((review) => review.rating));

  return (
    <Link
      href={ROUTE.SERVICE.PRODUCT.DETAIL(String(product.id))}
      className="col flex cursor-pointer flex-col gap-2 pb-4"
    >
      <AspectRatio ratio={1} className="rounded-lg border">
        <Image
          src={"/images/logo.svg"}
          fill
          alt=""
          className="transition-all hover:scale-100 md:hover:scale-110"
        />
      </AspectRatio>
      <div className="flex flex-col gap-1">
        <p className="text-sm text-gray-700">{product.name}</p>
        <div className="flex items-center justify-between">
          <p className="font-medium">{product.price.toLocaleString()}</p>
          <div className="flex gap-2">
            <div className="flex items-center gap-[2px]">
              <Icon.Star size={12} className="fill-primary text-primary" />
              <p className="text-xs font-medium">{ratingAverage}</p>
            </div>
            <p className="text-xs font-medium text-gray-400">
              리뷰 {product._count.productReviews}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};
