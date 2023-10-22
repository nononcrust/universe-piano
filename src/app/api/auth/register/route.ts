import { RegisterBody, registerRequestSchema } from "@/features/auth";
import { prisma } from "@/lib/prisma";
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

  return new NextResponse(JSON.stringify(user), { status: 201 });
};
