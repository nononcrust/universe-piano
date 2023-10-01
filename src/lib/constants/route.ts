export const ROUTE = {
  HOME: "/",
  LOGIN: "/login",
  SIGNUP: "/signup",
  ABOUT: "/about",
  NOTICE: "/notice",
  SUPPORT: "/support",
  NOTICE_DETAIL: (noticeId: string) => `/notice/${noticeId}`,
  ADMIN: {
    HOME: "/admin",
    USER: {
      LIST: "/admin/user",
      EDIT: (userId: string) => `/admin/user/${userId}`,
    },
    NOTICE: {
      LIST: "/admin/notice",
      EDIT: (noticeId: string) => `/admin/notice/${noticeId}`,
      CREATE: "/admin/notice/create",
    },
    SUPPORT: {
      LIST: "/admin/support",
      EDIT: (supportId: string) => `/admin/support/${supportId}`,
      CREATE: "/admin/support/create",
    },
  },
  TERMS: {
    SERVICE: "/terms/service",
    PRIVACY: "/terms/privacy",
  },
} as const;
