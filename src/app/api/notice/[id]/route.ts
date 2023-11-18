import { noticeRequestSchema } from "@/features/notice";
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
    const noticeId = Number(context.params.id);

    const notice = await prisma.notice.findUnique({
      where: {
        id: noticeId,
      },
    });

    return NextResponse.json(notice);
  } catch (error) {
    return new NextResponse("Internal Error", { status: 500 });
  }
};

export const PUT = async (request: Request, context: Context) => {
  try {
    const noticeId = Number(context.params.id);

    const body = await request.json();

    const parsedBody = noticeRequestSchema.parse(body);

    const notice = await prisma.notice.update({
      where: {
        id: noticeId,
      },
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

export const DELETE = async (request: Request, context: Context) => {
  try {
    const noticeId = Number(context.params.id);

    const notice = await prisma.notice.delete({
      where: {
        id: noticeId,
      },
    });

    return NextResponse.json(notice);
  } catch (error) {
    return new NextResponse("Internal Error", { status: 500 });
  }
};
