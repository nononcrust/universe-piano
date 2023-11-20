import { PageTitle } from "@/components/layout/page-title";
import { ProductItem } from "@/components/product-item";
import { Badge } from "@/components/ui/badge";

const DUMMY_PRODUCT_LIST = Array(1).fill(0);

export default function ProductListPage() {
  return (
    <main className="container pb-16">
      <div className="flex items-center">
        <PageTitle title="독학 키트">
          <Badge className="ml-2">베타</Badge>
        </PageTitle>
      </div>
      <section className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {DUMMY_PRODUCT_LIST.map((_, index) => (
          <ProductItem
            key={index}
            productId={index}
            productName="미국 음대 오디션에서 살아남기"
            price={9900}
            rating={4.8}
            reviewCount={3}
          />
        ))}
      </section>
    </main>
  );
}
