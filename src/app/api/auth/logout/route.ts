import { COOKIE } from "@/constants/cookie";
import { cookies } from "next/headers";

export const dynamic = "force-dynamic";

export const GET = async (request: Request) => {
  try {
    cookies().delete(COOKIE.ACCESS_TOKEN);

    return Response.json("", {
      status: 200,
    });
  } catch (error) {
    return Response.json("Internal Error", { status: 500 });
  }
};
