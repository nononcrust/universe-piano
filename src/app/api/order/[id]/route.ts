import { orderRepository, orderUpdateRequestSchema } from "@/features/order";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { ZodError } from "zod";

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
  try {
    const orderId = context.params.id;

    const body = await request.json();

    const parsedBody = orderUpdateRequestSchema.parse(body);

    const order = await prisma.order.update({
      where: {
        id: orderId,
      },
      data: parsedBody,
    });

    return NextResponse.json(order);
  } catch (error) {
    if (error instanceof ZodError) {
      return NextResponse.json("Bad Request", { status: 400 });
    }

    return NextResponse.json("Internal Error", { status: 500 });
  }
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
