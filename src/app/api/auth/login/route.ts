import { COOKIE } from "@/constants/cookie";
import { userInfoSchema } from "@/features/auth";
import { jwt } from "@/lib/jwt";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { ZodError } from "zod";

export const POST = async (request: Request) => {
  try {
    const requestBody = await request.json();

    const parsedBody = userInfoSchema.parse(requestBody);

    const user = parsedBody;

    const accessToken = jwt.signUser(user);

    cookies().set(COOKIE.ACCESS_TOKEN, accessToken, {
      secure: true,
      httpOnly: true,
    });

    return new NextResponse("", { status: 200 });
  } catch (error) {
    if (error instanceof ZodError) {
      return new NextResponse("Bad Request", { status: 400 });
    }

    return new NextResponse("Internal Error", { status: 500 });
  }
};
