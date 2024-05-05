"use client";

import { AdminPageTitle } from "@/components/admin/admin-page-title";
import { ProductForm } from "@/components/admin/product-form";
import { useCategoryList } from "@/services/category";
import { useProductDetail } from "@/services/product";
import { useParams } from "next/navigation";

export default function AdminUserEditPage() {
  const params = useParams() as { id: string };

  const { data: product } = useProductDetail({ id: params.id });
  const { data: categories } = useCategoryList();

  if (!product || !categories) return null;

  return (
    <main className="container">
      <AdminPageTitle title="상품 수정" />
      <ProductForm product={product} categories={categories} />
    </main>
  );
}
