import { orderRepository } from "@/features/order";
import { getServerSession } from "@/lib/auth";
import { NextResponse } from "next/server";

export const GET = async (request: Request) => {
  const session = await getServerSession();

  if (!session) {
    return NextResponse.json("Unauthorized", { status: 401 });
  }

  try {
    const orders = await orderRepository.getMyOrderList(session);

    return NextResponse.json(orders);
  } catch (error) {
    return NextResponse.json("Internal Error", { status: 500 });
  }
};
