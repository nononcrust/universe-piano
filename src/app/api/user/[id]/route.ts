import { userRepository, userUpdateRequestSchema } from "@/features/user";
import { prisma } from "@/lib/prisma";

import { ZodError } from "zod";

export const dynamic = "force-dynamic";

type Context = {
  params: {
    id: string;
  };
};

export const GET = async (request: Request, context: Context) => {
  try {
    const id = context.params.id;

    const user = await userRepository.getUserById(id);

    return Response.json(user);
  } catch (error) {
    return Response.json("Internal Error", { status: 500 });
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

    return Response.json(user);
  } catch (error) {
    if (error instanceof ZodError) {
      return Response.json("Bad Request", { status: 400 });
    }

    return Response.json("Internal Error", { status: 500 });
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

    return Response.json(user);
  } catch (error) {
    return Response.json("Internal Error", { status: 500 });
  }
};
