import { kakaoApi } from "@/api/kakao";
import { RedirectWithUser } from "@/components/redirect-with-user";
import { ROUTE } from "@/lib/constants/route";
import { redirect } from "next/navigation";

export default async function KakaoCallbackPage({
  searchParams,
}: {
  searchParams: { code: string };
}) {
  const code = searchParams.code;

  if (!code) {
    return redirect(ROUTE.LOGIN);
  }

  try {
    const data = await kakaoApi.getAccessToken(code);
    const userInfo = await kakaoApi.getUserInfo(data.access_token);

    const user = {
      id: userInfo.id,
      nickname: userInfo.properties.nickname,
      email: "test@gamil.com",
      profileImage: userInfo.properties.profile_image,
    };

    return <RedirectWithUser user={user} />;
  } catch (error) {
    return redirect(ROUTE.LOGIN);
  }
}
