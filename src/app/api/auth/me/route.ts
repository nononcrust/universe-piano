import { COOKIE } from "@/constants/cookie";
import { UserInfo } from "@/features/auth";
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

    const user = decoded.user;

    const userInfo: UserInfo = {
      id: user.id,
      nickname: user.nickname,
      phone: user.phone,
      profileImage: user.profileImage,
      email: user.email,
    };

    return NextResponse.json(userInfo);
  } catch (error) {
    if (error instanceof ZodError) {
      return new Response(null, { status: 200 });
    }

    return new Response("Internal Error", { status: 500 });
  }
};
