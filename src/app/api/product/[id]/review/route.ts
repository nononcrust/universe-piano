import { getServerSession } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { UPLOAD_FOLDER, storage } from "@/lib/supabase";
import { productRepository, productReviewCreateRequestSchema } from "@/services/product";
import { ZodError } from "zod";

export const dynamic = "force-dynamic";

type Context = {
  params: {
    id: string;
  };
};

export const GET = async (request: Request, context: Context) => {
  const productId = context.params.id;

  const productReviews = await productRepository.getProductReviewListById(productId);

  return Response.json(productReviews);
};

export const POST = async (request: Request, context: Context) => {
  try {
    const session = await getServerSession();

    const user = session?.user;

    if (!user) {
      return Response.json("Unauthorized", { status: 401 });
    }

    const productId = context.params.id;

    const formData = await request.formData();

    const body = productReviewCreateRequestSchema.parse(Object.fromEntries(formData.entries()));

    const images = formData.get("images[]") as File;

    if (images) {
      const { path } = await storage.uploadFile(images, UPLOAD_FOLDER.REVIEW);

      const productReview = await prisma.productReview.create({
        data: {
          imageUrls: [`/${path}`],
          content: body.content,
          rating: Number(body.rating),
          user: {
            connect: {
              id: user.id,
            },
          },
          product: {
            connect: {
              id: productId,
            },
          },
        },
      });

      return Response.json(productReview);
    }

    const productReview = await prisma.productReview.create({
      data: {
        content: body.content,
        rating: Number(body.rating),
        user: {
          connect: {
            id: user.id,
          },
        },
        product: {
          connect: {
            id: productId,
          },
        },
      },
    });

    return Response.json(productReview);
  } catch (error) {
    if (error instanceof ZodError) {
      return Response.json("Bad Request", { status: 400 });
    }

    return Response.json("Internal Error", { status: 500 });
  }
};
