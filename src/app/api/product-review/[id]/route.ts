import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

type Context = {
  params: {
    id: string;
  };
};

export const DELETE = async (request: Request, context: Context) => {
  const productReviewId = context.params.id;

  const productReview = await prisma.productReview.delete({
    where: {
      id: productReviewId,
    },
  });

  return Response.json(productReview);
};
