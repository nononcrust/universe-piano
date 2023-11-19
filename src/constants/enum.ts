import { Tier } from "@prisma/client";

export const TIER_LABEL = {
  [Tier.SPROUT]: "새싹",
  [Tier.SILVER]: "실버",
  [Tier.GOLD]: "골드",
  [Tier.DIAMOND]: "다이아몬드",
} satisfies Record<Tier, string>;
