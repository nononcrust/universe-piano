"use client";

import { EmptyState } from "@/components/empty-state";
import { PageTitle } from "@/components/layout/page-title";
import { Button } from "@/components/ui/button";
import { ROUTE } from "@/constants/route";
import { useSubscriptionList } from "@/features/subscription";
import Link from "next/link";

export default function KitListPage() {
  const { data: subscriptions } = useSubscriptionList();

  return (
    <main className="container pb-16">
      <PageTitle title="나의 독학 키트" />
      {subscriptions?.map((subscription) => (
        <div key={subscription.id}>{subscription.product.name}</div>
      ))}
      {subscriptions && subscriptions.length === 0 && (
        <EmptyState
          message="보유한 독학 키트가 없어요."
          className="mt-8"
          action={
            <Link href={ROUTE.SERVICE.PRODUCT.LIST}>
              <Button variant="secondary">독학 키트 둘러보기</Button>
            </Link>
          }
        />
      )}
    </main>
  );
}
