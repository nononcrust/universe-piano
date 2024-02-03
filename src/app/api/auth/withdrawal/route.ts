import { getServerSession, revokeAccessToken } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export const DELETE = async (request: Request) => {
  try {
    const session = await getServerSession();

    const user = session?.user;

    if (!user) {
      return Response.json("Unauthorized", { status: 401 });
    }

    const deletedUser = await prisma.user.delete({
      where: {
        id: user.id,
      },
    });

    revokeAccessToken();

    return Response.json(deletedUser);
  } catch (error) {
    return Response.json("Internal Error", { status: 500 });
  }
};
