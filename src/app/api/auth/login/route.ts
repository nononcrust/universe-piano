import { COOKIE } from "@/constants/cookie";
import { UserInfo } from "@/features/auth";
import { jwt } from "@/lib/jwt";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export const POST = async (request: Request) => {
  const body = (await request.json()) as { user: UserInfo };

  const accessToken = jwt.sign(body.user);

  cookies().set(COOKIE.ACCESS_TOKEN, accessToken, {
    secure: true,
    httpOnly: true,
  });

  return new NextResponse("", { status: 200 });
};
