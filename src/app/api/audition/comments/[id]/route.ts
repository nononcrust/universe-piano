import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

interface Context {
  params: {
    id: string;
  };
}

export const DELETE = async (request: Request, context: Context) => {
  try {
    const auditionCommentId = Number(context.params.id);

    const auditionComment = await prisma.auditionComment.delete({
      where: {
        id: auditionCommentId,
      },
    });

    return NextResponse.json(auditionComment);
  } catch (error) {
    return new NextResponse("Internal Error", { status: 500 });
  }
};
