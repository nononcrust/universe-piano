import { COOKIE } from "@/constants/cookie";
import { cookies } from "next/headers";
import { accessTokenSchema, jwt } from "./jwt";

export const getServerSession = async () => {
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

  return { user };
};
