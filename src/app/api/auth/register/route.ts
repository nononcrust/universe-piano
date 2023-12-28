import { COOKIE } from "@/constants/cookie";
import { JwtPayload, authRepository, registerRequestSchema } from "@/features/auth";
import { issueAccessToken } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { ZodError } from "zod";

export const dynamic = "force-dynamic";

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

    const createdUser = await prisma.user.create({
      data: {
        kakaoId: parsedBody.kakaoId,
        name: parsedBody.name,
        nickname: parsedBody.nickname,
        phone: parsedBody.phone,
        profileImage: parsedBody.profileImage,
        email: parsedBody.email,
      },
    });
    cookies().delete(COOKIE.REGISTER_TOKEN);

    const user = await authRepository.getUserById(createdUser.id);

    const jwtPayload: JwtPayload = {
      id: createdUser.id,
      role: createdUser.role,
      tier: createdUser.tier,
    };

    await issueAccessToken(jwtPayload);

    return NextResponse.json(user, { status: 201 });
  } catch (error) {
    if (error instanceof ZodError) {
      return NextResponse.json("Bad Request", { status: 400 });
    }
    return NextResponse.json("Internal Error", { status: 500 });
  }
};
