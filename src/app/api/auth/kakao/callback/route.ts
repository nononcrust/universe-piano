import { kakaoApi } from "@/api/kakao";
import { ROUTE } from "@/lib/constants/route";
import { jwt } from "@/lib/jwt";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export const GET = async (request: Request) => {
  const code = new URL(request.url).searchParams.get("code");

  if (!code) {
    return NextResponse.redirect(new URL(ROUTE.LOGIN, request.url), 302);
  }

  const data = await kakaoApi.getAccessToken(code);

  const userInfo = await kakaoApi.getUserInfo(data.access_token);

  const kakaoId = userInfo.id.toString();

  const user = await prisma.user.findUnique({
    where: {
      kakaoId,
    },
  });

  if (user) {
    return NextResponse.redirect(new URL(ROUTE.HOME, request.url), {
      headers: {
        "Set-Cookie": `access_token=${jwt.sign(user.id)}; path=/; Max-Age=${
          60 * 60 * 24 * 30
        }; SameSite=Lax;`,
      },
    });
  }

  return NextResponse.redirect(
    new URL(`${ROUTE.SIGNUP}?token=${data.access_token}`, request.url),
    302,
  );
};
