import { COOKIE } from "@/constants/cookie";
import { JwtPayload, Session, authRepository } from "@/features/auth";
import { issueAccessToken, revokeAccessToken } from "@/lib/auth";
import { accessTokenSchema, jwt } from "@/lib/jwt";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export const GET = async (request: Request) => {
  try {
    const cookie = cookies().get(COOKIE.ACCESS_TOKEN);

    if (!cookie) {
      return NextResponse.json(null, { status: 200 });
    }

    const accessToken = cookie.value;

    const decoded = accessTokenSchema.parse(jwt.verify(accessToken));

    const id = decoded.user.id;

    const user = await authRepository.getUserById(id);

    if (!user) {
      revokeAccessToken();
      return NextResponse.json(null, { status: 200 });
    }

    const jwtPayload: JwtPayload = {
      id: user.id,
      role: user.role,
      tier: user.tier,
    };

    issueAccessToken(jwtPayload);

    const session: Session = {
      user: user,
    };

    return NextResponse.json(session);
  } catch (error) {
    return NextResponse.json("Internal Error", { status: 500 });
  }
};
