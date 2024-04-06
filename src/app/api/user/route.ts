import { userRepository } from "@/services/user";

export const dynamic = "force-dynamic";

export const GET = async (request: Request) => {
  try {
    const users = await userRepository.getUserList();

    return Response.json(users);
  } catch (error) {
    return Response.json("Internal Error", { status: 500 });
  }
};
