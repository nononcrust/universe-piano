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
