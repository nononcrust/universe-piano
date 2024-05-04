import { prisma } from "@/lib/prisma";
import { storage } from "@/lib/supabase";
import { auditionRepository, auditionRequestSchema } from "@/services/audition";
import { ZodError } from "zod";

export const dynamic = "force-dynamic";

type Context = {
  params: {
    id: string;
  };
};

export const GET = async (request: Request, context: Context) => {
  try {
    const auditionId = context.params.id;

    const audition = await auditionRepository.getAuditionById(auditionId);

    return Response.json(audition);
  } catch (error) {
    return Response.json("Internal Error", { status: 500 });
  }
};

export const PUT = async (request: Request, context: Context) => {
  try {
    const auditionId = context.params.id;

    const body = auditionRequestSchema.parse(await request.json());

    const audition = await prisma.audition.update({
      where: {
        id: auditionId,
      },
      include: {
        comments: true,
      },
      data: body,
    });

    return Response.json(audition);
  } catch (error) {
    if (error instanceof ZodError) {
      return Response.json("Bad Request", { status: 400 });
    }

    return Response.json("Internal Error", { status: 500 });
  }
};

export const DELETE = async (request: Request, context: Context) => {
  try {
    const auditionId = context.params.id;

    const audition = await prisma.audition.findUnique({
      where: {
        id: auditionId,
      },
    });

    if (!audition) {
      return Response.json("Not Found", { status: 404 });
    }

    if (audition.imageUrls.length > 0) {
      await storage.deleteFiles(audition.imageUrls);
    }

    const response = await prisma.audition.delete({
      where: {
        id: auditionId,
      },
    });

    return Response.json(response);
  } catch (error) {
    return Response.json("Internal Error", { status: 500 });
  }
};
