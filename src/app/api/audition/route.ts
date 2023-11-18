import { auditionRequestSchema } from "@/features/audition";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { ZodError } from "zod";

export const GET = async (request: Request) => {
  try {
    const auditions = await prisma.audition.findMany();

    return NextResponse.json(auditions);
  } catch (error) {
    return new NextResponse("Internal Error", { status: 500 });
  }
};

export const POST = async (request: Request) => {
  try {
    const body = await request.json();

    const parsedBody = auditionRequestSchema.parse(body);

    const notice = await prisma.audition.create({
      data: parsedBody,
    });

    return NextResponse.json(notice);
  } catch (error) {
    if (error instanceof ZodError) {
      return new NextResponse("Bad Request", { status: 400 });
    }

    return new NextResponse("Internal Error", { status: 500 });
  }
};
