import { auditionRequestSchema } from "@/features/audition";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export const GET = async (request: Request) => {
  const auditions = await prisma.audition.findMany();

  return NextResponse.json(auditions);
};

export const POST = async (request: Request) => {
  const body = await request.json();

  const parsedBody = auditionRequestSchema.safeParse(body);

  if (!parsedBody.success) {
    return new NextResponse("Bad Request", { status: 400 });
  }

  const notice = await prisma.audition.create({
    data: parsedBody.data,
  });

  return NextResponse.json(notice);
};
