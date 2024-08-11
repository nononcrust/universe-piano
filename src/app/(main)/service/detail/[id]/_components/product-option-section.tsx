"use client";

import { CheckoutDialog } from "@/app/(main)/service/detail/[id]/_components/checkout-dialog";
import { Button } from "@/components/ui/button";
import { Chip } from "@/components/ui/chip";
import { siteConfig } from "@/configs/site";
import { useSession } from "@/features/auth/use-session";
import { useDialog } from "@/hooks/use-dialog";
import { Role } from "@prisma/client";
import Link from "next/link";
import { useParams } from "next/navigation";
import { usePageContext } from "../_context";

export const ProductOptionSection = () => {
  const { product } = usePageContext();

  const isCrewOnly = product.price === 0;

  return (
    <div className="flex flex-1 flex-col">
      <div className="flex gap-2">
        <Chip>{product.category.name}</Chip>
        {isCrewOnly && <Chip color="red">크루 전용</Chip>}
      </div>
      <h1 className="mt-2 text-2xl font-medium">{product.name}</h1>
      <p className="mt-4 whitespace-pre-wrap">{product.description}</p>
      <ProductAction />
    </div>
  );
};

const ProductAction = () => {
  const params = useParams<{ id: string }>();
  const { product, purchasedProducts } = usePageContext();

  const checkoutDialog = useDialog();

  const { session } = useSession();

  const hasAlreadyOrdered = purchasedProducts.some(
    (purchasedProducts) => purchasedProducts.id === product.id,
  );

  const isCrewOnly = product.price === 0;
  const shouldHidePrice = product.isPriceHidden && !session;

  if (isCrewOnly) {
    return (
      <div className="mt-8 flex flex-col gap-4">
        {session?.user.role !== Role.CREW && (
          <>
            <div className="mt-8 flex items-center justify-between">
              <p className="font-medium">크루 가입 후 평생 소장하세요 🙌</p>
            </div>
            <Button className="max-md:h-14 max-md:text-base" variant="default" size="large" asChild>
              <Link href={siteConfig.links.kakao}>유니버스 피아노 크루 가입하기</Link>
            </Button>
          </>
        )}
      </div>
    );
  }

  return (
    <div className="mt-8 flex flex-col gap-4">
      {!shouldHidePrice && (
        <div className="mt-8 flex items-center justify-between">
          <p className="font-medium">주문 금액</p>
          <p className="text-lg font-medium">{product.price.toLocaleString()}원</p>
        </div>
      )}
      {session && (
        <Button
          className="max-md:h-14 max-md:text-base"
          variant="default"
          size="large"
          onClick={checkoutDialog.open}
          disabled={!!hasAlreadyOrdered}
        >
          {hasAlreadyOrdered ? "이미 구매한 상품입니다." : "구매하기"}
        </Button>
      )}
      {!session && (
        <Button className="max-md:h-14 max-md:text-base" size="large" disabled>
          로그인 후에 구매할 수 있습니다.
        </Button>
      )}
      <CheckoutDialog
        productId={params.id}
        isOpen={checkoutDialog.isOpen}
        onOpenChange={checkoutDialog.onOpenChange}
      />
    </div>
  );
};
