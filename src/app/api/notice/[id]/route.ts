import { noticeRepository, noticeRequestSchema } from "@/features/notice";
import { adminGuard } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { ZodError } from "zod";

export const dynamic = "force-dynamic";

type Context = {
  params: {
    id: string;
  };
};

export const GET = async (request: Request, context: Context) => {
  try {
    const noticeId = context.params.id;

    const notice = await noticeRepository.getNoticeById(noticeId);

    return Response.json(notice);
  } catch (error) {
    return Response.json("Internal Error", { status: 500 });
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

    return Response.json(notice);
  } catch (error) {
    if (error instanceof ZodError) {
      return Response.json("Bad Request", { status: 400 });
    }

    return Response.json("Internal Error", { status: 500 });
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

    return Response.json(notice);
  } catch (error) {
    return Response.json("Internal Error", { status: 500 });
  }
};
