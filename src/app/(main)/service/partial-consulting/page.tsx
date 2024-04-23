"use client";

import { PageTitle } from "@/components/layout/page-title";
import { ProductItem } from "@/components/service/product/product-item";
import { Badge } from "@/components/ui/badge";
import { ROUTE } from "@/constants/route";
import { useProductList } from "@/services/product";

export default function PartialConsultingPage() {
  const { data: items, isPending } = useProductList();

  return (
    <main className="container pb-16">
      <div className="flex items-center">
        <PageTitle title="부분 컨설팅">
          <Badge variant="default" className="ml-2 bg-gradient-to-br from-violet-700 to-violet-300">
            new
          </Badge>
        </PageTitle>
      </div>
      <section className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {items?.map((product) => (
          <ProductItem
            key={product.id}
            href={ROUTE.SERVICE.PARTIAL_CONSULTING.DETAIL(String(product.id))}
            product={product}
          />
        ))}
        {isPending && <ProductItem.Skeleton />}
      </section>
    </main>
  );
}
