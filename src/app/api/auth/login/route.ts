import { userInfoSchema } from "@/features/auth";
import { issueAccessToken } from "@/lib/auth";
import { NextResponse } from "next/server";
import { ZodError } from "zod";

export const POST = async (request: Request) => {
  try {
    const requestBody = await request.json();

    const parsedBody = userInfoSchema.parse(requestBody);

    const user = parsedBody;

    issueAccessToken(user);

    return NextResponse.json("", { status: 200 });
  } catch (error) {
    if (error instanceof ZodError) {
      return NextResponse.json("Bad Request", { status: 400 });
    }

    return NextResponse.json("Internal Error", { status: 500 });
  }
};
