import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

interface Context {
  params: {
    noticeId: string;
  };
}

export const GET = async (request: Request, context: Context) => {
  const noticeId = context.params.noticeId;

  const notice = await prisma.notice.findUnique({
    where: {
      id: Number(noticeId),
    },
  });

  return new NextResponse(JSON.stringify(notice), {
    status: 200,
  });
};

export const PUT = async (request: Request, context: Context) => {
  const noticeId = context.params.noticeId;
  const body = await request.json();

  const notice = await prisma.notice.update({
    where: {
      id: Number(noticeId),
    },
    data: {
      ...body,
    },
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
