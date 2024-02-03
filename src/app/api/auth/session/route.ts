import { COOKIE } from "@/constants/cookie";
import { JwtPayload, Session, authRepository } from "@/features/auth";
import { issueAccessToken, revokeAccessToken } from "@/lib/auth";
import { accessTokenSchema, jwt } from "@/lib/jwt";
import { cookies } from "next/headers";

export const dynamic = "force-dynamic";

export const GET = async (request: Request) => {
  try {
    const cookie = cookies().get(COOKIE.ACCESS_TOKEN);

    if (!cookie) {
      return Response.json(null, { status: 200 });
    }

    const accessToken = cookie.value;

    const decoded = accessTokenSchema.parse((await jwt.verify(accessToken))?.payload);

    const id = decoded.user.id;

    const user = await authRepository.getUserById(id);

    if (!user) {
      revokeAccessToken();
      return Response.json(null, { status: 200 });
    }

    const jwtPayload: JwtPayload = {
      id: user.id,
      role: user.role,
      tier: user.tier,
    };

    await issueAccessToken(jwtPayload);

    const session: Session = {
      user: user,
    };

    return Response.json(session);
  } catch (error) {
    console.log(error);
    return Response.json("Internal Error", { status: 500 });
  }
};
