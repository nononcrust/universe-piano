import { productListRequestSchema, productRepository } from "@/services/product";
import { NextRequest } from "next/server";

export const dynamic = "force-dynamic";

export const GET = async (request: NextRequest) => {
  const params = productListRequestSchema.parse({
    category: request.nextUrl.searchParams.get("category"),
  });

  const products = await productRepository.getProductList(params.category ?? undefined);
  return Response.json(products);
};
