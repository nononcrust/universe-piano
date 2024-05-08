import { ProductDetailPage as ProductDetailPageImpl } from "@/components/service/product/product-detail-page";
import { siteConfig } from "@/configs/site";
import { productRepository } from "@/services/product";

type Props = {
  params: { id: string };
};

export const generateMetadata = async ({ params }: Props) => {
  const id = params.id;

  const product = await productRepository.getProductById(id);

  const titlePostfix = product ? " - " + product.name : "";

  const title = siteConfig.openGraph.title + titlePostfix;

  return {
    openGraph: {
      ...siteConfig.openGraph,
      title: title,
    },
    title: title,
  };
};

export default function ProductDetailPage() {
  return <ProductDetailPageImpl />;
}
