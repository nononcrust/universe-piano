export const ROUTE = {
  HOME: "/",
  LOGIN: "/login",
  SIGNUP: "/signup",
  ABOUT: "/about",
  SERVICE: {
    LIST: "/service",
    PRODUCT: {
      LIST: "/service/product",
      DETAIL: (productId: string) => `/service/product/${productId}`,
    },
    TUTORING: "/service/tutoring",
  },
  NOTICE: {
    LIST: "/notice",
    DETAIL: (noticeId: string) => `/notice/${noticeId}`,
    ANNOUNCEMENTS: {
      LIST: "/notice/announcements",
      DETAIL: (noticeId: string) => `/notice/announcements/${noticeId}`,
    },
    AUDITION_RESULT: {
      LIST: "/notice/audition",
      DETAIL: (noticeId: string) => `/notice/audition/${noticeId}`,
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
    AUDITION: {
      LIST: "/review/audition",
      FIRST: {
        LIST: "/review/audition/first",
        DETAIL: (auditionId: string) => `/review/audition/first/${auditionId}`,
      },
      SECOND: {
        LIST: "/review/audition/second",
        DETAIL: (auditionId: string) => `/review/audition/second/${auditionId}`,
      },
    },
  },
  EBOOK: {
    LIST: "/ebook",
    DETAIL: (ebookId: string) => `/ebook/${ebookId}`,
  },
  SUPPORT: "/support",
  TERMS: {
    LIST: "/terms",
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
