import { COOKIE } from "@/constants/cookie";
import { ROUTE } from "@/constants/route";
import { accessTokenSchema, jwt } from "@/lib/jwt";
import { Role } from "@prisma/client";
import { NextRequest } from "next/server";

// TODO: 하드코딩 제거
export const CREW_CONTENT_URL = ["/books/checklist"] as const;

const DISABLED_ROUTES = [ROUTE.MYPAGE.ACTIVITY, ROUTE.ABOUT.PORTFOLIO] as const;
const PROTECTED_ROUTES = [ROUTE.MYPAGE.HOME, ROUTE.NEWS.AUDITION.LIST] as const;
const AUTH_ROUTES = [ROUTE.LOGIN, ROUTE.SIGNUP] as const;

const getSessionFromCookie = async (request: NextRequest) => {
  const accessToken = request.cookies.get(COOKIE.ACCESS_TOKEN);

  if (!accessToken) {
    return null;
  }

  const session = accessTokenSchema.safeParse((await jwt.verify(accessToken.value))?.payload);

  if (!session.success) {
    return null;
  }

  return session.data.user;
};

export async function middleware(request: NextRequest) {
  const session = await getSessionFromCookie(request);

  const isCrew = session?.role === Role.CREW || session?.role === Role.ADMIN;
  const isAdmin = session?.role === Role.ADMIN;

  const isAuthRoute = AUTH_ROUTES.includes(request.nextUrl.pathname);
  const isMemberRoute = PROTECTED_ROUTES.includes(request.nextUrl.pathname);
  const isCrewRoute = request.nextUrl.pathname.startsWith(CREW_CONTENT_URL[0]);
  const isAdminRoute = request.nextUrl.pathname.startsWith(ROUTE.ADMIN.HOME);
  const isDisabledRoute = DISABLED_ROUTES.includes(request.nextUrl.pathname);

  if (isAuthRoute && session) {
    return Response.redirect(new URL(ROUTE.HOME, request.url));
  }

  if (isMemberRoute && !session) {
    return Response.redirect(new URL(ROUTE.LOGIN, request.url));
  }

  if (isCrewRoute && !isCrew) {
    return Response.redirect(new URL(ROUTE.HOME, request.url));
  }

  if (isAdminRoute && !isAdmin) {
    return Response.redirect(new URL(ROUTE.HOME, request.url));
  }

  /** 숨겨진 페이지 */
  if (isDisabledRoute) {
    return Response.redirect(new URL(ROUTE.HOME, request.url));
  }
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
