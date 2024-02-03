import { OrderStatus, Tier } from "@prisma/client";

export const TIER_LABEL: Record<Tier, string> = {
  [Tier.SPROUT]: "새싹",
  [Tier.SILVER]: "실버",
  [Tier.GOLD]: "골드",
  [Tier.DIAMOND]: "다이아몬드",
};

export const ORDER_STATUS_LABEL: Record<OrderStatus, string> = {
  [OrderStatus.PAYMENT_PENDING]: "결제 대기중",
  [OrderStatus.PAYMENT_COMPLETED]: "결제 완료",
};
