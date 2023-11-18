import { COOKIE } from "@/constants/cookie";
import { cookies } from "next/headers";

export const GET = async (request: Request) => {
  try {
    cookies().delete(COOKIE.ACCESS_TOKEN);

    return new Response("", {
      status: 200,
    });
  } catch (error) {
    return new Response("Internal Error", { status: 500 });
  }
};
