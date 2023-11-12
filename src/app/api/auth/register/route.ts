import { COOKIE } from "@/constants/cookie";
import { registerRequestSchema } from "@/features/auth";
import { jwt } from "@/lib/jwt";
import { prisma } from "@/lib/prisma";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export const POST = async (request: Request) => {
  const body = await request.json();

  const parsedBody = registerRequestSchema.safeParse(body);

  if (parsedBody.success === false) {
    return new NextResponse("", { status: 400 });
  }

  const existingUser = await prisma.user.findUnique({
    where: {
      kakaoId: parsedBody.data.kakaoId,
    },
  });

  if (existingUser) {
    return new NextResponse("", { status: 409 });
  }

  const user = await prisma.user.create({
    data: {
      kakaoId: parsedBody.data.kakaoId,
      nickname: parsedBody.data.nickname,
      phone: parsedBody.data.phone,
      profileImage: parsedBody.data.profileImage,
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

  cookies().delete(COOKIE.REGISTER_TOKEN);

  return new NextResponse(JSON.stringify(userInfo), { status: 201 });
};
