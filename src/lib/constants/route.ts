export const ROUTE = {
  HOME: "/",
  LOGIN: "/login",
  ABOUT: "/about",
  NOTICE: "/notice",
  NOTICE_DETAIL: (noticeId: string) => `/notice/${noticeId}`,
} as const;
