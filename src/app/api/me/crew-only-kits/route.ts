import { canAccess, rolePermissions } from "@/features/auth/authorization";
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
    // TODO: 하드코딩 수정
    if (
      product.name === "미국 음대 입시 로드맵" &&
      !rolePermissions.CREW.includes(session.user.role)
    ) {
      return false;
    }

    if (!product.requiredRole) return true;

    if (product.requiredRole) {
      return canAccess(product.requiredRole, session.user.role);
    }
  });

  return Response.json(roleFilteredProducts);
};
