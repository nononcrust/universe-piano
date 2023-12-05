"use client";

import { PageTitle } from "@/components/layout/page-title";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { Chip } from "@/components/ui/chip";
import { ROUTE } from "@/constants/route";
import { useCreateOrder } from "@/features/order";
import { useProductDetail } from "@/features/product";
import { OrderStatus } from "@prisma/client";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";

export default function ProductDetailPage() {
  const params = useParams<{ id: string }>();

  const { data: product } = useProductDetail(params.id);

  if (!product) return null;

  return (
    <main className="container pb-16">
      <section className="mt-5 flex flex-col gap-12 md:mt-12 md:flex-row">
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
        <Image
          src="/images/logo.svg"
          alt="상품 이미지"
          className="aspect-square"
          width={400}
          height={400}
        />
      </div>
    </div>
  );
};

const ProductOptionSection = () => {
  const params = useParams<{ id: string }>();

  const { data: product } = useProductDetail(params.id);

  if (!product) return null;

  return (
    <div className="flex flex-1 flex-col">
      <div className="flex">
        <Chip>{product.category.name}</Chip>
      </div>
      <h1 className="mt-2 text-2xl font-medium">{product.name}</h1>
      {/* <div className="mt-2 flex items-center gap-2">
        <Icon.Star size={20} className="fill-black" />
        <p>{DUMMY_PRODUCT_DETAIL.rating}</p>
      </div> */}
      {/* <ProductOption className="mt-4" /> */}
      <p className="mt-4">{product.description}</p>
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
              <Image src="/images/logo.svg" alt="상품 설명 이미지" fill />
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
        {/* <ProductOption /> */}
        <ProductAction />
      </div>
    </aside>
  );
};

interface ProductOptionProps {
  className?: string;
}

// const ProductOption = ({ className }: ProductOptionProps) => {
//   return (
//     <>
//       <Select>
//         <SelectTrigger className={className}>
//           <SelectValue placeholder="옵션을 선택해주세요" />
//         </SelectTrigger>
//         <SelectContent>
//           <SelectItem value="option-1">옵션 1</SelectItem>
//           <SelectItem value="option-2">옵션 2</SelectItem>
//           <SelectItem value="option-3">옵션 3</SelectItem>
//         </SelectContent>
//       </Select>
//       <Select>
//         <SelectTrigger className="mt-4">
//           <SelectValue placeholder="옵션을 선택해주세요" />
//         </SelectTrigger>
//         <SelectContent>
//           <SelectItem value="option-1">옵션 1</SelectItem>
//           <SelectItem value="option-2">옵션 2</SelectItem>
//           <SelectItem value="option-3">옵션 3</SelectItem>
//         </SelectContent>
//       </Select>
//       <Select>
//         <SelectTrigger className="mt-4">
//           <SelectValue placeholder="옵션을 선택해주세요" />
//         </SelectTrigger>
//         <SelectContent>
//           <SelectItem value="option-1">옵션 1</SelectItem>
//           <SelectItem value="option-2">옵션 2</SelectItem>
//           <SelectItem value="option-3">옵션 3</SelectItem>
//         </SelectContent>
//       </Select>
//     </>
//   );
// };

const ProductAction = () => {
  const params = useParams<{ id: string }>();

  const router = useRouter();

  const { data: product } = useProductDetail(params.id);

  const createOrderMutation = useCreateOrder();

  const onCheckout = async () => {
    if (!product || createOrderMutation.isPending) return;

    const orderProduct = {
      productId: product.id,
      amount: 1,
      price: product.price,
    };

    createOrderMutation.mutate(
      {
        body: {
          point: 0,
          status: OrderStatus.CHECKING,
          products: [orderProduct],
        },
      },
      {
        onSuccess: (order) => {
          router.push(ROUTE.CHECKOUT(order.id));
        },
      },
    );
  };

  if (!product) return null;

  return (
    <div className="mt-8 flex flex-col gap-4">
      <div className="mt-8 flex items-center justify-between">
        <p className="font-medium">주문 금액</p>
        <p className="text-lg font-medium">{product.price.toLocaleString()}원</p>
      </div>
      <Button
        className="max-md:h-14 max-md:rounded-2xl max-md:text-base"
        size="lg"
        onClick={onCheckout}
      >
        구매하기
      </Button>
    </div>
  );
};
