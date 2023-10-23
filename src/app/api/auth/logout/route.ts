import { COOKIE } from "@/constants/cookie";
import { cookies } from "next/headers";

export const GET = async (request: Request) => {
  cookies().delete(COOKIE.ACCESS_TOKEN);

  return new Response(null, {
    status: 200,
  });
};
