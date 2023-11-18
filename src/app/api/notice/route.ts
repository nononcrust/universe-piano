import { noticeRequestSchema } from "@/features/notice";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { ZodError } from "zod";

export const GET = async (request: Request) => {
  try {
    const notices = await prisma.notice.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json(notices);
  } catch (error) {
    return new NextResponse("Internal Error", { status: 500 });
  }
};

export const POST = async (request: Request) => {
  try {
    const body = await request.json();

    const parsedBody = noticeRequestSchema.parse(body);

    const notice = await prisma.notice.create({
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
