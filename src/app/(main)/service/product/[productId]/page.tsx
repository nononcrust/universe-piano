import { Icon } from "@/components/icon";
import { PageTitle } from "@/components/layout/page-title";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ROUTE } from "@/constants/route";
import Image from "next/image";
import Link from "next/link";

const DUMMY_PRODUCT_DETAIL = {
  productName: "미국 음대 오디션에서 살아남기",
  price: 9900,
  rating: 4.8,
  reviewCount: 3,
};

export default function ProductDetailPage() {
  return (
    <main className="container pb-16">
      <section className="mt-8 flex flex-col gap-12 md:flex-row">
        <ProductImageSection />
        <ProductOptionSection />
      </section>
      <PageTitle title="상품 정보" />
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
        <Image src="/images/logo.svg" alt="" className="aspect-square" width={400} height={400} />
      </div>
    </div>
  );
};

const ProductOptionSection = () => {
  return (
    <div className="flex flex-1 flex-col">
      <p className="text-gray-500">독학 키트</p>
      <h1 className="mt-2 text-2xl font-medium">{DUMMY_PRODUCT_DETAIL.productName}</h1>
      <div className="mt-2 flex items-center gap-2">
        <Icon.Star size={20} className="fill-black" />
        <p>{DUMMY_PRODUCT_DETAIL.rating}</p>
      </div>
      <ProductOption className="mt-4" />
      <div className="mt-8 flex items-center justify-between">
        <p className="text-sm font-medium">주문 금액</p>
        <p className="font-medium">{DUMMY_PRODUCT_DETAIL.price.toLocaleString()}원</p>
      </div>
      <ProductAction />
    </div>
  );
};

const ProductInfoSection = () => {
  return (
    <div className="basis-2/3 flex-col">
      <div className="flex flex-col gap-8">
        {Array(10)
          .fill(0)
          .map((_, index) => (
            <AspectRatio key={index} className="rounded-lg border">
              <Image src="/images/logo.svg" alt="" fill />
            </AspectRatio>
          ))}
      </div>
    </div>
  );
};

const ProductAside = () => {
  return (
    <aside className="basis-1/3">
      <div className="sticky top-24 flex flex-col">
        <ProductOption />
        <ProductAction />
      </div>
    </aside>
  );
};

interface ProductOptionProps {
  className?: string;
}

const ProductOption = ({ className }: ProductOptionProps) => {
  return (
    <>
      <Select>
        <SelectTrigger className={className}>
          <SelectValue placeholder="옵션을 선택해주세요" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="option-1">옵션 1</SelectItem>
          <SelectItem value="option-2">옵션 2</SelectItem>
          <SelectItem value="option-3">옵션 3</SelectItem>
        </SelectContent>
      </Select>
      <Select>
        <SelectTrigger className="mt-4">
          <SelectValue placeholder="옵션을 선택해주세요" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="option-1">옵션 1</SelectItem>
          <SelectItem value="option-2">옵션 2</SelectItem>
          <SelectItem value="option-3">옵션 3</SelectItem>
        </SelectContent>
      </Select>
      <Select>
        <SelectTrigger className="mt-4">
          <SelectValue placeholder="옵션을 선택해주세요" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="option-1">옵션 1</SelectItem>
          <SelectItem value="option-2">옵션 2</SelectItem>
          <SelectItem value="option-3">옵션 3</SelectItem>
        </SelectContent>
      </Select>
    </>
  );
};

const ProductAction = () => {
  return (
    <div className="mt-8 flex gap-4">
      <Button className="flex-1" size="lg" asChild>
        <Link href={ROUTE.CHECKOUT}>구매하기</Link>
      </Button>
    </div>
  );
};
