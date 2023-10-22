export const ROUTE = {
  HOME: "/",
  LOGIN: "/login",
  SIGNUP: "/signup",
  ABOUT: "/about",
  EBOOK: {
    LIST: "/ebook",
    DETAIL: (ebookId: string) => `/ebook/${ebookId}`,
  },
  NOTICE: {
    LIST: "/notice",
    DETAIL: (noticeId: string) => `/notice/${noticeId}`,
  },
  REVIEW: {
    LIST: "/review",
    DETAIL: (reviewId: string) => `/review/${reviewId}`,
  },
  SUPPORT: "/support",
  TERMS: {
    SERVICE: "/terms/service",
    PRIVACY: "/terms/privacy",
  },
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
} as const;
