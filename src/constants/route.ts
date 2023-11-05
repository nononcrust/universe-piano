export const ROUTE = {
  HOME: "/",
  LOGIN: "/login",
  SIGNUP: "/signup",
  ABOUT: {
    LIST: "/about",
    COMPANY: "/about/company",
  },
  SERVICE: {
    LIST: "/service",
    PRODUCT: {
      LIST: "/service/product",
      DETAIL: (id: string) => `/service/product/${id}`,
    },
    TUTORING: "/service/tutoring",
  },
  NEWS: {
    LIST: "/news",
    NOTICE: {
      LIST: "/news/notice",
      DETAIL: (id: string) => `/news/notice/${id}`,
    },
    AUDITION: {
      LIST: "/news/audition",
      DETAIL: (id: string) => `/news/audition/${id}`,
    },
  },
  REVIEW: {
    LIST: "/review",
    STUDY: {
      LIST: "/review/study",
      DETAIL: (id: string) => `/review/study/${id}`,
    },
    CONSULT: {
      LIST: "/review/consult",
      DETAIL: (id: string) => `/review/consult/${id}`,
    },
    AUDITION: {
      LIST: "/review/audition",
      FIRST: {
        LIST: "/review/audition/first",
        DETAIL: (id: string) => `/review/audition/first/${id}`,
      },
      SECOND: {
        LIST: "/review/audition/second",
        DETAIL: (id: string) => `/review/audition/second/${id}`,
      },
    },
  },
  EBOOK: {
    LIST: "/ebook",
    DETAIL: (id: string) => `/ebook/${id}`,
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
      EDIT: (id: string) => `/admin/user/${id}`,
    },
    PRODUCT: {
      LIST: "/admin/product",
      EDIT: (id: string) => `/admin/product/${id}`,
      CREATE: "/admin/product/create",
    },
    ORDER: {
      LIST: "/admin/order",
      EDIT: (id: string) => `/admin/order/${id}`,
    },
    REVIEW: {
      LIST: "/admin/review",
      EDIT: (id: string) => `/admin/review/${id}`,
    },
    NOTICE: {
      LIST: "/admin/notice",
      EDIT: (id: string) => `/admin/notice/${id}`,
      CREATE: "/admin/notice/create",
    },
    QUESTION: {
      LIST: "/admin/question",
      EDIT: (id: string) => `/admin/question/${id}`,
    },
    SUPPORT: {
      LIST: "/admin/support",
      EDIT: (id: string) => `/admin/support/${id}`,
      CREATE: "/admin/support/create",
    },
  },
} as const;
