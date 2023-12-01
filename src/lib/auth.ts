import { COOKIE } from "@/constants/cookie";
import { Session, UserInfo } from "@/features/auth";
import { Role } from "@prisma/client";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { accessTokenSchema, jwt } from "./jwt";

export const issueAccessToken = (user: UserInfo) => {
  const accessToken = jwt.signUser(user);

  const MAX_AGE_30_DAYS = 60 * 60 * 24 * 30;

  cookies().set(COOKIE.ACCESS_TOKEN, accessToken, {
    secure: true,
    httpOnly: true,
    maxAge: MAX_AGE_30_DAYS,
  });
};

export const revokeAccessToken = () => {
  cookies().delete(COOKIE.ACCESS_TOKEN);
};

export const getServerSession = async (): Promise<Session | null> => {
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

  const session = {
    user,
  } satisfies Session;

  return session;
};

export const adminGuard = async () => {
  const session = await getServerSession();

  if (session?.user.role !== Role.ADMIN) {
    return NextResponse.json("Unauthorized", { status: 401 });
  }
};
