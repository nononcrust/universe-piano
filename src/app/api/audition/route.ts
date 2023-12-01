import { auditionRequestSchema } from "@/features/audition";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { ZodError } from "zod";

export const GET = async (request: Request) => {
  try {
    const auditions = await prisma.audition.findMany();

    return NextResponse.json(auditions);
  } catch (error) {
    return NextResponse.json("Internal Error", { status: 500 });
  }
};

export const POST = async (request: Request) => {
  try {
    const body = await request.json();

    const { images, ...parsedBody } = auditionRequestSchema.parse(body);

    const notice = await prisma.audition.create({
      data: {
        ...parsedBody,
        images: {
          createMany: {
            data: images?.map((image) => ({ url: image })) ?? [],
          },
        },
      },
    });

    return NextResponse.json(notice);
  } catch (error) {
    if (error instanceof ZodError) {
      return NextResponse.json("Bad Request", { status: 400 });
    }

    console.log("error", error);
    return NextResponse.json("Internal Error", { status: 500 });
  }
};
