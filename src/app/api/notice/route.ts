import { noticeRequestSchema } from "@/api/notice.type";
import { prisma } from "@/lib/prisma";
import { noop } from "@/lib/utils";
import { NextResponse } from "next/server";

export const GET = async (request: Request) => {
  const notices = await prisma.notice.findMany();

  return Response.json(notices.reverse());
};

export const POST = async (request: Request) => {
  const body = await request.json();

  if (!noticeRequestSchema.safeParse(body)) {
    return new NextResponse("", {
      status: 400,
    });
  }

  try {
    const notice = await prisma.notice.create({
      data: body,
    });

    return new NextResponse(JSON.stringify(notice), {
      status: 201,
    });
  } catch (error) {
    noop();
  }
};
