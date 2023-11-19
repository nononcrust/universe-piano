import { COOKIE } from "@/constants/cookie";
import { accessTokenSchema, jwt } from "@/lib/jwt";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { ZodError } from "zod";

export const GET = async (request: Request) => {
  try {
    const cookie = cookies().get(COOKIE.ACCESS_TOKEN);

    if (!cookie) {
      return new Response(null, { status: 200 });
    }

    const accessToken = cookie.value;

    const decoded = accessTokenSchema.parse(jwt.verify(accessToken));

    const userInfo = decoded.user;

    return NextResponse.json(userInfo);
  } catch (error) {
    if (error instanceof ZodError) {
      return new Response(null, { status: 200 });
    }

    return new Response("Internal Error", { status: 500 });
  }
};
