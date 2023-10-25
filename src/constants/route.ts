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
    PRODUCT: {
      LIST: "/admin/product",
      EDIT: (productId: string) => `/admin/product/${productId}`,
      CREATE: "/admin/product/create",
    },
    ORDER: {
      LIST: "/admin/order",
      EDIT: (orderId: string) => `/admin/order/${orderId}`,
    },
    REVIEW: {
      LIST: "/admin/review",
      EDIT: (reviewId: string) => `/admin/review/${reviewId}`,
    },
    NOTICE: {
      LIST: "/admin/notice",
      EDIT: (noticeId: string) => `/admin/notice/${noticeId}`,
      CREATE: "/admin/notice/create",
    },
    QUESTION: {
      LIST: "/admin/question",
      EDIT: (questionId: string) => `/admin/question/${questionId}`,
    },
    SUPPORT: {
      LIST: "/admin/support",
      EDIT: (supportId: string) => `/admin/support/${supportId}`,
      CREATE: "/admin/support/create",
    },
  },
} as const;
