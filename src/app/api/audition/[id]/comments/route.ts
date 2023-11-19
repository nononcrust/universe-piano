import { auditionCommentRequestSchema } from "@/features/audition";
import { getUserInfo } from "@/features/user";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { ZodError } from "zod";

interface Context {
  params: {
    id: string;
  };
}

export const POST = async (request: Request, context: Context) => {
  try {
    const auditionCommentId = Number(context.params.id);

    const body = await request.json();

    const user = await getUserInfo();

    if (!user) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const parsedBody = auditionCommentRequestSchema.parse(body);

    const auditionComment = await prisma.auditionComment.create({
      data: {
        ...parsedBody,
        userId: user.id,
        auditionId: auditionCommentId,
      },
    });

    return NextResponse.json(auditionComment);
  } catch (error) {
    if (error instanceof ZodError) {
      return new NextResponse("Bad Request", { status: 400 });
    }

    return new NextResponse("Internal Error", { status: 500 });
  }
};
