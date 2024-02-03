import { COOKIE } from "@/constants/cookie";
import { JwtPayload, Session, authRepository } from "@/features/auth";
import { accessTokenSchema, jwt } from "@/lib/jwt";
import { Role } from "@prisma/client";
import { cookies } from "next/headers";

export const issueAccessToken = async (jwtPayload: JwtPayload) => {
  const accessToken = await jwt.signUser(jwtPayload);

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

  const decoded = accessTokenSchema.safeParse((await jwt.verify(accessToken))?.payload);

  if (!decoded.success) {
    return null;
  }

  const userId = decoded.data.user.id;

  const user = await authRepository.getUserById(userId);

  if (!user) {
    revokeAccessToken();
    return null;
  }

  const session: Session = {
    user,
  };

  return session;
};

export const adminGuard = async () => {
  const session = await getServerSession();

  if (session?.user.role !== Role.ADMIN) {
    return Response.json("Unauthorized", { status: 401 });
  }
};
