import { ROUTE } from "@/constants/route";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "./icon";
import { AspectRatio } from "./ui/aspect-ratio";

interface ProductItemProps {
  productId: number;
  productName: string;
  price: number;
  reviewCount: number;
  rating: number;
}

export const ProductItem = ({
  productId,
  productName,
  price,
  reviewCount,
  rating,
}: ProductItemProps) => {
  return (
    <Link
      href={ROUTE.SERVICE.PRODUCT.DETAIL(String(productId))}
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
        <p className="text-sm text-gray-700">{productName}</p>
        <div className="flex items-center justify-between">
          <p className="font-bold">{price.toLocaleString()}</p>
          <div className="flex gap-2">
            <div className="flex items-center gap-[2px]">
              <Icon.Star size={12} className="fill-primary text-primary" />
              <p className="text-xs font-bold">{rating}</p>
            </div>
            <p className="text-xs font-bold text-gray-400">리뷰 {reviewCount}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};
