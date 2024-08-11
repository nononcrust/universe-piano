import { productColumns } from "@/app/(admin)/admin/product/_components/product-columns";
import { AdminPageTitle } from "@/components/admin/admin-page-title";
import { DataTable } from "@/components/admin/data-table/data-table";
import { productRepository } from "@/services/product";

export default async function AdminProductListPage() {
  const products = await productRepository.getProductList();

  return (
    <main>
      <AdminPageTitle title="상품 목록" />
      <DataTable
        columns={productColumns}
        data={products}
        searchColumnKey="name"
        searchInputPlaceholder="이름으로 검색"
      />
    </main>
  );
}
