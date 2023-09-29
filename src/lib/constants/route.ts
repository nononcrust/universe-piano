export const ROUTE = {
  HOME: "/",
  LOGIN: "/login",
  ABOUT: "/about",
  NOTICE: "/notice",
  NOTICE_DETAIL: (noticeId: string) => `/notice/${noticeId}`,
  ADMIN: {
    HOME: "/admin",
    NOTICE: "/admin/notice",
    NOTICE_EDIT: (noticeId: string) => `/admin/notice/${noticeId}`,
    NOTICE_CREATE: "/admin/notice/create",
  },
} as const;
