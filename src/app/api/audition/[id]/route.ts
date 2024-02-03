import { auditionRepository, auditionRequestSchema } from "@/features/audition";
import { prisma } from "@/lib/prisma";
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

    const body = await request.json();

    const { images, ...parsedBody } = auditionRequestSchema.parse(body);

    const audition = await prisma.audition.update({
      where: {
        id: auditionId,
      },
      include: {
        comments: true,
      },
      data: {
        ...parsedBody,
        ...(images && { image: images[0] }),
      },
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

    const audition = await prisma.audition.delete({
      where: {
        id: auditionId,
      },
    });

    return Response.json(audition);
  } catch (error) {
    return Response.json("Internal Error", { status: 500 });
  }
};
