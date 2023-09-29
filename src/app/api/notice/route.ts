import { noticeRequestSchema } from "@/app/schema/notice";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export const GET = async (request: Request) => {
  const notices = await prisma.notice.findMany();

  console.log("[db] notices", notices);

  return Response.json(notices);
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
    console.log(error);
  }
};
