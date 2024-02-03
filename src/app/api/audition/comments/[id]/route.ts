import { prisma } from "@/lib/prisma";

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

    return Response.json(auditionComment);
  } catch (error) {
    return Response.json("Internal Error", { status: 500 });
  }
};
