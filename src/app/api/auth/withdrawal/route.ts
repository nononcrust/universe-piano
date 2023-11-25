import { COOKIE } from "@/constants/cookie";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "@/lib/session";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export const DELETE = async (request: Request) => {
  try {
    const session = await getServerSession();

    const user = session?.user;

    if (!user) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const deletedUser = await prisma.user.delete({
      where: {
        id: user.id,
      },
    });

    cookies().delete(COOKIE.ACCESS_TOKEN);

    return NextResponse.json(deletedUser);
  } catch (error) {
    console.log(error);
    return new NextResponse("Internal Error", { status: 500 });
  }
};
