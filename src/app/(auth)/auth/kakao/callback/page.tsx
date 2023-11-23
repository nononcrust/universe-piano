import { RedirectWithRegisterToken } from "@/components/redirect-with-register-token";
import { RedirectWithUser } from "@/components/redirect-with-user";
import { ROUTE } from "@/constants/route";
import { SocialData, UserInfo } from "@/features/auth";
import { kakaoApi } from "@/features/kakao";
import { jwt } from "@/lib/jwt";
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
    const socialData = {
      id: kakaoId,
      nickname: kakaoUserInfo.properties.nickname,
      profileImage: kakaoUserInfo.properties.profile_image,
      email: kakaoUserInfo.kakao_account.email,
    } satisfies SocialData;

    const registerToken = jwt.signRegisterToken(socialData);

    return <RedirectWithRegisterToken registerToken={registerToken} />;
  }

  const userInfo: UserInfo = {
    id: user.id,
    nickname: user.nickname,
    phone: user.phone,
    email: "test@gamil.com",
    profileImage: user.profileImage,
    tier: user.tier,
    role: user.role,
    point: user.point,
  };

  return <RedirectWithUser user={userInfo} />;
}
