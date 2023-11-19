import { COOKIE } from "@/constants/cookie";
import { auditionCommentRequestSchema } from "@/features/audition";
import { accessTokenSchema, jwt } from "@/lib/jwt";
import { prisma } from "@/lib/prisma";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { ZodError } from "zod";

interface Context {
  params: {
    id: string;
  };
}

export const POST = async (request: Request, context: Context) => {
  try {
    const auditionCommentId = Number(context.params.id);

    const body = await request.json();

    const getUserInfo = async () => {
      const cookie = cookies().get(COOKIE.ACCESS_TOKEN);

      if (!cookie) {
        return null;
      }

      const accessToken = cookie.value;

      const decoded = accessTokenSchema.safeParse(jwt.verify(accessToken));

      if (!decoded.success) {
        return null;
      }

      const userInfo = decoded.data.user;

      return userInfo;
    };

    const user = await getUserInfo();

    if (!user) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const parsedBody = auditionCommentRequestSchema.parse(body);

    const auditionComment = await prisma.auditionComment.create({
      data: {
        ...parsedBody,
        userId: user.id,
        auditionId: auditionCommentId,
      },
    });

    return NextResponse.json(auditionComment);
  } catch (error) {
    if (error instanceof ZodError) {
      return new NextResponse("Bad Request", { status: 400 });
    }

    return new NextResponse("Internal Error", { status: 500 });
  }
};
