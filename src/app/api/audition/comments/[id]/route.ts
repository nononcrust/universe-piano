import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

type Context = {
  params: {
    id: string;
  };
};

export const DELETE = async (request: Request, context: Context) => {
  try {
    const auditionCommentId = context.params.id;

    const auditionComment = await prisma.auditionComment.delete({
      where: {
        id: auditionCommentId,
      },
    });

    return NextResponse.json(auditionComment);
  } catch (error) {
    return NextResponse.json("Internal Error", { status: 500 });
  }
};
