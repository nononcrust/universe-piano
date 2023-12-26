import { getServerSession, revokeAccessToken } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export const DELETE = async (request: Request) => {
  try {
    const session = await getServerSession();

    const user = session?.user;

    if (!user) {
      return NextResponse.json("Unauthorized", { status: 401 });
    }

    const deletedUser = await prisma.user.delete({
      where: {
        id: user.id,
      },
    });

    revokeAccessToken();

    return NextResponse.json(deletedUser);
  } catch (error) {
    return NextResponse.json("Internal Error", { status: 500 });
  }
};
