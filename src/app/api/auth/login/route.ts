import { COOKIE } from "@/lib/constants/cookie";
import { jwt } from "@/lib/jwt";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export const POST = async (request: Request) => {
  const body = (await request.json()) as { userId: string };

  const accessToken = jwt.sign(body.userId);

  cookies().set(COOKIE.ACCESS_TOKEN, accessToken, {
    secure: true,
    httpOnly: true,
  });

  return new NextResponse("", { status: 200 });
};
