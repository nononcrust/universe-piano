import { productRepository } from "@/services/product";

export const dynamic = "force-dynamic";

export const GET = async (request: Request) => {
  const products = await productRepository.getProductList();
  return Response.json(products);
};
