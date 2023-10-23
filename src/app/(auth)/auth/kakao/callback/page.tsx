import { RedirectWithUser } from "@/components/redirect-with-user";
import { ROUTE } from "@/constants/route";
import { UserInfo } from "@/features/auth";
import { kakaoApi } from "@/features/kakao";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";

export default async function KakaoCallbackPage({
  searchParams,
}: {
  searchParams: { code: string };
}) {
  const code = searchParams.code;

  if (!code) redirect(ROUTE.LOGIN);

  const data = await kakaoApi.getAccessToken(code);
  const kakaoUserInfo = await kakaoApi.getUserInfo(data.access_token);
  const kakaoId = String(kakaoUserInfo.id);

  const user = await prisma.user.findUnique({
    where: {
      kakaoId,
    },
  });

  if (user === null) {
    redirect(`${ROUTE.SIGNUP}?token=${data.access_token}`);
  }

  const userInfo = {
    id: Number(kakaoId),
    nickname: user.nickname,
    email: "test@gamil.com",
    profileImage: user.profileImage,
  } satisfies UserInfo;

  await fetch("http://localhost:3000/api/auth/login", {
    method: "POST",
    body: JSON.stringify({
      user: userInfo,
    }),
  });

  return <RedirectWithUser user={userInfo} />;
}
