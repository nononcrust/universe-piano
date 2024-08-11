"use client";

import { ProductImageSection } from "./_components/product-image-section";
import { ProductInfoSection } from "./_components/product-info-section";
import { ProductOptionSection } from "./_components/product-option-section";
import { PageContextProvider } from "./_context";

export const ProductDetailPage = () => {
  return (
    <PageContextProvider>
      <main className="container pb-16">
        <section className="mt-5 flex flex-col gap-12 md:mt-12 md:flex-row">
          <ProductImageSection />
          <ProductOptionSection />
        </section>
        <section className="relative mt-8 flex justify-center">
          <ProductInfoSection />
        </section>
      </main>
    </PageContextProvider>
  );
};
