import { COOKIE } from "@/constants/cookie";
import { UserInfo } from "@/features/auth";
import { accessTokenSchema, jwt } from "@/lib/jwt";
import { cookies } from "next/headers";

export const getUserInfo = async () => {
  const cookie = cookies().get(COOKIE.ACCESS_TOKEN);

  if (!cookie) {
    return null;
  }

  const accessToken = cookie.value;

  const decoded = accessTokenSchema.safeParse(jwt.verify(accessToken));

  if (!decoded.success) {
    return null;
  }

  const user = decoded.data.user;

  const userInfo: UserInfo = {
    id: user.id,
    nickname: user.nickname,
    phone: user.phone,
    profileImage: user.profileImage,
    email: user.email,
  };

  return userInfo;
};
