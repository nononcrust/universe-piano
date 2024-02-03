import { noticeRequestSchema, noticeService } from "@/features/notice";
import { adminGuard } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { ZodError } from "zod";

export const dynamic = "force-dynamic";

export const GET = async (request: Request) => {
  const notices = await noticeService.getNoticeList();

  return Response.json(notices);
};

export const POST = async (request: Request) => {
  adminGuard();

  try {
    const body = noticeRequestSchema.parse(await request.json());

    const notice = await prisma.notice.create({
      data: body,
    });

    return Response.json(notice);
  } catch (error) {
    if (error instanceof ZodError) {
      return Response.json("Bad Request", { status: 400 });
    }

    return Response.json("Internal Error", { status: 500 });
  }
};
