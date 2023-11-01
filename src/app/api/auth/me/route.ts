import { COOKIE } from "@/constants/cookie";
import { UserInfo } from "@/features/auth";
import { jwt, jwtSchema } from "@/lib/jwt";
import { cookies } from "next/headers";

export const GET = async (request: Request) => {
  const cookie = cookies().get(COOKIE.ACCESS_TOKEN);

  if (!cookie) {
    return new Response(null, {
      status: 200,
    });
  }

  const accessToken = cookie.value;

  const decoded = jwtSchema.safeParse(jwt.verify(accessToken));

  if (!decoded.success) {
    return new Response(null, {
      status: 200,
    });
  }

  const user = decoded.data.user;

  const userInfo: UserInfo = {
    id: user.id,
    nickname: user.nickname,
    profileImage: user.profileImage,
    email: user.email,
  };

  return new Response(JSON.stringify(userInfo), {
    status: 200,
  });
};
