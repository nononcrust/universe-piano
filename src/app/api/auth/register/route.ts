import { COOKIE } from "@/constants/cookie";
import { UserInfo, registerRequestSchema } from "@/features/auth";
import { jwt } from "@/lib/jwt";
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
      return new NextResponse("User Already Exists", { status: 409 });
    }

    const user = await prisma.user.create({
      data: {
        kakaoId: parsedBody.kakaoId,
        nickname: parsedBody.nickname,
        phone: parsedBody.phone,
        profileImage: parsedBody.profileImage,
      },
    });

    const userInfo: UserInfo = {
      id: user.id,
      nickname: user.nickname,
      phone: user.phone,
      profileImage: user.profileImage,
      email: "dummy email",
      tier: user.tier,
      role: user.role,
      point: user.point,
    };

    const accessToken = jwt.signUser(userInfo);

    cookies().set(COOKIE.ACCESS_TOKEN, accessToken, {
      secure: true,
      httpOnly: true,
    });

    cookies().delete(COOKIE.REGISTER_TOKEN);

    return NextResponse.json(userInfo);
  } catch (error) {
    if (error instanceof ZodError) {
      return new NextResponse("Bad Request", { status: 400 });
    }

    return new NextResponse("Internal Error", { status: 500 });
  }
};
