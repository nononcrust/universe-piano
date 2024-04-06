import { getServerSession } from "@/lib/auth";
import { meRepository } from "@/services/me";

export const dynamic = "force-dynamic";

export const GET = async (request: Request) => {
  const session = await getServerSession();

  if (!session) {
    return Response.json("Unauthorized", { status: 401 });
  }

  const products = await meRepository.getPurchasedProductList(session);

  return Response.json(products);
};
