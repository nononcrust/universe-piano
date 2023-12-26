import { subscriptionRepository, subscriptionRequestSchema } from "@/features/subscription";
import { getServerSession } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { ZodError } from "zod";

export const dynamic = "force-dynamic";

export const GET = async (request: Request) => {
  const session = await getServerSession();

  if (!session) {
    return NextResponse.json("Unauthorized", { status: 401 });
  }

  try {
    const subscriptions = await subscriptionRepository.getMySubscriptionList(session);

    return NextResponse.json(subscriptions);
  } catch (error) {
    return NextResponse.json("Internal Error", { status: 500 });
  }
};

export const POST = async (request: Request) => {
  try {
    const body = await request.json();

    const parsedBody = subscriptionRequestSchema.parse(body);

    const subscription = await prisma.subscription.create({
      data: parsedBody,
    });

    return NextResponse.json(subscription);
  } catch (error) {
    if (error instanceof ZodError) {
      return NextResponse.json("Bad Request", { status: 400 });
    }

    return NextResponse.json("Internal Error", { status: 500 });
  }
};
