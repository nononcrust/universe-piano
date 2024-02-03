import { productRepository } from "@/features/product";

export const dynamic = "force-dynamic";

export const GET = async (request: Request) => {
  try {
    const products = await productRepository.getProductList();

    return Response.json(products);
  } catch (error) {
    return Response.json("Internal Error", { status: 500 });
  }
};
