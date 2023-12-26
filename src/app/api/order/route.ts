import { orderRepository, orderRequestSchema } from "@/features/order";
import { getServerSession } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { ZodError } from "zod";

export const dynamic = "force-dynamic";

export const GET = async (request: Request) => {
  try {
    const orders = await orderRepository.getOrderList();

    return NextResponse.json(orders);
  } catch (error) {
    return NextResponse.json("Internal Error", { status: 500 });
  }
};

export const POST = async (request: Request) => {
  try {
    const session = await getServerSession();

    const user = session?.user;

    if (!user) {
      return NextResponse.json("Unauthorized", { status: 401 });
    }

    const body = await request.json();

    const { status, products, point } = orderRequestSchema.parse(body);

    const order = await prisma.order.create({
      data: {
        point: point,
        status: status,
        user: {
          connect: {
            id: user.id,
          },
        },
        orderItems: {
          createMany: {
            data: products.map((item) => ({
              amount: item.amount,
              price: item.price,
              productId: item.productId,
            })),
          },
        },
      },
    });

    return NextResponse.json(order);
  } catch (error) {
    if (error instanceof ZodError) {
      return NextResponse.json("Bad Request", { status: 400 });
    }

    return NextResponse.json("Internal Error", { status: 500 });
  }
};
