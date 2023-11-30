import { COOKIE } from "@/constants/cookie";
import { UserInfo } from "@/features/auth";
import { userRepository } from "@/features/user";
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

    const id = decoded.user.id;

    const user = await userRepository.getUserById(id);

    if (!user) {
      return new Response(null, { status: 200 });
    }

    const userInfo: UserInfo = {
      id: user.id,
      nickname: user.nickname,
      phone: user.phone,
      email: user.email,
      profileImage: user.profileImage,
      tier: user.tier,
      role: user.role,
      point: user.point,
    };

    return NextResponse.json(userInfo);
  } catch (error) {
    if (error instanceof ZodError) {
      return new Response(null, { status: 200 });
    }

    return new Response("Internal Error", { status: 500 });
  }
};
