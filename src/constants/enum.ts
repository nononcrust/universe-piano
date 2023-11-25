import { OrderStatus, Tier } from "@prisma/client";

export const TIER_LABEL = {
  [Tier.SPROUT]: "새싹",
  [Tier.SILVER]: "실버",
  [Tier.GOLD]: "골드",
  [Tier.DIAMOND]: "다이아몬드",
} satisfies Record<Tier, string>;

export const ORDER_STATUS_LABEL = {
  [OrderStatus.PAYMENT_PENDING]: "결제 대기중",
  [OrderStatus.PAYMENT_COMPLETED]: "결제 완료",
};
