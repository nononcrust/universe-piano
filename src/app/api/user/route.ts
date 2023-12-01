import { userRepository } from "@/features/user";
import { NextResponse } from "next/server";

export const GET = async (request: Request) => {
  try {
    const users = await userRepository.getUserList();

    return NextResponse.json(users);
  } catch (error) {
    return NextResponse.json("Internal Error", { status: 500 });
  }
};
