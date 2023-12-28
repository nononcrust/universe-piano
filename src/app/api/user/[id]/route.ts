import { userRepository, userUpdateRequestSchema } from "@/features/user";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { ZodError } from "zod";

type Context = {
  params: {
    id: string;
  };
};

export const GET = async (request: Request, context: Context) => {
  try {
    const id = context.params.id;

    const user = await userRepository.getUserById(id);

    return NextResponse.json(user);
  } catch (error) {
    return NextResponse.json("Internal Error", { status: 500 });
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
      return NextResponse.json("Bad Request", { status: 400 });
    }

    return NextResponse.json("Internal Error", { status: 500 });
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
    return NextResponse.json("Internal Error", { status: 500 });
  }
};
