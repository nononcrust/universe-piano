import { productRepository } from "@/features/product";

export const dynamic = "force-dynamic";

type Context = {
  params: {
    id: string;
  };
};

export const GET = async (request: Request, context: Context) => {
  try {
    const productId = context.params.id;

    const product = await productRepository.getProductById(productId);

    return Response.json(product);
  } catch (error) {
    return Response.json("Internal Error", { status: 500 });
  }
};
