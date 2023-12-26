import { orderRepository, orderUpdateRequestSchema } from "@/features/order";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

interface Context {
  params: {
    id: string;
  };
}

export const GET = async (request: Request, context: Context) => {
  try {
    const orderId = context.params.id;

    const order = await orderRepository.getOrderById(orderId);

    return NextResponse.json(order);
  } catch (error) {
    return NextResponse.json("Internal Error", { status: 500 });
  }
};

export const PUT = async (request: Request, context: Context) => {
  const orderId = context.params.id;

  const requestBody = await request.json();

  const body = orderUpdateRequestSchema.parse(requestBody);

  const order = await prisma.order.update({
    where: {
      id: orderId,
    },
    data: body,
  });

  return NextResponse.json(order);
};

export const DELETE = async (request: Request, context: Context) => {
  try {
    const orderId = context.params.id;

    const order = await prisma.order.delete({
      where: {
        id: orderId,
      },
    });

    return NextResponse.json(order);
  } catch (error) {
    return NextResponse.json("Internal Error", { status: 500 });
  }
};
