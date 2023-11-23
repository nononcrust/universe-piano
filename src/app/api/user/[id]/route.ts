import { getUserById, userUpdateRequestSchema } from "@/features/user";
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
    const id = context.params.id;

    const user = await getUserById(id);

    return NextResponse.json(user);
  } catch (error) {
    return new NextResponse("Internal Error", { status: 500 });
  }
};

export const PUT = async (request: Request, context: Context) => {
  try {
    const id = context.params.id;

    const body = await request.json();

    const parsedBody = userUpdateRequestSchema.parse(body);

    const user = await prisma.user.update({
      where: {
        id: id,
      },
      data: parsedBody,
    });

    return NextResponse.json(user);
  } catch (error) {
    if (error instanceof ZodError) {
      return new NextResponse("Bad Request", { status: 400 });
    }

    return new NextResponse("Internal Error", { status: 500 });
  }
};

export const DELETE = async (request: Request, context: Context) => {
  try {
    const id = context.params.id;

    const user = await prisma.user.delete({
      where: {
        id: id,
      },
    });

    return NextResponse.json(user);
  } catch (error) {
    return new NextResponse("Internal Error", { status: 500 });
  }
};
