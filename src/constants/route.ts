export const ROUTE = {
  HOME: "/",
  LOGIN: "/login",
  SIGNUP: "/signup",
  ABOUT: {
    LIST: "/about",
    COMPANY: "/about/company",
    PORTFOLIO: "/about/portfolio",
    STORY: "/about/story",
  },
  SERVICE: {
    LIST: "/service",
    PRODUCT: {
      LIST: "/service/product",
      DETAIL: (id: string) => `/service/product/${id}`,
    },
    TUTORING: "/service/tutoring",
    CONSULTING: "/service/consulting",
    STUDY: "/service/study",
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
  KIT: {
    LIST: "/kit",
    DETAIL: (id: string) => `/kit/${id}`,
  },
  SUPPORT: "/support",
  TERMS: {
    LIST: "/terms",
    SERVICE: "/terms/service",
    PRIVACY: "/terms/privacy",
  },
  MYPAGE: {
    HOME: "/mypage",
    PROFILE: "/mypage/profile",
    ACTIVITY: "/mypage/activity",
    ACCOUNT: "/mypage/account",
    ORDER: "/mypage/order",
  },
  CHECKOUT: (id: string) => `/checkout/${id}`,
  WITHDRAWAL: "/withdrawal",
  ORDER: {
    DETAIL: (id: string) => `/order/${id}`,
    RESULT: (id: string) => `/order/${id}/result`,
  },
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
    AUDITION: {
      LIST: "/admin/audition",
      EDIT: (id: string) => `/admin/audition/${id}`,
      CREATE: "/admin/audition/create",
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
