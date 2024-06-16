import { getServerSession } from "@/lib/auth";
import { meRepository } from "@/services/me";
import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export const GET = async (request: NextRequest) => {
  const session = await getServerSession();

  if (!session) {
    return NextResponse.json([]);
  }

  const productReviews = await meRepository.getMyProductReviewList(session);

  return NextResponse.json(productReviews);
};
