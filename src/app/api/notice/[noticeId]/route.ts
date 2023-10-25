import { noticeQuery, noticeRequestSchema } from "@/features/notice";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

interface Context {
  params: {
    noticeId: string;
  };
}

export const GET = async (request: Request, context: Context) => {
  const noticeId = context.params.noticeId;

  const notice = await noticeQuery.getNoticeById(Number(noticeId));

  return new NextResponse(JSON.stringify(notice), {
    status: 200,
  });
};

export const PUT = async (request: Request, context: Context) => {
  const noticeId = context.params.noticeId;

  const body = await request.json();

  const parsedBody = noticeRequestSchema.safeParse(body);

  if (!parsedBody.success) {
    return new NextResponse("", {
      status: 400,
    });
  }

  const notice = await prisma.notice.update({
    where: {
      id: Number(noticeId),
    },
    data: parsedBody.data,
  });

  return new NextResponse(JSON.stringify(notice), {
    status: 200,
  });
};

export const DELETE = async (request: Request, context: Context) => {
  const noticeId = context.params.noticeId;

  await prisma.notice.delete({
    where: {
      id: Number(noticeId),
    },
  });

  return new NextResponse(null, {
    status: 204,
  });
};
