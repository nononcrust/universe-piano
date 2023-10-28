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
  AUDITION: {
    FIRST: {
      LIST: "/audition/first",
      DETAIL: (auditionId: string) => `/audition/first/${auditionId}`,
    },
    SECOND: {
      LIST: "/audition/second",
      DETAIL: (auditionId: string) => `/audition/second/${auditionId}`,
    },
  },
  REVIEW: {
    LIST: "/review",
    STUDY: {
      LIST: "/review/study",
      DETAIL: (reviewId: string) => `/review/study/${reviewId}`,
    },
    CONSULT: {
      LIST: "/review/consult",
      DETAIL: (reviewId: string) => `/review/consult/${reviewId}`,
    },
  },
  EBOOK: {
    LIST: "/ebook",
    DETAIL: (ebookId: string) => `/ebook/${ebookId}`,
  },
  SUPPORT: "/support",
  TERMS: {
    SERVICE: "/terms/service",
    PRIVACY: "/terms/privacy",
  },
  MYPAGE: {
    HOME: "/mypage",
    REVIEW: "/mypage/review",
    ACCOUNT: "/mypage/account",
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
