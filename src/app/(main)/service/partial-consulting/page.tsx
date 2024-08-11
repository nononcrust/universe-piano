"use client";

import { PageTitle } from "@/components/layout/page-title";
import { ProductItem } from "@/components/service/product/product-item";
import { Badge } from "@/components/ui/badge";
import { CATEGORY } from "@/constants/enum";
import { ROUTE } from "@/constants/route";
import { useProductList } from "@/services/product";

export default function PartialConsultingPage() {
  const { data: items, isPending } = useProductList({
    category: CATEGORY.PARTIAL_CONSULTING,
  });

  return (
    <main className="container pb-16">
      <div className="flex items-center">
        <PageTitle title="부분 컨설팅">
          <Badge className="ml-2 rounded-full" variant="primary">
            new
          </Badge>
        </PageTitle>
      </div>
      <section className="mt-8 grid grid-cols-2 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {items?.map((product) => (
          <ProductItem
            key={product.id}
            href={ROUTE.SERVICE.DETAIL(String(product.id))}
            product={product}
          />
        ))}
        {isPending &&
          Array(8)
            .fill(0)
            .map((_, index) => <ProductItem.Skeleton key={index} />)}
      </section>
    </main>
  );
}
