import { prisma } from "@/lib/prisma";
import { UPLOAD_FOLDER, storage } from "@/lib/supabase";
import { auditionRepository, auditionRequestBodySchema } from "@/services/audition";
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
    const formData = await request.formData();

    const { images, ...body } = auditionRequestBodySchema.parse(
      Object.fromEntries(formData.entries()),
    );

    if (images && images.length > 0) {
      const { path } = await storage.uploadFile(images[0], UPLOAD_FOLDER.AUDITION);

      const audition = await prisma.audition.create({
        data: {
          ...body,
          imageUrls: [path],
        },
      });

      return Response.json(audition);
    }

    const audition = await prisma.audition.create({
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
