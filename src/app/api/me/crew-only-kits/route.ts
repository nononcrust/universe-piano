import { canAccess } from "@/features/auth/authorization";
import { getServerSession } from "@/lib/auth";
import { meRepository } from "@/services/me";
import { Role } from "@prisma/client";

export const dynamic = "force-dynamic";

export const GET = async (request: Request) => {
  const session = await getServerSession();

  if (!session || session.user.role === Role.USER) {
    return Response.json("Unauthorized", { status: 401 });
  }

  const products = await meRepository.getCrewOnlyKitList();

  const roleFilteredProducts = products.filter((product) => {
    if (!product.requiredRole) return true;

    return canAccess(product.requiredRole, session.user.role);
  });

  return Response.json(roleFilteredProducts);
};
