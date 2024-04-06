import { getServerSession } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { orderRepository, orderRequestSchema } from "@/services/order";
import { ZodError } from "zod";

export const dynamic = "force-dynamic";

export const GET = async (request: Request) => {
  try {
    const orders = await orderRepository.getOrderList();

    return Response.json(orders);
  } catch (error) {
    return Response.json("Internal Error", { status: 500 });
  }
};

export const POST = async (request: Request) => {
  try {
    const session = await getServerSession();

    const user = session?.user;

    if (!user) {
      return Response.json("Unauthorized", { status: 401 });
    }

    const body = orderRequestSchema.parse(await request.json());

    const order = await prisma.order.create({
      data: {
        point: body.point,
        status: body.status,
        user: {
          connect: {
            id: user.id,
          },
        },
        orderItems: {
          createMany: {
            data: body.products.map((item) => ({
              amount: item.amount,
              price: item.price,
              productId: item.productId,
            })),
          },
        },
      },
    });

    return Response.json(order);
  } catch (error) {
    if (error instanceof ZodError) {
      return Response.json("Bad Request", { status: 400 });
    }

    return Response.json("Internal Error", { status: 500 });
  }
};
