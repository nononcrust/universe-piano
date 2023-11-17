import { noticeRequestSchema } from "@/features/notice";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export const GET = async (request: Request) => {
  const notices = await prisma.notice.findMany();

  return NextResponse.json(notices.reverse());
};

export const POST = async (request: Request) => {
  const body = await request.json();

  const parsedBody = noticeRequestSchema.safeParse(body);

  if (!parsedBody.success) {
    return new NextResponse("Bad Request", { status: 400 });
  }

  const notice = await prisma.notice.create({
    data: parsedBody.data,
  });

  return NextResponse.json(notice);
};
