import { COOKIE } from "@/constants/cookie";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export const GET = async (request: Request) => {
  try {
    cookies().delete(COOKIE.ACCESS_TOKEN);

    return NextResponse.json("", {
      status: 200,
    });
  } catch (error) {
    return NextResponse.json("Internal Error", { status: 500 });
  }
};
