export const USER_GRADE = {
  SPROUT: "sprout",
  SILVER: "silver",
  GOLD: "gold",
  DIAMOND: "diamond",
} as const;

export type UserGrade = (typeof USER_GRADE)[keyof typeof USER_GRADE];

export const USER_GRADE_LABEL = {
  [USER_GRADE.SPROUT]: "새싹",
  [USER_GRADE.SILVER]: "실버",
  [USER_GRADE.GOLD]: "골드",
  [USER_GRADE.DIAMOND]: "다이아몬드",
} satisfies Record<UserGrade, string>;
