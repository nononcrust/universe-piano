import { RedirectWithRegisterToken } from "@/components/redirect-with-register-token";
import { RedirectWithUser } from "@/components/redirect-with-user";
import { ROUTE } from "@/constants/route";
import { SocialData, authRepository } from "@/features/auth";
import { kakaoApi } from "@/features/kakao";
import { jwt } from "@/lib/jwt";
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

  const user = await authRepository.getUserByKakaoId(kakaoId);

  if (user === null) {
    const socialData: SocialData = {
      id: kakaoId,
      name: kakaoUserInfo.kakao_account.name,
      nickname: kakaoUserInfo.properties.nickname,
      profileImage: kakaoUserInfo.properties.thumbnail_image,
      email: kakaoUserInfo.kakao_account.email,
    };

    const registerToken = await jwt.signRegisterToken(socialData);

    return <RedirectWithRegisterToken registerToken={registerToken} />;
  }

  return <RedirectWithUser user={user} />;
}
