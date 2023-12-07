import { noticeRequestSchema, noticeService } from "@/features/notice";
import { adminGuard } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { ZodError } from "zod";

export const GET = async (request: Request) => {
  const notices = await noticeService.getNoticeList();

  return NextResponse.json(notices);
};

export const POST = async (request: Request) => {
  adminGuard();

  try {
    const body = noticeRequestSchema.parse(await request.json());

    const notice = await prisma.notice.create({
      data: body,
    });

    return NextResponse.json(notice);
  } catch (error) {
    if (error instanceof ZodError) {
      return NextResponse.json("Bad Request", { status: 400 });
    }

    return NextResponse.json("Internal Error", { status: 500 });
  }
};
