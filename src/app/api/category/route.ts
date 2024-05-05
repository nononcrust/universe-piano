import { categoryRepository } from "@/services/category";

export const dynamic = "force-dynamic";

export const GET = async (request: Request) => {
  const categories = await categoryRepository.getCategoryList();

  return Response.json(categories);
};
