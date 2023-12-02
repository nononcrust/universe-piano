import { COOKIE } from "@/constants/cookie";
import { UserInfo, registerRequestSchema } from "@/features/auth";
import { issueAccessToken } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { ZodError } from "zod";

export const POST = async (request: Request) => {
  try {
    const body = await request.json();

    const parsedBody = registerRequestSchema.parse(body);

    const existingUser = await prisma.user.findUnique({
      where: {
        kakaoId: parsedBody.kakaoId,
      },
    });

    if (existingUser) {
      return NextResponse.json("User Already Exists", { status: 409 });
    }

    const user = await prisma.user.create({
      data: {
        kakaoId: parsedBody.kakaoId,
        nickname: parsedBody.nickname,
        phone: parsedBody.phone,
        profileImage: parsedBody.profileImage,
        email: parsedBody.email,
      },
    });

    const userInfo: UserInfo = {
      id: user.id,
      nickname: user.nickname,
      phone: user.phone,
      profileImage: user.profileImage,
      email: user.email,
      tier: user.tier,
      role: user.role,
      point: user.point,
    };

    issueAccessToken(userInfo);

    cookies().delete(COOKIE.REGISTER_TOKEN);

    return NextResponse.json(userInfo);
  } catch (error) {
    if (error instanceof ZodError) {
      return NextResponse.json("Bad Request", { status: 400 });
    }

    return NextResponse.json("Internal Error", { status: 500 });
  }
};
