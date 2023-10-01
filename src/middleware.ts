import { NextResponse, type NextRequest } from "next/server";
import { COOKIE } from "./lib/constants/cookie";
import { ROUTE } from "./lib/constants/route";

export function middleware(request: NextRequest) {
  const accessToken = request.cookies.get(COOKIE.ACCESS_TOKEN)?.value;
  console.log("accessToken", accessToken);

  // TODO: check if the user is admin
  const isAdmin = accessToken ? true : false;

  if (request.nextUrl.pathname.startsWith(ROUTE.ADMIN.HOME)) {
    if (!isAdmin) {
      return NextResponse.redirect(new URL(ROUTE.HOME, request.url));
    }
  }
}