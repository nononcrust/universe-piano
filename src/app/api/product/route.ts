import { productRepository } from "@/features/product";

export const dynamic = "force-dynamic";

export const GET = async (request: Request) => {
  const products = await productRepository.getProductList();
  return Response.json(products);
};
