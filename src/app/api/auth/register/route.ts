import { COOKIE } from "@/constants/cookie";
import { RegisterBody, registerRequestSchema } from "@/features/auth";
import { jwt } from "@/lib/jwt";
import { prisma } from "@/lib/prisma";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export const POST = async (request: Request) => {
  const body = (await request.json()) as RegisterBody;

  if (registerRequestSchema.safeParse(body).success === false) {
    return new NextResponse("", { status: 400 });
  }

  const existingUser = await prisma.user.findUnique({
    where: {
      kakaoId: body.kakaoId,
    },
  });

  if (existingUser) {
    return new NextResponse("", { status: 409 });
  }

  const user = await prisma.user.create({
    data: {
      kakaoId: body.kakaoId,
      nickname: body.nickname,
      phone: body.phone,
      profileImage: body.profileImage,
    },
  });

  const userInfo = {
    id: Number(user.id),
    nickname: user.nickname,
    phone: user.phone,
    profileImage: user.profileImage,
    email: "dummy email",
  };

  const accessToken = jwt.sign(userInfo);

  cookies().set(COOKIE.ACCESS_TOKEN, accessToken, {
    secure: true,
    httpOnly: true,
  });

  return new NextResponse(JSON.stringify(userInfo), { status: 201 });
};
