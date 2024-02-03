import { auditionRepository, auditionRequestSchema } from "@/features/audition";
import { prisma } from "@/lib/prisma";
import { ZodError } from "zod";

export const dynamic = "force-dynamic";

export const GET = async (request: Request) => {
  try {
    const auditions = await auditionRepository.getAuditionList();

    return Response.json(auditions);
  } catch (error) {
    return Response.json("Internal Error", { status: 500 });
  }
};

export const POST = async (request: Request) => {
  try {
    const body = await request.json();

    const { images, ...parsedBody } = auditionRequestSchema.parse(body);

    const audition = await prisma.audition.create({
      data: {
        ...parsedBody,
        images: {
          createMany: {
            data: images?.map((image) => ({ url: image })) ?? [],
          },
        },
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
