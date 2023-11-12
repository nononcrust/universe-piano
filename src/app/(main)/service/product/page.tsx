import { PageTitle } from "@/components/layout/page-title";
import { ProductItem } from "@/components/product-item";

const DUMMY_PRODUCT_LIST = Array(20).fill(0);

export default function ProductListPage() {
  return (
    <main className="container pb-16">
      <PageTitle title="독학 키트" />
      <section className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {DUMMY_PRODUCT_LIST.map((_, index) => (
          <ProductItem key={index} productId={index} />
        ))}
      </section>
    </main>
  );
}
