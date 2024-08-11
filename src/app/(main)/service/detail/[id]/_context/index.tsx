"use client";

import { createContextFactory } from "@/lib/context";
import { useMyProductReviewList, usePurchasedProductList } from "@/services/me";
import { useProductDetail, useProductReviewList } from "@/services/product";
import { useParams } from "next/navigation";

export const PageContextProvider = ({ children }: { children: React.ReactNode }) => {
  const params = useParams<{ id: string }>();

  const { data: product } = useProductDetail({ id: params.id });
  const { data: reviews } = useProductReviewList({ id: params.id });
  const { data: purchasedProducts } = usePurchasedProductList();
  const { data: myProductReviews } = useMyProductReviewList();

  if (!product || !reviews || !purchasedProducts || !myProductReviews) return null;

  const value = {
    product,
    reviews,
    purchasedProducts,
    myProductReviews,
  };

  return <PageContext.Provider value={value}>{children}</PageContext.Provider>;
};

type PageContextValue = {
  product: NonNullable<ReturnType<typeof useProductDetail>["data"]>;
  reviews: NonNullable<ReturnType<typeof useProductReviewList>["data"]>;
  purchasedProducts: NonNullable<ReturnType<typeof usePurchasedProductList>["data"]>;
  myProductReviews: NonNullable<ReturnType<typeof useMyProductReviewList>["data"]>;
};

const [PageContext, usePageContext] = createContextFactory<PageContextValue>("Page");
export { usePageContext };
