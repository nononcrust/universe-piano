import { productRepository } from "@/features/product";
import { NextResponse } from "next/server";

export const GET = async (request: Request) => {
  try {
    const products = await productRepository.getProductList();

    return NextResponse.json(products);
  } catch (error) {
    return NextResponse.json("Internal Error", { status: 500 });
  }
};
