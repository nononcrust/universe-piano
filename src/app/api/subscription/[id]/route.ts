import { subscriptionRequestSchema } from "@/features/subscription";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { ZodError } from "zod";

interface Context {
  params: {
    id: string;
  };
}

export const PUT = async (request: Request, context: Context) => {
  try {
    const id = context.params.id;

    const body = await request.json();

    const parsedBody = subscriptionRequestSchema.parse(body);

    const order = await prisma.subscription.update({
      where: {
        id,
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
    const id = context.params.id;

    const subscription = await prisma.subscription.delete({
      where: {
        id: id,
      },
    });

    return NextResponse.json(subscription);
  } catch (error) {
    return NextResponse.json("Internal Error", { status: 500 });
  }
};
