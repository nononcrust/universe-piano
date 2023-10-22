export const ROUTE = {
  HOME: "/",
  LOGIN: "/login",
  SIGNUP: "/signup",
  ABOUT: "/about",
  PRODUCT: {
    LIST: "/product",
    DETAIL: (productId: string) => `/product/${productId}`,
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
  MYPAGE: {
    HOME: "/mypage",
    REVIEW: "/mypage/review",
  },
  CART: "/cart",
  PAYMENT: "/payment",
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
