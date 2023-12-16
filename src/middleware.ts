import { Role } from "@prisma/client";
import { NextResponse, type NextRequest } from "next/server";
import { COOKIE } from "./constants/cookie";
import { ROUTE } from "./constants/route";
import { accessTokenSchema, jwt } from "./lib/jwt";

const DISABLED_ROUTES = [
  ROUTE.KIT.LIST,
  ROUTE.KIT.DETAIL,
  ROUTE.CART,
  ROUTE.ORDER.RESULT,
  ROUTE.ORDER.DETAIL,
  ROUTE.SERVICE.PRODUCT.LIST,
  ROUTE.SERVICE.PRODUCT.DETAIL,
  ROUTE.REVIEW.LIST,
  ROUTE.CHECKOUT,
  ROUTE.MYPAGE.ORDER,
  ROUTE.MYPAGE.ACTIVITY,
];
const PROTECTED_ROUTES = [ROUTE.MYPAGE.HOME, ROUTE.NEWS.AUDITION.LIST];
const AUTH_ROUTES = [ROUTE.LOGIN, ROUTE.SIGNUP];

const getSessionFromCookie = (request: NextRequest) => {
  const accessToken = request.cookies.get(COOKIE.ACCESS_TOKEN);

  if (!accessToken) {
    return null;
  }

  console.log(accessToken);
  const session = accessTokenSchema.safeParse(jwt.verify(accessToken.value));
  console.log("@@@", jwt.verify(accessToken.value));
  console.log(session);

  if (!session.success) {
    return null;
  }

  return session.data.user;
};

export function middleware(request: NextRequest) {
  const session = getSessionFromCookie(request);
  console.log(session);

  const isAdmin = session?.role === Role.ADMIN;

  // if (PROTECTED_ROUTES.includes(request.nextUrl.pathname as (typeof PROTECTED_ROUTES)[number])) {
  //   if (!session) {
  //     return NextResponse.redirect(new URL(ROUTE.LOGIN, request.url));
  //   }
  // }

  // if (AUTH_ROUTES.includes(request.nextUrl.pathname as (typeof AUTH_ROUTES)[number])) {
  //   if (session) {
  //     return NextResponse.redirect(new URL(ROUTE.HOME, request.url));
  //   }
  // }

  if (request.nextUrl.pathname.startsWith(ROUTE.ADMIN.HOME)) {
    if (!isAdmin) {
      return NextResponse.redirect(new URL(ROUTE.HOME, request.url));
    }
  }

  /** disabled page */
  if (DISABLED_ROUTES.includes(request.nextUrl.pathname as (typeof DISABLED_ROUTES)[number])) {
    return NextResponse.redirect(new URL(ROUTE.HOME, request.url));
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
