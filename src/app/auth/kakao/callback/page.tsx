import { kakaoApi } from "@/api/kakao";
import { RedirectWithUser } from "@/components/redirect-with-user";
import { ROUTE } from "@/lib/constants/route";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";

export default async function KakaoCallbackPage({
  searchParams,
}: {
  searchParams: { code: string };
}) {
  const code = searchParams.code;

  if (!code) {
    console.log("code not found redirect to login");
    redirect(ROUTE.LOGIN);
  }

  const data = await kakaoApi.getAccessToken(code);
  const userInfo = await kakaoApi.getUserInfo(data.access_token);
  const kakaoId = String(userInfo.id);

  const user = await prisma.user.findUnique({
    where: {
      kakaoId,
    },
  });

  console.log("user", user);
  console.log("token", data.access_token);

  if (user === null) {
    console.log("user not found redirect to signup");
    redirect(`${ROUTE.SIGNUP}?token=${data.access_token}`);
  }

  const userState = {
    id: userInfo.id,
    nickname: userInfo.properties.nickname,
    email: "test@gamil.com",
    profileImage: userInfo.properties.profile_image,
  };

  return <RedirectWithUser user={userState} />;
}
