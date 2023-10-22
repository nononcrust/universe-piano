import { ROUTE } from "@/constants/route";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "./icon";
import { AspectRatio } from "./ui/aspect-ratio";

interface ProductItemProps {
  productId: number;
}

export const ProductItem = ({ productId }: ProductItemProps) => {
  return (
    <Link
      href={ROUTE.EBOOK.DETAIL(String(productId))}
      className="col flex cursor-pointer flex-col gap-2 pb-4"
    >
      <AspectRatio ratio={1} className="rounded-lg border">
        <Image src={"/images/logo.svg"} fill alt="" className="transition-all hover:scale-110" />
      </AspectRatio>
      <div className="flex flex-col gap-1">
        <p className="text-sm text-gray-700">
          24년형 스테인리스 304 자동세척 3L 대용량 스팀가열식 가습기
        </p>
        <div className="flex items-center justify-between">
          <p className="font-bold">149,000</p>
          <div className="flex gap-2">
            <div className="flex items-center gap-[2px]">
              <Icon.Star size={12} className="fill-primary text-primary" />
              <p className="text-xs font-bold">4.8</p>
            </div>
            <p className="text-xs font-bold text-gray-400">리뷰 8</p>
          </div>
        </div>
      </div>
    </Link>
  );
};
