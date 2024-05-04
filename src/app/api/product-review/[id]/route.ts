import { prisma } from "@/lib/prisma";
import { storage } from "@/lib/supabase";

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

  if (productReview.imageUrls.length > 0) {
    await storage.deleteFiles(productReview.imageUrls);
  }

  return Response.json(productReview);
};
