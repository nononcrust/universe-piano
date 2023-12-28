import { auditionCommentRequestSchema } from "@/features/audition";
import { getServerSession } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { ZodError } from "zod";

export const dynamic = "force-dynamic";

type Context = {
  params: {
    id: string;
  };
};

export const POST = async (request: Request, context: Context) => {
  try {
    const session = await getServerSession();

    const user = session?.user;

    if (!user) {
      return NextResponse.json("Unauthorized", { status: 401 });
    }

    const auditionCommentId = context.params.id;

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
      return NextResponse.json("Bad Request", { status: 400 });
    }

    return NextResponse.json("Internal Error", { status: 500 });
  }
};
