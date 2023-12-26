import { noticeRepository, noticeRequestSchema } from "@/features/notice";
import { adminGuard } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { ZodError } from "zod";

export const dynamic = "force-dynamic";

interface Context {
  params: {
    id: string;
  };
}

export const GET = async (request: Request, context: Context) => {
  try {
    const noticeId = context.params.id;

    const notice = await noticeRepository.getNoticeById(noticeId);

    return NextResponse.json(notice);
  } catch (error) {
    return NextResponse.json("Internal Error", { status: 500 });
  }
};

export const PUT = async (request: Request, context: Context) => {
  adminGuard();

  try {
    const noticeId = context.params.id;

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
      return NextResponse.json("Bad Request", { status: 400 });
    }

    return NextResponse.json("Internal Error", { status: 500 });
  }
};

export const DELETE = async (request: Request, context: Context) => {
  adminGuard();

  try {
    const noticeId = context.params.id;

    const notice = await prisma.notice.delete({
      where: {
        id: noticeId,
      },
    });

    return NextResponse.json(notice);
  } catch (error) {
    return NextResponse.json("Internal Error", { status: 500 });
  }
};
