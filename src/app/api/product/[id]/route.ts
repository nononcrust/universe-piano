import { productRepository } from "@/features/product";

export const dynamic = "force-dynamic";

type Context = {
  params: {
    id: string;
  };
};

export const GET = async (request: Request, context: Context) => {
  const productId = context.params.id;

  const product = await productRepository.getProductById(productId);

  return Response.json(product);
};
