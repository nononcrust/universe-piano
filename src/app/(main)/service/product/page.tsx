"use client";

import { PageTitle } from "@/components/layout/page-title";
import { ProductItem } from "@/components/product-item";
import { Badge } from "@/components/ui/badge";
import { useProductList } from "@/features/product";

export default function ProductListPage() {
  const { data: products, isPending } = useProductList();

  return (
    <main className="container pb-16">
      <div className="flex items-center">
        <PageTitle title="독학 키트">
          {/* <Chip className="ml-2">준비중</Chip> */}
          <Badge className="ml-2 rounded-full border border-white/50 bg-gradient-to-r from-indigo-500 to-pink-500 shadow-black drop-shadow">
            신규
          </Badge>
        </PageTitle>
      </div>
      <section className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products?.map((product) => <ProductItem key={product.id} product={product} />)}
        {isPending && <ProductItem.Skeleton />}
      </section>
    </main>
  );
}
