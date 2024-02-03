import { orderRepository, orderUpdateRequestSchema } from "@/features/order";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

type Context = {
  params: {
    id: string;
  };
};

export const GET = async (request: Request, context: Context) => {
  try {
    const orderId = context.params.id;

    const order = await orderRepository.getOrderById(orderId);

    return Response.json(order);
  } catch (error) {
    return Response.json("Internal Error", { status: 500 });
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

  return Response.json(order);
};

export const DELETE = async (request: Request, context: Context) => {
  try {
    const orderId = context.params.id;

    const order = await prisma.order.delete({
      where: {
        id: orderId,
      },
    });

    return Response.json(order);
  } catch (error) {
    return Response.json("Internal Error", { status: 500 });
  }
};
