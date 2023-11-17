import { auditionRequestSchema } from "@/features/audition";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

interface Context {
  params: {
    id: string;
  };
}

export const GET = async (request: Request, context: Context) => {
  const auditionId = context.params.id;

  const audition = await prisma.audition.findUnique({
    where: {
      id: Number(auditionId),
    },
  });

  return NextResponse.json(audition);
};

export const PUT = async (request: Request, context: Context) => {
  const auditionId = context.params.id;

  const body = await request.json();

  const parsedBody = auditionRequestSchema.safeParse(body);

  if (!parsedBody.success) {
    return new NextResponse("Bad Request", { status: 400 });
  }

  const audition = await prisma.audition.update({
    where: {
      id: Number(auditionId),
    },
    data: parsedBody.data,
  });

  return NextResponse.json(audition);
};

export const DELETE = async (request: Request, context: Context) => {
  const auditionId = context.params.id;

  const audition = await prisma.audition.delete({
    where: {
      id: Number(auditionId),
    },
  });

  return NextResponse.json(audition);
};
