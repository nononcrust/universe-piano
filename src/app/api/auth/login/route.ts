import { issueAccessToken } from "@/lib/auth";
import { jwtPayloadSchema } from "@/services/auth";

import { ZodError } from "zod";

export const dynamic = "force-dynamic";

export const POST = async (request: Request) => {
  try {
    const body = jwtPayloadSchema.parse(await request.json());

    const user = body;

    await issueAccessToken(user);

    return Response.json("", { status: 200 });
  } catch (error) {
    if (error instanceof ZodError) {
      return Response.json("Bad Request", { status: 400 });
    }

    return Response.json("Internal Error", { status: 500 });
  }
};
