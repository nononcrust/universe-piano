export const FORM = {
  ERROR: {
    REQUIRED: "필수 항목입니다.",
    MAX_LENGTH: (max: number) => `${max}자 이하로 입력해주세요.`,
    INVALID_EMAIL: "올바른 이메일 형식을 입력해주세요.",
    INVALID_PHONE: "올바른 전화번호 형식을 입력해주세요.",
  },
} as const;
