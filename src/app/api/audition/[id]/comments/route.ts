import { auditionCommentRequestSchema } from "@/features/audition";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "@/lib/session";
import { NextResponse } from "next/server";
import { ZodError } from "zod";

interface Context {
  params: {
    id: string;
  };
}

export const POST = async (request: Request, context: Context) => {
  try {
    const session = await getServerSession();

    const user = session?.user;

    if (!user) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const auditionCommentId = Number(context.params.id);

    const body = await request.json();

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
