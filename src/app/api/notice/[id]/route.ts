import { noticeRequestSchema } from "@/features/notice";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

interface Context {
  params: {
    id: string;
  };
}

export const GET = async (request: Request, context: Context) => {
  const noticeId = context.params.id;
  console.log("context", context.params);

  const notice = await prisma.notice.findUnique({
    where: {
      id: Number(noticeId),
    },
  });

  return NextResponse.json(notice);
};

export const PUT = async (request: Request, context: Context) => {
  const noticeId = context.params.id;

  const body = await request.json();

  const parsedBody = noticeRequestSchema.safeParse(body);

  if (!parsedBody.success) {
    return new NextResponse("Bad Request", { status: 400 });
  }

  const notice = await prisma.notice.update({
    where: {
      id: Number(noticeId),
    },
    data: parsedBody.data,
  });

  return NextResponse.json(notice);
};

export const DELETE = async (request: Request, context: Context) => {
  const noticeId = context.params.id;

  const notice = await prisma.notice.delete({
    where: {
      id: Number(noticeId),
    },
  });

  return NextResponse.json(notice);
};
