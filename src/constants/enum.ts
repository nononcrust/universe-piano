import { OrderStatus, Role, Tier } from "@prisma/client";

export const USER_ROLE_LABEL: Record<Role, string> = {
  [Role.USER]: "멤버",
  [Role.CREW]: "크루",
  [Role.MENTOR_CREW]: "멘토 크루",
  [Role.TUTOR_CREW]: "과외 크루",
  [Role.ADMIN]: "매니저",
};

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

export const CATEGORY = {
  KIT: "독학 키트",
  PARTIAL_CONSULTING: "부분 컨설팅",
} as const;
