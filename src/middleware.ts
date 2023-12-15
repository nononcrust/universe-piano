import { Role } from "@prisma/client";
import { NextResponse, type NextRequest } from "next/server";
import { COOKIE } from "./constants/cookie";
import { ROUTE } from "./constants/route";
import { accessTokenSchema, jwt } from "./lib/jwt";

const ADMIN_ROUTES = [ROUTE.ADMIN.HOME];
const PROTECTED_ROUTES = [ROUTE.MYPAGE.HOME, ROUTE.NEWS.AUDITION.LIST];
const AUTH_ROUTES = [ROUTE.LOGIN, ROUTE.SIGNUP];

export function middleware(request: NextRequest) {
  const getSessionFromCookie = () => {
    const accessToken = request.cookies.get(COOKIE.ACCESS_TOKEN);

    if (!accessToken) {
      return null;
    }

    const session = accessTokenSchema.safeParse(jwt.verify(accessToken.value));

    if (!session.success) {
      return null;
    }

    return session.data.user;
  };

  const session = getSessionFromCookie();

  const isAdmin = session?.role === Role.ADMIN;

  if (request.nextUrl.pathname.startsWith(ROUTE.ADMIN.HOME)) {
    if (!isAdmin) {
      return NextResponse.redirect(new URL(ROUTE.HOME, request.url));
    }
  }
}
