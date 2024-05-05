import { reviewRepository } from "@/services/review";

export const dynamic = "force-dynamic";

export const GET = async (request: Request) => {
  const notices = await reviewRepository.getReviewList();

  return Response.json(notices);
};
