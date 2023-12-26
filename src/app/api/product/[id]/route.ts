import { productRepository } from "@/features/product";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

interface Context {
  params: {
    id: string;
  };
}

export const GET = async (request: Request, context: Context) => {
  try {
    const productId = context.params.id;

    const product = await productRepository.getProductById(productId);

    return NextResponse.json(product);
  } catch (error) {
    return NextResponse.json("Internal Error", { status: 500 });
  }
};
