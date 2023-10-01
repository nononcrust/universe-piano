import { jwt } from "@/lib/jwt";

export const GET = async (request: Request) => {
  const accessToken = request.headers.get("Authorization")?.split(" ")[1];

  if (!accessToken) {
    return new Response("", {
      status: 401,
    });
  }

  const decoded = jwt.verify(accessToken);

  if (!decoded) {
    return new Response("", {
      status: 401,
    });
  }
};
