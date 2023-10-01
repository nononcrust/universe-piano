export const ROUTE = {
  HOME: "/",
  LOGIN: "/login",
  SIGNUP: "/signup",
  ABOUT: "/about",
  NOTICE: "/notice",
  NOTICE_DETAIL: (noticeId: string) => `/notice/${noticeId}`,
  ADMIN: {
    HOME: "/admin",
    NOTICE: "/admin/notice",
    NOTICE_EDIT: (noticeId: string) => `/admin/notice/${noticeId}`,
    NOTICE_CREATE: "/admin/notice/create",
  },
  TERMS: {
    SERVICE: "/terms/service",
    PRIVACY: "/terms/privacy",
  },
} as const;
