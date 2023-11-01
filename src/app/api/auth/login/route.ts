import { COOKIE } from "@/constants/cookie";
import { userInfoSchema } from "@/features/auth";
import { jwt } from "@/lib/jwt";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export const POST = async (request: Request) => {
  const requestBody = await request.json();

  const parsedBody = userInfoSchema.safeParse(requestBody);

  if (!parsedBody.success) {
    return new NextResponse(parsedBody.error.message, { status: 400 });
  }

  const user = parsedBody.data;

  const accessToken = jwt.sign(user);

  cookies().set(COOKIE.ACCESS_TOKEN, accessToken, {
    secure: true,
    httpOnly: true,
  });

  return new NextResponse("", { status: 200 });
};
